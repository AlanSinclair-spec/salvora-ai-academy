// Progress Context for Salvora AI Academy
// Tracks lesson completion and quiz scores

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { UserProgress, ProgressState } from "@/types/settings";
import { courses, getTotalLessons, getCourseById } from "@/data/courses";
import { isDemoMode, demoProgress } from "@/data/demo-presets";

const STORAGE_KEY = "salvora-progress";

interface ProgressContextType {
  // Progress data
  progress: ProgressState;

  // Actions
  markLessonComplete: (courseId: string, lessonId: string, quizScore?: number) => void;
  markLessonIncomplete: (courseId: string, lessonId: string) => void;
  markVideoWatched: (courseId: string, lessonId: string) => void;
  markPracticeCompleted: (courseId: string, lessonId: string) => void;
  clearProgress: () => void;
  loadDemoProgress: () => void;

  // Queries
  isLessonComplete: (courseId: string, lessonId: string) => boolean;
  isVideoWatched: (courseId: string, lessonId: string) => boolean;
  isPracticeCompleted: (courseId: string, lessonId: string) => boolean;
  canProceedToNext: (courseId: string, lessonId: string) => boolean;
  isLessonUnlocked: (courseId: string, lessonId: string) => boolean;
  getLessonProgress: (courseId: string, lessonId: string) => UserProgress | undefined;
  getCourseProgress: (courseId: string) => { completed: number; total: number; percentage: number };
  getOverallProgress: () => { completed: number; total: number; percentage: number };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const initialState: ProgressState = {
  lessons: {},
  lastUpdated: Date.now(),
};

// Migrate old progress format to include new fields
function migrateProgress(state: ProgressState): ProgressState {
  const migrated = { ...state, lessons: { ...state.lessons } };
  for (const key in migrated.lessons) {
    const lesson = migrated.lessons[key];
    // If completed but missing new fields, assume they were done
    if (lesson.completed && lesson.videoWatched === undefined) {
      migrated.lessons[key] = {
        ...lesson,
        videoWatched: true,
        practiceCompleted: true,
      };
    }
  }
  return migrated;
}

function loadProgress(): ProgressState {
  // In demo mode, load demo progress by default
  if (isDemoMode()) {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Only load demo if no existing progress
    if (!stored || Object.keys(JSON.parse(stored).lessons || {}).length === 0) {
      console.info("🎬 Demo Mode: Loading preset progress");
      return migrateProgress({
        lessons: demoProgress,
        lastUpdated: Date.now(),
      });
    }
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return migrateProgress(JSON.parse(stored));
    }
  } catch (error) {
    console.error("Error loading progress:", error);
  }
  return initialState;
}

function saveProgress(progress: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markLessonComplete = (courseId: string, lessonId: string, quizScore?: number) => {
    const key = `${courseId}:${lessonId}`;
    setProgress((prev) => ({
      ...prev,
      lessons: {
        ...prev.lessons,
        [key]: {
          lessonId,
          courseId,
          completed: true,
          quizScore,
          lastAccessed: Date.now(),
        },
      },
      lastUpdated: Date.now(),
    }));
  };

  const markLessonIncomplete = (courseId: string, lessonId: string) => {
    const key = `${courseId}:${lessonId}`;
    setProgress((prev) => {
      const { [key]: removed, ...rest } = prev.lessons;
      return {
        ...prev,
        lessons: rest,
        lastUpdated: Date.now(),
      };
    });
  };

  const markVideoWatched = (courseId: string, lessonId: string) => {
    const key = `${courseId}:${lessonId}`;
    setProgress((prev) => {
      const existing = prev.lessons[key] || {
        lessonId,
        courseId,
        completed: false,
        lastAccessed: Date.now(),
      };
      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [key]: {
            ...existing,
            videoWatched: true,
            lastAccessed: Date.now(),
          },
        },
        lastUpdated: Date.now(),
      };
    });
  };

  const markPracticeCompleted = (courseId: string, lessonId: string) => {
    const key = `${courseId}:${lessonId}`;
    setProgress((prev) => {
      const existing = prev.lessons[key] || {
        lessonId,
        courseId,
        completed: false,
        lastAccessed: Date.now(),
      };
      const updated = {
        ...existing,
        practiceCompleted: true,
        lastAccessed: Date.now(),
      };
      // Auto-complete lesson when both video and practice are done
      if (updated.videoWatched && updated.practiceCompleted) {
        updated.completed = true;
      }
      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [key]: updated,
        },
        lastUpdated: Date.now(),
      };
    });
  };

  const clearProgress = () => {
    setProgress(initialState);
  };

  const loadDemoProgress = () => {
    console.info("🎬 Loading demo progress...");
    setProgress({
      lessons: demoProgress,
      lastUpdated: Date.now(),
    });
  };

  const isLessonComplete = (courseId: string, lessonId: string): boolean => {
    const key = `${courseId}:${lessonId}`;
    return progress.lessons[key]?.completed ?? false;
  };

  const isVideoWatched = (courseId: string, lessonId: string): boolean => {
    const key = `${courseId}:${lessonId}`;
    return progress.lessons[key]?.videoWatched ?? false;
  };

  const isPracticeCompleted = (courseId: string, lessonId: string): boolean => {
    const key = `${courseId}:${lessonId}`;
    return progress.lessons[key]?.practiceCompleted ?? false;
  };

  const canProceedToNext = (courseId: string, lessonId: string): boolean => {
    // Can proceed if both video watched and practice completed
    return isVideoWatched(courseId, lessonId) && isPracticeCompleted(courseId, lessonId);
  };

  const isLessonUnlocked = (courseId: string, lessonId: string): boolean => {
    const course = getCourseById(courseId);
    if (!course) return false;

    // Flatten all lessons to get order
    const allLessons: { lessonId: string; unitId: string }[] = [];
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        allLessons.push({ lessonId: lesson.id, unitId: unit.id });
      }
    }

    const currentIndex = allLessons.findIndex((l) => l.lessonId === lessonId);

    // First lesson is always unlocked
    if (currentIndex === 0) return true;

    // Lesson not found
    if (currentIndex === -1) return false;

    // Check if previous lesson is completed
    const prevLesson = allLessons[currentIndex - 1];
    return isLessonComplete(courseId, prevLesson.lessonId);
  };

  const getLessonProgress = (courseId: string, lessonId: string): UserProgress | undefined => {
    const key = `${courseId}:${lessonId}`;
    return progress.lessons[key];
  };

  const getCourseProgress = (courseId: string): { completed: number; total: number; percentage: number } => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return { completed: 0, total: 0, percentage: 0 };

    const total = getTotalLessons(course);
    let completed = 0;

    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (isLessonComplete(courseId, lesson.id)) {
          completed++;
        }
      }
    }

    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  };

  const getOverallProgress = (): { completed: number; total: number; percentage: number } => {
    let totalCompleted = 0;
    let totalLessons = 0;

    for (const course of courses) {
      const { completed, total } = getCourseProgress(course.id);
      totalCompleted += completed;
      totalLessons += total;
    }

    return {
      completed: totalCompleted,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0,
    };
  };

  const value: ProgressContextType = {
    progress,
    markLessonComplete,
    markLessonIncomplete,
    markVideoWatched,
    markPracticeCompleted,
    clearProgress,
    loadDemoProgress,
    isLessonComplete,
    isVideoWatched,
    isPracticeCompleted,
    canProceedToNext,
    isLessonUnlocked,
    getLessonProgress,
    getCourseProgress,
    getOverallProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextType {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
