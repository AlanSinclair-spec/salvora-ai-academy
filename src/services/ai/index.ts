// AI Service export
// Central point for accessing AI functionality

import { PlaceholderProvider } from "./placeholder-provider";
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

// Create and export the default AI service instance
// In production, this could be swapped for Claude, OpenAI, or Grok
const aiProvider: AIProvider = new PlaceholderProvider();

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
