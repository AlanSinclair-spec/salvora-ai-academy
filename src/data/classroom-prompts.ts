// Classroom Prompts - "Modo Aula" quick-action templates for teachers
// Reduces freeform chat risk with guided, classroom-safe prompts

export interface ClassroomPrompt {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  template: string;
  variables: string[];
  description: string;
  category: 'explicacion' | 'evaluacion' | 'actividad' | 'diferenciacion';
}

export const classroomPrompts: ClassroomPrompt[] = [
  {
    id: 'explain-simply',
    title: 'Explicar simplemente',
    icon: 'MessageSquare',
    template: 'Explica {TEMA} de manera simple y clara para estudiantes de {GRADO}. Usa ejemplos de la vida cotidiana en El Salvador. Divide la explicacion en 3 partes: que es, por que importa, y un ejemplo practico.',
    variables: ['TEMA', 'GRADO'],
    description: 'Obtener una explicacion clara de un tema',
    category: 'explicacion',
  },
  {
    id: 'create-questions',
    title: 'Crear 5 preguntas',
    icon: 'HelpCircle',
    template: 'Genera 5 preguntas de evaluacion sobre {TEMA} para estudiantes de {GRADO}. Incluye: 2 preguntas de conocimiento basico, 2 de comprension, y 1 de aplicacion. Proporciona las respuestas correctas al final.',
    variables: ['TEMA', 'GRADO'],
    description: 'Generar preguntas de evaluacion rapidas',
    category: 'evaluacion',
  },
  {
    id: 'suggest-activity',
    title: 'Sugerir actividad',
    icon: 'Lightbulb',
    template: 'Sugiere una actividad practica de {DURACION} minutos sobre {TEMA} para estudiantes de {GRADO}. La actividad debe: ser participativa, no requerir tecnologia avanzada, y poder hacerse con materiales simples disponibles en El Salvador.',
    variables: ['TEMA', 'GRADO', 'DURACION'],
    description: 'Obtener ideas de actividades practicas',
    category: 'actividad',
  },
  {
    id: 'build-rubric',
    title: 'Construir rubrica',
    icon: 'ClipboardList',
    template: 'Crea una rubrica de evaluacion para {TIPO_TRABAJO} sobre {TEMA} para {GRADO}. Incluye 4 criterios de evaluacion con 4 niveles cada uno (Excelente-4, Bueno-3, En desarrollo-2, Necesita mejora-1). Agrega descriptores claros para cada nivel.',
    variables: ['TIPO_TRABAJO', 'TEMA', 'GRADO'],
    description: 'Crear rubricas de evaluacion',
    category: 'evaluacion',
  },
  {
    id: 'simplify-reading',
    title: 'Simplificar lectura',
    icon: 'BookOpen',
    template: 'Simplifica el siguiente texto para estudiantes de {GRADO}, manteniendo las ideas principales pero usando vocabulario mas accesible:\n\n"{TEXTO}"\n\nAl final, incluye 2 preguntas de comprension.',
    variables: ['GRADO', 'TEXTO'],
    description: 'Adaptar textos a diferentes niveles',
    category: 'diferenciacion',
  },
  {
    id: 'differentiate-levels',
    title: 'Diferenciar niveles',
    icon: 'Users',
    template: 'Tengo estudiantes con diferentes niveles en mi clase de {GRADO}. Adapta esta actividad sobre {TEMA} para tres niveles:\n1. Nivel basico (necesita apoyo)\n2. Nivel intermedio (en el grado)\n3. Nivel avanzado (listo para retos)\n\nCada version debe mantener el mismo objetivo de aprendizaje.',
    variables: ['GRADO', 'TEMA'],
    description: 'Adaptar para diferentes niveles',
    category: 'diferenciacion',
  },
  {
    id: 'hook-activity',
    title: 'Actividad de enganche',
    icon: 'Zap',
    template: 'Dame 3 actividades de apertura (hook) de 5 minutos para introducir {TEMA} a estudiantes de {GRADO}. Deben captar la atencion, no requerir materiales especiales, y conectar con la vida de jovenes salvadorenos.',
    variables: ['TEMA', 'GRADO'],
    description: 'Ideas para captar atencion al inicio',
    category: 'actividad',
  },
  {
    id: 'exit-ticket',
    title: 'Boleto de salida',
    icon: 'LogOut',
    template: 'Crea un "boleto de salida" (exit ticket) de 3 preguntas rapidas para verificar la comprension de {TEMA} en estudiantes de {GRADO}. Las preguntas deben poder responderse en 2 minutos.',
    variables: ['TEMA', 'GRADO'],
    description: 'Verificar comprension al final de clase',
    category: 'evaluacion',
  },
];

export function getPromptsByCategory(category: ClassroomPrompt['category']): ClassroomPrompt[] {
  return classroomPrompts.filter(p => p.category === category);
}

export function getPromptById(id: string): ClassroomPrompt | undefined {
  return classroomPrompts.find(p => p.id === id);
}

// Fill template with values
export function fillTemplate(template: string, values: Record<string, string>): string {
  let filled = template;
  Object.entries(values).forEach(([key, value]) => {
    filled = filled.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  });
  return filled;
}
