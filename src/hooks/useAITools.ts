// React Query hooks for AI tools
// Provides easy-to-use mutations for AI-powered features

import { useMutation } from "@tanstack/react-query";
import { aiService, performSafetyCheck } from "@/services/ai";
import { useSettings } from "@/contexts/SettingsContext";
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
 * Hook for generating lesson plans
 * Used by teachers in the Maestro page
 */
export function useLessonPlanner() {
  return useMutation<LessonPlanResponse, Error, LessonPlanRequest>({
    mutationFn: aiService.generateLessonPlan,
    onError: (error) => {
      console.error("Lesson plan generation failed:", error);
    },
  });
}

/**
 * Hook for generating quizzes from text
 * Used by teachers in the Maestro page
 */
export function useQuizGenerator() {
  return useMutation<QuizGeneratorResponse, Error, QuizGeneratorRequest>({
    mutationFn: aiService.generateQuiz,
    onError: (error) => {
      console.error("Quiz generation failed:", error);
    },
  });
}

/**
 * Hook for simplifying text to different reading levels
 * Used by students in the Estudiante page
 */
export function useTextSimplifier() {
  return useMutation<TextSimplifierResponse, Error, TextSimplifierRequest>({
    mutationFn: aiService.simplifyText,
    onError: (error) => {
      console.error("Text simplification failed:", error);
    },
  });
}

/**
 * Hook for step-by-step math problem solving
 * Used by students in the Estudiante page
 */
export function useMathHelper() {
  return useMutation<MathHelperResponse, Error, MathHelperRequest>({
    mutationFn: aiService.solveMath,
    onError: (error) => {
      console.error("Math helper failed:", error);
    },
  });
}

/**
 * Hook for safe chat with cheating prevention
 * Used by students in the Estudiante page
 */
export function useSafeChat() {
  const { isClassroomMode } = useSettings();

  return useMutation<ChatResponse, Error, ChatRequest>({
    mutationFn: async (request) => {
      // Perform safety check before sending to AI
      const safetyCheck = performSafetyCheck(request.message, isClassroomMode);

      if (safetyCheck.blocked) {
        return {
          message: safetyCheck.suggestion || "No puedo ayudarte con eso.",
          blocked: true,
          blockReason: safetyCheck.reason,
          suggestions: [
            "Explicame un concepto que no entiendo",
            "Ayudame a estudiar para un examen",
            "Dame ideas para un proyecto",
          ],
        };
      }

      // If safe, proceed with AI chat
      return aiService.chat(request);
    },
    onError: (error) => {
      console.error("Chat failed:", error);
    },
  });
}

/**
 * Hook for generating grading rubrics
 * Used by teachers in the Maestro page
 */
export function useRubricGenerator() {
  return useMutation<RubricResponse, Error, RubricRequest>({
    mutationFn: aiService.generateRubric,
    onError: (error) => {
      console.error("Rubric generation failed:", error);
    },
  });
}

// Convenience exports
export {
  type LessonPlanRequest,
  type LessonPlanResponse,
  type QuizGeneratorRequest,
  type QuizGeneratorResponse,
  type TextSimplifierRequest,
  type TextSimplifierResponse,
  type MathHelperRequest,
  type MathHelperResponse,
  type ChatRequest,
  type ChatResponse,
  type RubricRequest,
  type RubricResponse,
};
