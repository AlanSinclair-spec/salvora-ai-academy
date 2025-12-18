import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS configuration - restrict to known origins
const ALLOWED_ORIGINS = [
  'https://salvora-ai-academy.lovable.app',
  'https://salvora.edu.sv',
  'http://localhost:8080',
  'http://localhost:5173',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

const XAI_API_URL = "https://api.x.ai/v1/chat/completions";
const XAI_MODEL = "grok-beta";

// Input validation constants
const MAX_TEXT_LENGTH = 5000;
const MAX_TOPIC_LENGTH = 200;
const MAX_SUBJECT_LENGTH = 100;
const MAX_MESSAGES = 50;
const VALID_GRADES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'primaria', 'secundaria', 'bachillerato'];
const VALID_ACTIONS = ['chat', 'lesson-plan', 'quiz', 'simplify', 'math', 'rubric'];

interface GrokMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface RequestBody {
  action: string;
  messages?: GrokMessage[];
  request?: Record<string, unknown>;
}

// Sanitize text input to prevent prompt injection
function sanitizeText(input: unknown, maxLength: number): string {
  if (typeof input !== 'string') return '';
  // Remove potentially dangerous characters and limit length
  return input
    .slice(0, maxLength)
    .replace(/[<>{}[\]\\]/g, '') // Remove brackets and backslashes
    .trim();
}

// Validate and sanitize number input
function sanitizeNumber(input: unknown, min: number, max: number, defaultVal: number): number {
  const num = typeof input === 'number' ? input : parseInt(String(input), 10);
  if (isNaN(num) || num < min || num > max) return defaultVal;
  return num;
}

// Validate grade input
function validateGrade(grade: unknown): string {
  const gradeStr = String(grade || '').toLowerCase().trim();
  if (VALID_GRADES.includes(gradeStr)) return gradeStr;
  return 'secundaria'; // default
}

// Validate action
function validateAction(action: unknown): string | null {
  const actionStr = String(action || '').toLowerCase().trim();
  if (VALID_ACTIONS.includes(actionStr)) return actionStr;
  return null;
}

