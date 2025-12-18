// AI Service export
// Central point for accessing AI functionality

import { PlaceholderProvider } from "./placeholder-provider";
import { HttpProvider } from "./http-provider";
import { XAIProvider } from "./xai-provider";
import type { AIProvider } from "./types";

// Export types
export type { AIProvider, SafetyCheckResult } from "./types";

// Export safety utilities
export {
  checkForCheating,
  checkContentSafety,
  performSafetyCheck,
  getLearningRedirect,
} from "./safety";

/**
 * Get the AI provider based on environment configuration
 * Priority:
 * 1. VITE_AI_MODE="xai" → XAIProvider (requires edge function + API key)
 * 2. VITE_AI_MODE="http" + VITE_AI_API_URL → HttpProvider (custom backend)
 * 3. Default → PlaceholderProvider (smart mock responses, always works)
 */
export function getAIProvider(): AIProvider {
  const mode = import.meta.env.VITE_AI_MODE;
  const apiUrl = import.meta.env.VITE_AI_API_URL;

  // Use xAI provider only if explicitly enabled
  if (mode === "xai") {
    console.info("🤖 AI Provider: xAI/Grok via Edge Function");
    return new XAIProvider();
  }

  // Use HTTP provider if explicitly configured with an API URL
  if (mode === "http" && apiUrl) {
    console.info("🤖 AI Provider: HTTP Backend at", apiUrl);
    return new HttpProvider();
  }

  // Default to placeholder provider - works without external APIs
  console.info("🤖 AI Provider: Salvora AI (demo mode)");
  return new PlaceholderProvider();
}

// Create and export the default AI service instance
// Uses environment-based provider selection
const aiProvider: AIProvider = getAIProvider();

export const aiService = {
  /**
   * Generate a lesson plan for teachers
   */
  generateLessonPlan: aiProvider.generateLessonPlan.bind(aiProvider),

  /**
   * Generate quiz questions
   */
  generateQuiz: aiProvider.generateQuiz.bind(aiProvider),

  /**
   * Simplify text to different reading levels
   */
  simplifyText: aiProvider.simplifyText.bind(aiProvider),

  /**
   * Solve math problems with step-by-step explanations
   */
  solveMath: aiProvider.solveMath.bind(aiProvider),

  /**
   * Safe chat for homework help
   */
  chat: aiProvider.chat.bind(aiProvider),

  /**
   * Generate grading rubrics
   */
  generateRubric: aiProvider.generateRubric.bind(aiProvider),

  /**
   * Provider name (for debugging)
   */
  providerName: aiProvider.name,
};

export default aiService;
