// Lesson content for Salvora AI Academy
// Contains markdown content, quiz questions, and video transcripts

import type {
  QuizQuestion,
  QuickVersion,
  LocalContext,
  SafePromptExample,
  PracticeQuestionEnhanced,
  ResponsibleAIReminder,
  WhatsAppPayload,
  ClassroomPack
} from "@/types/courses";

export interface LessonContent {
  // Original fields
  content?: string;
  transcript?: string;
  practiceQuestions?: QuizQuestion[];
  practiceInstructions?: string;

  // Enhanced fields for National-Scale Lesson Standard
  quickVersion?: QuickVersion;
  localContext?: LocalContext;
  safePrompts?: SafePromptExample[];
  enhancedPractice?: PracticeQuestionEnhanced[];
  aiErrorTips?: string[];
  responsibleAIReminder?: ResponsibleAIReminder;
  whatsAppPayload?: WhatsAppPayload;
  classroomPack?: ClassroomPack;
}

export const lessonContent: Record<string, LessonContent> = {
  // ===== CURSO 1: INTRODUCCION A LA IA =====

  // Unit 1: Que es la IA?
  "intro-1-bienvenida": {
    transcript: `Bienvenido a Salvora, la plataforma nacional de alfabetizacion en Inteligencia Artificial de El Salvador.

En este curso, aprenderas los conceptos fundamentales de la IA y como esta tecnologia esta transformando nuestro pais y el mundo.

El Salvador se ha asociado con xAI para llevar el poder de la inteligencia artificial a cada escuela, cada maestro y cada estudiante. Salvora es tu guia para aprovechar esta oportunidad historica.

No necesitas conocimientos previos de programacion o tecnologia avanzada. Solo necesitas curiosidad y ganas de aprender.

Comencemos este viaje juntos.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "Salvora es la plataforma nacional de El Salvador para aprender sobre IA",
        "La alianza con xAI trae herramientas de IA a todas las escuelas del pais",
        "No necesitas conocimientos previos - solo curiosidad y ganas de aprender"
      ],
      localExample: "En Apopa y todo El Salvador, maestros y estudiantes ya estan usando Salvora para mejorar el aprendizaje con IA.",
      safePrompt: "Explicame que es la inteligencia artificial de manera simple, como si fuera un estudiante salvadoreno de secundaria."
    },
    localContext: {
      hook: "Sabias que El Salvador es pionero en America Latina en llevar IA a las escuelas publicas? La alianza con xAI busca que cada estudiante, desde Metapan hasta La Union, tenga acceso a estas herramientas del futuro.",
      department: "Apopa"
    },
    safePrompts: [{
      template: "Explicame [TEMA] como si fuera un estudiante de [GRADO] en El Salvador",
      goodExample: "Explicame que es la inteligencia artificial como si fuera un estudiante de 8vo grado en El Salvador. Usa ejemplos de mi vida diaria.",
      badExample: "Hazme un ensayo sobre IA para entregar en mi clase"
    }],
    enhancedPractice: [
      { id: "ep-1", question: "Que es Salvora?", options: ["Una red social", "La plataforma nacional de alfabetizacion en IA de El Salvador", "Un juego educativo", "Una app de mensajeria"], correctAnswer: 1, explanation: "Salvora es la plataforma oficial de El Salvador para ensenar sobre inteligencia artificial.", feedback: "Correcto! Salvora es tu guia para aprender IA de manera segura y responsable.", hints: ["Piensa en el nombre: Salv-ora", "Es una plataforma educativa oficial"] },
      { id: "ep-2", question: "Con que empresa se asocio El Salvador para llevar IA a las escuelas?", options: ["Google", "Microsoft", "xAI", "Apple"], correctAnswer: 2, explanation: "El Salvador se asocio con xAI, la empresa de Elon Musk.", feedback: "Exacto! xAI es la empresa que creo Grok.", hints: ["Es la empresa de Elon Musk", "Su asistente se llama Grok"] },
      { id: "ep-3", question: "Que necesitas para empezar a aprender IA con Salvora?", options: ["Conocimientos de programacion", "Una computadora costosa", "Curiosidad y ganas de aprender", "Experiencia en tecnologia"], correctAnswer: 2, explanation: "Salvora esta disenada para todos, sin importar tu nivel tecnologico.", feedback: "Asi es! Lo mas importante es tu actitud de aprendizaje.", hints: ["Salvora es para todos", "No hay requisitos previos"] }
    ],
    aiErrorTips: ["Si la IA da informacion sobre El Salvador que no reconoces, verifica con fuentes locales", "Las fechas y eventos recientes pueden no estar actualizados"],
    responsibleAIReminder: { student: "La IA es tu herramienta de aprendizaje, no un atajo. Aprovechala para entender mejor.", teacher: "Modele el uso responsable de IA. Sus estudiantes aprenden de su ejemplo." },
    whatsAppPayload: { summary: "Aprendi sobre Salvora, la plataforma de IA de El Salvador. Es gratis y para todos!", prompt: "Pregunta a la IA: Explicame que es la inteligencia artificial como si tuviera 12 anos", practiceQuestion: "Que es Salvora y por que es importante para El Salvador?" }
  },

  "intro-1-definicion": {
    transcript: `La Inteligencia Artificial, o IA, es la capacidad de las computadoras para realizar tareas que normalmente requieren inteligencia humana.

Esto incluye:
- Entender el lenguaje natural (como tu y yo hablamos)
- Reconocer imagenes y rostros
- Tomar decisiones basadas en datos
- Aprender de la experiencia

Piensa en como usas tu telefono: cuando escribes un mensaje y te sugiere palabras, eso es IA. Cuando Google Maps te dice la ruta mas rapida, eso es IA. Cuando Netflix te recomienda una pelicula, eso tambien es IA.

La IA no es magia ni ciencia ficcion. Es matematicas y estadistica aplicadas de manera muy inteligente.`,

    // === Enhanced Content ===
    quickVersion: {
      bullets: [
        "La IA es la capacidad de las computadoras para hacer tareas que requieren inteligencia",
        "Ya usas IA todos los dias: sugerencias de texto, mapas, recomendaciones",
        "No es magia - es matematicas y estadistica aplicadas inteligentemente"
      ],
      localExample: "Cuando usas Waze para ir de San Salvador a Santa Ana y te sugiere la mejor ruta evitando trafico, eso es IA analizando datos en tiempo real.",
      safePrompt: "Dame 3 ejemplos de como uso inteligencia artificial en mi vida diaria en El Salvador sin darme cuenta."
    },
    localContext: {
      hook: "Cada vez que un agricultor de Sonsonate recibe alertas del clima en su telefono, o cuando un banco salvadoreno detecta una transaccion sospechosa en tu cuenta, la IA esta trabajando para ayudarte.",
      department: "San Salvador"
    },
    safePrompts: [{
      template: "Dame [NUMERO] ejemplos de IA en [CONTEXTO]",
      goodExample: "Dame 5 ejemplos de como la inteligencia artificial se usa en la vida diaria de un estudiante salvadoreno",
      badExample: "Escribe mi tarea sobre inteligencia artificial"
    }],
    enhancedPractice: [
      { id: "def-1", question: "Cual de las siguientes NO es una capacidad de la IA?", options: ["Entender lenguaje natural", "Tener emociones humanas reales", "Reconocer imagenes", "Aprender de datos"], correctAnswer: 1, explanation: "La IA no tiene emociones reales, solo simula respuestas basadas en patrones.", feedback: "Correcto! La IA procesa informacion pero no siente como los humanos.", hints: ["Piensa en que hace diferente a los humanos", "La IA aprende de datos, no de experiencias emocionales"] },
      { id: "def-2", question: "Que es la IA fundamentalmente?", options: ["Magia tecnologica", "Ciencia ficcion", "Matematicas y estadistica aplicadas", "Robots con conciencia"], correctAnswer: 2, explanation: "La IA se basa en algoritmos matematicos y analisis estadistico.", feedback: "Exacto! Aunque parece magia, son calculos muy sofisticados.", hints: ["Es algo que los cientificos pueden explicar", "Se basa en numeros y datos"] },
      { id: "def-3", question: "Cual es un ejemplo de IA en tu telefono?", options: ["La pantalla tactil", "Las sugerencias de palabras al escribir", "El boton de encendido", "La bateria"], correctAnswer: 1, explanation: "El teclado predictivo usa IA para aprender tus patrones.", feedback: "Asi es! El teclado aprende como escribes para ayudarte.", hints: ["Piensa en algo que aprende de ti", "Algo que te sugiere cosas"] }
    ],
    aiErrorTips: ["La IA puede confundir contextos culturales salvadorenos con otros paises", "Verifica siempre los datos especificos sobre El Salvador"],
    responsibleAIReminder: { student: "Entender como funciona la IA te ayuda a usarla mejor y a no dejarte enganar.", teacher: "Ensene a sus estudiantes a cuestionar y verificar las respuestas de la IA." },
    whatsAppPayload: { summary: "Aprendi que la IA ya esta en mi vida diaria: telefono, mapas, y mas. No es magia, es matematicas!", prompt: "Pregunta: Dame ejemplos de IA que uso todos los dias sin darme cuenta", practiceQuestion: "Que ejemplos de IA puedes encontrar en tu telefono?" }
  },

  "intro-1-el-salvador": {
    content: `# IA en El Salvador

El Salvador esta dando pasos importantes en la adopcion de inteligencia artificial. Aqui algunos ejemplos:

## La Alianza con xAI

En 2024, El Salvador anuncio una alianza estrategica con xAI, la empresa de inteligencia artificial fundada por Elon Musk. Esta alianza busca:

- Llevar asistentes de IA como Grok a escuelas publicas
- Capacitar a maestros en el uso de herramientas de IA
- Preparar a los estudiantes para la economia del futuro

## Por que es Importante

El Salvador tiene la oportunidad de ser lider en America Latina en alfabetizacion de IA. Mientras otros paises apenas comienzan a discutir el tema, nosotros ya estamos actuando.

## Salvora: El Complemento Humano

xAI proporciona la tecnologia (Grok), pero la tecnologia sola no es suficiente. Salvora existe para:

1. **Ensenar** a maestros y estudiantes como usar IA de manera efectiva
2. **Contextualizar** el uso de IA para la realidad salvadorena
3. **Garantizar** que el beneficio llegue a todas las comunidades, incluso las rurales

## Reflexion

La IA no reemplazara a los maestros ni a los estudiantes. Es una herramienta poderosa que, bien usada, puede potenciar el aprendizaje y abrir nuevas oportunidades para todos los salvadorenos.`,

    // === Enhanced Content ===
    quickVersion: {
      bullets: [
        "El Salvador se asocio con xAI para llevar IA a escuelas publicas",
        "Salvora contextualiza la IA para la realidad salvadorena",
        "La IA es herramienta, no reemplazo de maestros o estudiantes"
      ],
      localExample: "Desde escuelas en Chalatenango hasta La Union, Salvora llegara a todas las comunidades, incluyendo zonas rurales donde antes no habia acceso a tecnologia avanzada.",
      safePrompt: "Que oportunidades puede traer la inteligencia artificial a los jovenes de El Salvador en los proximos anos?"
    },
    localContext: {
      hook: "El Salvador es el primer pais de America Latina en tener una alianza nacional con una empresa de IA para educacion. Mientras otros paises debaten, nosotros ya estamos actuando.",
      department: "La Libertad"
    },
    safePrompts: [{
      template: "Como puede la IA ayudar a [SECTOR] en El Salvador?",
      goodExample: "Como puede la inteligencia artificial ayudar a mejorar la educacion publica en El Salvador? Dame ejemplos concretos.",
      badExample: "Escribeme un discurso sobre IA en El Salvador para mi tarea"
    }],
    enhancedPractice: [
      { id: "sv-1", question: "Que busca la alianza entre El Salvador y xAI?", options: ["Vender computadoras", "Llevar IA a escuelas publicas y capacitar maestros", "Reemplazar a los maestros", "Solo beneficiar a escuelas privadas"], correctAnswer: 1, explanation: "La alianza busca democratizar el acceso a la IA en la educacion publica.", feedback: "Exacto! El objetivo es que todos tengan acceso, no solo algunos.", hints: ["Es para escuelas publicas", "Incluye capacitacion de maestros"] },
      { id: "sv-2", question: "Que hace Salvora que xAI no puede hacer sola?", options: ["Proporcionar la tecnologia", "Contextualizar para la realidad salvadorena", "Crear robots", "Vender servicios"], correctAnswer: 1, explanation: "Salvora adapta y contextualiza la IA para El Salvador.", feedback: "Correcto! La tecnologia necesita contexto local para ser util.", hints: ["Piensa en lo que hace diferente a Salvora", "Es sobre adaptar para El Salvador"] },
      { id: "sv-3", question: "La IA reemplazara a los maestros en El Salvador?", options: ["Si, completamente", "No, es una herramienta que complementa", "Solo en algunas escuelas", "Nadie sabe"], correctAnswer: 1, explanation: "La IA es una herramienta que potencia, no reemplaza.", feedback: "Asi es! Los maestros siguen siendo esenciales.", hints: ["La IA es una herramienta", "Los humanos siguen siendo importantes"] }
    ],
    aiErrorTips: ["La IA puede no tener informacion actualizada sobre proyectos recientes en El Salvador", "Verifica datos sobre la alianza xAI con fuentes oficiales del gobierno"],
    responsibleAIReminder: { student: "Eres parte de la primera generacion salvadorena en aprender IA formalmente. Usala con responsabilidad.", teacher: "Usted esta formando a los ciudadanos digitales del futuro de El Salvador." },
    whatsAppPayload: { summary: "El Salvador es lider en IA educativa en America Latina! La alianza con xAI nos pone adelante.", prompt: "Pregunta: Como puede la IA ayudar a los estudiantes salvadorenos?", practiceQuestion: "Por que es importante que El Salvador este liderando en IA educativa?" }
  },

  "intro-1-practica": {
    practiceQuestions: [
      {
        id: "q1-1",
        question: "Cual de las siguientes es una definicion correcta de Inteligencia Artificial?",
        options: [
          "Un robot con forma humana",
          "La capacidad de las computadoras para realizar tareas que normalmente requieren inteligencia humana",
          "Un programa que siempre tiene la razon",
          "Una tecnologia que solo existe en peliculas"
        ],
        correctAnswer: 1,
        explanation: "La IA se refiere a sistemas computacionales que pueden realizar tareas cognitivas como aprender, razonar y resolver problemas."
      },
      {
        id: "q1-2",
        question: "Cual de estos es un ejemplo de IA en tu vida diaria?",
        options: [
          "Un libro de texto",
          "Las sugerencias de palabras cuando escribes en tu telefono",
          "Una calculadora basica",
          "Un reloj de pared"
        ],
        correctAnswer: 1,
        explanation: "El teclado predictivo usa IA para aprender tus patrones de escritura y sugerir palabras."
      },
      {
        id: "q1-3",
        question: "Por que es importante la alianza entre El Salvador y xAI?",
        options: [
          "Solo beneficia a las escuelas privadas",
          "Permite llevar herramientas de IA a escuelas publicas y capacitar a maestros",
          "Reemplazara a todos los maestros con robots",
          "Es solo un proyecto de prueba sin impacto real"
        ],
        correctAnswer: 1,
        explanation: "La alianza busca democratizar el acceso a la IA en la educacion publica salvadorena."
      },
    ],
  },

  // Unit 2: Como funciona Grok?
  "intro-2-grok": {
    transcript: `Grok es el asistente de inteligencia artificial desarrollado por xAI, la empresa de Elon Musk.

A diferencia de otros asistentes, Grok tiene algunas caracteristicas especiales:
- Tiene acceso a informacion en tiempo real
- Puede responder preguntas con un toque de humor
- Esta disenado para ser util en contextos educativos

En El Salvador, Grok sera una herramienta clave para maestros y estudiantes. Los maestros podran usarlo para:
- Preparar planes de leccion
- Crear cuestionarios y evaluaciones
- Obtener ideas para actividades en clase

Los estudiantes podran usarlo para:
- Entender conceptos dificiles
- Practicar problemas de matematicas
- Mejorar su comprension lectora

Pero recuerda: Grok es una herramienta, no un reemplazo del aprendizaje. Tu cerebro sigue siendo lo mas importante.`,
  },

  "intro-2-modelos": {
    content: `# Modelos de Lenguaje: Como "Piensa" la IA

## Que es un Modelo de Lenguaje?

Un modelo de lenguaje es un programa de computadora que ha "leido" millones de textos y ha aprendido patrones del lenguaje. Cuando le haces una pregunta, usa esos patrones para generar una respuesta.

## Como Funciona (Version Simple)

Imagina que tienes un amigo que ha leido todos los libros del mundo. Cuando le preguntas algo, no busca la respuesta exacta en un libro, sino que usa todo lo que ha leido para formular una respuesta coherente.

Los modelos de lenguaje funcionan de manera similar:

1. **Entrenamiento**: El modelo "lee" enormes cantidades de texto
2. **Patrones**: Aprende como las palabras se relacionan entre si
3. **Generacion**: Cuando preguntas algo, predice palabra por palabra cual deberia ser la siguiente

## Limitaciones Importantes

Los modelos de lenguaje:
- **No "saben" cosas** como tu y yo. Predicen respuestas basadas en patrones.
- **Pueden cometer errores** especialmente con datos muy recientes o muy especificos.
- **No tienen memoria a largo plazo** entre conversaciones.

## Por que Esto Importa

Entender como funciona la IA te ayuda a usarla mejor. Cuando sabes que la IA predice respuestas basadas en patrones, entiendes por que:
- Es importante verificar informacion importante
- Las preguntas claras dan mejores respuestas
- A veces la IA puede estar equivocada

## Actividad de Reflexion

Piensa en esto: Si un modelo de lenguaje ha sido entrenado principalmente con textos en ingles, que crees que pasaria cuando le preguntas algo muy especifico sobre El Salvador?`,
  },

  "intro-2-buenas-preguntas": {
    transcript: `Hacer buenas preguntas a la IA es una habilidad importante. Aqui te enseno como mejorar tus "prompts" o instrucciones.

Regla 1: Se especifico
- Malo: "Cuentame sobre historia"
- Bueno: "Explicame la independencia de El Salvador en 1821 para un estudiante de 8vo grado"

Regla 2: Da contexto
- Malo: "Ayudame con matematicas"
- Bueno: "Soy estudiante de 9no grado y no entiendo como resolver ecuaciones cuadraticas. Puedes explicarme paso a paso?"

Regla 3: Pide el formato que necesitas
- "Dame la respuesta en forma de lista"
- "Explicalo como si tuviera 10 anos"
- "Usa ejemplos de la vida cotidiana en El Salvador"

Regla 4: Verifica y pregunta mas
Si la respuesta no es clara, pregunta de nuevo de otra forma. La IA no se cansa ni se molesta.

Practica estas reglas y veras como tus conversaciones con IA mejoran dramaticamente.`,
  },

  "intro-2-ejercicio": {
    practiceInstructions: `# Ejercicio: Tu Primera Conversacion con IA

En este ejercicio, practicaras hacer preguntas efectivas. Usaras las herramientas de Salvora para experimentar.

## Instrucciones

1. Ve a la seccion "Estudiante" en el menu
2. Abre el "Ayudante de Tareas"
3. Practica hacer estas preguntas (adaptalas a tus intereses):

### Pregunta 1: Pedir una explicacion
"Explicame [un tema que estes estudiando] como si fuera un estudiante de [tu grado]. Usa ejemplos de El Salvador."

### Pregunta 2: Pedir ayuda con un problema
"No entiendo como resolver [tipo de problema]. Puedes mostrarme los pasos sin darme la respuesta directa?"

### Pregunta 3: Pedir ideas
"Dame 3 ideas para un proyecto escolar sobre [tema]. El proyecto es para [materia] y tengo [tiempo disponible]."

## Reflexion

Despues de practicar, piensa:
- Que tipo de preguntas dieron mejores respuestas?
- Como podrias mejorar tus preguntas?
- En que situaciones la IA fue mas util?

## Importante
Recuerda: La IA es para APRENDER, no para copiar. Si no entiendes algo, pide que te lo explique de otra forma.`,
  },

  // ===== CURSO 2: IA PARA MAESTROS =====

  "maestros-1-plantilla": {
    transcript: `Bienvenido, maestro. En esta leccion aprenderas a usar IA para crear planes de leccion efectivos.

La IA puede ahorrarte horas de trabajo, pero tu experiencia como educador sigue siendo esencial. La IA te da un borrador; tu lo conviertes en una leccion memorable.

Para crear un buen plan con IA, necesitas proporcionar:
1. El tema especifico
2. El grado o nivel de los estudiantes
3. La duracion de la clase
4. Los objetivos de aprendizaje que quieres lograr

Veamos un ejemplo. En lugar de decir "hazme un plan sobre ciencias", di:

"Crea un plan de leccion de 45 minutos para estudiantes de 7mo grado sobre el ciclo del agua. Objetivos: que los estudiantes puedan explicar las 4 etapas del ciclo y relacionarlo con el clima de El Salvador."

Con esta informacion, la IA puede generar:
- Actividades de apertura
- Contenido principal
- Ejercicios practicos
- Formas de evaluacion

En la siguiente leccion, veremos como personalizar estos planes para tu contexto especifico.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "La IA puede generar planes de leccion en minutos, pero tu los perfeccionas",
        "Incluye tema, grado, duracion y objetivos para mejores resultados",
        "La IA da el borrador; tu experiencia lo hace memorable"
      ],
      localExample: "Un maestro de Soyapango uso IA para crear un plan sobre ecosistemas, adaptandolo con ejemplos del Parque El Imposible y la Laguna de Olomega.",
      safePrompt: "Crea un plan de leccion de 45 minutos para estudiantes de [GRADO] sobre [TEMA]. Incluye actividad de apertura, desarrollo y cierre."
    },
    localContext: {
      hook: "Maestros en Apopa ya estan usando Salvora para reducir el tiempo de planificacion. En lugar de pasar horas buscando ideas, generan borradores en minutos y dedican mas tiempo a sus estudiantes.",
      department: "Apopa"
    },
    safePrompts: [{
      template: "Crea un plan de leccion de [DURACION] para [GRADO] sobre [TEMA]. Objetivos: [OBJETIVOS]",
      goodExample: "Crea un plan de leccion de 45 minutos para 7mo grado sobre el ciclo del agua. Objetivos: que expliquen las 4 etapas y lo relacionen con el clima de El Salvador. Incluye actividad practica sin tecnologia.",
      badExample: "Hazme un plan sobre ciencias"
    }],
    enhancedPractice: [
      { id: "mp-1", question: "Que informacion es ESENCIAL incluir al pedir un plan de leccion a la IA?", options: ["Solo el tema", "Tema, grado, duracion y objetivos", "El nombre de la escuela", "El numero de estudiantes"], correctAnswer: 1, explanation: "La IA necesita contexto especifico para generar planes utiles.", feedback: "Correcto! Entre mas contexto des, mejor sera el resultado.", hints: ["Piensa en que necesita saber la IA para ayudarte", "Son 4 elementos clave"] },
      { id: "mp-2", question: "Cual es el rol del maestro cuando usa IA para planificar?", options: ["Copiar el plan sin cambios", "Revisar, adaptar y perfeccionar el plan", "Dejar que la IA ensene", "Solo imprimir el resultado"], correctAnswer: 1, explanation: "Tu conoces a tus estudiantes mejor que la IA.", feedback: "Exacto! La IA da borradores; tu los conviertes en lecciones memorables.", hints: ["Tu experiencia es insustituible", "La IA no conoce a tus estudiantes"] },
      { id: "mp-3", question: "Por que es mejor dar ejemplos locales de El Salvador en el prompt?", options: ["No es necesario", "Para que la IA aprenda geografia", "Para que el plan sea relevante para los estudiantes", "Porque la IA solo entiende espanol"], correctAnswer: 2, explanation: "Ejemplos locales conectan mejor con la realidad de los estudiantes.", feedback: "Asi es! Un plan con contexto salvadoreno es mas significativo.", hints: ["Piensa en tus estudiantes", "La relevancia mejora el aprendizaje"] }
    ],
    aiErrorTips: [
      "La IA puede sugerir recursos que no tienes (proyectores, tablets). Pide alternativas.",
      "Los tiempos sugeridos son ideales. Ajusta segun el ritmo real de tu clase.",
      "Verifica que las actividades sean apropiadas para el contexto salvadoreno."
    ],
    responsibleAIReminder: {
      student: "Los maestros usan IA para preparar mejores clases para ti.",
      teacher: "Use la IA como asistente, no como reemplazo de su juicio profesional."
    },
    whatsAppPayload: {
      summary: "Aprendi a crear planes de leccion con IA! Solo necesitas: tema, grado, duracion y objetivos.",
      prompt: "Prueba: Crea un plan de 45 min para 7mo sobre el ciclo del agua",
      practiceQuestion: "Que 4 elementos debe tener un buen prompt para crear planes de leccion?"
    },
    classroomPack: {
      objective: "Los maestros aprenderan a generar planes de leccion efectivos usando IA, proporcionando contexto especifico para obtener mejores resultados.",
      prompts: [
        "Crea un plan de leccion de [DURACION] para [GRADO] sobre [TEMA]. Incluye: actividad de apertura (5 min), desarrollo (30 min), practica (10 min) y cierre (5 min).",
        "Sugiere 3 actividades practicas sobre [TEMA] para [GRADO] que no requieran tecnologia y usen materiales disponibles en El Salvador.",
        "Genera preguntas de verificacion de comprension sobre [TEMA] para usar durante la clase con estudiantes de [GRADO]."
      ],
      quiz: [
        { id: "cp-q1", question: "Que debe incluir un prompt efectivo para crear planes?", options: ["Solo el tema", "Tema, grado, duracion y objetivos", "El nombre del maestro", "La fecha"], correctAnswer: 1, explanation: "El contexto especifico genera mejores resultados." },
        { id: "cp-q2", question: "Por que es importante personalizar los planes generados por IA?", options: ["No es importante", "Porque la IA siempre se equivoca", "Porque tu conoces a tus estudiantes", "Porque es obligatorio"], correctAnswer: 2, explanation: "La IA no conoce el contexto especifico de tu aula." },
        { id: "cp-q3", question: "Que hacer si la IA sugiere usar tecnologia que no tienes?", options: ["Ignorar el plan", "Pedir alternativas sin tecnologia", "Comprar el equipo", "No usar IA"], correctAnswer: 1, explanation: "Siempre puedes pedir adaptaciones a tus recursos." }
      ],
      answerKey: ["B) Tema, grado, duracion y objetivos", "C) Porque tu conoces a tus estudiantes", "B) Pedir alternativas sin tecnologia"],
      rubric: "Excelente (4): Incluye los 4 elementos y contexto salvadoreno | Bueno (3): Incluye los 4 elementos | En desarrollo (2): Faltan 1-2 elementos | Necesita mejora (1): Prompt vago o incompleto"
    }
  },

  "maestros-1-personalizar": {
    content: `# Personalizando Planes de Leccion para Tu Contexto

## Por que Personalizar?

Los planes generados por IA son un punto de partida, no un producto final. Tu conoces a tus estudiantes, tu escuela y tu comunidad mejor que cualquier algoritmo.

## Aspectos a Personalizar

### 1. Contexto Local
- Usa ejemplos de El Salvador
- Menciona lugares, tradiciones o situaciones familiares para tus estudiantes
- Adapta el vocabulario al nivel real de tu clase

### 2. Recursos Disponibles
La IA puede sugerir usar proyectores o tablets, pero si tu escuela no los tiene:
- Pide alternativas: "Como puedo ensenar esto solo con pizarra y marcadores?"
- Busca recursos locales: materiales reciclados, elementos naturales

### 3. Tiempo Real
Los planes de IA asumen condiciones ideales. Ajusta para:
- Interrupciones comunes (anuncios, eventos)
- El ritmo real de tu clase
- Tiempo para preguntas y dudas

### 4. Necesidades Especiales
- Estudiantes con diferentes niveles
- Estudiantes con necesidades de aprendizaje especificas
- Tamano de tu grupo

## Ejemplo Practico

**Plan original de IA:**
"Actividad: Los estudiantes usaran tablets para investigar..."

**Tu adaptacion:**
"Actividad: En grupos de 4, los estudiantes investigaran en un libro de texto compartido y presentaran sus hallazgos en un papelografo."

## Consejo Final

Guarda tus planes personalizados. Con el tiempo, tendras una biblioteca de lecciones probadas que funcionan en TU contexto.`,
  },

  "maestros-1-practica": {
    practiceInstructions: `# Practica: Crea Tu Primer Plan de Leccion con IA

## Objetivo
Usar el Planificador de Lecciones de Salvora para crear un plan real que puedas usar en tu proxima clase.

## Instrucciones

1. Ve a la seccion "Maestro" en el menu principal
2. Selecciona "Planificador de Lecciones"
3. Completa los campos:
   - **Tema**: Elige un tema que ensenaras esta semana
   - **Grado**: El nivel de tus estudiantes
   - **Duracion**: El tiempo real de tu clase
4. Genera el plan
5. Revisa y personaliza el resultado

## Lista de Verificacion

Despues de generar el plan, verifica:
- [ ] Los objetivos son claros y medibles?
- [ ] Las actividades son apropiadas para mis estudiantes?
- [ ] Tengo los materiales necesarios?
- [ ] El tiempo esta bien distribuido?
- [ ] Incluye evaluacion del aprendizaje?

## Actividad Extra

Comparte tu plan con un colega y pide retroalimentacion. Que agregarian o cambiarian?

## Reflexion
- Cuanto tiempo te tomo crear este plan vs. hacerlo desde cero?
- Que partes del plan generado fueron mas utiles?
- Que ajustes hiciste?`,
  },

  "maestros-2-quizzes": {
    transcript: `Crear evaluaciones puede tomar mucho tiempo. La IA puede ayudarte a generar cuestionarios en minutos.

El Generador de Cuestionarios de Salvora toma un texto o tema y crea preguntas automaticamente. Puedes elegir:
- Preguntas de opcion multiple
- Preguntas de verdadero/falso
- Preguntas de respuesta corta

Para mejores resultados:
1. Proporciona el texto o contenido especifico que quieres evaluar
2. Indica el numero de preguntas
3. Especifica el nivel de dificultad

Un consejo importante: siempre revisa las preguntas generadas. A veces la IA puede crear preguntas ambiguas o con respuestas incorrectas. Tu ojo experto es esencial.

Tambien puedes pedir variaciones:
- "Crea 5 preguntas faciles y 5 dificiles"
- "Genera preguntas que requieran analisis, no solo memoria"
- "Incluye preguntas sobre aplicacion practica"

En la siguiente leccion, aprenderemos a crear rubricas de evaluacion.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "La IA genera cuestionarios en minutos con el tema y numero de preguntas",
        "Siempre revisa las preguntas - la IA puede crear preguntas ambiguas",
        "Puedes pedir variaciones: diferentes niveles, tipos de preguntas, aplicacion practica"
      ],
      localExample: "Una maestra de Santa Ana genero un quiz de 10 preguntas sobre la independencia centroamericana en 2 minutos, luego ajusto 2 preguntas que estaban confusas.",
      safePrompt: "Genera 10 preguntas de opcion multiple sobre [TEMA] para [GRADO]. Incluye 5 faciles y 5 que requieran analisis."
    },
    localContext: {
      hook: "En escuelas de Chalatenango, maestros rurales usan IA para crear evaluaciones variadas sin pasar horas escribiendo. Mas tiempo para ensenyar, menos para preparar examenes.",
      department: "Chalatenango"
    },
    safePrompts: [{
      template: "Genera [NUMERO] preguntas de [TIPO] sobre [TEMA] para [GRADO]. Nivel: [DIFICULTAD]",
      goodExample: "Genera 8 preguntas de opcion multiple sobre el ciclo del agua para 6to grado. 4 preguntas de conocimiento basico y 4 de aplicacion. Incluye las respuestas correctas.",
      badExample: "Hazme un examen de ciencias"
    }],
    enhancedPractice: [
      { id: "mq-1", question: "Por que es importante revisar las preguntas generadas por IA?", options: ["No es importante", "Porque la IA puede crear preguntas ambiguas o incorrectas", "Porque la IA no sabe espanol", "Porque es obligatorio"], correctAnswer: 1, explanation: "La IA no es perfecta y puede generar preguntas confusas.", feedback: "Correcto! Tu revision experta es esencial para calidad.", hints: ["La IA puede cometer errores", "Tu conoces mejor el tema y tus estudiantes"] },
      { id: "mq-2", question: "Que informacion ayuda a la IA a generar mejores preguntas?", options: ["El nombre de la escuela", "Tema, numero de preguntas y nivel de dificultad", "La fecha del examen", "El color del formulario"], correctAnswer: 1, explanation: "El contexto especifico mejora la calidad del resultado.", feedback: "Exacto! Mas detalles = mejores preguntas.", hints: ["Piensa en que necesita la IA", "Especificidad es clave"] },
      { id: "mq-3", question: "Que tipo de preguntas son mejores para evaluar comprension profunda?", options: ["Preguntas de memoria", "Preguntas de verdadero/falso", "Preguntas de aplicacion y analisis", "Preguntas de fechas"], correctAnswer: 2, explanation: "Las preguntas de aplicacion miden comprension real.", feedback: "Asi es! Aplicacion y analisis muestran verdadero aprendizaje.", hints: ["Memoria vs comprension", "Que demuestra que realmente entendieron?"] }
    ],
    aiErrorTips: [
      "La IA puede generar respuestas incorrectas. Verifica SIEMPRE antes de usar.",
      "Las preguntas de verdadero/falso a veces son ambiguas. Revisalas con cuidado.",
      "Si el tema es muy especifico de El Salvador, la IA puede inventar datos."
    ],
    responsibleAIReminder: {
      student: "Los maestros revisan cuidadosamente cada pregunta antes de evaluarte.",
      teacher: "Nunca use preguntas generadas sin revisarlas. Su criterio profesional es la ultima palabra."
    },
    whatsAppPayload: {
      summary: "Aprendi a generar cuestionarios con IA! Minutos en vez de horas. Siempre revisar antes de usar.",
      prompt: "Prueba: Genera 5 preguntas sobre [tu tema] para [tu grado]",
      practiceQuestion: "Por que debemos revisar las preguntas que genera la IA antes de usarlas?"
    },
    classroomPack: {
      objective: "Los maestros aprenderan a generar cuestionarios efectivos con IA, incluyendo variedad de preguntas y niveles de dificultad.",
      prompts: [
        "Genera [NUMERO] preguntas de opcion multiple sobre [TEMA] para [GRADO]. Mezcla preguntas de conocimiento, comprension y aplicacion.",
        "Crea un quiz de verdadero/falso con 10 preguntas sobre [TEMA]. Incluye la justificacion de cada respuesta.",
        "Genera preguntas de respuesta corta sobre [TEMA] que requieran que los estudiantes expliquen conceptos, no solo memoricen."
      ],
      quiz: [
        { id: "cq-q1", question: "Que debe hacer SIEMPRE despues de generar preguntas con IA?", options: ["Imprimirlas inmediatamente", "Revisarlas y verificar que son correctas", "Compartirlas por WhatsApp", "Nada"], correctAnswer: 1, explanation: "La revision es obligatoria antes de usar cualquier evaluacion." },
        { id: "cq-q2", question: "Que tipo de preguntas miden mejor la comprension profunda?", options: ["Memoristicas", "De aplicacion y analisis", "De fechas", "De nombres"], correctAnswer: 1, explanation: "Aplicacion demuestra que pueden usar lo aprendido." },
        { id: "cq-q3", question: "Como pedir preguntas de diferentes niveles?", options: ["No se puede", "Especificando 'faciles y dificiles' en el prompt", "La IA decide sola", "Solo generando una a la vez"], correctAnswer: 1, explanation: "Puedes especificar niveles de dificultad en tu solicitud." }
      ],
      answerKey: ["B) Revisarlas y verificar que son correctas", "B) De aplicacion y analisis", "B) Especificando niveles en el prompt"],
      rubric: "Excelente (4): Quiz revisado con variedad de niveles y tipos | Bueno (3): Quiz revisado con un tipo de pregunta | En desarrollo (2): Quiz sin revisar | Necesita mejora (1): Quiz copiado sin verificar"
    }
  },

  "maestros-2-rubricas": {
    content: `# Crear Rubricas Efectivas con IA

## Que es una Rubrica?

Una rubrica es una guia de evaluacion que describe los criterios y niveles de desempeno esperados. Ayuda a:
- Evaluar de manera consistente
- Comunicar expectativas a los estudiantes
- Dar retroalimentacion especifica

## Elementos de una Buena Rubrica

### 1. Criterios Claros
Que aspectos vas a evaluar? Ejemplos:
- Contenido y precision
- Organizacion
- Creatividad
- Presentacion

### 2. Niveles de Desempeno
Tipicamente 3-4 niveles:
- Excelente (4 puntos)
- Bueno (3 puntos)
- En desarrollo (2 puntos)
- Necesita mejora (1 punto)

### 3. Descripciones Especificas
Cada celda debe describir claramente que se espera en ese nivel.

## Usando IA para Crear Rubricas

Prompt efectivo:
"Crea una rubrica para evaluar una presentacion oral sobre [tema] para estudiantes de [grado]. Incluye 4 criterios y 4 niveles de desempeno con descripciones especificas."

## Ejemplo de Rubrica (Resumen)

| Criterio | Excelente | Bueno | En Desarrollo | Necesita Mejora |
|----------|-----------|-------|---------------|-----------------|
| Contenido | Informacion precisa y completa | Mayormente precisa | Algunos errores | Muchos errores |
| Claridad | Muy clara y organizada | Clara | Algo confusa | Dificil de seguir |

## Consejo
Comparte la rubrica con tus estudiantes ANTES de la actividad. Asi saben exactamente que se espera de ellos.`,
  },

  "maestros-2-practica": {
    practiceInstructions: `# Practica: Genera un Cuestionario y Rubrica

## Parte 1: Generar un Cuestionario

1. Ve a "Maestro" > "Generador de Cuestionarios"
2. Elige un tema que hayas ensenado recientemente
3. Genera 10 preguntas mixtas
4. Revisa cada pregunta:
   - Es clara?
   - La respuesta correcta es realmente correcta?
   - El nivel de dificultad es apropiado?
5. Edita las preguntas que necesiten ajustes

## Parte 2: Crear una Rubrica

Usa la siguiente plantilla para crear una rubrica para un proyecto:

**Proyecto**: [Elige un proyecto que asignaras]
**Criterios a evaluar**:
1. _____________
2. _____________
3. _____________
4. _____________

Para cada criterio, describe que esperas ver en cada nivel.

## Reflexion

Responde estas preguntas:
1. Las preguntas generadas cubren los puntos mas importantes del tema?
2. La rubrica ayudara a los estudiantes a entender las expectativas?
3. Que ajustarias para tu contexto especifico?

## Siguiente Paso
Usa el cuestionario en tu proxima clase y observa los resultados. Te dio informacion util sobre el aprendizaje de tus estudiantes?`,
  },

  "maestros-3-seguridad": {
    transcript: `Como maestro, tienes la responsabilidad de usar IA de manera segura y etica. Veamos los puntos clave.

Primero, la privacidad. Nunca ingreses en herramientas de IA:
- Nombres completos de estudiantes
- Datos personales o familiares
- Informacion medica o psicologica
- Direcciones o telefonos

Si necesitas hablar de un estudiante con la IA, usa alias: "Tengo un estudiante de 8vo grado que tiene dificultades con..."

Segundo, la verificacion. La IA puede generar informacion incorrecta. Siempre:
- Verifica datos importantes
- Revisa calculos matematicos
- Confirma fechas historicas
- Chequea fuentes cuando sea necesario

Tercero, el ejemplo. Tus estudiantes te observan. Si usas IA de manera responsable, ellos aprenderan a hacer lo mismo.

Cuarto, los limites. La IA no debe reemplazar:
- Tu juicio profesional
- La relacion maestro-estudiante
- La creatividad humana
- La empatia y comprension

La IA es una herramienta poderosa. Usala con sabiduria.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "NUNCA ingreses datos personales de estudiantes en herramientas de IA",
        "Verifica siempre la informacion que genera la IA - puede equivocarse",
        "Tu ejemplo ensena a los estudiantes como usar IA responsablemente"
      ],
      localExample: "Una directora de La Union establecia que ningun maestro puede mencionar nombres de estudiantes al usar IA. Usan codigos: 'Estudiante A de 7mo' en lugar de nombres reales.",
      safePrompt: "Tengo un estudiante de [GRADO] que tiene dificultades con [TEMA]. Sin dar datos personales, que estrategias me recomiendas?"
    },
    localContext: {
      hook: "En El Salvador, la proteccion de datos de menores es una prioridad. Salvora esta diseñado para que los maestros puedan aprovechar la IA sin comprometer la privacidad de sus estudiantes.",
      department: "San Miguel"
    },
    safePrompts: [{
      template: "Tengo un estudiante de [GRADO] con [SITUACION]. Que estrategias puedo usar? (Sin mencionar nombres ni datos identificables)",
      goodExample: "Tengo un estudiante de 5to grado que tiene dificultades con comprension lectora y se distrae facilmente. Que estrategias practicas puedo usar en clase?",
      badExample: "Juan Perez de 5to B, hijo de Maria Perez de Canton El Nance, tiene problemas de conducta. Que hago?"
    }],
    enhancedPractice: [
      { id: "ms-1", question: "Que informacion NUNCA debes compartir con una IA sobre tus estudiantes?", options: ["El grado escolar", "Nombres completos y datos personales", "El tema que estudian", "La materia"], correctAnswer: 1, explanation: "Los datos personales de menores deben protegerse siempre.", feedback: "Correcto! La privacidad de tus estudiantes es sagrada.", hints: ["Piensa en datos que identifican a una persona", "Que no querrias que se publicara?"] },
      { id: "ms-2", question: "Como debes referirte a un estudiante cuando consultas con IA?", options: ["Por su nombre completo", "Por su apodo", "Con descripciones genericas: 'un estudiante de 7mo'", "Por su numero de carnet"], correctAnswer: 2, explanation: "Descripciones genericas protegen la identidad.", feedback: "Exacto! 'Un estudiante de X grado' es la forma correcta.", hints: ["Debe ser anonimo", "Nadie deberia poder identificar al estudiante"] },
      { id: "ms-3", question: "Que debes hacer con informacion importante que genera la IA?", options: ["Confiar completamente", "Verificarla antes de usarla", "Ignorarla", "Compartirla inmediatamente"], correctAnswer: 1, explanation: "La IA puede generar informacion incorrecta.", feedback: "Asi es! Siempre verifica datos importantes.", hints: ["La IA no es perfecta", "Tu criterio profesional es la ultima palabra"] }
    ],
    aiErrorTips: [
      "Si consultas sobre un estudiante y la IA pide mas detalles, NO des informacion identificable.",
      "La IA puede sugerir estrategias que no son apropiadas para tu contexto. Usa tu juicio.",
      "Datos especificos de El Salvador (leyes, instituciones) pueden no estar actualizados."
    ],
    responsibleAIReminder: {
      student: "Tu maestro protege tu informacion personal cuando usa herramientas de IA.",
      teacher: "Usted es el guardian de la privacidad de sus estudiantes. La IA es una herramienta, no un confidente."
    },
    whatsAppPayload: {
      summary: "Aprendi sobre seguridad y privacidad al usar IA como maestro. NUNCA compartir datos de estudiantes!",
      prompt: "Regla #1: Nunca nombres reales. Usa: 'un estudiante de [grado] con [situacion]'",
      practiceQuestion: "Que informacion de estudiantes NUNCA debemos compartir con herramientas de IA?"
    },
    classroomPack: {
      objective: "Los maestros comprenderan las responsabilidades eticas y de privacidad al usar IA en el contexto educativo.",
      prompts: [
        "Dame 5 estrategias para ayudar a un estudiante de [GRADO] que tiene dificultades con [TEMA]. No necesito datos personales, solo estrategias generales.",
        "Como puedo adaptar mi clase de [MATERIA] para estudiantes con diferentes niveles de aprendizaje? Dame sugerencias practicas.",
        "Que senales debo buscar para identificar si un estudiante esta teniendo dificultades emocionales que afectan su aprendizaje? (informacion general, no casos especificos)"
      ],
      quiz: [
        { id: "cs-q1", question: "Que datos de estudiantes NUNCA deben ingresarse en IA?", options: ["El grado", "Nombres, direcciones, datos familiares", "La materia", "El ano escolar"], correctAnswer: 1, explanation: "Los datos personales identificables estan prohibidos." },
        { id: "cs-q2", question: "Como referirse a un estudiante cuando se consulta con IA?", options: ["Por nombre", "Por apodo", "Con descripcion generica anonima", "Por numero de lista"], correctAnswer: 2, explanation: "Descripciones anonimas protegen la privacidad." },
        { id: "cs-q3", question: "Que hacer si la IA da un consejo que parece inapropiado?", options: ["Seguirlo igual", "Usar tu juicio profesional para decidir", "Ignorar toda la IA", "Preguntar a la IA si esta segura"], correctAnswer: 1, explanation: "Tu criterio profesional siempre es la ultima palabra." }
      ],
      answerKey: ["B) Nombres, direcciones, datos familiares", "C) Con descripcion generica anonima", "B) Usar tu juicio profesional"],
      rubric: "Excelente (4): Demuestra comprension total de privacidad y etica | Bueno (3): Comprende lo basico de privacidad | En desarrollo (2): Necesita recordatorios frecuentes | Necesita mejora (1): Comparte informacion inapropiada"
    }
  },

  "maestros-3-cheating": {
    content: `# Detectando Uso Inapropiado de IA por Estudiantes

## El Desafio

La misma tecnologia que ayuda a los estudiantes a aprender puede ser mal usada para hacer trampa. Como maestro, necesitas saber identificar cuando esto ocurre.

## Senales de Alerta

### En Trabajos Escritos
- Vocabulario inusualmente sofisticado para el nivel del estudiante
- Estilo de escritura inconsistente
- Falta de errores tipicos de la edad
- Referencias o ejemplos que el estudiante no conoceria
- Respuestas demasiado perfectas o genericas

### En el Comportamiento
- El estudiante no puede explicar su propio trabajo
- Respuestas inmediatas a preguntas complejas
- Cambio drastico en la calidad del trabajo

## Estrategias de Prevencion

### 1. Disenar Tareas Dificiles de Copiar
- Pide reflexiones personales
- Incluye contexto local especifico
- Requiere trabajo en clase supervisado
- Usa formatos no convencionales

### 2. Evaluar el Proceso, No Solo el Producto
- Pide borradores previos
- Haz preguntas de seguimiento
- Observa el trabajo en progreso

### 3. Hablar Abiertamente
- Explica por que copiar con IA es problematico
- Discute las consecuencias para su aprendizaje
- Ensenales a usar IA de manera legitima

## El Modo Salon de Salvora

Salvora incluye un "Modo Salon" que:
- Detecta solicitudes de hacer tareas completas
- Redirige a los estudiantes hacia el aprendizaje
- Proporciona explicaciones en lugar de respuestas directas

## Reflexion Final

El objetivo no es atrapar a los estudiantes, sino guiarlos hacia el uso etico de la tecnologia. La IA estara presente en sus vidas profesionales; ensenales a usarla bien ahora.`,
  },

  "maestros-3-privacidad": {
    transcript: `La privacidad de tus estudiantes es sagrada. En esta leccion, aprenderemos como protegerla al usar herramientas de IA.

Regla numero uno: Nunca compartas datos personales de estudiantes con sistemas de IA. Esto incluye nombres, direcciones, situaciones familiares, condiciones medicas, o cualquier informacion que pueda identificar a un estudiante.

Si necesitas consultar sobre un caso especifico, usa descripciones genericas:
- En lugar de "Juan Perez tiene problemas de conducta", di "Un estudiante de mi clase muestra comportamientos disruptivos"
- En lugar de "La mama de Maria esta enferma", di "Un estudiante enfrenta una situacion familiar dificil"

Regla numero dos: Ten cuidado con los trabajos de estudiantes. Si quieres que la IA te ayude a dar retroalimentacion, elimina primero cualquier informacion identificable.

Regla numero tres: Informa a padres y directores. Es buena practica comunicar como usas la IA en tu labor docente. La transparencia genera confianza.

Regla numero cuatro: Conoce las politicas de tu institucion. Algunas escuelas tienen reglas especificas sobre el uso de IA. Asegurate de conocerlas y respetarlas.

Proteger la privacidad no es opcional. Es nuestra responsabilidad como educadores.`,
  },

  // ===== CURSO 3: IA PARA ESTUDIANTES =====

  "estudiantes-1-pedir-ayuda": {
    transcript: `Hola! En esta leccion aprenderas a pedir ayuda a la IA de manera efectiva.

La IA puede ser como un tutor personal que esta disponible 24/7. Pero para aprovecharla bien, necesitas saber como preguntar.

Tip 1: Se especifico sobre lo que no entiendes.
- Malo: "No entiendo matematicas"
- Bueno: "No entiendo como multiplicar fracciones. Puedes explicarme con un ejemplo simple?"

Tip 2: Pide explicaciones, no respuestas.
- Malo: "Cual es la respuesta a 2x + 5 = 15?"
- Bueno: "Puedes explicarme los pasos para resolver 2x + 5 = 15 sin decirme la respuesta final?"

Tip 3: Si no entiendes, pregunta de otra forma.
- "Puedes explicarlo de manera mas simple?"
- "Dame un ejemplo de la vida real"
- "Explicalo como si tuviera 10 anos"

Tip 4: Usa la IA para verificar tu entendimiento.
- "Entendi que [tu explicacion]. Es correcto?"
- "Puedo resumirlo asi: [tu resumen]. Estoy bien?"

Recuerda: La IA es para ayudarte a APRENDER. Si solo copias respuestas, te estas enganando a ti mismo.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "Se especifico: di exactamente que no entiendes",
        "Pide explicaciones y pasos, no solo respuestas",
        "Si no entiendes, pide que lo explique de otra forma"
      ],
      localExample: "Un estudiante de Usulutan pregunto: 'Explicame las fracciones usando pupusas. Si tengo 8 pupusas y doy 2, que fraccion di?' La IA entendio perfectamente el contexto salvadoreno.",
      safePrompt: "No entiendo [TEMA]. Puedes explicarmelo paso a paso con ejemplos simples de la vida diaria?"
    },
    localContext: {
      hook: "Los estudiantes salvadorenos estan aprendiendo a usar IA como un tutor personal. Disponible cuando lo necesites, paciente para explicar mil veces, y sin juzgarte por no entender algo.",
      department: "Usulutan"
    },
    safePrompts: [{
      template: "No entiendo [TEMA]. Explicame paso a paso como si fuera estudiante de [GRADO]",
      goodExample: "No entiendo como multiplicar fracciones. Soy de 6to grado. Puedes explicarme con un ejemplo usando comida, como pupusas o pan?",
      badExample: "Cual es 3/4 x 2/5?"
    }],
    enhancedPractice: [
      { id: "ea-1", question: "Cual es una MEJOR forma de pedir ayuda a la IA?", options: ["No entiendo matematicas", "No entiendo como multiplicar fracciones. Explicame con un ejemplo simple", "Resuelve este problema por mi", "Matematicas es dificil"], correctAnswer: 1, explanation: "Entre mas especifico seas, mejor te puede ayudar la IA.", feedback: "Excelente! La especificidad es clave para buenas respuestas.", hints: ["Piensa en que necesita saber la IA para ayudarte", "Vago vs especifico"] },
      { id: "ea-2", question: "Si la IA te explica algo y no entiendes, que debes hacer?", options: ["Rendirte", "Copiar la respuesta aunque no entiendas", "Pedir que lo explique de otra forma o mas simple", "Buscar en otro lugar"], correctAnswer: 2, explanation: "La IA puede explicar de muchas formas diferentes.", feedback: "Correcto! Siempre puedes pedir otra explicacion.", hints: ["La IA no se cansa de explicar", "Puedes pedir ejemplos diferentes"] },
      { id: "ea-3", question: "Por que es mejor pedir 'explicame los pasos' en lugar de 'dame la respuesta'?", options: ["No hay diferencia", "Porque asi APRENDES y puedes resolver problemas similares", "Porque la IA no sabe las respuestas", "Porque toma mas tiempo"], correctAnswer: 1, explanation: "Aprender el proceso te prepara para resolver mas problemas.", feedback: "Asi es! Entender > memorizar respuestas.", hints: ["Piensa en el proximo examen", "Que te ayuda mas a largo plazo?"] }
    ],
    aiErrorTips: [
      "Si la IA da una explicacion muy complicada, pide que la simplifique.",
      "A veces la IA puede equivocarse en calculos. Verifica los pasos tu mismo.",
      "Si el ejemplo no tiene sentido para ti, pide uno diferente con contexto salvadoreno."
    ],
    responsibleAIReminder: {
      student: "Pedir ayuda es inteligente. Copiar sin entender es enganarte a ti mismo.",
      teacher: "Anime a sus estudiantes a preguntar 'por que' y 'como', no solo 'cual es la respuesta'."
    },
    whatsAppPayload: {
      summary: "Aprendi a pedir ayuda a la IA de manera efectiva! El secreto: ser especifico y pedir explicaciones, no respuestas.",
      prompt: "Prueba: 'Explicame [tu tema dificil] paso a paso como si tuviera 12 anos'",
      practiceQuestion: "Cual es la diferencia entre pedir 'la respuesta' y pedir 'los pasos para resolver'?"
    }
  },

  "estudiantes-1-aprender": {
    transcript: `Esta es una de las lecciones mas importantes: La diferencia entre APRENDER con IA y COPIAR de IA.

Copiar es cuando:
- Le pides a la IA que haga tu tarea
- Copias la respuesta sin entenderla
- No puedes explicar lo que entregaste
- Usas IA en examenes sin permiso

Aprender es cuando:
- Pides explicaciones de conceptos dificiles
- Practicas problemas con guia de la IA
- Verificas tu trabajo despues de hacerlo tu
- Usas IA para prepararte para examenes

Por que importa?
Imagina que tienes un examen importante. Si solo copiaste con IA, no sabras nada. Si aprendiste con IA, estaras preparado.

Piensa en la IA como un gimnasio para tu cerebro. Ir al gimnasio no te hace fuerte si alguien mas levanta las pesas por ti. Tienes que hacer el esfuerzo tu mismo.

Tu cerebro necesita trabajar para aprender. La IA puede hacerlo mas facil, pero no puede aprender por ti.

Usa la IA para:
- Entender mejor
- Practicar mas
- Resolver dudas
- Explorar temas que te interesan

No la uses para:
- Hacer trampa
- Evitar el esfuerzo
- Entregar trabajo que no es tuyo`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "APRENDER con IA: pedir explicaciones, practicar, verificar tu trabajo",
        "COPIAR de IA: entregar respuestas sin entender = enganarte a ti mismo",
        "La IA es como un gimnasio: tu tienes que hacer el esfuerzo para fortalecerte"
      ],
      localExample: "En un colegio de Sonsonate, dos estudiantes usaron IA. Uno copio las respuestas, otro pidio explicaciones. En el examen, solo el segundo aprobo. El primero no sabia nada porque nunca aprendio.",
      safePrompt: "Explicame [TEMA] paso a paso. Despues quiero intentar un problema similar yo solo para practicar."
    },
    localContext: {
      hook: "En El Salvador, los estudiantes que aprenden a usar IA responsablemente tendran ventaja en el futuro. Los que solo copian se quedaran atras cuando no tengan IA disponible.",
      department: "Sonsonate"
    },
    safePrompts: [{
      template: "Explicame [TEMA]. Despues dame un problema para que yo lo resuelva y tu verificas",
      goodExample: "Explicame como resolver ecuaciones de primer grado. Dame los pasos claros. Despues dame un ejercicio para que yo lo intente, y luego verificas si lo hice bien.",
      badExample: "Resuelve mi tarea de matematicas: 3x + 5 = 20, 2x - 7 = 9, 4x + 2 = 18"
    }],
    enhancedPractice: [
      { id: "eap-1", question: "Un estudiante le pide a la IA 'Hazme el ensayo sobre la independencia'. Esto es:", options: ["Aprender con IA", "Copiar de IA", "Uso responsable", "Lo correcto"], correctAnswer: 1, explanation: "Pedir que hagan tu trabajo por ti es copiar, no aprender.", feedback: "Correcto! Si no escribes tu, no aprendes.", hints: ["Quien esta haciendo el trabajo?", "El estudiante aprendio algo?"] },
      { id: "eap-2", question: "Un estudiante pide 'Explicame las causas de la independencia para que yo escriba mi ensayo'. Esto es:", options: ["Copiar", "Hacer trampa", "Aprender con IA", "Perder tiempo"], correctAnswer: 2, explanation: "Pedir explicaciones para luego hacer TU trabajo es aprender.", feedback: "Exacto! Entender primero, escribir despues = aprendizaje real.", hints: ["Quien escribira el ensayo?", "El estudiante entendera el tema?"] },
      { id: "eap-3", question: "Por que copiar con IA es enganarte a TI mismo?", options: ["Porque el maestro se molesta", "Porque en el examen no tendras IA y no sabras nada", "Porque la IA se enoja", "No es enganarte"], correctAnswer: 1, explanation: "El examen evalua TU conocimiento, no el de la IA.", feedback: "Asi es! El dia del examen, solo estaran tu y tu cerebro.", hints: ["Piensa en el examen", "Quien respondera ese dia?"] }
    ],
    aiErrorTips: [
      "Si sientes tentacion de copiar, recuerda: el examen lo haces TU solo.",
      "La IA puede darte respuestas perfectas, pero eso no te hace mas inteligente a ti.",
      "Si no puedes explicar lo que entregaste, probablemente no lo entendiste."
    ],
    responsibleAIReminder: {
      student: "Tu cerebro es un musculo. Si la IA hace todo el trabajo, tu cerebro no se fortalece.",
      teacher: "Ensene a sus estudiantes que el verdadero exito es poder hacer las cosas por si mismos."
    },
    whatsAppPayload: {
      summary: "Aprendi la diferencia entre APRENDER y COPIAR con IA. Aprender = pedir explicaciones. Copiar = entregar sin entender.",
      prompt: "Regla de oro: Pide explicaciones, no respuestas. Luego intenta tu solo.",
      practiceQuestion: "Cual es la diferencia entre aprender con IA y copiar de IA?"
    }
  },

  "estudiantes-1-practica": {
    practiceInstructions: `# Practica: Escribe un Resumen Corto

## El Ejercicio

Vamos a practicar usar IA para APRENDER, no para copiar.

### Paso 1: Elige un tema
Piensa en algo que estes estudiando en la escuela esta semana.

### Paso 2: Aprende con IA
Ve al Ayudante de Tareas y pregunta:
"Explicame [tu tema] de manera simple. Dame 3 puntos importantes que debo recordar."

### Paso 3: Escribe TU resumen
Sin ver la respuesta de la IA, escribe un resumen con tus propias palabras. Debe incluir:
- Que es el tema
- Por que es importante
- Un ejemplo

### Paso 4: Compara y mejora
Ahora compara tu resumen con la explicacion de la IA:
- Que puntos importantes te faltaron?
- Hay algo que explicaste mejor tu?
- Como puedes mejorar tu resumen?

### Paso 5: Version final
Escribe una version mejorada de tu resumen, combinando lo que sabias con lo que aprendiste.

## Reflexion

Responde honestamente:
- Entendiste mejor el tema despues de este ejercicio?
- Habria sido diferente si solo hubieras copiado la respuesta de la IA?
- Que aprendiste sobre tu forma de estudiar?

## Importante
Este ejercicio solo funciona si eres honesto contigo mismo. La IA no puede ver si copiaste o aprendiste. Pero tu si sabes.`,
  },

  "estudiantes-2-explicaciones": {
    transcript: `Las matematicas pueden ser dificiles, pero la IA puede ayudarte a entenderlas paso a paso.

La clave es pedir EXPLICACIONES, no solo respuestas. Veamos como:

Ejemplo 1: Problemas de algebra
En lugar de preguntar "Resuelve 3x + 7 = 22", pregunta:
"Explicame como resolver 3x + 7 = 22 paso a paso. En cada paso, dime que regla estoy usando y por que."

Ejemplo 2: Geometria
En lugar de "Cual es el area de un triangulo con base 6 y altura 4?", pregunta:
"Explicame la formula del area del triangulo. Por que se divide entre 2? Luego ayudame a aplicarla con base 6 y altura 4."

Ejemplo 3: Problemas de palabras
"Tengo este problema: [copia el problema]. No se como empezar. Puedes darme pistas sin decirme la respuesta?"

Tecnicas utiles:
1. "Muestrame un problema similar resuelto, luego dejame intentar el mio"
2. "Revisa mi trabajo y dime donde me equivoque, pero no me des la respuesta correcta"
3. "Explicame este concepto con objetos de la vida real"

Recuerda: El objetivo es que TU aprendas a resolver problemas. Si la IA resuelve todo por ti, en el examen estaras perdido.

En la siguiente leccion, practicaras con el Ayudante de Matematicas de Salvora.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "Pide explicaciones paso a paso, no solo respuestas",
        "Pregunta 'por que' funciona cada paso, no solo 'como'",
        "Usa la IA para verificar TU trabajo, no para que haga el trabajo por ti"
      ],
      localExample: "Un estudiante de Ahuachapan tenia problemas con fracciones. En lugar de pedir respuestas, pregunto: 'Explicame fracciones usando un ejemplo con dinero salvadoreno. Si tengo $10 y gasto 2/5, cuanto me queda y por que?'",
      safePrompt: "Explicame como resolver [TIPO DE PROBLEMA] paso a paso. Dime que regla uso en cada paso y por que funciona."
    },
    localContext: {
      hook: "Las matematicas son iguales en todo el mundo, pero los ejemplos pueden ser diferentes. La IA puede explicarte con ejemplos de El Salvador: colones, pupusas, distancias entre ciudades salvadorenas.",
      department: "Ahuachapan"
    },
    safePrompts: [{
      template: "Explicame como resolver [PROBLEMA] paso a paso. En cada paso dime que regla uso y por que",
      goodExample: "Explicame como resolver 3x + 7 = 22 paso a paso. En cada paso, dime que regla matematica estoy usando y por que funciona. Usa un ejemplo con dinero para que entienda mejor.",
      badExample: "Resuelve 3x + 7 = 22"
    }],
    enhancedPractice: [
      { id: "em-1", question: "Cual es la MEJOR forma de pedir ayuda con matematicas a la IA?", options: ["Resuelve este problema", "Explicame paso a paso como resolverlo y por que funciona cada paso", "Dame la respuesta rapido", "No sirve para matematicas"], correctAnswer: 1, explanation: "Entender el proceso te prepara para resolver cualquier problema similar.", feedback: "Excelente! Entender el 'por que' es mas importante que memorizar respuestas.", hints: ["Piensa en el examen", "Que te ayuda a resolver MAS problemas?"] },
      { id: "em-2", question: "Terminaste un problema de matematicas. Como deberias usar la IA?", options: ["Pedirle que lo resuelva por mi", "Pedirle que revise mi trabajo y me diga donde me equivoque SIN darme la respuesta", "No usarla", "Copiar su respuesta"], correctAnswer: 1, explanation: "Verificar tu trabajo te ayuda a encontrar y corregir errores.", feedback: "Correcto! La IA es mejor verificador que hacedor de tareas.", hints: ["Ya hiciste el trabajo tu", "Quieres saber si esta bien"] },
      { id: "em-3", question: "No entiendes un concepto matematico. Que le pides a la IA?", options: ["La respuesta de la tarea", "Que me lo explique con ejemplos de la vida real", "Que haga la tarea por mi", "Nada, las mates son imposibles"], correctAnswer: 1, explanation: "Ejemplos de la vida real hacen los conceptos mas concretos.", feedback: "Asi es! Pupusas, dinero, distancias - todo sirve para entender matematicas.", hints: ["Ejemplos que conoces bien", "Conectar lo abstracto con lo real"] }
    ],
    aiErrorTips: [
      "La IA puede equivocarse en calculos. Siempre verifica los numeros tu mismo.",
      "Si un paso no tiene sentido, pregunta 'por que funciona esto?' antes de seguir.",
      "A veces la IA salta pasos. Pide que explique cada paso por separado."
    ],
    responsibleAIReminder: {
      student: "El objetivo es que TU aprendas a resolver problemas. La IA es tu tutor, no tu calculadora.",
      teacher: "Anime a los estudiantes a verificar cada paso matematico y a preguntar 'por que'."
    },
    whatsAppPayload: {
      summary: "Aprendi a usar IA para matematicas! El secreto: pedir explicaciones paso a paso, no solo respuestas.",
      prompt: "Prueba: 'Explicame como resolver [tu problema] paso a paso. Dime que regla uso en cada paso.'",
      practiceQuestion: "Por que es mejor pedir explicaciones paso a paso que solo la respuesta?"
    }
  },

  "estudiantes-2-ejercicios": {
    practiceInstructions: `# Practica: Matematicas Paso a Paso

## Instrucciones

1. Ve a la seccion "Estudiante" > "Ayudante de Matematicas"
2. Completa los siguientes ejercicios

### Ejercicio 1: Ecuacion Basica
Resuelve: 5x - 3 = 17

**Tu proceso:**
- Intenta resolverlo tu primero
- Escribe cada paso
- Luego usa el Ayudante para verificar

**Preguntas:**
- Que obtuviste como respuesta?
- Coincidio con la explicacion del Ayudante?
- Si te equivocaste, en que paso fue?

### Ejercicio 2: Problema de Palabras
"Maria tiene el doble de dinero que Pedro. Juntos tienen $45. Cuanto tiene cada uno?"

**Antes de usar IA:**
- Identifica que informacion tienes
- Que te piden encontrar?
- Intenta plantearlo como ecuacion

**Con el Ayudante:**
- Pide pistas, no la respuesta
- Verifica tu planteamiento

### Ejercicio 3: Tu Propia Tarea
Elige un problema de tu tarea actual de matematicas.
- Intentalo primero
- Usa el Ayudante para verificar o pedir ayuda
- Escribe lo que aprendiste

## Reflexion
- El Ayudante de Matematicas te ayudo a entender o solo te dio respuestas?
- Que harias diferente la proxima vez?
- Te sientes mas preparado para tu proxima clase de matematicas?`,
  },

  "estudiantes-3-simplificar": {
    transcript: `A veces los textos escolares son dificiles de entender. La IA puede ayudarte a simplificarlos sin perder la informacion importante.

El Simplificador de Textos de Salvora toma un parrafo complicado y te lo explica de manera mas sencilla.

Como usarlo:
1. Copia el texto que no entiendes
2. Pegalo en el simplificador
3. Elige el nivel de dificultad que necesitas
4. Lee la version simplificada
5. Vuelve a leer el original - ahora deberia tener mas sentido

Por ejemplo, si tu libro de ciencias dice:
"La fotosintesis es el proceso metabolico mediante el cual los organismos autotrofos convierten la energia luminosa en energia quimica."

El simplificador podria decir:
"La fotosintesis es como las plantas hacen su comida usando luz del sol."

Importante: El simplificador es para ENTENDER, no para reemplazar el texto original. Tu maestro espera que aprendas el vocabulario academico. Usa el simplificador como puente hacia el conocimiento completo.

Tambien puedes usar el simplificador para:
- Textos en espanol antiguo o formal
- Articulos cientificos
- Documentos legales o oficiales
- Cualquier texto que te cueste trabajo

En la siguiente leccion, leeremos algunas historias de El Salvador y practicaremos la comprension lectora.`,
  },

  "estudiantes-3-historias": {
    content: `# Historias de El Salvador

## El Lago de Coatepeque

El Lago de Coatepeque es una de las joyas naturales de El Salvador. Ubicado en el departamento de Santa Ana, este lago de origen volcanico tiene mas de 25,000 anos de antiguedad.

Lo que hace especial a Coatepeque no es solo su belleza. Cada ciertos anos, el lago cambia de color, pasando de azul a un verde turquesa brillante. Este fenomeno, llamado "florecimiento de algas", ocurre naturalmente y atrae a cientificos de todo el mundo.

### Datos Interesantes
- Profundidad maxima: 115 metros
- Diametro: aproximadamente 6 kilometros
- Temperatura del agua: entre 24°C y 28°C todo el ano

### Reflexion
El Lago de Coatepeque nos recuerda que El Salvador tiene maravillas naturales que merecen ser conocidas y protegidas.

---

## El Arbol de la Ceiba

En muchas comunidades de El Salvador, encontraras una ceiba en el centro del pueblo. Este arbol, que puede vivir cientos de anos, tiene un significado especial para nuestra cultura.

Los pueblos indigenas consideraban la ceiba un arbol sagrado. Creian que sus raices llegaban al inframundo, su tronco representaba el mundo terrenal, y sus ramas tocaban el cielo.

Hoy, las ceibas siguen siendo simbolo de comunidad. Bajo su sombra se reunen los vecinos, se hacen mercados, y los ninos juegan.

### Pregunta para Reflexionar
Hay una ceiba o arbol importante en tu comunidad? Que historias conoces sobre el?

---

## Actividad de Comprension

Despues de leer estas historias:

1. **Resume** cada historia en UNA oracion
2. **Identifica** una palabra nueva que aprendiste
3. **Conecta** una de las historias con algo de tu vida o comunidad
4. **Pregunta** algo que te gustaria saber mas sobre estos temas

Puedes usar el Simplificador si alguna parte fue dificil de entender.`,
  },

  // ===== CURSO 4: IA EN LA VIDA REAL =====

  "vida-1-cultivos": {
    transcript: `La inteligencia artificial esta transformando la agricultura, y El Salvador no es la excepcion.

Los agricultores salvadorenos enfrentan muchos desafios: el cambio climatico, plagas, y la necesidad de producir mas con menos recursos. La IA puede ayudar con todos estos problemas.

Como funciona la IA en agricultura?

Primero, sensores en el campo recolectan datos sobre:
- Humedad del suelo
- Temperatura
- Salud de las plantas
- Niveles de nutrientes

Luego, sistemas de IA analizan estos datos y dan recomendaciones:
- Cuando y cuanto regar
- Que fertilizantes usar
- Cuando es el mejor momento para cosechar
- Donde hay riesgo de plagas

Esto se llama "agricultura de precision". En lugar de tratar todo el campo igual, los agricultores pueden dar a cada planta exactamente lo que necesita.

En El Salvador, ya hay proyectos piloto usando esta tecnologia con cultivos de cafe, cana de azucar y granos basicos.

El resultado? Mejores cosechas, menos desperdicio de agua, y mas ingresos para los agricultores.

La proxima vez que tomes una taza de cafe salvadoreno, piensa que quiza la IA ayudo a producirlo.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "La IA ayuda a los agricultores a saber cuando regar, fertilizar y cosechar",
        "Sensores recolectan datos del campo; la IA los analiza y da recomendaciones",
        "Agricultura de precision = cada planta recibe exactamente lo que necesita"
      ],
      localExample: "En Apaneca, caficultores usan IA para detectar la roya del cafe antes de que se propague. Las camaras analizan las hojas y alertan al agricultor por mensaje de texto.",
      safePrompt: "Explicame como la inteligencia artificial puede ayudar a los agricultores de [CULTIVO] en El Salvador."
    },
    localContext: {
      hook: "El cafe salvadoreno es famoso mundialmente. Ahora, con IA, los caficultores de Apaneca y Santa Ana pueden proteger mejor sus cultivos y producir cafe de mejor calidad, compitiendo con los mejores del mundo.",
      department: "Santa Ana"
    },
    safePrompts: [{
      template: "Como puede la IA ayudar a los agricultores de [CULTIVO] a [OBJETIVO]?",
      goodExample: "Como puede la inteligencia artificial ayudar a los caficultores salvadorenos a detectar enfermedades de las plantas antes de que se propaguen? Dame ejemplos practicos.",
      badExample: "Que es la agricultura?"
    }],
    enhancedPractice: [
      { id: "vc-1", question: "Que datos recolectan los sensores de agricultura inteligente?", options: ["Solo el precio del mercado", "Humedad, temperatura, salud de plantas, nutrientes", "Nombres de los agricultores", "Solo la cantidad de lluvia"], correctAnswer: 1, explanation: "Estos datos ayudan a la IA a dar recomendaciones precisas.", feedback: "Correcto! Entre mas datos, mejores recomendaciones.", hints: ["Piensa en que necesita una planta para crecer", "Datos del suelo y ambiente"] },
      { id: "vc-2", question: "Que es la agricultura de precision?", options: ["Usar herramientas exactas", "Dar a cada planta exactamente lo que necesita basado en datos", "Medir los campos con precision", "Solo cultivar cultivos perfectos"], correctAnswer: 1, explanation: "La precision viene de personalizar el cuidado segun datos.", feedback: "Exacto! No todo el campo es igual, cada parte puede tener necesidades diferentes.", hints: ["No es solo medir", "Es usar datos para decisiones especificas"] },
      { id: "vc-3", question: "Como beneficia la IA a los agricultores salvadorenos?", options: ["Les quita el trabajo", "Mejores cosechas, menos desperdicio, mas ingresos", "Solo ayuda a agricultores ricos", "No tiene beneficios"], correctAnswer: 1, explanation: "La IA optimiza recursos y mejora resultados.", feedback: "Asi es! La tecnologia puede ayudar a todos los agricultores.", hints: ["Piensa en los resultados", "Agua, cosechas, dinero"] }
    ],
    aiErrorTips: [
      "La IA puede no conocer condiciones especificas de microclimas salvadorenos.",
      "Las recomendaciones de riego deben verificarse con la realidad del terreno.",
      "Datos sobre precios de mercados locales pueden no estar actualizados."
    ],
    responsibleAIReminder: {
      student: "La tecnologia puede ayudar a nuestros agricultores a competir globalmente mientras cuidan el medio ambiente.",
      teacher: "Conecte este tema con la importancia de la agricultura en la economia salvadorena."
    },
    whatsAppPayload: {
      summary: "Aprendi como la IA ayuda a la agricultura! Sensores + IA = mejores cosechas y menos desperdicio.",
      prompt: "Pregunta: Como puede la IA ayudar a los caficultores de El Salvador?",
      practiceQuestion: "Que es la agricultura de precision y como beneficia a los agricultores?"
    }
  },

  "vida-1-casos": {
    content: `# Casos de Exito: IA en la Agricultura Salvadorena

## Cafe Inteligente en Apaneca

En la zona cafetalera de Apaneca, un grupo de productores implemento un sistema de monitoreo basado en IA para sus fincas.

### El Desafio
La roya del cafe, una enfermedad causada por un hongo, habia devastado cultivos en anos anteriores. Los productores necesitaban detectar la enfermedad antes de que se propagara.

### La Solucion
Instalaron camaras y sensores conectados a un sistema de IA que:
- Analiza imagenes de las hojas de cafe
- Detecta signos tempranos de enfermedad
- Alerta a los productores via mensaje de texto

### Resultados
- 40% de reduccion en perdidas por enfermedades
- Uso mas eficiente de fungicidas
- Mejor calidad del cafe producido

---

## Riego Inteligente en el Bajo Lempa

Agricultores de granos basicos en el Bajo Lempa enfrentaban el problema de riego excesivo o insuficiente.

### La Tecnologia
Un sistema de IA conectado a sensores de humedad que:
- Mide la humedad del suelo en tiempo real
- Predice las necesidades de agua basandose en el clima
- Activa automaticamente el sistema de riego

### Impacto
- 30% de ahorro en consumo de agua
- Mejora en el rendimiento de los cultivos
- Reduccion en costos de produccion

---

## El Futuro

Estos son solo los primeros pasos. Con la alianza xAI-El Salvador, se espera que mas agricultores tengan acceso a estas tecnologias.

### Reflexion
- Como podria la IA ayudar a los agricultores de tu comunidad?
- Que cultivos de El Salvador crees que podrian beneficiarse mas de la agricultura inteligente?`,
  },

  "vida-2-finanzas": {
    transcript: `El Salvador hizo historia al ser el primer pais en adoptar Bitcoin como moneda de curso legal. Pero, que tiene que ver la IA con las finanzas?

La inteligencia artificial se usa en el mundo financiero de muchas formas:

1. Deteccion de fraude
Los bancos usan IA para identificar transacciones sospechosas. Si alguien intenta usar tu tarjeta de manera inusual, la IA puede detectarlo y bloquear la transaccion.

2. Analisis de mercados
Los sistemas de IA pueden analizar millones de datos para predecir tendencias en mercados financieros. Esto incluye el mercado de criptomonedas como Bitcoin.

3. Asistentes financieros
Aplicaciones con IA pueden ayudarte a manejar tu dinero, sugerir como ahorrar, o alertarte cuando gastas demasiado.

4. Prestamos inteligentes
La IA puede evaluar si alguien es confiable para recibir un prestamo, analizando muchos factores mas alla del historial crediticio tradicional.

En El Salvador, la combinacion de Bitcoin, Chivo Wallet, y ahora la alianza con xAI, posiciona al pais como laboratorio de innovacion financiera.

Esto crea oportunidades, pero tambien responsabilidades. Es importante que todos entendamos como funcionan estas tecnologias para tomar decisiones informadas.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "La IA detecta fraudes bancarios y transacciones sospechosas en tiempo real",
        "Asistentes de IA ayudan a manejar dinero, ahorrar y controlar gastos",
        "El Salvador combina Bitcoin, Chivo Wallet e IA para innovacion financiera"
      ],
      localExample: "Si alguien roba tu tarjeta de debito y trata de comprar algo en otro pais, la IA del banco detecta que es inusual porque tu nunca has viajado ahi, y bloquea la transaccion para protegerte.",
      safePrompt: "Explicame como funciona la deteccion de fraudes con inteligencia artificial en los bancos."
    },
    localContext: {
      hook: "El Salvador es pionero mundial en criptomonedas y tecnologia financiera. Entender como la IA trabaja con el dinero te prepara para un futuro donde estas tecnologias seran normales.",
      department: "San Salvador"
    },
    safePrompts: [{
      template: "Explicame como [APLICACION DE IA] funciona en el sistema financiero",
      goodExample: "Explicame como los bancos usan inteligencia artificial para detectar cuando alguien esta usando mi tarjeta de credito de forma fraudulenta. Como funciona paso a paso?",
      badExample: "Como hago dinero con IA?"
    }],
    enhancedPractice: [
      { id: "vf-1", question: "Como usa la IA un banco para proteger tu dinero?", options: ["Guardando monedas en una caja fuerte", "Detectando transacciones sospechosas que no parecen tuyas", "Imprimiendo mas dinero", "Llamandote todos los dias"], correctAnswer: 1, explanation: "La IA analiza patrones para detectar fraude.", feedback: "Correcto! La IA conoce tus habitos y detecta cuando algo es diferente.", hints: ["Piensa en como compras normalmente", "Que seria 'sospechoso'?"] },
      { id: "vf-2", question: "Por que El Salvador es importante en innovacion financiera?", options: ["Por ser el pais mas grande", "Fue el primero en adoptar Bitcoin como moneda legal", "Por tener los bancos mas antiguos", "No es importante"], correctAnswer: 1, explanation: "El Salvador es pionero mundial en criptomonedas.", feedback: "Exacto! Somos un laboratorio de innovacion financiera.", hints: ["Bitcoin + El Salvador", "Algo que ningun otro pais habia hecho"] },
      { id: "vf-3", question: "Que puede hacer un asistente financiero con IA?", options: ["Darte dinero gratis", "Ayudarte a manejar dinero, ahorrar y controlar gastos", "Hackear bancos", "Solo sirve para los ricos"], correctAnswer: 1, explanation: "Los asistentes de IA ayudan con finanzas personales.", feedback: "Asi es! La IA puede ser tu consejero financiero personal.", hints: ["Es un asistente, no magia", "Ayuda con decisiones de dinero"] }
    ],
    aiErrorTips: [
      "La IA no puede predecir el futuro de Bitcoin o cualquier inversion con certeza.",
      "Consejos financieros de IA son generales; consulta un profesional para decisiones importantes.",
      "Ten cuidado con estafas que prometen 'IA para hacerte rico' - la mayoria son fraudes."
    ],
    responsibleAIReminder: {
      student: "Entender finanzas y tecnologia te da poder sobre tu futuro economico.",
      teacher: "Conecte este tema con educacion financiera basica y pensamiento critico sobre promesas de dinero facil."
    },
    whatsAppPayload: {
      summary: "Aprendi como la IA se usa en finanzas! Detecta fraudes, ayuda a ahorrar, y El Salvador es pionero en esto.",
      prompt: "Pregunta: Como detectan los bancos el fraude usando inteligencia artificial?",
      practiceQuestion: "Por que El Salvador es importante en innovacion financiera mundial?"
    }
  },

  "vida-2-innovacion": {
    content: `# El Salvador: Laboratorio de Innovacion Tecnologica

## Un Pais que Toma Riesgos

El Salvador se ha distinguido por tomar decisiones audaces en tecnologia. Mientras otros paises debaten, El Salvador actua.

### Bitcoin (2021)
- Primer pais en adoptar Bitcoin como moneda legal
- Lanzamiento de Chivo Wallet
- Inversion en infraestructura de criptomonedas

### Alianza con xAI (2024)
- Acceso a Grok y otras herramientas de IA
- Enfoque en educacion y sector publico
- Salvora como plataforma de capacitacion

## Por que El Salvador?

Varias razones hacen de El Salvador un lugar ideal para la innovacion:

1. **Tamano**: Un pais pequeno puede implementar cambios mas rapidamente
2. **Juventud**: Poblacion joven y dispuesta a adoptar nuevas tecnologias
3. **Liderazgo**: Gobierno con vision tecnologica
4. **Necesidad**: Busqueda de nuevas formas de desarrollo economico

## Desafios

La innovacion tambien trae desafios:
- Brecha digital entre zonas urbanas y rurales
- Necesidad de educacion tecnologica
- Infraestructura de conectividad
- Seguridad cibernetica

## Tu Rol

Como joven salvadoreno, tienes la oportunidad de ser parte de esta transformacion. Aprender sobre IA no es solo para conseguir empleo; es para participar activamente en el futuro de tu pais.

### Pregunta para Reflexionar
Si pudieras usar IA para resolver un problema de tu comunidad, cual seria? Como lo harias?`,
  },

  "vida-3-turistas": {
    transcript: `El turismo es vital para la economia salvadorena. La IA puede hacer que visitar nuestro pais sea una experiencia aun mejor.

Imagina esto: Un turista llega al aeropuerto. Su telefono tiene un asistente de IA que:
- Habla su idioma
- Conoce los mejores lugares para visitar
- Sugiere restaurantes segun sus gustos
- Lo ayuda a navegar por el pais
- Traduce en tiempo real cuando habla con locales

Esto ya es posible con la tecnologia actual.

Pero la IA en turismo va mas alla. Los hoteles pueden usar IA para:
- Personalizar la experiencia de cada huesped
- Predecir cuando necesitaran mas personal
- Ajustar precios segun la demanda
- Responder preguntas de clientes automaticamente

Los destinos turisticos pueden usar IA para:
- Manejar el flujo de visitantes
- Proteger sitios arqueologicos
- Crear experiencias de realidad aumentada
- Traducir senalizacion y guias

En El Salvador, lugares como Joya de Ceren, el Puerto de La Libertad, y las Rutas de las Flores podrian beneficiarse enormemente de estas tecnologias.

El turismo con IA no reemplaza la calidez salvadorena. La complementa, haciendo mas facil para los visitantes disfrutar de todo lo que nuestro pais ofrece.`,
  },

  "vida-4-planeta": {
    transcript: `El cambio climatico es real y El Salvador es vulnerable. Pero la IA puede ser una herramienta poderosa para proteger nuestro medio ambiente.

Como ayuda la IA?

Prediccion de desastres: Sistemas de IA pueden analizar datos meteorologicos para predecir inundaciones, deslizamientos y otros desastres con mayor anticipacion. Esto da tiempo para evacuar personas y prepararse.

Monitoreo de bosques: Satelites y drones con IA pueden detectar deforestacion ilegal, incendios forestales, y cambios en ecosistemas. En El Salvador, donde hemos perdido mucho de nuestros bosques, esto es crucial.

Gestion del agua: La IA puede optimizar el uso del agua en ciudades y agricultura, un recurso cada vez mas escaso en nuestro pais.

Reduccion de contaminacion: Sistemas inteligentes pueden monitorear la calidad del aire, optimizar el trafico para reducir emisiones, y mejorar el manejo de desechos.

Energia limpia: La IA ayuda a predecir la produccion de energia solar y eolica, haciendo mas eficiente el uso de energias renovables.

Como estudiante, puedes contribuir:
- Aprende sobre tecnologias ambientales
- Participa en proyectos de ciencia ciudadana
- Usa apps que monitoreian el medio ambiente
- Comparte lo que aprendes con tu comunidad

El Salvador es pequeno, pero nuestras acciones importan. Con IA como aliada, podemos proteger nuestro pedacito de planeta.`,
  },

  "vida-5-futbol": {
    transcript: `El futbol es pasion en El Salvador. Y aunque no lo creas, la IA esta revolucionando este deporte que tanto amamos.

Como se usa IA en el futbol profesional?

Analisis de rendimiento: Camaras y sensores rastrean cada movimiento de los jugadores. La IA analiza estos datos para ver:
- Cuanto corrio cada jugador
- Que tan preciso son sus pases
- Donde se posicionan mejor
- Cuando se cansan

Esto ayuda a los entrenadores a tomar mejores decisiones y a los jugadores a mejorar.

Prevencion de lesiones: La IA puede predecir cuando un jugador esta en riesgo de lesionarse, basandose en sus patrones de movimiento y carga de trabajo. Esto permite ajustar el entrenamiento antes de que ocurra una lesion.

Estrategia de juego: Equipos analizan videos de rivales con IA para identificar patrones y debilidades. Esto les permite preparar estrategias mas efectivas.

Scouting: La IA puede analizar miles de jugadores alrededor del mundo para encontrar talentos que se ajusten a las necesidades de un equipo.

Y en El Salvador?

La Selecta y los equipos de primera division estan comenzando a adoptar estas tecnologias. Quiza el proximo talento salvadoreno sea descubierto con ayuda de la IA.

Para ti como aficionado, apps con IA pueden darte estadisticas en tiempo real, predicciones de partidos, y analisis detallados de tus jugadores favoritos.

El futbol + IA = el futuro del deporte rey.`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "La IA analiza rendimiento de jugadores: distancia, pases, posicion, fatiga",
        "Puede predecir lesiones antes de que ocurran y ayudar a prevenirlas",
        "Equipos usan IA para analizar rivales y descubrir nuevos talentos"
      ],
      localExample: "Imagina que La Selecta usa IA para analizar al rival antes de un partido de eliminatorias. La IA identifica que el portero rival siempre se mueve a la izquierda en penales. Esa informacion puede ser la diferencia entre clasificar o no.",
      safePrompt: "Explicame como los equipos de futbol profesional usan inteligencia artificial para mejorar su rendimiento."
    },
    localContext: {
      hook: "El Estadio Cuscatlan podria ser el escenario donde la IA ayude a La Selecta a clasificar a un Mundial. Equipos como Alianza y FAS ya exploran estas tecnologias para competir mejor.",
      department: "San Salvador"
    },
    safePrompts: [{
      template: "Como usa la IA el futbol profesional para [APLICACION]?",
      goodExample: "Como usan los equipos de futbol profesional la inteligencia artificial para prevenir lesiones de los jugadores? Dame ejemplos de tecnologias especificas.",
      badExample: "Quien va a ganar el partido de hoy?"
    }],
    enhancedPractice: [
      { id: "vft-1", question: "Que datos analiza la IA sobre un jugador de futbol?", options: ["Solo los goles", "Distancia corrida, precision de pases, posicion, fatiga", "Solo el nombre", "Su comida favorita"], correctAnswer: 1, explanation: "La IA analiza multiples aspectos del rendimiento.", feedback: "Correcto! La IA ve cosas que el ojo humano no puede medir.", hints: ["Piensa en todo lo que hace un jugador", "No solo goles, sino movimiento completo"] },
      { id: "vft-2", question: "Como puede la IA prevenir lesiones en futbolistas?", options: ["Dandoles medicina", "Analizando patrones de movimiento y carga para predecir riesgo", "Diciendo que no jueguen", "No puede prevenir lesiones"], correctAnswer: 1, explanation: "La IA detecta senales de fatiga antes de una lesion.", feedback: "Exacto! Mejor prevenir que lamentar una lesion.", hints: ["Predecir antes de que pase", "Datos de movimiento y cansancio"] },
      { id: "vft-3", question: "Que es el 'scouting' con IA en futbol?", options: ["Buscar uniformes nuevos", "Analizar miles de jugadores para encontrar talentos", "Vender boletos", "Limpiar el estadio"], correctAnswer: 1, explanation: "La IA puede evaluar jugadores en todo el mundo.", feedback: "Asi es! El proximo talento salvadoreno podria ser descubierto por IA.", hints: ["Scout = buscar talentos", "La IA puede ver muchos jugadores"] }
    ],
    aiErrorTips: [
      "La IA no puede predecir resultados de partidos con certeza - el futbol es impredecible.",
      "Las predicciones de la IA sobre jugadores son probabilidades, no garantias.",
      "Datos de ligas menores (como la salvadorena) pueden ser menos precisos que los de ligas europeas."
    ],
    responsibleAIReminder: {
      student: "La tecnologia puede mejorar el deporte, pero la pasion y el esfuerzo humano siguen siendo lo mas importante.",
      teacher: "Use el futbol como ejemplo accesible de como la IA se aplica en la vida real."
    },
    whatsAppPayload: {
      summary: "Aprendi como la IA revoluciona el futbol! Analiza jugadores, previene lesiones y descubre talentos.",
      prompt: "Pregunta: Como usan los equipos profesionales la IA para mejorar su rendimiento?",
      practiceQuestion: "Como puede la IA ayudar a prevenir lesiones en futbolistas?"
    }
  },
};

// Helper function to get content for a lesson
export function getLessonContent(lessonId: string): LessonContent | undefined {
  return lessonContent[lessonId];
}

// Get all quiz questions for a lesson
export function getLessonQuizQuestions(lessonId: string): QuizQuestion[] {
  const content = lessonContent[lessonId];
  return content?.practiceQuestions || [];
}
