// xAI/Grok Direct API Provider
// Calls xAI's Grok API directly for AI-powered teacher tools

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

const XAI_API_URL = "https://api.x.ai/v1/chat/completions";
const XAI_MODEL = "grok-beta";

interface GrokMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface GrokResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

/**
 * xAI/Grok Direct Provider
 * Connects directly to xAI's Grok API for real AI responses
 */
export class XAIProvider implements AIProvider {
  name = "xai";
  private apiKey: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_XAI_API_KEY || "";
  }

  private async callGrok(messages: GrokMessage[]): Promise<string> {
    if (!this.apiKey) {
      throw new Error("xAI API key not configured");
    }

    try {
      const response = await fetch(XAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: XAI_MODEL,
          messages,
          temperature: 0.7,
          max_tokens: 2048,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`xAI API error (${response.status}): ${errorText}`);
      }

      const data: GrokResponse = await response.json();
      return data.choices[0]?.message?.content || "";
    } catch (error) {
      console.error("xAI API error:", error);
      throw new Error(
        `No pudimos conectar con Grok. Intenta de nuevo. (${error instanceof Error ? error.message : "Error desconocido"})`
      );
    }
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
    const systemPrompt = `Eres un asistente educativo para maestros salvadorenos.
Genera planes de leccion en espanol con contexto local de El Salvador.
Responde SOLO con JSON valido, sin texto adicional.`;

    const userPrompt = `Genera un plan de leccion para:
- Tema: ${request.topic}
- Materia: ${request.subject}
- Grado: ${request.grade}
- Duracion: ${request.duration} minutos

Responde con este formato JSON exacto:
{
  "objectives": ["objetivo1", "objetivo2", "objetivo3"],
  "activities": [
    {"name": "nombre", "description": "descripcion", "duration": minutos, "type": "discussion|individual|group"}
  ],
  "materials": ["material1", "material2"],
  "evaluation": ["criterio1", "criterio2"],
  "timing": [
    {"phase": "Apertura", "duration": minutos, "activity": "descripcion"}
  ]
}`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    return this.parseJSON<LessonPlanResponse>(response);
  }

  async generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse> {
    const systemPrompt = `Eres un generador de cuestionarios educativos en espanol.
Crea preguntas claras y apropiadas para el nivel educativo.
Responde SOLO con JSON valido, sin texto adicional.`;

    const userPrompt = `Genera ${request.questionCount} preguntas basadas en este texto/tema:
"${request.text}"

Tipos de preguntas a incluir: ${request.types.join(", ")}

Responde con este formato JSON exacto:
{
  "questions": [
    {
      "id": "q-1",
      "type": "multiple_choice",
      "question": "pregunta",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0
    }
  ],
  "answerKey": [
    {"questionId": "q-1", "answer": 0, "explanation": "explicacion"}
  ]
}

Para true_false, usa options: ["Verdadero", "Falso"]
Para short_answer, omite options y usa correctAnswer como string.`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    return this.parseJSON<QuizGeneratorResponse>(response);
  }

  async simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse> {
    const systemPrompt = `Eres un simplificador de textos educativos en espanol.
Adapta textos a diferentes niveles de lectura manteniendo la informacion esencial.
Responde SOLO con JSON valido.`;

    const userPrompt = `Simplifica este texto a 3 niveles diferentes:
"${request.text}"

Responde con este formato JSON:
{
  "original": "texto original",
  "levels": {
    "easy": "version para primaria, vocabulario simple",
    "medium": "version para secundaria",
    "advanced": "version para bachillerato"
  }
}`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    return this.parseJSON<TextSimplifierResponse>(response);
  }

  async solveMath(request: MathHelperRequest): Promise<MathHelperResponse> {
    const systemPrompt = `Eres un tutor de matematicas que explica paso a paso en espanol.
Nunca des respuestas directas sin explicar el proceso.
Responde SOLO con JSON valido.`;

    const userPrompt = `Resuelve este problema matematico paso a paso:
"${request.problem}"

Responde con este formato JSON:
{
  "problem": "problema original",
  "solution": "respuesta final",
  "steps": [
    {"step": 1, "explanation": "explicacion", "expression": "expresion matematica"}
  ],
  "visualHint": "analogia visual para entender mejor"
}`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

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
          "Explicame un concepto que no entiendo",
          "Ayudame a estudiar para un examen",
          "Dame ideas para un proyecto",
        ],
      };
    }

    const systemPrompt = `Eres un asistente educativo de Salvora AI Academy en El Salvador.
Tu rol es AYUDAR a los estudiantes a APRENDER, nunca darles respuestas para copiar.
- Guia con preguntas socraticas
- Explica conceptos paso a paso
- Usa ejemplos de El Salvador cuando sea posible
- Si detectas intento de trampa, redirige hacia el aprendizaje
Responde de forma natural, amigable y educativa.`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: request.message },
    ]);

    return {
      message: response,
      suggestions: [
        "Explicame mas sobre esto",
        "Dame un ejemplo practico",
        "Como puedo practicar esto?",
      ],
    };
  }

  async generateRubric(request: RubricRequest): Promise<RubricResponse> {
    const systemPrompt = `Eres un experto en evaluacion educativa.
Crea rubricas detalladas y justas en espanol.
Responde SOLO con JSON valido.`;

    const userPrompt = `Crea una rubrica de evaluacion para:
- Actividad: ${request.subject}
- Criterios: ${request.criteria.join(", ")}
- Niveles de desempeno: ${request.levels}

Responde con este formato JSON:
{
  "title": "Rubrica de evaluacion: [actividad]",
  "criteria": [
    {
      "criterion": "nombre del criterio",
      "weight": porcentaje,
      "levels": [
        {"name": "Excelente", "points": 4, "description": "descripcion del nivel"}
      ]
    }
  ],
  "maxPoints": total
}

Usa estos nombres de niveles: Excelente, Bueno, En desarrollo, Necesita mejora`;

    const response = await this.callGrok([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]);

    return this.parseJSON<RubricResponse>(response);
  }
}
