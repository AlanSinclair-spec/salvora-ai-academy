// AI Provider interface definitions
// Allows for pluggable AI backends (placeholder, Claude, OpenAI, Grok)

import type {
  LessonPlanRequest,
  LessonPlanResponse,
  QuizGeneratorRequest,
  QuizGeneratorResponse,
  TextSimplifierRequest,
  TextSimplifierResponse,
  MathHelperRequest,
  MathHelperResponse,
  ChatRequest,
  ChatResponse,
  RubricRequest,
  RubricResponse,
} from "@/types/ai-tools";

/**
 * AI Provider interface
 * Any AI backend must implement these methods
 */
export interface AIProvider {
  name: string;

  /**
   * Generate a lesson plan for teachers
   */
  generateLessonPlan(request: LessonPlanRequest): Promise<LessonPlanResponse>;

  /**
   * Generate quiz questions from text or topic
   */
  generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse>;

  /**
   * Simplify text to different reading levels
   */
  simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse>;

  /**
   * Solve math problems with step-by-step explanations
   */
  solveMath(request: MathHelperRequest): Promise<MathHelperResponse>;

  /**
   * Safe chat for homework help and learning
   */
  chat(request: ChatRequest): Promise<ChatResponse>;

  /**
   * Generate grading rubrics
   */
  generateRubric(request: RubricRequest): Promise<RubricResponse>;
}

/**
 * Safety check result
 */
export interface SafetyCheckResult {
  safe: boolean;
  blocked: boolean;
  reason?: string;
  suggestion?: string;
}
