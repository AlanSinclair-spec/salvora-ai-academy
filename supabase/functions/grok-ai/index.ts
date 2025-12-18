import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const XAI_API_URL = "https://api.x.ai/v1/chat/completions";
const XAI_MODEL = "grok-beta";

interface GrokMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface RequestBody {
  action: string;
  messages?: GrokMessage[];
  request?: Record<string, unknown>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const XAI_API_KEY = Deno.env.get('XAI_API_KEY');
    if (!XAI_API_KEY) {
      console.error("XAI_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "XAI_API_KEY no está configurada" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body: RequestBody = await req.json();
    const { action, messages, request: toolRequest } = body;

    console.log(`Grok AI request: action=${action}`);

    let grokMessages: GrokMessage[] = [];

    switch (action) {
      case "chat":
        grokMessages = messages || [];
        break;

      case "lesson-plan":
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
- Tema: ${toolRequest?.topic}
- Materia: ${toolRequest?.subject}
- Grado: ${toolRequest?.grade}
- Duración: ${toolRequest?.duration} minutos

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

      case "quiz":
        grokMessages = [
          {
            role: "system",
            content: `Eres un generador de cuestionarios educativos en español.
Crea preguntas claras y apropiadas para el nivel educativo.
Responde SOLO con JSON válido, sin texto adicional.`
          },
          {
            role: "user",
            content: `Genera ${toolRequest?.questionCount} preguntas basadas en este texto/tema:
"${toolRequest?.text}"

Tipos de preguntas a incluir: ${(toolRequest?.types as string[])?.join(", ")}

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

      case "simplify":
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
"${toolRequest?.text}"

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

      case "math":
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
"${toolRequest?.problem}"

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

      case "rubric":
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
- Actividad: ${toolRequest?.subject}
- Criterios: ${(toolRequest?.criteria as string[])?.join(", ")}
- Niveles de desempeño: ${toolRequest?.levels}

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

      default:
        return new Response(
          JSON.stringify({ error: `Acción no reconocida: ${action}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
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
      console.error(`xAI API error (${response.status}):`, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Límite de solicitudes alcanzado. Intenta de nuevo en unos minutos." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: `Error de xAI API: ${response.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    console.log("Grok response received successfully");

    return new Response(
      JSON.stringify({ content }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Grok AI function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
