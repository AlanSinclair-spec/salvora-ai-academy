// Lovable AI Provider via Edge Function
// Uses Lovable AI Gateway for all AI-powered features

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
 * Lovable AI Provider via Edge Function
 * Uses Lovable AI Gateway (Gemini) for educational AI features
 */
export class LovableAIProvider implements AIProvider {
  name = "lovable";

  private async callEdgeFunction(
    action: string, 
    request?: Record<string, unknown>, 
    messages?: Array<{ role: string; content: string }>
  ): Promise<string> {
    const { data, error } = await supabase.functions.invoke('salvora-ai', {
      body: { action, request, messages }
    });

    if (error) {
      console.error("Salvora AI edge function error:", error);
      throw new Error(`Error al conectar con Salvora AI: ${error.message}`);
    }

    if (data.error) {
      throw new Error(data.error);
    }

    return data.content;
  }

  private parseJSON<T>(text: string): T {
    // Clean the response - remove markdown code blocks if present
    let cleanText = text.trim();
    
    // Remove ```json and ``` markers
    if (cleanText.startsWith('```json')) {
      cleanText = cleanText.slice(7);
    } else if (cleanText.startsWith('```')) {
      cleanText = cleanText.slice(3);
    }
    if (cleanText.endsWith('```')) {
      cleanText = cleanText.slice(0, -3);
    }
    cleanText = cleanText.trim();

    // Try to extract JSON from the response
    const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("No se pudo parsear la respuesta de la IA");
  }

  async generateLessonPlan(request: LessonPlanRequest): Promise<LessonPlanResponse> {
    const response = await this.callEdgeFunction("lesson-plan", {
      topic: request.topic,
      subject: request.subject,
      grade: request.grade,
      duration: request.duration,
    });
    return this.parseJSON<LessonPlanResponse>(response);
  }

  async generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse> {
    const response = await this.callEdgeFunction("quiz", {
      text: request.text,
      questionCount: request.questionCount,
      types: request.types,
    });
    return this.parseJSON<QuizGeneratorResponse>(response);
  }

  async simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse> {
    const response = await this.callEdgeFunction("simplify", {
      text: request.text,
      targetGrade: request.targetGrade,
    });
    return this.parseJSON<TextSimplifierResponse>(response);
  }

  async solveMath(request: MathHelperRequest): Promise<MathHelperResponse> {
    const response = await this.callEdgeFunction("math", {
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

    const response = await this.callEdgeFunction("chat", undefined, [
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
    const response = await this.callEdgeFunction("rubric", {
      subject: request.subject,
      criteria: request.criteria,
      levels: request.levels,
    });
    return this.parseJSON<RubricResponse>(response);
  }
}
