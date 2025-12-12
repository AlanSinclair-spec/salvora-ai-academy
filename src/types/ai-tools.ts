// AI Tool request/response type definitions for Salvora AI Academy

// Lesson Planner Types
export interface LessonPlanRequest {
  grade: string;
  subject: string;
  topic: string;
  duration: number;
}

export interface Activity {
  name: string;
  description: string;
  duration: number;
  type: "individual" | "group" | "discussion";
}

export interface TimingBlock {
  phase: string;
  duration: number;
  activity: string;
}

export interface LessonPlanResponse {
  objectives: string[];
  activities: Activity[];
  materials: string[];
  evaluation: string[];
  timing: TimingBlock[];
}

// Quiz Generator Types
export type QuestionType = "multiple_choice" | "short_answer" | "true_false";

export interface QuizGeneratorRequest {
  text: string;
  questionCount: number;
  types: QuestionType[];
}

export interface GeneratedQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | number;
}

export interface AnswerKeyItem {
  questionId: string;
  answer: string | number;
  explanation?: string;
}

export interface QuizGeneratorResponse {
  questions: GeneratedQuestion[];
  answerKey: AnswerKeyItem[];
}

// Text Simplifier Types
export interface TextSimplifierRequest {
  text: string;
  targetGrade?: string;
}

export interface SimplifiedLevels {
  easy: string;
  medium: string;
  advanced: string;
}

export interface TextSimplifierResponse {
  original: string;
  levels: SimplifiedLevels;
}

// Math Helper Types
export interface MathHelperRequest {
  problem: string;
  showSteps: boolean;
}

export interface MathStep {
  step: number;
  explanation: string;
  expression: string;
}

export interface MathHelperResponse {
  problem: string;
  solution: string;
  steps: MathStep[];
  visualHint?: string;
}

// Chat Types
export type ChatContext = "homework" | "study" | "general";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ChatRequest {
  message: string;
  context?: ChatContext;
  previousMessages?: ChatMessage[];
}

export interface ChatResponse {
  message: string;
  blocked?: boolean;
  blockReason?: string;
  suggestions?: string[];
}

// Rubric Builder Types
export interface RubricRequest {
  subject: string;
  criteria: string[];
  levels: number;
}

export interface RubricLevel {
  name: string;
  points: number;
  description: string;
}

export interface RubricCriterion {
  criterion: string;
  weight: number;
  levels: RubricLevel[];
}

export interface RubricResponse {
  title: string;
  criteria: RubricCriterion[];
  maxPoints: number;
}
