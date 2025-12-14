// Readiness Context for Salvora AI Academy
// Tracks AI Readiness Score with 4 pillars

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type {
  ReadinessState,
  ReadinessScore,
  ReadinessPillar,
  ReadinessPillarId,
  ReadinessCheckpoint
} from "@/types/readiness";
import { DEFAULT_PILLARS, PILLAR_LESSONS, getReadinessRecommendation } from "@/types/readiness";
import { useProgress } from "./ProgressContext";

const STORAGE_KEY = "salvora-readiness";

interface ReadinessContextType {
  // State
  readiness: ReadinessState;

  // Actions
  recordPracticeResult: (lessonId: string, correct: number, total: number) => void;
  recordCheckpoint: (lessonId: string, pillar: ReadinessPillarId) => void;
  clearReadiness: () => void;

  // Queries
  getReadinessScore: () => ReadinessScore;
  getPillarProgress: (pillarId: ReadinessPillarId) => number;
  getRecommendation: () => string;
}

const ReadinessContext = createContext<ReadinessContextType | undefined>(undefined);

const initialState: ReadinessState = {
  score: {
    total: 0,
    pillars: [...DEFAULT_PILLARS],
    lastUpdated: Date.now(),
  },
  checkpoints: {},
  practiceResults: {},
  practiceAccuracy: 0,
};

function loadReadiness(): ReadinessState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading readiness:", error);
  }
  return initialState;
}

function saveReadiness(state: ReadinessState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving readiness:", error);
  }
}

export function ReadinessProvider({ children }: { children: ReactNode }) {
  const [readiness, setReadiness] = useState<ReadinessState>(loadReadiness);
  const { getOverallProgress, isLessonComplete } = useProgress();

  // Save to localStorage whenever readiness changes
  useEffect(() => {
    saveReadiness(readiness);
  }, [readiness]);

  // Recalculate scores when dependencies change
  useEffect(() => {
    recalculateScores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recalculateScores = () => {
    setReadiness((prev) => {
      // Calculate practice accuracy
      let totalCorrect = 0;
      let totalQuestions = 0;
      Object.values(prev.practiceResults).forEach(({ correct, total }) => {
        totalCorrect += correct;
        totalQuestions += total;
      });
      const practiceAccuracy = totalQuestions > 0 ? totalCorrect / totalQuestions : 0;

      // Calculate pillar scores based on lesson completion
      const newPillars: ReadinessPillar[] = DEFAULT_PILLARS.map((pillar) => {
        const pillarLessons = PILLAR_LESSONS[pillar.id];
        let completedCount = 0;

        // Check each lesson in the pillar across all courses
        pillarLessons.forEach((lessonId) => {
          // Check against all possible course IDs
          const courseIds = ['introduccion-ia', 'ia-maestros', 'ia-estudiantes', 'ia-vida-real'];
          for (const courseId of courseIds) {
            if (isLessonComplete(courseId, lessonId)) {
              completedCount++;
              break;
            }
          }
        });

        const progress = pillarLessons.length > 0
          ? Math.round((completedCount / pillarLessons.length) * 100)
          : 0;
        const score = Math.round((progress / 100) * 25); // Each pillar worth 25 points

        return { ...pillar, progress, score };
      });

      // Calculate total score
      // 40% from completion, 35% from practice accuracy, 25% from checkpoints
      const completionScore = getOverallProgress().percentage * 0.4;
      const practiceScore = practiceAccuracy * 35;

      // Calculate checkpoint completion
      const totalCheckpoints = Object.keys(prev.checkpoints).length;
      const completedCheckpoints = Object.values(prev.checkpoints).filter(c => c.completed).length;
      const checkpointScore = totalCheckpoints > 0
        ? (completedCheckpoints / totalCheckpoints) * 25
        : newPillars.reduce((sum, p) => sum + p.score, 0) / 4; // Fallback to average pillar score

      const total = Math.round(completionScore + practiceScore + checkpointScore);

      return {
        ...prev,
        score: {
          total: Math.min(100, total),
          pillars: newPillars,
          lastUpdated: Date.now(),
        },
        practiceAccuracy,
      };
    });
  };

  const recordPracticeResult = (lessonId: string, correct: number, total: number) => {
    setReadiness((prev) => {
      const newPracticeResults = {
        ...prev.practiceResults,
        [lessonId]: { correct, total },
      };

      // Recalculate accuracy
      let totalCorrect = 0;
      let totalQuestions = 0;
      Object.values(newPracticeResults).forEach((result) => {
        totalCorrect += result.correct;
        totalQuestions += result.total;
      });
      const practiceAccuracy = totalQuestions > 0 ? totalCorrect / totalQuestions : 0;

      return {
        ...prev,
        practiceResults: newPracticeResults,
        practiceAccuracy,
        score: {
          ...prev.score,
          lastUpdated: Date.now(),
        },
      };
    });

    // Trigger full recalculation
    setTimeout(recalculateScores, 100);
  };

  const recordCheckpoint = (lessonId: string, pillar: ReadinessPillarId) => {
    setReadiness((prev) => ({
      ...prev,
      checkpoints: {
        ...prev.checkpoints,
        [lessonId]: {
          lessonId,
          pillar,
          completed: true,
          timestamp: Date.now(),
        },
      },
      score: {
        ...prev.score,
        lastUpdated: Date.now(),
      },
    }));

    // Trigger full recalculation
    setTimeout(recalculateScores, 100);
  };

  const clearReadiness = () => {
    setReadiness(initialState);
  };

  const getReadinessScore = (): ReadinessScore => {
    return readiness.score;
  };

  const getPillarProgress = (pillarId: ReadinessPillarId): number => {
    const pillar = readiness.score.pillars.find((p) => p.id === pillarId);
    return pillar?.progress ?? 0;
  };

  const getRecommendation = (): string => {
    return getReadinessRecommendation(readiness.score.pillars);
  };

  const value: ReadinessContextType = {
    readiness,
    recordPracticeResult,
    recordCheckpoint,
    clearReadiness,
    getReadinessScore,
    getPillarProgress,
    getRecommendation,
  };

  return (
    <ReadinessContext.Provider value={value}>
      {children}
    </ReadinessContext.Provider>
  );
}

export function useReadiness(): ReadinessContextType {
  const context = useContext(ReadinessContext);
  if (context === undefined) {
    throw new Error("useReadiness must be used within a ReadinessProvider");
  }
  return context;
}
