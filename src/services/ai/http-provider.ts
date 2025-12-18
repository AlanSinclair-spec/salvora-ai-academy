// HTTP-based AI Provider
// Connects to a backend API for real AI processing (xAI/Grok, OpenAI, Claude, etc.)

import type { AIProvider } from "./types";
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
 * HTTP Provider for real AI backends
 * Connects to a backend API that wraps xAI/Grok, OpenAI, Claude, etc.
 */
export class HttpProvider implements AIProvider {
  name = "http";
  private endpoint: string;

  constructor() {
    this.endpoint = import.meta.env.VITE_AI_API_URL || "";
  }

  private async request<T>(path: string, body: unknown): Promise<T> {
    const url = `${this.endpoint}${path}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error (${response.status}): ${errorText}`);
      }

      return response.json();
    } catch (error) {
      // Re-throw with friendly Spanish message for UI
      if (error instanceof Error) {
        console.error(`HTTP Provider error at ${path}:`, error);
        throw new Error(
          `Por ahora no pudimos conectarnos a la IA. Intenta de nuevo en unos minutos. (${error.message})`
        );
      }
      throw error;
    }
  }

  /**
   * Generate a lesson plan for teachers
   */
  async generateLessonPlan(request: LessonPlanRequest): Promise<LessonPlanResponse> {
    return this.request<LessonPlanResponse>("/lesson-planner", request);
  }

  /**
   * Generate quiz questions from text or topic
   */
  async generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse> {
    return this.request<QuizGeneratorResponse>("/quiz-generator", request);
  }

  /**
   * Simplify text to different reading levels
   */
  async simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse> {
    return this.request<TextSimplifierResponse>("/text-simplifier", request);
  }

  /**
   * Solve math problems with step-by-step explanations
   */
  async solveMath(request: MathHelperRequest): Promise<MathHelperResponse> {
    return this.request<MathHelperResponse>("/math-helper", request);
  }

  /**
   * Safe chat for homework help and learning
   */
  async chat(request: ChatRequest): Promise<ChatResponse> {
    return this.request<ChatResponse>("/chat", request);
  }

  /**
   * Generate grading rubrics
   */
  async generateRubric(request: RubricRequest): Promise<RubricResponse> {
    return this.request<RubricResponse>("/rubric-generator", request);
  }
}
