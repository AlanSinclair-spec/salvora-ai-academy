// Demo presets for presentations
// Pre-fills progress, forms, and content for impressive demos

import type { UserProgress } from "@/types/settings";

/**
 * Check if demo mode is enabled via environment variable
 */
export function isDemoMode(): boolean {
  return import.meta.env.VITE_DEMO_MODE === "true";
}

/**
 * Demo progress - shows 50% of first course completed
 * Makes the Cursos page look active and used
 */
export const demoProgress: Record<string, UserProgress> = {
  // Introduction to AI - Unit 1 completed
  "introduccion-ia:intro-1-bienvenida": {
    lessonId: "intro-1-bienvenida",
    courseId: "introduccion-ia",
    completed: true,
    lastAccessed: Date.now() - 86400000, // 1 day ago
  },
  "introduccion-ia:intro-1-definicion": {
    lessonId: "intro-1-definicion",
    courseId: "introduccion-ia",
    completed: true,
    lastAccessed: Date.now() - 82800000,
  },
  "introduccion-ia:intro-1-el-salvador": {
    lessonId: "intro-1-el-salvador",
    courseId: "introduccion-ia",
    completed: true,
    lastAccessed: Date.now() - 79200000,
  },
  "introduccion-ia:intro-1-practica": {
    lessonId: "intro-1-practica",
    courseId: "introduccion-ia",
    completed: true,
    quizScore: 85,
    lastAccessed: Date.now() - 75600000,
  },
  // Unit 2 - partially done
  "introduccion-ia:intro-2-grok": {
    lessonId: "intro-2-grok",
    courseId: "introduccion-ia",
    completed: true,
    lastAccessed: Date.now() - 3600000, // 1 hour ago
  },
  // AI for Teachers - started
  "ia-maestros:maestros-1-bienvenida": {
    lessonId: "maestros-1-bienvenida",
    courseId: "ia-maestros",
    completed: true,
    lastAccessed: Date.now() - 172800000, // 2 days ago
  },
};

/**
 * Demo form data for Lesson Planner (Maestro page)
 * Realistic example for a 7th grade Social Studies class
 */
export const demoLessonPlanner = {
  grade: "7° grado",
  subject: "Estudios Sociales",
  topic: "Los Volcanes de El Salvador: El Cinturon de Fuego del Pacifico",
  duration: 45,
};

/**
 * Demo form data for Quiz Generator (Maestro page)
 */
export const demoQuizGenerator = {
  text: `La fotosintesis es el proceso mediante el cual las plantas convierten la luz solar en energia.
Durante este proceso, las plantas absorben dioxido de carbono (CO2) del aire y agua (H2O) del suelo.
Usando la energia de la luz solar, transforman estos elementos en glucosa (azucar) y liberan oxigeno (O2) como producto secundario.
La fotosintesis ocurre principalmente en las hojas, en estructuras llamadas cloroplastos que contienen clorofila.`,
  questionCount: 5,
  types: ["multiple_choice", "true_false"] as const,
};

/**
 * Demo form data for Text Simplifier (Estudiante page)
 * About AI in El Salvador
 */
export const demoTextSimplifier = {
  text: `La inteligencia artificial esta transformando la educacion en El Salvador de maneras sin precedentes.
Gracias a la alianza entre el gobierno salvadoreno y xAI, millones de estudiantes ahora tienen acceso a Grok,
un asistente de IA avanzado que puede responder preguntas, explicar conceptos complejos y ayudar con las tareas escolares.

Esta iniciativa posiciona a El Salvador como pionero en America Latina en la adopcion de tecnologia educativa de vanguardia,
democratizando el acceso al conocimiento y preparando a la proxima generacion para un futuro impulsado por la IA.`,
};

/**
 * Demo form data for Math Helper (Estudiante page)
 */
export const demoMathHelper = {
  problem: "Si un autobus sale de San Salvador a las 8:00 AM y viaja a 60 km/h hacia La Union (180 km de distancia), a que hora llegara?",
  showSteps: true,
};

/**
 * Demo chat messages for SafeChat (Estudiante page)
 */
export const demoChatMessages = [
  {
    role: "user" as const,
    content: "Hola, necesito ayuda para entender que son las fracciones",
    timestamp: Date.now() - 60000,
  },
  {
    role: "assistant" as const,
    content: `¡Claro que si! Las fracciones son una forma de representar partes de un todo.

Imagina que tienes una pizza y la cortas en 4 pedazos iguales. Si te comes 1 pedazo, te has comido 1/4 (un cuarto) de la pizza.

**Una fraccion tiene dos partes:**
- **Numerador** (arriba): Cuantas partes tienes
- **Denominador** (abajo): En cuantas partes se dividio el total

Por ejemplo: 3/4 significa que tienes 3 partes de algo que fue dividido en 4.

¿Te gustaria que te explique como sumar fracciones o prefieres practicar con algunos ejemplos?`,
    timestamp: Date.now() - 30000,
  },
];

/**
 * Demo Rubric Generator data
 */
export const demoRubricGenerator = {
  subject: "Lenguaje y Literatura",
  criteria: [
    "Claridad y coherencia del texto",
    "Uso correcto de gramatica y ortografia",
    "Creatividad y originalidad",
    "Estructura del ensayo",
  ],
  levels: 4,
};