// Validate messages array
function validateMessages(messages: unknown): GrokMessage[] {
  if (!Array.isArray(messages)) return [];
  
  return messages
    .slice(0, MAX_MESSAGES)
    .filter((msg): msg is GrokMessage => {
      if (typeof msg !== 'object' || msg === null) return false;
      const m = msg as Record<string, unknown>;
      return (
        (m.role === 'system' || m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string'
      );
    })
    .map(msg => ({
      role: msg.role,
      content: sanitizeText(msg.content, MAX_TEXT_LENGTH)
    }));
}

// Validate question types
function validateQuestionTypes(types: unknown): string[] {
  const validTypes = ['multiple_choice', 'true_false', 'short_answer'];
  if (!Array.isArray(types)) return ['multiple_choice'];
  
  return types
    .filter(t => typeof t === 'string' && validTypes.includes(t))
    .slice(0, 3);
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // No authentication required - open access for educational platform
    const XAI_API_KEY = Deno.env.get('VITE_XAI_API_KEY');
    if (!XAI_API_KEY) {
      console.error("API key configuration error");
      return new Response(
        JSON.stringify({ error: "El servicio no está disponible temporalmente", code: "SERVICE_CONFIG_ERROR" }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let body: RequestBody;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Solicitud inválida", code: "INVALID_REQUEST" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { messages, request: toolRequest } = body;

    // Validate action
    const action = validateAction(body.action);
    if (!action) {
      return new Response(
        JSON.stringify({ error: "Acción no válida", code: "INVALID_ACTION" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Grok AI request: action=${action}`);

    let grokMessages: GrokMessage[] = [];

    switch (action) {
      case "chat":
        grokMessages = validateMessages(messages);
        if (grokMessages.length === 0) {
          return new Response(
            JSON.stringify({ error: "Mensajes inválidos", code: "INVALID_MESSAGES" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        break;

      case "lesson-plan": {
        const topic = sanitizeText(toolRequest?.topic, MAX_TOPIC_LENGTH);
        const subject = sanitizeText(toolRequest?.subject, MAX_SUBJECT_LENGTH);
        const grade = validateGrade(toolRequest?.grade);
        const duration = sanitizeNumber(toolRequest?.duration, 15, 180, 45);

        if (!topic || !subject) {
          return new Response(
            JSON.stringify({ error: "Tema y materia son requeridos", code: "MISSING_FIELDS" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        grokMessages = [
          {
            role: "system",
            content: `Eres un asistente educativo para maestros salvadoreños.
Genera planes de lección en español con contexto local de El Salvador.
Responde SOLO con JSON válido, sin texto adicional.`
          },
          {
            role: "user",
            content: `Genera un plan de lección para:
- Tema: ${topic}
- Materia: ${subject}
- Grado: ${grade}
- Duración: ${duration} minutos

Responde con este formato JSON exacto:
{
  "objectives": ["objetivo1", "objetivo2", "objetivo3"],
  "activities": [
    {"name": "nombre", "description": "descripción", "duration": minutos, "type": "discussion|individual|group"}
  ],
  "materials": ["material1", "material2"],
  "evaluation": ["criterio1", "criterio2"],
  "timing": [
    {"phase": "Apertura", "duration": minutos, "activity": "descripción"}
  ]
}`
          }
        ];
        break;
      }

      case "quiz": {
        const text = sanitizeText(toolRequest?.text, MAX_TEXT_LENGTH);
        const questionCount = sanitizeNumber(toolRequest?.questionCount, 1, 20, 5);
        const types = validateQuestionTypes(toolRequest?.types);

        if (!text) {
          return new Response(
            JSON.stringify({ error: "Texto o tema es requerido", code: "MISSING_TEXT" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        grokMessages = [
          {
            role: "system",
            content: `Eres un generador de cuestionarios educativos en español.
Crea preguntas claras y apropiadas para el nivel educativo.
Responde SOLO con JSON válido, sin texto adicional.`
          },
          {
            role: "user",
            content: `Genera ${questionCount} preguntas basadas en este texto/tema:
"${text}"

Tipos de preguntas a incluir: ${types.join(", ")}

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
    {"questionId": "q-1", "answer": 0, "explanation": "explicación"}
  ]
}

Para true_false, usa options: ["Verdadero", "Falso"]
Para short_answer, omite options y usa correctAnswer como string.`
          }
        ];
        break;
      }

      case "simplify": {
        const text = sanitizeText(toolRequest?.text, MAX_TEXT_LENGTH);

        if (!text) {
          return new Response(
            JSON.stringify({ error: "Texto es requerido", code: "MISSING_TEXT" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        grokMessages = [
          {
            role: "system",
            content: `Eres un simplificador de textos educativos en español.
Adapta textos a diferentes niveles de lectura manteniendo la información esencial.
Responde SOLO con JSON válido.`
          },
          {
            role: "user",
            content: `Simplifica este texto a 3 niveles diferentes:
"${text}"

Responde con este formato JSON:
{
  "original": "texto original",
  "levels": {
    "easy": "versión para primaria, vocabulario simple",
    "medium": "versión para secundaria",
    "advanced": "versión para bachillerato"
  }
}`
          }
        ];
        break;
      }

      case "math": {
        const problem = sanitizeText(toolRequest?.problem, MAX_TEXT_LENGTH);

        if (!problem) {
          return new Response(
            JSON.stringify({ error: "Problema es requerido", code: "MISSING_PROBLEM" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        grokMessages = [
          {
            role: "system",
            content: `Eres un tutor de matemáticas que explica paso a paso en español.
Nunca des respuestas directas sin explicar el proceso.
Responde SOLO con JSON válido.`
          },
          {
            role: "user",
            content: `Resuelve este problema matemático paso a paso:
"${problem}"

Responde con este formato JSON:
{
  "problem": "problema original",
  "solution": "respuesta final",
  "steps": [
    {"step": 1, "explanation": "explicación", "expression": "expresión matemática"}
  ],
  "visualHint": "analogía visual para entender mejor"
}`
          }
        ];
        break;
      }

      case "rubric": {
        const subject = sanitizeText(toolRequest?.subject, MAX_SUBJECT_LENGTH);
        const criteria = Array.isArray(toolRequest?.criteria) 
          ? (toolRequest.criteria as string[]).slice(0, 10).map(c => sanitizeText(c, 100)).filter(Boolean)
          : [];
        const levels = sanitizeNumber(toolRequest?.levels, 2, 6, 4);

        if (!subject) {
          return new Response(
            JSON.stringify({ error: "Actividad es requerida", code: "MISSING_SUBJECT" }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        grokMessages = [
          {
            role: "system",
            content: `Eres un experto en evaluación educativa.
Crea rúbricas detalladas y justas en español.
Responde SOLO con JSON válido.`
          },
          {
            role: "user",
            content: `Crea una rúbrica de evaluación para:
- Actividad: ${subject}
- Criterios: ${criteria.length > 0 ? criteria.join(", ") : "criterios apropiados para la actividad"}
- Niveles de desempeño: ${levels}

Responde con este formato JSON:
{
  "title": "Rúbrica de evaluación: [actividad]",
  "criteria": [
    {
      "criterion": "nombre del criterio",
      "weight": porcentaje,
      "levels": [
        {"name": "Excelente", "points": 4, "description": "descripción del nivel"}
      ]
    }
  ],
  "maxPoints": total
}

Usa estos nombres de niveles: Excelente, Bueno, En desarrollo, Necesita mejora`
          }
        ];
        break;
      }
    }

    // Call xAI/Grok API
    const response = await fetch(XAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: XAI_MODEL,
        messages: grokMessages,
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`External API error (${response.status}):`, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Servicio ocupado. Intenta de nuevo en unos minutos.", code: "RATE_LIMITED" }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Error al procesar la solicitud", code: "EXTERNAL_ERROR" }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    console.log("AI response received successfully");

    return new Response(
      JSON.stringify({ content }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor", code: "INTERNAL_ERROR" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
