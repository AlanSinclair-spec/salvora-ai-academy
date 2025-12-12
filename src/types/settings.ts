// App settings and user progress type definitions for Salvora AI Academy

export interface AppSettings {
  liteMode: boolean;
  disableVideos: boolean;
  offlineSaving: boolean;
  classroomMode: boolean;
  preferredLanguage: "es";
}

export interface UserProgress {
  lessonId: string;
  courseId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: number;
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
};
