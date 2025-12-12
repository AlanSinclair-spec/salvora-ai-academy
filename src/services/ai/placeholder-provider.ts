// Placeholder AI Provider for Salvora
// Returns realistic mock responses in Spanish for development and demo purposes

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

// Simulate network delay
const simulateDelay = (ms: number = 1500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export class PlaceholderProvider implements AIProvider {
  name = "placeholder";

  async generateLessonPlan(request: LessonPlanRequest): Promise<LessonPlanResponse> {
    await simulateDelay(2000);

    return {
      objectives: [
        `Comprender los conceptos fundamentales de ${request.topic}`,
        `Aplicar ${request.topic} en situaciones practicas de la vida cotidiana`,
        `Analizar y evaluar la importancia de ${request.topic} en el contexto salvadoreno`,
      ],
      activities: [
        {
          name: "Actividad de apertura",
          description: `Lluvia de ideas: Que saben los estudiantes sobre ${request.topic}? Escribir respuestas en la pizarra.`,
          duration: Math.round(request.duration * 0.15),
          type: "discussion",
        },
        {
          name: "Presentacion del contenido",
          description: `Explicacion de los conceptos clave de ${request.topic} usando ejemplos de El Salvador.`,
          duration: Math.round(request.duration * 0.35),
          type: "individual",
        },
        {
          name: "Trabajo en grupos",
          description: "Dividir la clase en grupos de 4. Cada grupo resuelve un problema practico relacionado con el tema.",
          duration: Math.round(request.duration * 0.30),
          type: "group",
        },
        {
          name: "Plenaria y cierre",
          description: "Cada grupo comparte sus conclusiones. Resumen de puntos clave y asignacion de tarea.",
          duration: Math.round(request.duration * 0.20),
          type: "discussion",
        },
      ],
      materials: [
        "Pizarra y marcadores de colores",
        "Hojas de trabajo (una por grupo)",
        "Ejemplos impresos o proyectados",
        "Cuadernos de los estudiantes",
      ],
      evaluation: [
        "Observacion de participacion en la lluvia de ideas",
        "Calidad del trabajo grupal (usar rubrica)",
        "Comprension demostrada en la plenaria",
        "Tarea para casa como evaluacion formativa",
      ],
      timing: [
        {
          phase: "Apertura",
          duration: Math.round(request.duration * 0.15),
          activity: "Saludo, objetivos del dia, lluvia de ideas",
        },
        {
          phase: "Desarrollo",
          duration: Math.round(request.duration * 0.65),
          activity: "Contenido teorico y trabajo practico en grupos",
        },
        {
          phase: "Cierre",
          duration: Math.round(request.duration * 0.20),
          activity: "Presentaciones, resumen, tarea",
        },
      ],
    };
  }

  async generateQuiz(request: QuizGeneratorRequest): Promise<QuizGeneratorResponse> {
    await simulateDelay(1800);

    const questions = [];
    const answerKey = [];

    for (let i = 0; i < request.questionCount; i++) {
      const questionType = request.types[i % request.types.length];
      const questionId = `q-${i + 1}`;

      if (questionType === "multiple_choice") {
        questions.push({
          id: questionId,
          type: questionType,
          question: `Pregunta ${i + 1}: Basandote en el texto, cual de las siguientes afirmaciones es correcta?`,
          options: [
            "Opcion A: Primera alternativa relacionada con el tema",
            "Opcion B: Segunda alternativa (correcta)",
            "Opcion C: Tercera alternativa que parece correcta pero no lo es",
            "Opcion D: Cuarta alternativa claramente incorrecta",
          ],
          correctAnswer: 1,
        });
        answerKey.push({
          questionId,
          answer: 1,
          explanation: "La opcion B es correcta porque describe con precision el concepto principal del texto.",
        });
      } else if (questionType === "true_false") {
        questions.push({
          id: questionId,
          type: questionType,
          question: `Pregunta ${i + 1}: Verdadero o Falso - El concepto mencionado en el texto se aplica en todos los contextos.`,
          options: ["Verdadero", "Falso"],
          correctAnswer: 1,
        });
        answerKey.push({
          questionId,
          answer: 1,
          explanation: "Falso. El texto menciona excepciones especificas donde el concepto no aplica.",
        });
      } else {
        questions.push({
          id: questionId,
          type: questionType,
          question: `Pregunta ${i + 1}: Explica con tus propias palabras el concepto principal del texto.`,
          correctAnswer: "Respuesta abierta - evaluar comprension del concepto",
        });
        answerKey.push({
          questionId,
          answer: "Respuesta esperada: El estudiante debe mencionar los puntos clave del texto y demostrar comprension.",
          explanation: "Buscar mencion de: concepto principal, ejemplo de aplicacion, importancia.",
        });
      }
    }

    return { questions, answerKey };
  }

  async simplifyText(request: TextSimplifierRequest): Promise<TextSimplifierResponse> {
    await simulateDelay(1500);

    // For demo, we'll create simplified versions
    const originalLength = request.text.length;
    const preview = request.text.slice(0, 100);

    return {
      original: request.text,
      levels: {
        easy: `Version facil (para primaria):\n\n${preview}...\n\nEste texto habla de algo importante. Es como cuando [ejemplo simple de la vida diaria]. Lo mas importante es recordar que [punto clave en palabras simples].`,
        medium: `Version media (para secundaria):\n\n${preview}...\n\nEl texto explica [concepto principal]. Esto significa que [explicacion accesible]. En El Salvador, podemos ver ejemplos de esto en [contexto local].`,
        advanced: `Version avanzada (para bachillerato):\n\n${preview}...\n\nEl autor presenta [concepto con terminologia apropiada]. Este planteamiento se relaciona con [conexion a otros temas]. Para comprender completamente, es importante considerar [matiz adicional].`,
      },
    };
  }

  async solveMath(request: MathHelperRequest): Promise<MathHelperResponse> {
    await simulateDelay(1800);

    // Parse simple equations for demo
    const problem = request.problem.trim();

    // Demo response for any problem
    return {
      problem,
      solution: "x = 4",
      steps: [
        {
          step: 1,
          explanation: "Primero, identificamos que tenemos en el problema",
          expression: problem,
        },
        {
          step: 2,
          explanation: "Agrupamos los terminos similares a un lado de la ecuacion",
          expression: "Movemos los numeros al lado derecho",
        },
        {
          step: 3,
          explanation: "Simplificamos los terminos",
          expression: "Combinamos los numeros",
        },
        {
          step: 4,
          explanation: "Despejamos la variable dividiendo ambos lados",
          expression: "x = resultado",
        },
        {
          step: 5,
          explanation: "Verificamos sustituyendo en la ecuacion original",
          expression: "Comprobacion: El resultado es correcto",
        },
      ],
      visualHint: "Imagina una balanza: lo que hagas de un lado, debes hacerlo del otro para mantener el equilibrio.",
    };
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    await simulateDelay(1200);

    // Check safety first
    const safetyCheck = performSafetyCheck(request.message);

    if (safetyCheck.blocked) {
      return {
        message: safetyCheck.suggestion || "No puedo ayudarte con eso. Hay algo relacionado con tus estudios en lo que pueda asistirte?",
        blocked: true,
        blockReason: safetyCheck.reason,
        suggestions: [
          "Explicame un concepto que no entiendo",
          "Ayudame a estudiar para un examen",
          "Dame ideas para un proyecto",
        ],
      };
    }

    // Generate helpful response based on context
    const contextResponses: Record<string, string> = {
      homework: `Entiendo que necesitas ayuda. Vamos a trabajar juntos en esto.

Primero, cuentame: que parte especificamente no entiendes? Asi puedo explicarte de la mejor manera.

Recuerda: mi trabajo es ayudarte a APRENDER, no darte respuestas para copiar. Cuando entiendes el concepto, puedes resolver cualquier problema similar.`,

      study: `Excelente que quieras estudiar! Te sugiero este enfoque:

1. Lee el material una vez para tener una idea general
2. Identifica los conceptos clave
3. Intenta explicarlos con tus propias palabras
4. Haz ejercicios de practica

En que tema necesitas ayuda?`,

      general: `Hola! Soy tu asistente de aprendizaje en Salvora.

Puedo ayudarte a:
- Entender conceptos dificiles
- Practicar para examenes
- Mejorar tu comprension lectora
- Resolver problemas de matematicas paso a paso

Que te gustaria aprender hoy?`,
    };

    const context = request.context || "general";

    return {
      message: contextResponses[context],
      suggestions: [
        "Explicame como funciona [tema]",
        "Dame un ejemplo practico",
        "Como puedo recordar esto mejor?",
      ],
    };
  }

  async generateRubric(request: RubricRequest): Promise<RubricResponse> {
    await simulateDelay(1800);

    const levelNames = ["Excelente", "Bueno", "En desarrollo", "Necesita mejora"];
    const criteria = request.criteria.map((criterion, index) => ({
      criterion,
      weight: Math.round(100 / request.criteria.length),
      levels: Array.from({ length: request.levels }, (_, levelIndex) => ({
        name: levelNames[levelIndex] || `Nivel ${levelIndex + 1}`,
        points: request.levels - levelIndex,
        description: `${levelNames[levelIndex] || "Este nivel"}: El estudiante demuestra ${
          levelIndex === 0
            ? "dominio completo"
            : levelIndex === 1
            ? "buen entendimiento"
            : levelIndex === 2
            ? "entendimiento parcial"
            : "necesidad de apoyo adicional"
        } en ${criterion.toLowerCase()}.`,
      })),
    }));

    return {
      title: `Rubrica de evaluacion: ${request.subject}`,
      criteria,
      maxPoints: request.criteria.length * request.levels,
    };
  }
}
