// App settings and user progress type definitions for Salvora AI Academy

export interface AppSettings {
  liteMode: boolean;
  disableVideos: boolean;
  offlineSaving: boolean;
  classroomMode: boolean;
  preferredLanguage: "es";
  // Accessibility settings
  reduceMotion: boolean;
  defaultQuickView: boolean;
  // Theme
  darkMode: boolean;
}

export interface UserProgress {
  lessonId: string;
  courseId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: number;
  // Granular tracking for lesson gating
  videoWatched?: boolean;      // True when video ends or content scrolled (Lite Mode)
  practiceCompleted?: boolean; // True when practice section completed
}

export interface ProgressState {
  lessons: Record<string, UserProgress>;
  lastUpdated: number;
}

export const DEFAULT_SETTINGS: AppSettings = {
  liteMode: false,
  disableVideos: false,
  offlineSaving: false,
  classroomMode: false,
  preferredLanguage: "es",
  reduceMotion: false,
  defaultQuickView: true,
  darkMode: true, // Default to dark mode (current theme)
};
