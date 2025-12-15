// Course data for Salvora AI Academy
// Aligned with xAI-El Salvador partnership specification

import type { Course, Lesson, Unit } from "@/types/courses";

export const courses: Course[] = [
  {
    id: "introduccion-ia",
    title: "Introduccion a la IA",
    description: "Conceptos fundamentales de la Inteligencia Artificial",
    longDescription: "Aprende que es la IA, como funciona, sus limites y como esta tecnologia esta transformando El Salvador. Curso completo desde cero hasta uso responsable.",
    icon: "Brain",
    color: "blue",
    targetAudience: "all",
    difficulty: "beginner",
    estimatedHours: 3,
    units: [
      {
        id: "intro-fundamentos",
        title: "Fundamentos de IA",
        description: "Conceptos basicos y desmitificacion de la Inteligencia Artificial",
        order: 1,
        lessons: [
          {
            id: "intro-1-bienvenida",
            title: "Bienvenida: Tu Viaje con la IA",
            type: "video",
            duration: "8 min",
            videoId: "W8AeOXa_FqU", // DotCSV: Programando Red Neuronal - intro to AI concepts
            order: 1,
          },
          {
            id: "intro-1-que-es-ia",
            title: "Que es la Inteligencia Artificial?",
            type: "video",
            duration: "12 min",
            videoId: "90QDe6DQXF4", // DotCSV: IA crea ARTE - demonstrates AI capabilities
            order: 2,
          },
          {
            id: "intro-1-historia",
            title: "Historia de la IA: De Ciencia Ficcion a Realidad",
            type: "reading",
            duration: "10 min",
            order: 3,
          },
          {
            id: "intro-1-tipos",
            title: "Tipos de IA: Estrecha, General y Super",
            type: "video",
            duration: "10 min",
            videoId: "SALVORA_INTRO_003",
            order: 4,
          },
        ],
      },
      {
        id: "intro-como-funciona",
        title: "Como Funciona la IA",
        description: "Mecanismos y entendimiento tecnico accesible",
        order: 2,
        lessons: [
          {
            id: "intro-2-modelos",
            title: "Modelos de Lenguaje: Como Piensa la IA",
            type: "video",
            duration: "15 min",
            videoId: "xi94v_jl26U", // DotCSV: Transformers - foundation of modern AI models
            order: 1,
          },
          {
            id: "intro-2-entrenamiento",
            title: "Como Aprende una IA: Datos y Entrenamiento",
            type: "reading",
            duration: "12 min",
            order: 2,
          },
          {
            id: "intro-2-grok",
            title: "Conoce a Grok: El Asistente de xAI",
            type: "video",
            duration: "10 min",
            videoId: "SALVORA_INTRO_005",
            order: 3,
          },
        ],
      },
      {
        id: "intro-uso-responsable",
        title: "Usando IA Responsablemente",
        description: "Limites, etica y aplicacion practica",
        order: 3,
        lessons: [
          {
            id: "intro-3-limites",
            title: "Limites de la IA: Lo Que No Puede Hacer",
            type: "video",
            duration: "12 min",
            videoId: "SALVORA_INTRO_006",
            order: 1,
          },
          {
            id: "intro-3-etica",
            title: "Etica y IA: Decisiones Responsables",
            type: "reading",
            duration: "10 min",
            order: 2,
          },
          {
            id: "intro-3-el-salvador",
            title: "IA en El Salvador: Oportunidad Nacional",
            type: "video",
            duration: "10 min",
            videoId: "SALVORA_INTRO_007",
            order: 3,
          },
        ],
      },
      {
        id: "intro-evaluacion",
        title: "Evaluacion Final",
        description: "Demuestra tu conocimiento sobre IA",
        order: 4,
        lessons: [
          {
            id: "intro-4-evaluacion",
            title: "Evaluacion: Demuestra Tu Conocimiento",
            type: "quiz",
            duration: "15 min",
            order: 1,
          },
        ],
      },
    ],
  },
  {
    id: "ia-maestros",
    title: "IA para Maestros",
    description: "Herramientas de IA para potenciar tu ensenanza",
    longDescription: "Aprende a usar IA para planificar lecciones, crear evaluaciones y ensenar de manera mas efectiva.",
    icon: "GraduationCap",
    color: "green",
    targetAudience: "teachers",
    difficulty: "intermediate",
    estimatedHours: 4,
    units: [
      {
        id: "maestros-planeacion",
        title: "Planeacion con IA",
        description: "Crea planes de leccion con ayuda de la IA",
        order: 1,
        lessons: [
          {
            id: "maestros-1-plantilla",
            title: "Plantillas y objetivos de aprendizaje",
            type: "video",
            duration: "12 min",
            videoId: "placeholder-templates",
            order: 1,
          },
          {
            id: "maestros-1-personalizar",
            title: "Personalizando contenido para tu clase",
            type: "reading",
            duration: "10 min",
            order: 2,
          },
          {
            id: "maestros-1-practica",
            title: "Practica: Planifica una clase",
            type: "practice",
            duration: "20 min",
            order: 3,
          },
        ],
      },
      {
        id: "maestros-evaluaciones",
        title: "Evaluaciones Instantaneas",
        description: "Genera cuestionarios y rubricas con IA",
        order: 2,
        lessons: [
          {
            id: "maestros-2-quizzes",
            title: "Generador de cuestionarios",
            type: "video",
            duration: "10 min",
            videoId: "placeholder-quizzes",
            order: 1,
          },
          {
            id: "maestros-2-rubricas",
            title: "Crear rubricas efectivas",
            type: "reading",
            duration: "8 min",
            order: 2,
          },
          {
            id: "maestros-2-practica",
            title: "Practica: Genera un quiz de ejemplo",
            type: "practice",
            duration: "15 min",
            order: 3,
          },
        ],
      },
      {
        id: "maestros-responsable",
        title: "IA Responsable en el Aula",
        description: "Seguridad, etica y mejores practicas",
        order: 3,
        lessons: [
          {
            id: "maestros-3-seguridad",
            title: "Seguridad y privacidad",
            type: "video",
            duration: "10 min",
            videoId: "placeholder-safety",
            order: 1,
          },
          {
            id: "maestros-3-cheating",
            title: "Detectando uso inapropiado",
            type: "reading",
            duration: "8 min",
            order: 2,
          },
          {
            id: "maestros-3-privacidad",
            title: "Protegiendo la privacidad estudiantil",
            type: "video",
            duration: "8 min",
            videoId: "placeholder-privacy",
            order: 3,
          },
        ],
      },
    ],
  },
  {
    id: "ia-estudiantes",
    title: "IA para Estudiantes",
    description: "Aprende a estudiar mejor con ayuda de la IA",
    longDescription: "Descubre como usar IA para aprender, no para copiar. Herramientas para matematicas, lectura y mas.",
    icon: "BookOpen",
    color: "purple",
    targetAudience: "students",
    difficulty: "beginner",
    estimatedHours: 3,
    units: [
      {
        id: "estudiantes-estudiar",
        title: "Estudiar con IA",
        description: "Como usar IA para aprender mejor",
        order: 1,
        lessons: [
          {
            id: "estudiantes-1-pedir-ayuda",
            title: "Como pedir ayuda a la IA",
            type: "video",
            duration: "10 min",
            videoId: "placeholder-asking",
            order: 1,
          },
          {
            id: "estudiantes-1-aprender",
            title: "Aprender, no copiar",
            type: "video",
            duration: "8 min",
            videoId: "placeholder-learn",
            order: 2,
          },
          {
            id: "estudiantes-1-practica",
            title: "Practica: Escribe un resumen corto",
            type: "practice",
            duration: "15 min",
            order: 3,
          },
        ],
      },
      {
        id: "estudiantes-matematicas",
        title: "Matematicas con IA",
        description: "Resuelve problemas paso a paso",
        order: 2,
        lessons: [
          {
            id: "estudiantes-2-explicaciones",
            title: "Explicaciones paso a paso",
            type: "video",
            duration: "12 min",
            videoId: "placeholder-math",
            order: 1,
          },
          {
            id: "estudiantes-2-ejercicios",
            title: "Ejercicios guiados",
            type: "practice",
            duration: "20 min",
            order: 2,
          },
        ],
      },
      {
        id: "estudiantes-lectura",
        title: "Lectura y Comprension",
        description: "Simplifica textos y mejora tu comprension",
        order: 3,
        lessons: [
          {
            id: "estudiantes-3-simplificar",
            title: "Simplificador de textos",
            type: "video",
            duration: "8 min",
            videoId: "placeholder-simplify",
            order: 1,
          },
          {
            id: "estudiantes-3-historias",
            title: "Historias de El Salvador",
            type: "reading",
            duration: "10 min",
            order: 2,
          },
        ],
      },
    ],
  },
  {
    id: "ia-vida-real",
    title: "IA en la Vida Real",
    description: "Descubre como la IA impacta diferentes sectores en El Salvador",
    longDescription: "Explora aplicaciones reales de IA en agricultura, economia, turismo, medio ambiente y deportes.",
    icon: "Globe",
    color: "teal",
    targetAudience: "all",
    difficulty: "beginner",
    estimatedHours: 3,
    units: [
      {
        id: "vida-real-agricultura",
        title: "IA en Agricultura",
        description: "Cultivos inteligentes y agricultura de precision",
        order: 1,
        lessons: [
          {
            id: "vida-1-cultivos",
            title: "Cultivos inteligentes",
            type: "video",
            duration: "10 min",
            videoId: "placeholder-agriculture",
            order: 1,
          },
          {
            id: "vida-1-casos",
            title: "Casos de exito en El Salvador",
            type: "reading",
            duration: "8 min",
            order: 2,
          },
        ],
      },
      {
        id: "vida-real-economia",
        title: "Bitcoin y Economia Digital",
        description: "IA en finanzas y la innovacion salvadorena",
        order: 2,
        lessons: [
          {
            id: "vida-2-finanzas",
            title: "IA en finanzas",
            type: "video",
            duration: "12 min",
            videoId: "placeholder-finance",
            order: 1,
          },
          {
            id: "vida-2-innovacion",
            title: "El Salvador y la innovacion tecnologica",
            type: "reading",
            duration: "10 min",
            order: 2,
          },
        ],
      },
      {
        id: "vida-real-turismo",
        title: "Turismo Inteligente",
        description: "IA para mejorar la experiencia turistica",
        order: 3,
        lessons: [
          {
            id: "vida-3-turistas",
            title: "IA para turistas y visitantes",
            type: "video",
            duration: "8 min",
            videoId: "placeholder-tourism",
            order: 1,
          },
        ],
      },
      {
        id: "vida-real-ambiente",
        title: "Medio Ambiente",
        description: "Protegiendo el planeta con tecnologia",
        order: 4,
        lessons: [
          {
            id: "vida-4-planeta",
            title: "Protegiendo el planeta con IA",
            type: "video",
            duration: "10 min",
            videoId: "placeholder-environment",
            order: 1,
          },
        ],
      },
      {
        id: "vida-real-deportes",
        title: "Futbol y Deportes",
        description: "Analisis deportivo con inteligencia artificial",
        order: 5,
        lessons: [
          {
            id: "vida-5-futbol",
            title: "Analisis deportivo con IA",
            type: "video",
            duration: "8 min",
            videoId: "placeholder-sports",
            order: 1,
          },
        ],
      },
    ],
  },
];

// Helper functions
export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getLessonById(
  courseId: string,
  lessonId: string
): { lesson: Lesson; unit: Unit; course: Course } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const unit of course.units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { lesson, unit, course };
    }
  }
  return undefined;
}

export function getAdjacentLessons(
  courseId: string,
  lessonId: string
): { prev?: { lesson: Lesson; unitId: string }; next?: { lesson: Lesson; unitId: string } } {
  const course = getCourseById(courseId);
  if (!course) return {};

  // Flatten all lessons with their unit info
  const allLessons: { lesson: Lesson; unitId: string }[] = [];
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      allLessons.push({ lesson, unitId: unit.id });
    }
  }

  const currentIndex = allLessons.findIndex((l) => l.lesson.id === lessonId);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : undefined,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : undefined,
  };
}

export function getTotalLessons(course: Course): number {
  return course.units.reduce((total, unit) => total + unit.lessons.length, 0);
}

export function getCoursesByAudience(audience: "all" | "teachers" | "students"): Course[] {
  if (audience === "all") return courses;
  return courses.filter((c) => c.targetAudience === audience || c.targetAudience === "all");
}
