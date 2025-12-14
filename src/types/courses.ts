// Course data type definitions for Salvora AI Academy

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// Quick version panel data (1-minute summary)
export interface QuickVersion {
  bullets: [string, string, string];
  localExample: string;
  safePrompt: string;
}

// Local context hook ("Conexion con El Salvador")
export interface LocalContext {
  hook: string;
  department: string; // Apopa, San Salvador, Santa Ana, etc.
}

// Safe prompt with good/bad examples
export interface SafePromptExample {
  template: string;
  goodExample: string;
  badExample: string;
}

// Enhanced practice question with feedback and hints
export interface PracticeQuestionEnhanced extends QuizQuestion {
  feedback: string;
  hints: string[];
}

// Student/teacher reminder variants
export interface ResponsibleAIReminder {
  student: string;
  teacher: string;
}

// WhatsApp share payload
export interface WhatsAppPayload {
  summary: string;
  prompt: string;
  practiceQuestion: string;
}

// Teacher classroom package
export interface ClassroomPack {
  objective: string;
  prompts: [string, string, string];
  quiz: QuizQuestion[];
  answerKey: string[];
  rubric?: string;
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
