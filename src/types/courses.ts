// Course data type definitions for Salvora AI Academy

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz" | "practice";
  duration: string;
  videoId?: string;
  content?: string;
  practiceQuestions?: QuizQuestion[];
  order: number;
}

export interface Unit {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
  order: number;
}

export type CourseColor = "blue" | "green" | "orange" | "purple" | "teal";
export type TargetAudience = "all" | "teachers" | "students";
export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  color: CourseColor;
  units: Unit[];
  targetAudience: TargetAudience;
  difficulty: Difficulty;
  estimatedHours: number;
}

// Helper type for lesson navigation
export interface LessonNavInfo {
  courseId: string;
  lessonId: string;
  title: string;
}
