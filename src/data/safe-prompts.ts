// Safe Prompts Data - Approved prompt templates for /prompts-seguros
// Organized by audience: estudiantes, maestros, directores

export type PromptCategory = 'estudiantes' | 'maestros' | 'directores';

export interface SafePromptTemplate {
  id: string;
  category: PromptCategory;
  title: string;
  description: string;
  prompt: string;
  tags?: string[];
}

export const safePrompts: SafePromptTemplate[] = [
  // ===== ESTUDIANTES =====
  {
    id: 'student-explain-topic',
    category: 'estudiantes',
    title: 'Pedir una explicacion',
    description: 'Para entender un concepto dificil de la clase',
    prompt: 'Explicame [TEMA] de manera simple, como si fuera un estudiante de [GRADO]. Usa ejemplos de la vida diaria en El Salvador.',
    tags: ['aprendizaje', 'explicacion'],
  },
  {
    id: 'student-step-by-step',
    category: 'estudiantes',
    title: 'Ayuda paso a paso',
    description: 'Para entender como resolver un problema',
    prompt: 'Explicame los pasos para resolver este tipo de problema sin darme la respuesta directa: [DESCRIPCION DEL PROBLEMA]. Quiero entender el proceso.',
    tags: ['matematicas', 'problemas'],
  },
  {
    id: 'student-study-tips',
    category: 'estudiantes',
    title: 'Consejos de estudio',
    description: 'Para prepararte para un examen',
    prompt: 'Voy a tener un examen de [MATERIA] sobre [TEMAS]. Dame 5 consejos para estudiar mejor y 3 preguntas de practica que me ayuden a prepararme.',
    tags: ['estudio', 'examenes'],
  },
  {
    id: 'student-simplify',
    category: 'estudiantes',
    title: 'Simplificar texto',
    description: 'Para entender un texto dificil',
    prompt: 'Este texto es dificil de entender: "[TEXTO]". Explicamelo en palabras mas simples sin perder la informacion importante.',
    tags: ['lectura', 'comprension'],
  },
  {
    id: 'student-verify',
    category: 'estudiantes',
    title: 'Verificar mi respuesta',
    description: 'Para saber si hiciste bien un ejercicio',
    prompt: 'Hice este ejercicio y obtuve [TU RESPUESTA]. El problema era: [PROBLEMA]. Revisalo y dime si esta bien. Si me equivoque, ayudame a entender donde.',
    tags: ['verificacion', 'retroalimentacion'],
  },
  {
    id: 'student-project-ideas',
    category: 'estudiantes',
    title: 'Ideas para proyectos',
    description: 'Para encontrar ideas creativas',
    prompt: 'Necesito ideas para un proyecto escolar de [MATERIA] sobre [TEMA]. Dame 3 ideas creativas que pueda hacer con materiales simples en El Salvador.',
    tags: ['proyectos', 'creatividad'],
  },
  {
    id: 'student-summarize',
    category: 'estudiantes',
    title: 'Hacer un resumen',
    description: 'Para resumir lo que aprendiste',
    prompt: 'Acabo de estudiar sobre [TEMA]. Ayudame a crear un resumen de los 5 puntos mas importantes que debo recordar.',
    tags: ['resumen', 'estudio'],
  },
  {
    id: 'student-real-world',
    category: 'estudiantes',
    title: 'Aplicacion en la vida real',
    description: 'Para entender por que importa lo que estudias',
    prompt: 'Estoy aprendiendo [TEMA] en clase. Dame 3 ejemplos de como esto se usa en la vida real en El Salvador.',
    tags: ['aplicacion', 'relevancia'],
  },

  // ===== MAESTROS =====
  {
    id: 'teacher-lesson-plan',
    category: 'maestros',
    title: 'Planificar una leccion',
    description: 'Para crear un plan de clase estructurado',
    prompt: 'Crea un plan de leccion de [DURACION] minutos para estudiantes de [GRADO] sobre [TEMA]. Incluye: objetivo, actividad de apertura, desarrollo, practica, y evaluacion. Usa contexto salvadoreno.',
    tags: ['planificacion', 'lecciones'],
  },
  {
    id: 'teacher-generate-quiz',
    category: 'maestros',
    title: 'Generar cuestionario',
    description: 'Para evaluar el aprendizaje',
    prompt: 'Crea un cuestionario de [NUMERO] preguntas sobre [TEMA] para estudiantes de [GRADO]. Incluye: 3 faciles, 4 intermedias, 3 dificiles. Con respuestas correctas.',
    tags: ['evaluacion', 'cuestionarios'],
  },
  {
    id: 'teacher-rubric',
    category: 'maestros',
    title: 'Crear rubrica',
    description: 'Para evaluar trabajos y proyectos',
    prompt: 'Crea una rubrica para evaluar [TIPO DE TRABAJO] sobre [TEMA] para [GRADO]. Incluye 4 criterios con 4 niveles de desempeno (Excelente, Bueno, En desarrollo, Necesita mejora).',
    tags: ['rubricas', 'evaluacion'],
  },
  {
    id: 'teacher-differentiate',
    category: 'maestros',
    title: 'Diferenciar instruccion',
    description: 'Para adaptar a diferentes niveles',
    prompt: 'Tengo estudiantes con diferentes niveles en mi clase de [GRADO]. Dame 3 formas de adaptar esta actividad sobre [TEMA] para nivel basico, intermedio y avanzado.',
    tags: ['diferenciacion', 'inclusion'],
  },
  {
    id: 'teacher-engage',
    category: 'maestros',
    title: 'Actividades de enganche',
    description: 'Para captar la atencion al inicio',
    prompt: 'Dame 3 actividades de apertura (hook) creativas de 5 minutos para introducir el tema [TEMA] a estudiantes de [GRADO]. Deben ser interactivas y no requerir tecnologia.',
    tags: ['motivacion', 'enganche'],
  },
  {
    id: 'teacher-parent-comm',
    category: 'maestros',
    title: 'Comunicacion con padres',
    description: 'Para informar sobre el progreso',
    prompt: 'Ayudame a redactar un mensaje para padres de familia sobre [SITUACION]. El tono debe ser profesional pero amable. El estudiante es de [GRADO].',
    tags: ['comunicacion', 'padres'],
  },
  {
    id: 'teacher-feedback',
    category: 'maestros',
    title: 'Retroalimentacion constructiva',
    description: 'Para comentar trabajos de estudiantes',
    prompt: 'Dame ejemplos de retroalimentacion constructiva para un trabajo de [TIPO] que tiene [FORTALEZAS] pero necesita mejorar en [AREAS]. El estudiante es de [GRADO].',
    tags: ['retroalimentacion', 'evaluacion'],
  },
  {
    id: 'teacher-classroom-mgmt',
    category: 'maestros',
    title: 'Manejo de aula',
    description: 'Para resolver situaciones del salon',
    prompt: 'Tengo esta situacion en mi clase: [DESCRIPCION]. Dame 3 estrategias respetuosas y efectivas para manejarla. Contexto: [GRADO], [NUMERO] estudiantes.',
    tags: ['manejo', 'disciplina'],
  },

  // ===== DIRECTORES / ADMINISTRACION =====
  {
    id: 'admin-policy-draft',
    category: 'directores',
    title: 'Borrador de politica',
    description: 'Para crear lineamientos institucionales',
    prompt: 'Ayudame a crear un borrador de politica escolar sobre [TEMA]. Debe incluir: proposito, alcance, lineamientos clave, y proceso de implementacion. Contexto: escuela [PUBLICA/PRIVADA] en El Salvador.',
    tags: ['politicas', 'normativas'],
  },
  {
    id: 'admin-meeting-agenda',
    category: 'directores',
    title: 'Agenda de reunion',
    description: 'Para organizar reuniones efectivas',
    prompt: 'Crea una agenda estructurada para una reunion de [DURACION] minutos sobre [TEMA] con [PARTICIPANTES]. Incluye tiempos, puntos clave, y acciones esperadas.',
    tags: ['reuniones', 'organizacion'],
  },
  {
    id: 'admin-parent-letter',
    category: 'directores',
    title: 'Carta a padres',
    description: 'Para comunicados oficiales',
    prompt: 'Redacta una carta oficial para padres de familia sobre [TEMA/SITUACION]. Tono profesional, claro, y que inspire confianza. Incluye proximos pasos si aplica.',
    tags: ['comunicacion', 'oficial'],
  },
  {
    id: 'admin-staff-pd',
    category: 'directores',
    title: 'Capacitacion docente',
    description: 'Para planificar desarrollo profesional',
    prompt: 'Diseña un taller de capacitacion de [DURACION] horas para maestros sobre [TEMA]. Incluye: objetivos, actividades, materiales necesarios, y evaluacion.',
    tags: ['capacitacion', 'desarrollo'],
  },
  {
    id: 'admin-data-analysis',
    category: 'directores',
    title: 'Analisis de datos',
    description: 'Para interpretar resultados academicos',
    prompt: 'Tengo estos datos de rendimiento: [DESCRIPCION]. Ayudame a identificar patrones, areas de mejora, y 3 acciones recomendadas. Contexto: [NIVEL/GRADOS].',
    tags: ['datos', 'analisis'],
  },
  {
    id: 'admin-improvement-plan',
    category: 'directores',
    title: 'Plan de mejora',
    description: 'Para acciones correctivas',
    prompt: 'Necesito crear un plan de mejora para [AREA]. Incluye: diagnostico, objetivos SMART, acciones concretas, responsables, indicadores de exito, y cronograma de 3 meses.',
    tags: ['mejora', 'planificacion'],
  },
  {
    id: 'admin-budget-justify',
    category: 'directores',
    title: 'Justificacion de presupuesto',
    description: 'Para solicitar recursos',
    prompt: 'Ayudame a escribir una justificacion para solicitar [RECURSO/EQUIPO] con un costo de [MONTO]. Debe explicar beneficios educativos, impacto esperado, y alineacion con objetivos institucionales.',
    tags: ['presupuesto', 'recursos'],
  },
  {
    id: 'admin-ai-policy',
    category: 'directores',
    title: 'Politica de uso de IA',
    description: 'Para regular el uso de IA en la escuela',
    prompt: 'Crea lineamientos para el uso responsable de herramientas de IA en nuestra escuela. Debe cubrir: uso permitido por maestros, uso permitido por estudiantes, privacidad, y consecuencias de mal uso.',
    tags: ['IA', 'normativas'],
  },
];

// Helper functions
export function getPromptsByCategory(category: PromptCategory): SafePromptTemplate[] {
  return safePrompts.filter(p => p.category === category);
}

export function getPromptById(id: string): SafePromptTemplate | undefined {
  return safePrompts.find(p => p.id === id);
}

export function searchPrompts(query: string): SafePromptTemplate[] {
  const lowerQuery = query.toLowerCase();
  return safePrompts.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.prompt.toLowerCase().includes(lowerQuery) ||
    p.tags?.some(t => t.toLowerCase().includes(lowerQuery))
  );
}
