// xAI/Grok Provider via Edge Function
// Calls xAI's Grok API through a secure edge function

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
import { performSafetyCheck } from "./safety";
import { supabase } from "@/integrations/supabase/client";

/**
 * xAI/Grok Provider via Edge Function
 * Connects to xAI's Grok API through a secure backend
 */
export class XAIProvider implements AIProvider {
  name = "xai";

  private async callGrokEdgeFunction(action: string, request?: Record<string, unknown>, messages?: Array<{ role: string; content: string }>): Promise<string> {
    const { data, error } = await supabase.functions.invoke('grok-ai', {
      body: { action, request, messages }
    });

    if (error) {
      console.error("Grok edge function error:", error);
      throw new Error(`Error al conectar con Grok: ${error.message}`);
    }

    if (data.error) {
      throw new Error(data.error);
    }

    return data.content;
  }

  private parseJSON<T>(text: string): T {
    // Try to extract JSON from the response (Grok might include extra text)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("No se pudo parsear la respuesta de la IA");
  }

  async generateLessonPlan(request: LessonPlanRequest): Promise<LessonPlanResponse> {
    const response = await this.callGrokEdgeFunction("lesson-plan", {
      topic: request.topic,
      subject: request.subject,
      grade: request.grade,
      duration: request.duration,
    });
    return this.parseJSON<LessonPlanResponse>(response);
  }

  async generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse> {
    const response = await this.callGrokEdgeFunction("quiz", {
      text: request.text,
      questionCount: request.questionCount,
      types: request.types,
    });
    return this.parseJSON<QuizGeneratorResponse>(response);
  }

  async simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse> {
    const response = await this.callGrokEdgeFunction("simplify", {
      text: request.text,
      targetGrade: request.targetGrade,
    });
    return this.parseJSON<TextSimplifierResponse>(response);
  }

  async solveMath(request: MathHelperRequest): Promise<MathHelperResponse> {
    const response = await this.callGrokEdgeFunction("math", {
      problem: request.problem,
      showSteps: request.showSteps,
    });
    return this.parseJSON<MathHelperResponse>(response);
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    // Safety check first
    const safetyCheck = performSafetyCheck(request.message);
    if (safetyCheck.blocked) {
      return {
        message: safetyCheck.suggestion || "No puedo ayudarte con eso.",
        blocked: true,
        blockReason: safetyCheck.reason,
        suggestions: [
          "Explícame un concepto que no entiendo",
          "Ayúdame a estudiar para un examen",
          "Dame ideas para un proyecto",
        ],
      };
    }

    const systemPrompt = `Eres un asistente educativo de Salvora AI Academy en El Salvador.
Tu rol es AYUDAR a los estudiantes a APRENDER, nunca darles respuestas para copiar.
- Guía con preguntas socráticas
- Explica conceptos paso a paso
- Usa ejemplos de El Salvador cuando sea posible
- Si detectas intento de trampa, redirige hacia el aprendizaje
Responde de forma natural, amigable y educativa.`;

    const response = await this.callGrokEdgeFunction("chat", undefined, [
      { role: "system", content: systemPrompt },
      { role: "user", content: request.message },
    ]);

    return {
      message: response,
      suggestions: [
        "Explícame más sobre esto",
        "Dame un ejemplo práctico",
        "¿Cómo puedo practicar esto?",
      ],
    };
  }

  async generateRubric(request: RubricRequest): Promise<RubricResponse> {
    const response = await this.callGrokEdgeFunction("rubric", {
      subject: request.subject,
      criteria: request.criteria,
      levels: request.levels,
    });
    return this.parseJSON<RubricResponse>(response);
  }
}
