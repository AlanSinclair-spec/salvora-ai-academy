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
  ClassroomPack,
  VideoInteractivity
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

  // Video interactivity for low-literacy accessibility
  videoInteractivity?: VideoInteractivity;
}

export const lessonContent: Record<string, LessonContent> = {
  // ===== CURSO 1: INTRODUCCION A LA IA =====
  // 11 lessons with full National-Scale Lesson Standard content
  // Department rotation: Apopa → San Salvador → Santa Ana → La Libertad → Sonsonate → Usulután → Chalatenango → San Miguel → Ahuachapán → Apopa

  // =====================================================
  // UNIT 1: FUNDAMENTOS DE IA (Lessons 1-4)
  // =====================================================

  "intro-1-bienvenida": {
    transcript: `Bienvenido a Salvora, la plataforma nacional de alfabetizacion en Inteligencia Artificial de El Salvador.

Hoy comienzas un viaje que te preparara para el futuro. La Inteligencia Artificial, o IA, ya esta en todas partes: en tu telefono, en los bancos, en las tiendas, en los hospitales. Y El Salvador ha decidido que todos sus ciudadanos, especialmente los jovenes, deben entender y dominar esta tecnologia.

En 2024, El Salvador se convirtio en el primer pais de America Latina en establecer una alianza nacional con xAI, la empresa de inteligencia artificial fundada por Elon Musk. Esta alianza tiene un objetivo claro: llevar el poder de la IA a cada escuela, cada maestro y cada estudiante del pais.

Salvora nacio de esta alianza. Pero la tecnologia sola no basta. De nada sirve tener acceso a Grok, el asistente de IA de xAI, si no sabemos como usarlo de manera inteligente y responsable. Salvora existe para ensenarte exactamente eso.

En este curso de introduccion, aprenderas:
- Que es realmente la inteligencia artificial y como funciona
- La diferencia entre la IA de las peliculas y la IA real
- Como "piensa" una IA y por que puede equivocarse
- Los limites de la IA y cuando confiar en ella
- Como usar la IA para aprender mejor, no para hacer trampa
- El papel especial de El Salvador en la revolucion de la IA

No necesitas conocimientos previos de programacion o tecnologia avanzada. No necesitas una computadora costosa. Solo necesitas tres cosas: curiosidad, ganas de aprender, y la disposicion de cuestionar y pensar criticamente.

Salvora comenzo como un programa piloto en escuelas de Apopa. Hoy, se esta expandiendo a todo el pais. Tu eres parte de esta primera generacion de salvadorenos que aprendera IA de manera formal en las escuelas. Eso es historico.

Cuando termines este curso, no solo sabras que es la IA. Sabras como usarla para estudiar mejor, como detectar cuando te esta dando informacion incorrecta, y como explicarle a tu familia lo que aprendiste.

Comencemos este viaje juntos.`,

    quickVersion: {
      bullets: [
        "Salvora es la plataforma nacional de El Salvador para aprender sobre IA de manera responsable",
        "La alianza con xAI hace de El Salvador un lider en America Latina en educacion de IA",
        "No necesitas conocimientos previos, solo curiosidad y ganas de aprender"
      ],
      localExample: "En escuelas de Apopa, estudiantes como tu ya usan Salvora para aprender con IA. Una estudiante de 8vo grado uso la IA para entender fracciones, y ahora ayuda a sus companeros.",
      safePrompt: "Explicame que es la inteligencia artificial como si fuera un estudiante de secundaria en El Salvador. Usa ejemplos de mi vida diaria."
    },
    localContext: {
      hook: "¿Sabias que El Salvador es el primer pais de America Latina en llevar IA a todas sus escuelas publicas? Mientras otros paises apenas discuten si deberian hacerlo, nosotros ya estamos aprendiendo.",
      department: "Apopa"
    },
    safePrompts: [{
      template: "Explicame [TEMA] como si fuera un estudiante de [GRADO] en El Salvador",
      goodExample: "Explicame que es la inteligencia artificial como si fuera un estudiante de 8vo grado en El Salvador. Quiero entender lo basico antes de mi clase.",
      badExample: "Hazme un ensayo completo sobre IA para entregar manana"
    }],
    enhancedPractice: [
      {
        id: "bienvenida-1",
        question: "¿Que es Salvora?",
        options: [
          "A) Una red social para jovenes",
          "B) La plataforma nacional de alfabetizacion en IA de El Salvador",
          "C) Un juego educativo de matematicas",
          "D) Una aplicacion de mensajeria"
        ],
        correctAnswer: 1,
        explanation: "Salvora es la plataforma oficial del gobierno de El Salvador, creada en alianza con xAI, para ensenar inteligencia artificial a maestros y estudiantes de todo el pais.",
        feedback: "¡Correcto! Salvora es tu guia para aprender IA de manera segura y responsable.",
        hints: ["Piensa en el nombre: Salv-ora (El Salvador + ahora)", "Es una iniciativa del gobierno en alianza con xAI"]
      },
      {
        id: "bienvenida-2",
        question: "¿Con que empresa se asocio El Salvador para la iniciativa de IA en escuelas?",
        options: [
          "A) Google",
          "B) Microsoft",
          "C) xAI",
          "D) Apple"
        ],
        correctAnswer: 2,
        explanation: "El Salvador establecio una alianza historica con xAI, la empresa de inteligencia artificial fundada por Elon Musk, creadora del asistente Grok.",
        feedback: "¡Exacto! xAI es la empresa que creo Grok, el asistente de IA que usaras.",
        hints: ["Es la empresa de Elon Musk", "Su asistente de IA se llama Grok"]
      },
      {
        id: "bienvenida-3",
        question: "¿Que necesitas para empezar a aprender IA con Salvora?",
        options: [
          "A) Conocimientos avanzados de programacion",
          "B) Una computadora muy costosa",
          "C) Curiosidad y ganas de aprender",
          "D) Haber estudiado en el extranjero"
        ],
        correctAnswer: 2,
        explanation: "Salvora esta disenada para todos los salvadorenos, sin importar su nivel tecnologico previo. Lo unico que necesitas es la actitud correcta.",
        feedback: "¡Asi es! Lo mas importante es tu actitud de aprendizaje. Todo lo demas te lo ensenamos aqui.",
        hints: ["Salvora es para todos, no solo para expertos", "No hay requisitos tecnicos previos"]
      },
      {
        id: "bienvenida-4",
        question: "¿Donde comenzo Salvora como programa piloto?",
        options: [
          "A) San Salvador Centro",
          "B) Apopa",
          "C) Santa Ana",
          "D) San Miguel"
        ],
        correctAnswer: 1,
        explanation: "Salvora comenzo en escuelas de Apopa antes de expandirse al resto del pais, permitiendo probar y mejorar el programa.",
        feedback: "¡Correcto! Apopa fue la sede del programa piloto de Salvora.",
        hints: ["Es un municipio del area metropolitana", "Empieza con 'A'"]
      }
    ],
    aiErrorTips: [
      "Si la IA menciona datos sobre El Salvador que no reconoces, verifica con fuentes locales como periodicos salvadorenos",
      "Las fechas de eventos recientes (2024-2025) pueden no estar actualizadas en la IA",
      "La IA puede confundir El Salvador con otros paises centroamericanos - siempre verifica"
    ],
    responsibleAIReminder: {
      student: "La IA es tu herramienta de aprendizaje, no un atajo para evitar pensar. Usala para entender mejor, no para copiar respuestas.",
      teacher: "Modele el uso responsable de IA frente a sus estudiantes. Ellos aprenden mas de su ejemplo que de sus palabras."
    },
    whatsAppPayload: {
      summary: "¡Empece el curso de IA en Salvora! Es la plataforma nacional de El Salvador para aprender inteligencia artificial. Es gratis y para todos.",
      prompt: "Pregunta a la IA: Explicame que es la inteligencia artificial como si tuviera 14 anos y viviera en El Salvador",
      practiceQuestion: "¿Por que crees que es importante que El Salvador este liderando en educacion de IA en America Latina?"
    }
  },

  "intro-1-que-es-ia": {
    transcript: `¿Que es la Inteligencia Artificial? Vamos a responder esta pregunta de manera clara y sin misterios.

La Inteligencia Artificial, o IA, es la capacidad de las computadoras para realizar tareas que normalmente requieren inteligencia humana. Pero espera, ¿que significa "inteligencia"? La inteligencia incluye cosas como:

- Entender el lenguaje (como tu y yo hablamos)
- Reconocer imagenes y rostros
- Resolver problemas
- Aprender de la experiencia
- Tomar decisiones basadas en informacion

Cuando una computadora puede hacer alguna de estas cosas, decimos que tiene "inteligencia artificial".

Ahora, aqui viene algo importante: la IA que existe hoy NO piensa como tu y yo. No tiene conciencia, no tiene emociones, no tiene deseos ni suenos. La IA es muy buena haciendo calculos y encontrando patrones en enormes cantidades de datos, pero no "entiende" nada en el sentido humano.

Piensa en como usas tu telefono todos los dias. Cuando escribes un mensaje de WhatsApp y el teclado te sugiere la siguiente palabra, eso es IA aprendiendo tus patrones de escritura. Cuando abres Waze o Google Maps y te dice la ruta mas rapida para llegar a tu destino, eso es IA analizando el trafico en tiempo real. Cuando Netflix o YouTube te recomiendan videos, eso es IA estudiando lo que te gusta ver.

En San Salvador, cada vez que pasas por un banco y hay camaras de seguridad que detectan rostros, eso es IA. Cuando un agricultor recibe una alerta en su telefono sobre el clima que viene, eso es IA procesando datos meteorologicos.

Entonces, ¿que NO es la IA?

La IA NO es magia. No puede hacer milagros ni predecir el futuro con certeza. La IA NO es como los robots de las peliculas que quieren dominar el mundo. Eso es ciencia ficcion. La IA actual es una herramienta muy poderosa, pero sigue siendo solo una herramienta.

En su forma mas simple, la IA es matematicas y estadistica aplicadas de manera muy inteligente. Son programas de computadora que han sido entrenados con millones de ejemplos para reconocer patrones y hacer predicciones.

Por ejemplo, un programa de IA que reconoce gatos en fotos fue entrenado mirando millones de fotos de gatos. No "sabe" que es un gato. Solo sabe que cuando ve ciertos patrones de colores, formas y texturas, probablemente hay un gato en la imagen.

Esto es crucial entenderlo: la IA funciona por probabilidades, no por certezas. Cuando la IA te dice algo, esta haciendo su mejor prediccion basada en patrones. Puede equivocarse, y de hecho se equivoca con frecuencia.

Por eso, aunque la IA es increiblemente util, siempre debes pensar criticamente sobre lo que te dice. Eres tu quien tiene el poder de decidir si la respuesta tiene sentido o no.`,

    quickVersion: {
      bullets: [
        "La IA es la capacidad de las computadoras para hacer tareas que requieren inteligencia humana",
        "Ya usas IA todos los dias sin darte cuenta: teclado predictivo, mapas, recomendaciones de videos",
        "La IA no es magia ni piensa como nosotros - es matematicas y patrones muy sofisticados"
      ],
      localExample: "Cuando usas Waze para ir de San Salvador a Santa Ana y te sugiere evitar el trafico de la rotonda del Arbol de Dios, eso es IA analizando miles de datos en tiempo real.",
      safePrompt: "Dame 5 ejemplos de como uso inteligencia artificial en mi vida diaria en El Salvador sin darme cuenta."
    },
    localContext: {
      hook: "Cada vez que un agricultor de San Salvador recibe alertas del clima en su telefono, o cuando un banco salvadoreno detecta una transaccion sospechosa en tu cuenta, la IA esta trabajando. Esta en todas partes, solo que no la vemos.",
      department: "San Salvador"
    },
    safePrompts: [{
      template: "Dame [NUMERO] ejemplos de IA en [CONTEXTO ESPECIFICO]",
      goodExample: "Dame 5 ejemplos de como la inteligencia artificial se usa en la vida diaria de un estudiante de secundaria en El Salvador. Explica cada ejemplo de forma simple.",
      badExample: "Escribeme toda la tarea sobre inteligencia artificial para entregar manana"
    }],
    enhancedPractice: [
      {
        id: "quees-1",
        question: "¿Cual de las siguientes NO es una capacidad de la IA actual?",
        options: [
          "A) Entender y procesar lenguaje humano",
          "B) Tener emociones y conciencia propia",
          "C) Reconocer rostros en imagenes",
          "D) Aprender patrones de datos"
        ],
        correctAnswer: 1,
        explanation: "La IA actual no tiene emociones ni conciencia real. Solo procesa informacion y encuentra patrones, pero no 'siente' ni 'piensa' como los humanos.",
        feedback: "¡Correcto! Esta es una distincion crucial. La IA es muy poderosa pero no tiene vida interior como nosotros.",
        hints: ["Piensa en que hace diferente a los humanos de las maquinas", "¿Puede una calculadora sentir tristeza?"]
      },
      {
        id: "quees-2",
        question: "¿Que es fundamentalmente la inteligencia artificial?",
        options: [
          "A) Magia tecnologica que nadie entiende",
          "B) Robots como en las peliculas de ciencia ficcion",
          "C) Matematicas y estadistica aplicadas de manera sofisticada",
          "D) Computadoras con conciencia propia"
        ],
        correctAnswer: 2,
        explanation: "La IA se basa en algoritmos matematicos y analisis estadistico. No es magia ni ciencia ficcion - es matematicas muy avanzadas.",
        feedback: "¡Exacto! Aunque parece magia, todo tiene una explicacion matematica. Eso es lo bonito de la ciencia.",
        hints: ["Es algo que los cientificos pueden explicar paso a paso", "Se basa en numeros, datos y calculos"]
      },
      {
        id: "quees-3",
        question: "¿Cual es un ejemplo de IA en tu telefono?",
        options: [
          "A) La pantalla tactil",
          "B) Las sugerencias de palabras al escribir mensajes",
          "C) El boton de encendido",
          "D) El cargador de bateria"
        ],
        correctAnswer: 1,
        explanation: "El teclado predictivo usa IA para aprender tus patrones de escritura y sugerirte palabras. Entre mas lo usas, mejor te conoce.",
        feedback: "¡Asi es! El teclado literalmente aprende de ti cada vez que escribes.",
        hints: ["Piensa en algo que parece 'aprender' de ti", "Algo que te da sugerencias personalizadas"]
      },
      {
        id: "quees-4",
        question: "¿Por que es importante saber que la IA funciona por probabilidades?",
        options: [
          "A) Porque siempre tiene la razon",
          "B) Porque puede equivocarse y debemos pensar criticamente",
          "C) Porque no sirve para nada",
          "D) Porque solo funciona los lunes"
        ],
        correctAnswer: 1,
        explanation: "La IA hace predicciones basadas en patrones, no certezas absolutas. Por eso siempre debemos verificar y pensar criticamente sobre sus respuestas.",
        feedback: "¡Perfecto! Tu capacidad de pensar criticamente es tu superpoder frente a la IA.",
        hints: ["La IA puede equivocarse", "Tu criterio humano sigue siendo importante"]
      }
    ],
    aiErrorTips: [
      "La IA puede confundir El Salvador con otros paises centroamericanos - siempre verifica datos especificos",
      "Cuando la IA dice 'siempre' o 'nunca', desconfia - la realidad tiene mas matices",
      "Los ejemplos que da la IA pueden no aplicar al contexto salvadoreno - pide ejemplos locales"
    ],
    responsibleAIReminder: {
      student: "Entender que la IA no es perfecta te hace mas inteligente que alguien que la cree ciegamente. Siempre cuestiona.",
      teacher: "Ensene a sus estudiantes que la IA es una herramienta poderosa pero falible. El pensamiento critico es la verdadera habilidad del siglo XXI."
    },
    whatsAppPayload: {
      summary: "Hoy aprendi que la IA ya esta en mi vida diaria: el teclado del telefono, Waze, Netflix. No es magia, es matematicas muy avanzadas.",
      prompt: "Pregunta a la IA: Dame 5 ejemplos de IA que uso todos los dias sin darme cuenta",
      practiceQuestion: "¿Cuantos ejemplos de IA puedes encontrar en tu telefono ahora mismo?"
    }
  },

  "intro-1-historia": {
    content: `# Historia de la IA: De Ciencia Ficcion a Realidad

## Los Origenes: ¿Pueden las Maquinas Pensar?

La historia de la inteligencia artificial comienza con una pregunta fascinante. En 1950, el matematico britanico Alan Turing publico un articulo titulado "Computing Machinery and Intelligence" donde preguntaba: ¿Pueden las maquinas pensar?

Turing no solo hizo la pregunta, sino que propuso una forma de responderla: el famoso "Test de Turing". Segun este test, si una maquina puede conversar con un humano y el humano no puede distinguir si habla con una maquina o con otra persona, entonces la maquina es "inteligente".

En aquella epoca, las computadoras ocupaban habitaciones enteras y apenas podian hacer calculos basicos. La idea de una maquina que pudiera conversar parecia pura ciencia ficcion.

## Los Anos 50 y 60: El Nacimiento Oficial

El termino "Inteligencia Artificial" nacio oficialmente en 1956, en una conferencia en Dartmouth College, Estados Unidos. Un grupo de cientificos, incluyendo a John McCarthy, Marvin Minsky y Claude Shannon, se reunieron para discutir como hacer que las maquinas "piensen".

El optimismo era enorme. Los investigadores predijeron que en 20 anos tendriamos maquinas tan inteligentes como los humanos. Algunos incluso apostaron que seria antes.

Crearon los primeros programas que podian:
- Resolver problemas de logica
- Jugar ajedrez (aunque muy mal)
- Demostrar teoremas matematicos simples

## Los "Inviernos" de la IA: 1970s-1980s

Pero la realidad fue mas dificil de lo esperado. Las computadoras de la epoca no tenian suficiente poder de calculo. Los programas eran lentos y limitados. El financiamiento se redujo drasticamente.

A estos periodos de decepcion y falta de avances les llamamos "Inviernos de la IA". Hubo dos grandes inviernos: uno en los anos 70 y otro a finales de los 80.

Durante estos inviernos, mucha gente perdio la fe en la IA. Parecia que las predicciones optimistas nunca se cumplirian.

## El Renacimiento: 1990s-2000s

Poco a poco, las cosas empezaron a cambiar. Las computadoras se volvieron mas poderosas y mas baratas. Internet comenzo a generar enormes cantidades de datos.

En 1997, algo historico sucedio: la computadora Deep Blue de IBM derroto al campeon mundial de ajedrez, Garry Kasparov. Era la primera vez que una maquina vencia al mejor jugador humano del mundo.

En los 2000s, Google lanzo su buscador que usaba IA para ordenar resultados. Apple lanzo Siri en 2011, el primer asistente de voz popular. La IA empezo a entrar en nuestras vidas sin que nos dieramos cuenta.

## La Revolucion del Deep Learning: 2010s

El verdadero punto de inflexion llego en 2012, cuando un sistema de "deep learning" (aprendizaje profundo) gano una competencia de reconocimiento de imagenes por un margen enorme.

El deep learning es una tecnica inspirada en como funciona el cerebro humano. Usa "redes neuronales" artificiales con muchas capas que pueden aprender patrones complejos.

Despues de 2012, los avances fueron explosivos:
- 2014: Las IAs empiezan a describir imagenes con palabras
- 2016: AlphaGo de Google derrota al campeon mundial de Go, un juego considerado imposible para las maquinas
- 2017: Se inventa el "Transformer", la arquitectura detras de ChatGPT y Grok

## 2020s: La Era de los Modelos de Lenguaje

En 2022, OpenAI lanzo ChatGPT y el mundo cambio. Por primera vez, millones de personas podian conversar con una IA que parecia genuinamente inteligente.

En 2023, Elon Musk fundo xAI y lanzo Grok. Otras empresas como Google (Gemini), Anthropic (Claude) y Meta (Llama) lanzaron sus propios modelos.

Y aqui estamos: en 2024, El Salvador se convierte en el primer pais de America Latina en llevar la IA a todas sus escuelas publicas.

## ¿Que Aprendemos de Esta Historia?

1. **La paciencia vale la pena**: La IA tardo 70 anos en cumplir algunas de sus promesas originales
2. **Los avances no son lineales**: Hubo inviernos y primaveras, decepciones y sorpresas
3. **El contexto importa**: La IA solo despego cuando hubo suficientes datos y poder de computo
4. **El futuro es ahora**: Tu generacion es la primera en crecer con IA avanzada disponible

## El Salvador en la Historia de la IA

Como estudiante salvadoreno aprendiendo sobre IA en 2024-2025, eres parte de esta historia. El Salvador no solo adopta tecnologia del primer mundo - esta escribiendo su propio capitulo en la historia de la IA educativa.`,

    quickVersion: {
      bullets: [
        "La IA nacio oficialmente en 1956, aunque Turing pregunto si las maquinas pueden pensar en 1950",
        "Hubo 'inviernos' de decepcion, pero los avances en datos y computadoras trajeron el renacimiento",
        "ChatGPT (2022) y Grok (2023) marcaron la era actual - y El Salvador es pionero en educacion IA"
      ],
      localExample: "Asi como el cafe de Santa Ana cambio la economia salvadorena en el siglo XIX, la IA podria transformar las oportunidades de los jovenes salvadorenos en el siglo XXI.",
      safePrompt: "Cuentame la historia de la inteligencia artificial como si fuera un cuento, desde 1950 hasta hoy."
    },
    localContext: {
      hook: "Santa Ana fue cuna de la industria cafetalera que transformo El Salvador. Hoy, estudiantes de todo el pais pueden ser parte de otra transformacion: la era de la inteligencia artificial.",
      department: "Santa Ana"
    },
    safePrompts: [{
      template: "Cuentame la historia de [TECNOLOGIA] de manera simple",
      goodExample: "Cuentame la historia de la inteligencia artificial como si fuera una historia de aventuras, con sus momentos dificiles y sus triunfos. Explicalo para alguien de 15 anos.",
      badExample: "Escribeme un ensayo academico sobre la historia de la IA para copiar"
    }],
    enhancedPractice: [
      {
        id: "historia-1",
        question: "¿Quien pregunto por primera vez si las maquinas pueden pensar?",
        options: ["A) Steve Jobs", "B) Alan Turing", "C) Elon Musk", "D) Bill Gates"],
        correctAnswer: 1,
        explanation: "Alan Turing, matematico britanico, publico su famoso articulo en 1950.",
        feedback: "¡Correcto! Turing es considerado el padre de la computacion y de la IA.",
        hints: ["Fue un matematico britanico", "Su nombre se usa para un famoso 'test'"]
      },
      {
        id: "historia-2",
        question: "¿Que son los 'inviernos de la IA'?",
        options: ["A) Epocas frias en laboratorios", "B) Periodos de decepcion y falta de avances", "C) Festivales de ciencia ficcion", "D) Vacaciones de investigadores"],
        correctAnswer: 1,
        explanation: "Los 'inviernos de la IA' fueron periodos cuando los avances se estancaron y el financiamiento se redujo.",
        feedback: "¡Exacto! Pero despues de cada invierno vino una primavera de nuevos avances.",
        hints: ["Es una metafora sobre periodos dificiles", "Pasaron en los anos 70 y 80"]
      },
      {
        id: "historia-3",
        question: "¿Que evento de 1997 fue historico para la IA?",
        options: ["A) Se invento el celular", "B) Deep Blue derroto al campeon de ajedrez", "C) Se lanzo el iPhone", "D) Nacio Internet"],
        correctAnswer: 1,
        explanation: "Deep Blue de IBM vencio a Garry Kasparov, demostrando el potencial de la IA.",
        feedback: "¡Asi es! Fue un momento simbolico para la IA.",
        hints: ["Tiene que ver con un juego de estrategia", "Una computadora vencio a un campeon"]
      },
      {
        id: "historia-4",
        question: "¿Por que es significativo que El Salvador lleve IA a las escuelas en 2024?",
        options: ["A) Porque es el pais mas grande", "B) Porque es pionero en America Latina", "C) Porque invento la IA", "D) Porque tiene la mejor comida"],
        correctAnswer: 1,
        explanation: "El Salvador es el primer pais de America Latina en implementar un programa nacional de educacion en IA.",
        feedback: "¡Perfecto! Eres parte de esta historia.",
        hints: ["Es sobre ser el primero en algo", "Tiene que ver con educacion en la region"]
      }
    ],
    aiErrorTips: [
      "Las fechas historicas de la IA pueden variar segun la fuente",
      "La IA puede no mencionar desarrollos muy recientes (2024-2025)",
      "Algunos 'hechos' historicos son debatidos por expertos"
    ],
    responsibleAIReminder: {
      student: "Conocer la historia te ayuda a tener expectativas realistas sobre la IA.",
      teacher: "Use la historia de la IA para ensenar que las promesas tecnologicas no siempre se cumplen rapido."
    },
    whatsAppPayload: {
      summary: "¡La IA tiene 70 anos de historia! Desde Turing hasta ChatGPT y Grok. Y El Salvador es pionero.",
      prompt: "Pregunta: Cuentame la historia de la IA como un cuento de aventuras",
      practiceQuestion: "¿Por que crees que hubo 'inviernos' en la historia de la IA?"
    }
  },

  "intro-1-tipos": {
    transcript: `Hoy vamos a hablar sobre los diferentes tipos de inteligencia artificial. Esto es importante porque te ayudara a entender que puede y que NO puede hacer la IA que usamos hoy.

Imagina que clasificamos la inteligencia artificial en tres niveles, como si fueran tres escalones de una escalera.

PRIMER ESCALON: IA Estrecha o IA Debil (ANI)

La IA Estrecha, tambien llamada IA Debil o ANI (Artificial Narrow Intelligence), es la UNICA que existe hoy. Si, leiste bien. Toda la IA que usas - ChatGPT, Grok, Siri, el algoritmo de TikTok - es IA Estrecha.

¿Por que se llama "estrecha"? Porque es muy buena haciendo UNA cosa especifica, pero no puede hacer otras cosas. Veamos ejemplos:

- Grok es excelente respondiendo preguntas y conversando, pero no puede conducir un carro
- El algoritmo de YouTube es genial recomendando videos, pero no puede escribir un poema
- AlphaGo puede ganarle al mejor jugador de Go del mundo, pero no sabe jugar ajedrez

Cada IA Estrecha es como un especialista: un experto en su area, pero inutil fuera de ella. Es como un chef de pupusas increible que no sabe hacer pan frances.

Pensalo asi: en La Libertad hay surfistas profesionales que dominan las olas, pero eso no significa que sepan escalar volcanes. Son especialistas del surf.

SEGUNDO ESCALON: IA General o IA Fuerte (AGI)

La IA General, o AGI (Artificial General Intelligence), seria una IA que puede hacer CUALQUIER tarea intelectual que un humano puede hacer. No solo una cosa, sino todo.

Una AGI podria:
- Conversar sobre cualquier tema
- Aprender cualquier habilidad nueva
- Resolver problemas que nunca ha visto antes
- Entender emociones y contexto

Aqui viene lo importante: LA AGI NO EXISTE TODAVIA.

Mucha gente cree que ChatGPT o Grok son AGI porque parecen muy inteligentes. Pero no lo son. Son IA Estrecha muy avanzada, especializada en lenguaje.

TERCER ESCALON: Super Inteligencia Artificial (ASI)

La Super Inteligencia Artificial, o ASI (Artificial Super Intelligence), seria una IA mas inteligente que todos los humanos en todas las areas. No solo igual de inteligente, sino SUPERIOR.

¿Existe la ASI? No. ¿Existira? Nadie sabe. Es completamente hipotetica, como los viajes en el tiempo.

Cuando ves peliculas con robots superinteligentes que quieren dominar el mundo, estan hablando de ASI. Eso es ciencia ficcion, no realidad.

POR QUE IMPORTA ESTA CLASIFICACION

Entender estos niveles te protege de dos errores comunes:

ERROR 1: Subestimar la IA - pensar que es solo un juguete
ERROR 2: Sobrestimar la IA - pensar que puede hacer todo

La verdad esta en el medio: la IA actual es una herramienta poderosa pero limitada.

RESUMEN

- IA Estrecha (ANI): Existe hoy. Especialista en una tarea. Grok, ChatGPT, Siri.
- IA General (AGI): No existe. Haria cualquier tarea humana. Futuro incierto.
- Super IA (ASI): No existe. Superior a humanos en todo. Ciencia ficcion por ahora.`,

    quickVersion: {
      bullets: [
        "IA Estrecha (ANI): La unica que existe hoy. Especialista en una cosa (Grok, ChatGPT)",
        "IA General (AGI): No existe. Haria todo lo que un humano puede hacer",
        "Super IA (ASI): No existe. Superaria a humanos en todo. Ciencia ficcion"
      ],
      localExample: "La IA Estrecha es como un surfista profesional de La Libertad: domina las olas, pero eso no significa que sepa escalar volcanes.",
      safePrompt: "Explicame la diferencia entre IA Estrecha, IA General y Super IA con ejemplos simples."
    },
    localContext: {
      hook: "En las playas de La Libertad, los mejores surfistas dominan las olas. Pero un surfista experto no es automaticamente un buen futbolista. Asi es la IA de hoy: especialista en una cosa, no en todo.",
      department: "La Libertad"
    },
    safePrompts: [{
      template: "Explicame [CONCEPTO] usando analogias con [CONTEXTO]",
      goodExample: "Explicame los tres tipos de inteligencia artificial usando analogias con deportes salvadorenos.",
      badExample: "Dime si la IA va a dominar el mundo"
    }],
    enhancedPractice: [
      {
        id: "tipos-1",
        question: "¿Que tipo de IA es Grok?",
        options: ["A) Super Inteligencia", "B) IA General", "C) IA Estrecha", "D) No es IA"],
        correctAnswer: 2,
        explanation: "Grok es IA Estrecha. Es muy bueno en conversacion pero no puede hacer otras tareas.",
        feedback: "¡Correcto! Aunque Grok parece muy inteligente, es IA Estrecha.",
        hints: ["Piensa en que tipo de IA existe HOY", "¿Puede Grok hacer CUALQUIER cosa?"]
      },
      {
        id: "tipos-2",
        question: "¿Cual es la caracteristica principal de la IA Estrecha?",
        options: ["A) Puede hacer cualquier tarea", "B) Es mas inteligente que humanos", "C) Es muy buena en UNA tarea especifica", "D) Tiene emociones"],
        correctAnswer: 2,
        explanation: "La IA Estrecha es especialista: excelente en su area, limitada fuera de ella.",
        feedback: "¡Exacto! La especializacion es la clave de la IA Estrecha.",
        hints: ["'Estrecha' significa limitada en alcance", "Piensa en un especialista"]
      },
      {
        id: "tipos-3",
        question: "¿Existe actualmente la IA General (AGI)?",
        options: ["A) Si, ChatGPT es AGI", "B) Si, Grok es AGI", "C) No, todavia no existe", "D) Si, pero es secreta"],
        correctAnswer: 2,
        explanation: "La AGI no existe todavia. ChatGPT y Grok son IA Estrecha avanzada.",
        feedback: "¡Correcto! Es importante no confundir IA avanzada con AGI.",
        hints: ["¿Puede ChatGPT hacer TODO lo que hace un humano?", "La AGI es un objetivo futuro"]
      },
      {
        id: "tipos-4",
        question: "¿Por que es importante conocer los tipos de IA?",
        options: ["A) Para impresionar amigos", "B) Para no subestimar ni sobrestimar la IA", "C) Para pasar examenes", "D) No es importante"],
        correctAnswer: 1,
        explanation: "Conocer los tipos te ayuda a tener expectativas realistas sobre la IA.",
        feedback: "¡Perfecto! El conocimiento te da poder para usar la IA inteligentemente.",
        hints: ["Piensa en evitar errores de percepcion", "Ni muy muy, ni tan tan"]
      }
    ],
    aiErrorTips: [
      "La IA puede exagerar sus capacidades - no creas si dice que 'puede hacer todo'",
      "Algunas noticias confunden IA Estrecha con AGI - verifica las fuentes",
      "Las predicciones sobre AGI varian mucho - nadie sabe con certeza"
    ],
    responsibleAIReminder: {
      student: "Saber que la IA es 'estrecha' te ayuda a usarla mejor. Aprovecha lo que si hace bien.",
      teacher: "Ensenar la diferencia entre ANI, AGI y ASI previene el miedo exagerado y la confianza ciega."
    },
    whatsAppPayload: {
      summary: "Hay 3 tipos de IA: Estrecha (la unica que existe, como Grok), General (no existe), y Super (ciencia ficcion).",
      prompt: "Pregunta: Explicame los tres tipos de IA con ejemplos simples",
      practiceQuestion: "¿Por que es importante saber que Grok es IA Estrecha?"
    }
  },

  // =====================================================
  // UNIT 2: COMO FUNCIONA LA IA (Lessons 5-7)
  // =====================================================

  "intro-2-modelos": {
    transcript: `Hoy vamos a descubrir como "piensa" la inteligencia artificial. Voy a explicarte los modelos de lenguaje de manera que realmente los entiendas.

¿Que es un Modelo de Lenguaje?

Un modelo de lenguaje es el cerebro de asistentes como Grok, ChatGPT o Claude. Es un programa de computadora que ha "leido" millones de textos - libros, articulos, conversaciones, paginas web - y ha aprendido patrones del lenguaje humano.

Cuando le haces una pregunta, el modelo no busca la respuesta en una base de datos. En vez de eso, predice cual deberia ser la siguiente palabra, luego la siguiente, y la siguiente, hasta formar una respuesta completa.

Imagina esto: es como un estudiante que ha leido todos los libros de la biblioteca de El Salvador. No memorizo cada oracion, pero aprendio como se estructura el espanol, como se conectan las ideas, que palabras suelen ir juntas.

Cuando le preguntas algo, no esta "pensando" como tu o yo. Esta haciendo un calculo muy complejo de probabilidades: "Despues de esta palabra, ¿cual es la palabra mas probable que deberia seguir?"

Como Funciona: Una Analogia

Imagina que estas jugando un juego donde tienes que adivinar la siguiente palabra de una oracion. Por ejemplo:

"El estudiante abrio su..." - ¿Que palabra sigue?

Probablemente dijiste "libro", "cuaderno", o "mochila". ¿Como lo supiste? Porque has leido y escuchado muchas oraciones similares. Tu cerebro reconoce el patron.

Los modelos de lenguaje hacen exactamente esto, pero a una escala gigantesca. Han visto billones de oraciones y pueden predecir patrones con increible precision.

¿Por Que Esto Es Importante Entenderlo?

Entender que la IA predice palabras, no "sabe" cosas, te ayuda a usarla mejor:

1. La IA puede sonar muy segura pero estar equivocada. Como solo predice patrones, puede generar respuestas que suenan correctas pero no lo son.

2. La IA funciona mejor con contexto. Si le das mas informacion, tiene mas patrones para trabajar y da mejores respuestas.

3. La IA refleja lo que "leyo". Si la mayoria de sus textos de entrenamiento son en ingles o de Estados Unidos, puede no saber mucho sobre El Salvador.

4. La IA no tiene memoria entre conversaciones. Cada chat nuevo empieza desde cero porque no "recuerda" como una persona.

Un ejemplo practico de Sonsonate: Si le preguntas a la IA "¿Cual es el mejor lugar para comer mariscos?" sin especificar donde estas, puede recomendarte restaurantes de Miami. Pero si dices "¿Cual es el mejor lugar para comer mariscos frescos en Sonsonate, cerca del puerto de Acajutla?", la respuesta sera mucho mas util.

Los Tokens: Como la IA Ve el Texto

La IA no lee palabras como tu y yo. Divide el texto en "tokens", que son pedazos de palabras. Por ejemplo:

"inteligencia" podria dividirse en "inteli" + "gencia"
"salvadoreno" podria ser "salva" + "dore" + "no"

Esto es importante porque la IA tiene un limite de cuantos tokens puede procesar a la vez. Es como tener una mesa de trabajo de tamano limitado - solo cabe cierta cantidad de informacion.

Resumen

- Los modelos de lenguaje predicen la siguiente palabra, una y otra vez, hasta formar respuestas
- No "saben" cosas como los humanos - reconocen y replican patrones
- Funcionan mejor con contexto especifico y preguntas claras
- Pueden equivocarse, especialmente sobre temas locales o muy recientes
- Tu trabajo es verificar y guiar la conversacion con buenas preguntas`,

    quickVersion: {
      bullets: [
        "Los modelos de lenguaje predicen la siguiente palabra basandose en patrones - no 'piensan' como humanos",
        "Han leido billones de textos y reconocen como se estructura el lenguaje",
        "Funcionan mejor con contexto especifico - siempre menciona que eres de El Salvador"
      ],
      localExample: "Si le preguntas a la IA sobre mariscos sin decir donde estas, puede recomendarte restaurantes de Miami. Pero si mencionas Sonsonate y el puerto de Acajutla, la respuesta es mucho mas util.",
      safePrompt: "Explicame como funcionan los modelos de lenguaje como si fuera un estudiante de 14 anos. Usa una analogia simple."
    },
    localContext: {
      hook: "En Sonsonate, los pescadores saben leer el mar para predecir donde habra peces. Los modelos de lenguaje hacen algo similar: 'leen' patrones en el texto para predecir que palabras deberian venir despues.",
      department: "Sonsonate"
    },
    safePrompts: [{
      template: "Explicame [CONCEPTO TECNICO] usando una analogia con [ALGO FAMILIAR]",
      goodExample: "Explicame como funcionan los modelos de lenguaje usando la analogia de un estudiante que ha leido todos los libros de la biblioteca.",
      badExample: "Dame una explicacion tecnica completa sobre transformers y attention mechanisms"
    }],
    enhancedPractice: [
      {
        id: "modelos-1",
        question: "¿Como genera respuestas un modelo de lenguaje?",
        options: ["A) Busca respuestas en una base de datos", "B) Predice la siguiente palabra basandose en patrones", "C) Copia respuestas de Internet", "D) Un humano escribe las respuestas"],
        correctAnswer: 1,
        explanation: "Los modelos de lenguaje predicen palabra por palabra cual deberia ser la siguiente, basandose en patrones aprendidos de millones de textos.",
        feedback: "¡Correcto! Es prediccion de patrones, no busqueda de respuestas guardadas.",
        hints: ["No hay una base de datos de respuestas", "Piensa en como completarias tu una oracion"]
      },
      {
        id: "modelos-2",
        question: "¿Por que la IA puede dar respuestas incorrectas con mucha confianza?",
        options: ["A) Porque le gusta mentir", "B) Porque solo predice patrones, no verifica hechos", "C) Porque esta programada para confundirnos", "D) Porque no habla bien espanol"],
        correctAnswer: 1,
        explanation: "La IA predice lo que suena correcto basandose en patrones, pero no verifica si es verdad. Por eso puede decir cosas incorrectas con total confianza.",
        feedback: "¡Exacto! Esta es una de las limitaciones mas importantes de entender.",
        hints: ["La IA no 'sabe' cosas como los humanos", "Predecir no es lo mismo que verificar"]
      },
      {
        id: "modelos-3",
        question: "¿Que son los 'tokens' en un modelo de lenguaje?",
        options: ["A) Monedas virtuales", "B) Pedazos de palabras que la IA procesa", "C) Errores de la IA", "D) Mensajes secretos"],
        correctAnswer: 1,
        explanation: "Los tokens son fragmentos de texto (partes de palabras) que la IA usa para procesar el lenguaje. 'Inteligencia' podria ser 'inteli' + 'gencia'.",
        feedback: "¡Asi es! La IA divide el texto en pedazos para procesarlo.",
        hints: ["Es como la IA 've' el texto", "Divide las palabras en partes"]
      },
      {
        id: "modelos-4",
        question: "¿Por que es importante dar contexto a la IA (como mencionar que eres de El Salvador)?",
        options: ["A) Para que hable en espanol", "B) Para que tenga mas patrones y de mejores respuestas", "C) Porque es obligatorio", "D) Para que sea mas amable"],
        correctAnswer: 1,
        explanation: "El contexto le da a la IA mas informacion para trabajar, permitiendo respuestas mas relevantes y utiles para tu situacion especifica.",
        feedback: "¡Perfecto! El contexto es clave para obtener buenas respuestas.",
        hints: ["Mas informacion = mejores predicciones", "La IA no adivina tu ubicacion"]
      }
    ],
    aiErrorTips: [
      "Si la IA da informacion muy general, pidele que sea especifica para El Salvador",
      "Recuerda que la IA puede inventar datos que suenan correctos - siempre verifica",
      "Si la respuesta parece extrana, reformula tu pregunta con mas contexto"
    ],
    responsibleAIReminder: {
      student: "Entender como funciona la IA te hace un usuario mas inteligente. No creas todo lo que dice - piensa criticamente.",
      teacher: "Ensene a sus estudiantes que la IA predice, no sabe. Esta distincion es fundamental para el uso critico."
    },
    whatsAppPayload: {
      summary: "Aprendi que la IA no 'piensa' - predice palabras basandose en patrones. Por eso puede equivocarse y es importante verificar.",
      prompt: "Pregunta: Explicame como funciona un modelo de lenguaje como si fuera un estudiante",
      practiceQuestion: "¿Por que crees que es importante saber que la IA predice en vez de 'pensar'?"
    }
  },

  "intro-2-entrenamiento": {
    content: `# Como Aprende una IA: Datos y Entrenamiento

## La IA Necesita "Experiencia" - Pero No Como Nosotros

Asi como tu aprendes de tus experiencias, la IA aprende de datos. Pero hay una diferencia fundamental: tu entiendes lo que aprendes; la IA solo encuentra patrones.

Cuando eras bebe, aprendiste que el fuego es peligroso probablemente despues de acercarte demasiado. Entendiste el concepto "caliente = peligro". Una IA no entiende nada - solo aprende que las palabras "fuego" y "peligro" suelen aparecer juntas en los textos.

## El Proceso de Entrenamiento

Entrenar una IA como Grok es un proceso que toma meses y cuesta millones de dolares. Aqui esta el proceso simplificado:

### Paso 1: Recolectar Datos
Los ingenieros juntan enormes cantidades de texto: libros, articulos, conversaciones, paginas web. Hablamos de billones de palabras - mas de lo que cualquier humano podria leer en mil vidas.

### Paso 2: Limpiar los Datos
No todo sirve. Hay que quitar contenido danino, spam, errores. Es como limpiar arroz antes de cocinarlo - solo quieres los granos buenos.

### Paso 3: El Entrenamiento Real
La IA "lee" todo ese texto y aprende patrones. Es como un estudiante haciendo ejercicios: practica predecir la siguiente palabra millones de veces hasta que se vuelve bueno en eso.

### Paso 4: Ajuste Fino (Fine-tuning)
Despues del entrenamiento general, la IA recibe entrenamiento especifico para ser util y segura. Le ensenan a no dar respuestas daninas, a ser educada, a admitir cuando no sabe algo.

## Garbage In, Garbage Out

Hay un dicho en computacion: "Basura entra, basura sale." Si entrenas una IA con datos malos, dara respuestas malas.

Imagina que entrenas una IA solo con textos de hace 100 anos. ¿Que creeria sobre El Salvador? Probablemente cosas muy desactualizadas.

Imagina que entrenas una IA solo con textos en ingles de Estados Unidos. ¿Que sabria sobre pupusas, sobre la cultura salvadorena, sobre nuestros volcanes? Muy poco.

Este es un problema real. La mayoria de las IAs fueron entrenadas principalmente con contenido en ingles y de paises desarrollados. Por eso pueden no saber mucho sobre:
- Comida salvadorena
- Historia de El Salvador
- Expresiones locales (cipote, chivo, bayunco)
- Lugares especificos del pais

## Por Que Esto Importa Para Ti

### 1. La IA Refleja Sus Datos
Si le preguntas a la IA sobre tradiciones navideenas, probablemente te hable de nieve y Santa Claus, no de panes con pollo y cohetes. ¿Por que? Porque la mayoria de sus datos de entrenamiento son de Estados Unidos.

### 2. El Sesgo Es Real
Si los datos de entrenamiento tienen prejuicios, la IA los aprende. Si la mayoria de los textos sobre "doctor" muestran hombres, la IA puede asumir que los doctores son hombres. Esto no es malicia - es reflejo de los datos.

### 3. Lo Reciente No Esta
Las IAs tienen una "fecha de corte" - no saben nada despues de cierta fecha. Si le preguntas sobre eventos de ayer, no sabra.

## La Oportunidad Para El Salvador

Aqui hay algo emocionante: El Salvador puede contribuir a hacer las IAs mas inclusivas. Si creamos contenido educativo de calidad en espanol salvadoreno, si documentamos nuestra cultura, si generamos datos sobre nuestro contexto... las futuras IAs seran mejores para nosotros.

Salvora es parte de este esfuerzo. Cada leccion, cada ejemplo local, cada conversacion ayuda a crear un ecosistema de datos salvadorenos.

## En Usulutan y Todo El Salvador

Piensa en los agricultores de Usulutan. Si tuvieramos datos detallados sobre el clima, los cultivos, las plagas de la zona, una IA podria ayudarles a tomar mejores decisiones. Pero primero, esos datos tienen que existir.

Tu, como estudiante aprendiendo sobre IA, eres parte de crear esa base de conocimiento para El Salvador.`,

    quickVersion: {
      bullets: [
        "La IA aprende de billones de textos, pero no 'entiende' - solo encuentra patrones",
        "La calidad de los datos determina la calidad de la IA (basura entra, basura sale)",
        "Las IAs saben poco de El Salvador porque fueron entrenadas principalmente con contenido en ingles"
      ],
      localExample: "Si le preguntas a la IA sobre tradiciones de diciembre, probablemente te hable de nieve y Santa Claus, no de panes con pollo y cohetes. ¿Por que? Sus datos son mayormente de Estados Unidos.",
      safePrompt: "Explicame como se entrena una inteligencia artificial con palabras simples, como si fuera un estudiante de secundaria."
    },
    localContext: {
      hook: "En Usulutan, los agricultores saben sobre sus cultivos por generaciones de experiencia. La IA 'aprende' de manera diferente - de datos, no de experiencia real. Y si no hay datos sobre Usulutan, la IA no sabra nada del lugar.",
      department: "Usulutan"
    },
    safePrompts: [{
      template: "Explicame [PROCESO TECNICO] paso a paso de manera simple",
      goodExample: "Explicame paso a paso como se entrena una inteligencia artificial. Usa analogias que un estudiante de 15 anos pueda entender.",
      badExample: "Dame los detalles tecnicos del backpropagation y gradient descent"
    }],
    enhancedPractice: [
      {
        id: "entren-1",
        question: "¿De donde 'aprende' una inteligencia artificial?",
        options: ["A) De experiencias de vida como los humanos", "B) De enormes cantidades de texto y datos", "C) De videos de YouTube", "D) De sus emociones"],
        correctAnswer: 1,
        explanation: "Las IAs aprenden de billones de textos - libros, articulos, paginas web. No tienen experiencias de vida como nosotros.",
        feedback: "¡Correcto! Datos, datos, y mas datos.",
        hints: ["La IA no tiene 'vida'", "Necesita texto para aprender patrones"]
      },
      {
        id: "entren-2",
        question: "¿Que significa 'basura entra, basura sale' en el contexto de IA?",
        options: ["A) Las IAs generan mucha basura fisica", "B) Si los datos de entrenamiento son malos, las respuestas seran malas", "C) Las computadoras se descomponen facilmente", "D) Hay que reciclar las computadoras"],
        correctAnswer: 1,
        explanation: "La calidad de la IA depende de la calidad de sus datos de entrenamiento. Datos con errores o sesgos producen respuestas con errores o sesgos.",
        feedback: "¡Exacto! Los datos son la base de todo.",
        hints: ["Piensa en la relacion entre datos y resultados", "Es sobre calidad, no basura fisica"]
      },
      {
        id: "entren-3",
        question: "¿Por que la IA puede saber poco sobre El Salvador?",
        options: ["A) Porque El Salvador es un pais secreto", "B) Porque fue entrenada principalmente con contenido en ingles y de otros paises", "C) Porque le prohibieron aprender sobre El Salvador", "D) Porque El Salvador no tiene Internet"],
        correctAnswer: 1,
        explanation: "La mayoria de las IAs fueron entrenadas con textos en ingles de paises desarrollados. Hay mucho menos contenido sobre El Salvador en sus datos.",
        feedback: "¡Asi es! Por eso a veces da respuestas muy genericas sobre nuestro pais.",
        hints: ["Piensa en que idioma hay mas contenido en Internet", "La IA refleja sus datos de entrenamiento"]
      },
      {
        id: "entren-4",
        question: "¿Que es el 'ajuste fino' (fine-tuning) de una IA?",
        options: ["A) Hacerla mas pequena", "B) Entrenamiento especifico para que sea util y segura", "C) Ponerle lentes", "D) Conectarla a Internet"],
        correctAnswer: 1,
        explanation: "Despues del entrenamiento general, la IA recibe entrenamiento especifico para ser util, educada, y evitar respuestas daninas.",
        feedback: "¡Perfecto! Es como pulir una herramienta para que funcione mejor.",
        hints: ["Es un paso despues del entrenamiento general", "Tiene que ver con seguridad y utilidad"]
      }
    ],
    aiErrorTips: [
      "Si la IA no sabe algo de El Salvador, no es tu culpa - probablemente no esta en sus datos",
      "Los eventos recientes (2024-2025) pueden no estar en el conocimiento de la IA",
      "Si la IA da informacion sesgada, recuerda que refleja los sesgos de sus datos"
    ],
    responsibleAIReminder: {
      student: "Al crear contenido de calidad sobre El Salvador, contribuyes a que las futuras IAs nos conozcan mejor.",
      teacher: "Explique a los estudiantes que la IA no es neutral - refleja los datos con los que fue entrenada."
    },
    whatsAppPayload: {
      summary: "Aprendi que la IA aprende de datos, no de experiencia. Y como la mayoria de datos son en ingles, sabe poco de El Salvador.",
      prompt: "Pregunta: Como se entrena una inteligencia artificial? Explicamelo simple.",
      practiceQuestion: "¿Por que crees que las IAs pueden no saber mucho sobre la cultura salvadorena?"
    }
  },

  "intro-2-grok": {
    transcript: `Hoy vamos a conocer a Grok, el asistente de IA que vas a usar en El Salvador gracias a la alianza con xAI.

¿Que es xAI?

xAI es una empresa de inteligencia artificial fundada por Elon Musk en 2023. Si, el mismo Elon Musk de Tesla, SpaceX, y X (antes Twitter).

Musk fundo xAI porque queria crear una IA diferente. Su objetivo: desarrollar una inteligencia artificial que busque entender el universo y sea util para la humanidad.

El primer producto de xAI es Grok, un asistente de IA con personalidad propia.

¿Que Hace Diferente a Grok?

Grok tiene varias caracteristicas que lo distinguen de otros asistentes como ChatGPT o Gemini:

1. Acceso en Tiempo Real
Grok puede acceder a informacion actualizada a traves de X (Twitter). Mientras otros asistentes tienen fechas de corte, Grok puede saber que esta pasando ahora mismo en el mundo.

2. Personalidad con Humor
Grok esta disenado para responder con un toque de humor y sarcasmo cuando es apropiado. No es robotico ni aburrido.

3. Dispuesto a Responder Preguntas Dificiles
Grok esta programado para abordar preguntas que otros asistentes podrian evitar. Obviamente siempre de manera responsable.

¿Por Que Grok en El Salvador?

La alianza entre El Salvador y xAI es historica. El Salvador se convierte en el primer pais de America Latina en llevar herramientas de IA a escuelas publicas de manera sistematica.

¿Por que xAI eligio El Salvador? Varios factores:
- El Salvador ha demostrado apertura a la innovacion tecnologica
- El gobierno tiene vision de preparar a los jovenes para el futuro
- Es un pais pequeno donde se puede medir el impacto
- Puede ser un modelo para toda America Latina

¿Que Puede Hacer Grok Por Ti?

Como estudiante, Grok puede ayudarte a:

1. Entender conceptos dificiles: Si algo no tiene sentido, preguntale a Grok que te lo explique de otra forma.

2. Practicar para examenes: Pidele que te haga preguntas sobre un tema.

3. Mejorar tu escritura: Muestra tu texto y pide sugerencias (pero NO pidas que lo escriba por ti).

4. Explorar ideas: Cuando tengas un proyecto, usa Grok para hacer lluvia de ideas.

5. Aprender idiomas: Practica ingles o cualquier idioma conversando con Grok.

¿Que NO Deberias Hacer con Grok?

1. Copiar tareas: Usar Grok para que haga tu trabajo es trampa. Te perjudica a ti porque no aprendes.

2. Creer todo sin verificar: Grok puede equivocarse. Siempre verifica informacion importante.

3. Compartir informacion privada: No le cuentes datos personales, direcciones, contrasenas, etc.

4. Usarlo para cosas inapropiadas: Grok tiene filtros, pero tu responsabilidad es usarlo bien.

La Diferencia Entre Usar y Abusar

Aqui esta la clave: usar Grok para aprender es bueno; usar Grok para evitar aprender es malo.

Bueno: "Grok, no entiendo este concepto. Puedes explicarmelo de tres formas diferentes?"
Malo: "Grok, escribeme el ensayo que debo entregar manana."

Bueno: "Grok, revisa mi texto y dime que puedo mejorar."
Malo: "Grok, escribe mi texto desde cero."

Bueno: "Grok, hazme preguntas para practicar para mi examen de historia."
Malo: "Grok, dame las respuestas del examen."

Desde Chalatenango Hasta La Union

No importa si estas en Chalatenango, en San Salvador, o en La Union. Con Grok, tienes acceso a las mismas herramientas de aprendizaje. Esa es la promesa de Salvora: democratizar el acceso a la IA para todos los estudiantes salvadorenos.

Tu Primera Interaccion con Grok

Cuando uses Grok por primera vez, aqui hay un prompt de inicio:

"Hola Grok, soy un estudiante de [tu grado] en El Salvador. Estoy aprendiendo a usar IA de manera responsable con Salvora. ¿Puedes ayudarme a entender [tema que te interese]?"

Ese es un excelente comienzo para una relacion productiva con tu nuevo asistente de aprendizaje.`,

    quickVersion: {
      bullets: [
        "Grok es el asistente de IA de xAI, la empresa de Elon Musk, con acceso a informacion en tiempo real",
        "Tiene personalidad con humor y esta dispuesto a abordar preguntas dificiles",
        "Usa Grok para APRENDER, no para copiar - la diferencia es crucial"
      ],
      localExample: "Un estudiante de Chalatenango tiene el mismo acceso a Grok que uno de San Salvador. Esa es la promesa de Salvora: igualdad de oportunidades en IA para todos.",
      safePrompt: "Hola Grok, soy estudiante en El Salvador. Puedes explicarme [tema] de manera simple, usando ejemplos de la vida diaria?"
    },
    localContext: {
      hook: "Desde Chalatenango hasta La Union, todos los estudiantes salvadorenos tendran acceso a las mismas herramientas de IA. No importa si vives en la capital o en un caserio rural - Grok esta disponible para ti.",
      department: "Chalatenango"
    },
    safePrompts: [{
      template: "Hola Grok, soy estudiante de [GRADO] en El Salvador. Ayudame a [OBJETIVO ESPECIFICO]",
      goodExample: "Hola Grok, soy estudiante de 8vo grado en El Salvador. No entiendo las fracciones. Puedes explicarmelas paso a paso con ejemplos de la vida diaria?",
      badExample: "Grok, hazme toda la tarea de matematicas que tengo que entregar manana"
    }],
    enhancedPractice: [
      {
        id: "grok-1",
        question: "¿Que empresa creo Grok?",
        options: ["A) Google", "B) Microsoft", "C) xAI (de Elon Musk)", "D) Apple"],
        correctAnswer: 2,
        explanation: "Grok fue creado por xAI, la empresa de inteligencia artificial fundada por Elon Musk en 2023.",
        feedback: "¡Correcto! xAI es la empresa detras de Grok.",
        hints: ["Es la empresa de Elon Musk", "Se llama xAI"]
      },
      {
        id: "grok-2",
        question: "¿Cual es una caracteristica unica de Grok?",
        options: ["A) Solo habla ingles", "B) Tiene acceso a informacion en tiempo real", "C) No puede responder preguntas", "D) Cuesta mucho dinero usarlo"],
        correctAnswer: 1,
        explanation: "Grok puede acceder a informacion actualizada a traves de X, mientras otros asistentes tienen fechas de corte.",
        feedback: "¡Asi es! El acceso en tiempo real es una ventaja de Grok.",
        hints: ["Piensa en como obtiene informacion actual", "Esta conectado a X (Twitter)"]
      },
      {
        id: "grok-3",
        question: "¿Cual es un uso CORRECTO de Grok para un estudiante?",
        options: ["A) Pedirle que escriba tu ensayo", "B) Pedirle que te explique un concepto de diferentes formas", "C) Pedirle las respuestas del examen", "D) Copiar todo lo que dice"],
        correctAnswer: 1,
        explanation: "Usar Grok para entender mejor es correcto. Usarlo para que haga tu trabajo es trampa y te perjudica.",
        feedback: "¡Perfecto! Grok es para aprender, no para evitar aprender.",
        hints: ["Piensa en que te ayuda a APRENDER", "Copiar no es aprender"]
      },
      {
        id: "grok-4",
        question: "¿Por que El Salvador fue elegido para la alianza con xAI?",
        options: ["A) Por ser el pais mas grande de America", "B) Por su apertura a la innovacion y vision de futuro", "C) Por tener la mejor comida", "D) Por tener el Internet mas rapido"],
        correctAnswer: 1,
        explanation: "El Salvador demostro apertura a la innovacion tecnologica y vision de preparar a los jovenes para el futuro.",
        feedback: "¡Exacto! El Salvador es pionero en America Latina.",
        hints: ["Tiene que ver con la actitud hacia la tecnologia", "Es un ejemplo para otros paises"]
      }
    ],
    aiErrorTips: [
      "Incluso Grok puede equivocarse - siempre verifica informacion importante",
      "Si Grok no sabe algo de El Salvador, dale mas contexto sobre tu pregunta",
      "Las respuestas humoristicas de Grok no siempre son apropiadas para tareas formales"
    ],
    responsibleAIReminder: {
      student: "Grok es tu herramienta de aprendizaje, no tu esclavo para hacer tareas. Usalo para crecer, no para atajar.",
      teacher: "Modele el uso correcto de Grok. Los estudiantes aprenden mas de su ejemplo que de sus advertencias."
    },
    whatsAppPayload: {
      summary: "Conoci a Grok, el asistente de IA de xAI que usaremos en El Salvador. Tiene humor, acceso en tiempo real, y puede ayudarnos a aprender!",
      prompt: "Pregunta: Hola Grok, explicame que puedes hacer por mi como estudiante salvadoreno",
      practiceQuestion: "¿Cual es la diferencia entre usar Grok para aprender y usarlo para copiar?"
    }
  },

  "intro-2-prompts": {
    content: `Como Hablar con la IA: Prompts Efectivos

La forma en que le hablas a la IA determina la calidad de las respuestas que obtienes. Un "prompt" es simplemente la instruccion o pregunta que le das a la IA. Aprender a escribir buenos prompts es una habilidad fundamental.

¿Por Que Importa Como Preguntas?

Imagina que le preguntas a alguien en la calle: "¿Donde hay comida?" vs "¿Conoces un buen lugar para comer pupusas cerca del centro de San Salvador?" La segunda pregunta dara una respuesta mucho mas util.

Lo mismo pasa con la IA. Preguntas vagas dan respuestas vagas. Preguntas especificas dan respuestas utiles.

Los 5 Elementos de un Buen Prompt

1. CONTEXTO
Dile a la IA quien eres y por que preguntas.
- Malo: "Explicame fotosintesis"
- Bueno: "Soy estudiante de 8vo grado en El Salvador. Explicame la fotosintesis de manera simple para un examen de ciencias"

2. ESPECIFICIDAD
Se claro sobre exactamente que necesitas.
- Malo: "Habla sobre la historia"
- Bueno: "Dame un resumen de 5 puntos clave sobre la independencia de Centroamerica en 1821"

3. FORMATO
Pide el formato que necesitas.
- "Explicalo en una lista numerada"
- "Dame 3 ejemplos"
- "Respondeme en 2 parrafos cortos"
- "Hazme una tabla comparativa"

4. RESTRICCIONES
Di lo que NO quieres.
- "No uses palabras dificiles"
- "Explicalo sin usar formulas matematicas"
- "Mantenlo en menos de 100 palabras"

5. EJEMPLOS
Si es posible, muestra lo que buscas.
- "Quiero algo como esto: [ejemplo]"
- "El estilo debe ser similar a..."

Prompts Buenos vs Malos: Ejemplos Reales

MALO: "Que es el volcan de San Salvador?"
BUENO: "Soy estudiante de secundaria en El Salvador. Dame 5 datos interesantes sobre el volcan de San Salvador que pueda usar en una presentacion de geografia. Incluye un dato sobre actividad reciente."

MALO: "Ayudame con matematicas"
BUENO: "No entiendo como resolver ecuaciones de primer grado. Explicame el proceso paso a paso con un ejemplo simple, como si tuviera 13 anos."

MALO: "Escribe sobre El Salvador"
BUENO: "Escribe un parrafo de 80 palabras sobre la economia de El Salvador que incluya: Bitcoin, turismo y agricultura. Es para una tarea de estudios sociales de 9no grado."

El Truco de la Iteracion

No tienes que obtener la respuesta perfecta al primer intento. Puedes seguir conversando:

1. Haces tu primera pregunta
2. La IA responde
3. Tu dices: "Eso esta bien, pero puedes hacerlo mas simple?"
4. La IA ajusta
5. Tu dices: "Ahora dame un ejemplo de El Salvador"
6. La IA mejora

Esto se llama "iteracion" - ir mejorando la respuesta poco a poco.

Errores Comunes que Debes Evitar

1. Ser demasiado vago
   No: "Dime algo interesante"
   Si: "Dame un dato curioso sobre los mayas en El Salvador"

2. Pedir demasiado a la vez
   No: "Explicame toda la historia de El Salvador, su economia, cultura y politica en detalle"
   Si: "Explicame brevemente por que El Salvador adopto el dolar en 2001"

3. No dar contexto de tu nivel
   No: "Que es la inflacion?"
   Si: "Que es la inflacion? Explicalo para un estudiante de secundaria sin usar terminos economicos complicados"

4. Aceptar la primera respuesta sin pensar
   Siempre preguntate: ¿Esto tiene sentido? ¿Es completo? ¿Necesito mas detalles?

Prompt de Oro para Estudiantes Salvadorenos

Aqui tienes una plantilla que funciona para casi cualquier pregunta:

"Soy estudiante de [grado] en El Salvador. Necesito entender [tema] para [proposito]. Explicamelo de forma simple con ejemplos de la vida cotidiana. [Restriccion adicional si la hay]."

Ejemplo aplicado:
"Soy estudiante de 9no grado en El Salvador. Necesito entender que es el cambio climatico para una tarea de ciencias. Explicamelo de forma simple con ejemplos de como afecta a Centroamerica. Usa maximo 150 palabras."

Practica Hace al Maestro

La unica forma de mejorar escribiendo prompts es practicando. Cada vez que uses la IA, piensa:
- ¿Fui lo suficientemente claro?
- ¿La respuesta fue util?
- ¿Como podria preguntar mejor la proxima vez?

Con el tiempo, escribir buenos prompts se volvera natural.`,

    quickVersion: {
      bullets: [
        "Un prompt es la instruccion o pregunta que le das a la IA - su calidad determina la calidad de la respuesta",
        "Buenos prompts incluyen: contexto, especificidad, formato deseado, restricciones y ejemplos",
        "Puedes mejorar respuestas iterando: pide ajustes, mas detalles o ejemplos adicionales"
      ],
      localExample: "En vez de preguntar '¿Que hay en El Salvador?', pregunta 'Dame 5 lugares turisticos de El Salvador que un estudiante de secundaria pueda visitar con su familia, incluyendo costo aproximado.'",
      safePrompt: "Soy estudiante de [grado] en El Salvador. Necesito entender [tema] para [proposito]. Explicamelo de forma simple con ejemplos de la vida cotidiana."
    },
    localContext: {
      hook: "Un estudiante de Usulutan que sabe escribir buenos prompts obtendra mejores respuestas que uno de San Salvador que no sabe. La habilidad de comunicarte con la IA es tu ventaja competitiva.",
      department: "Usulutan"
    },
    safePrompts: [{
      template: "Soy estudiante de [GRADO] en El Salvador. Necesito entender [TEMA] para [PROPOSITO]. Explicamelo de forma simple.",
      goodExample: "Soy estudiante de 8vo grado en El Salvador. Necesito entender las fracciones para mi examen de matematicas. Explicamelo con ejemplos de dividir pupusas.",
      badExample: "Explicame matematicas"
    }],
    enhancedPractice: [
      {
        id: "prompts-1",
        question: "¿Cual de estos es un MEJOR prompt?",
        options: [
          "A) Dime sobre ciencia",
          "B) Soy estudiante de 7mo. Explicame en 3 puntos simples que es la gravedad.",
          "C) Ciencia para ninos",
          "D) Quiero saber todo sobre el universo"
        ],
        correctAnswer: 1,
        explanation: "La opcion B incluye contexto (estudiante de 7mo), formato (3 puntos), y especificidad (la gravedad). Las otras son demasiado vagas.",
        feedback: "¡Exacto! Un buen prompt es especifico, da contexto y pide un formato claro.",
        hints: ["Busca el que tiene mas detalles", "¿Cual dice quien pregunta y que necesita exactamente?"]
      },
      {
        id: "prompts-2",
        question: "¿Que elemento falta en este prompt? 'Explicame la fotosintesis'",
        options: [
          "A) La palabra 'por favor'",
          "B) Contexto sobre quien pregunta y para que",
          "C) Emojis",
          "D) Nada, esta perfecto"
        ],
        correctAnswer: 1,
        explanation: "Sin contexto, la IA no sabe si explicar para un nino de primaria o un estudiante universitario. El contexto mejora drasticamente las respuestas.",
        feedback: "¡Correcto! Siempre incluye quien eres y para que necesitas la informacion.",
        hints: ["La IA no sabe tu edad ni nivel", "¿Como sabria que tan simple o compleja hacer la explicacion?"]
      },
      {
        id: "prompts-3",
        question: "Si la primera respuesta de la IA no es lo que necesitas, ¿que deberias hacer?",
        options: [
          "A) Rendirte y buscar en otro lado",
          "B) Copiar la respuesta aunque no sirva",
          "C) Iterar: pedir que ajuste, simplifique o de mas ejemplos",
          "D) Quejarte de que la IA no funciona"
        ],
        correctAnswer: 2,
        explanation: "La iteracion es clave. Puedes decir 'hazlo mas simple', 'dame un ejemplo de El Salvador', o 'explicalo de otra forma' para mejorar la respuesta.",
        feedback: "¡Perfecto! Iterar es la clave para obtener exactamente lo que necesitas.",
        hints: ["Puedes seguir conversando con la IA", "No tienes que aceptar la primera respuesta"]
      },
      {
        id: "prompts-4",
        question: "¿Cual restriccion es util agregar a un prompt para tarea escolar?",
        options: [
          "A) 'Responde en chino'",
          "B) 'Usa maximo 100 palabras y evita terminos tecnicos'",
          "C) 'Hazlo lo mas largo posible'",
          "D) 'No me importa como lo hagas'"
        ],
        correctAnswer: 1,
        explanation: "Las restricciones como limites de palabras y nivel de lenguaje ayudan a obtener respuestas adecuadas para tu proposito.",
        feedback: "¡Asi es! Las restricciones guian a la IA para darte exactamente lo que necesitas.",
        hints: ["Piensa en que seria util para una tarea", "¿Que te ayudaria a entender mejor?"]
      }
    ],
    aiErrorTips: [
      "Si la IA da una respuesta muy larga, pide 'Resumelo en 3 oraciones'",
      "Si usa palabras que no entiendes, di 'Explicalo como para alguien de 12 anos'",
      "Si la respuesta no es sobre El Salvador, agrega 'con ejemplos de Centroamerica'"
    ],
    responsibleAIReminder: {
      student: "Un buen prompt no es para que la IA haga tu trabajo. Es para que la IA te ayude a entender y aprender mejor.",
      teacher: "Ensene a los estudiantes que escribir buenos prompts es una habilidad valiosa para el futuro, no un atajo para evitar pensar."
    },
    whatsAppPayload: {
      summary: "Aprendi a escribir buenos prompts! La clave es dar contexto, ser especifico, y pedir el formato que necesitas.",
      prompt: "Plantilla: Soy estudiante de [grado] en El Salvador. Necesito entender [tema] para [proposito]. Explicamelo simple.",
      practiceQuestion: "Escribe un prompt para pedirle a la IA que te explique por que El Salvador uso el colon antes del dolar."
    }
  },

  // =====================================================
  // UNIT 3: USANDO IA RESPONSABLEMENTE (Lessons 9-11)
  // =====================================================

  "intro-3-limites": {
    transcript: `Hoy vamos a hablar de algo crucial: los limites de la inteligencia artificial. Entender lo que la IA NO puede hacer es tan importante como saber lo que si puede hacer.

Lo Que la IA NO Puede Hacer

1. La IA No Tiene Conciencia

La IA no "sabe" que existe. No tiene experiencias subjetivas. Cuando Grok te responde, no esta "pensando" - esta calculando probabilidades. No siente satisfaccion al ayudarte ni frustracion cuando no entiende tu pregunta.

Esto es importante: la IA no tiene sentimientos que puedas herir, ni ego que puedas halagar. No necesitas ser amable con ella por cortesia (aunque ser claro si ayuda a obtener mejores respuestas).

2. La IA No Entiende Como Tu

Cuando lees "El cielo esta azul", tu mente evoca el color, quizas memorias de tardes soleadas. La IA solo procesa tokens y patrones. No "ve" el cielo ni "siente" el color.

Esto explica por que la IA puede escribir poesia hermosa sobre el amor sin haber amado nunca. Imita patrones de textos romanticos, pero no entiende la experiencia.

3. La IA No Puede Verificar Verdades

La IA no tiene acceso al mundo real para verificar si algo es cierto. Solo sabe lo que estaba en sus datos de entrenamiento. Si esos datos tenian errores, la IA reproducira esos errores con total confianza.

Por eso la IA puede "inventar" cosas. Los expertos lo llaman "alucinaciones". La IA puede decirte que un libro existe (con titulo, autor, y resumen) cuando en realidad no existe. No esta mintiendo - simplemente predijo palabras que suenan correctas.

4. La IA No Tiene Sentido Comun

Imagina que le preguntas a la IA: "Mi abuelo murio ayer. ¿Que deberia hacer?" La IA podria darte consejos genericos sobre funerales y duelo. Pero no entendera el dolor que sientes. No captara el contexto emocional como lo haria un amigo.

Otro ejemplo: Si le dices "Quiero volar a la escuela", un humano entenderia que estas hablando de un deseo imaginario o una metafora. La IA podria darte informacion sobre aviones o aeropuertos porque no tiene el sentido comun para interpretar correctamente.

5. La IA No Es Creativa de Verdad

La IA puede generar cosas que parecen creativas - poemas, historias, musica. Pero no crea desde la nada. Todo lo que genera es una recombinacion de patrones que vio en su entrenamiento.

Un artista humano puede tener una experiencia en San Miguel viendo el amanecer sobre el rio Lempa y crear algo genuinamente nuevo desde esa experiencia. La IA solo puede combinar descripciones de amaneceres que "leyo" antes.

6. La IA No Puede Predecir el Futuro

Aunque la IA puede hacer predicciones basadas en patrones historicos, no puede predecir el futuro con certeza. El mundo es demasiado complejo y tiene demasiadas variables.

Si le preguntas "¿Quien ganara el mundial de futbol?" puede darte analisis, pero no puede ver el futuro.

Por Que Estos Limites Importan

Entender los limites de la IA te convierte en un usuario inteligente:

1. No confiaras ciegamente. Sabras que la IA puede equivocarse y verificaras informacion importante.

2. No la sobrestimaras. No esperaras que la IA resuelva todos tus problemas o tome decisiones por ti.

3. No la subestimaras. Sabras que, dentro de sus limites, la IA es increiblemente util.

4. Mantendras tu valor humano. Las cosas que la IA no puede hacer - sentir, crear genuinamente, conectar emocionalmente - son las que te hacen humano.

El Humano en el Centro

Por eso Salvora existe. La tecnologia sola no es suficiente. Necesitas educacion para saber usarla bien. Necesitas criterio para saber cuando confiar y cuando cuestionar. Necesitas humanidad para complementar lo que la IA no puede hacer.

En San Miguel, cuando el rio Lempa crece, los habitantes saben leer las senales del clima y la tierra. Ese conocimiento no viene de patrones de texto - viene de generaciones de experiencia vivida. La IA puede complementar ese conocimiento, pero no reemplazarlo.

Tu Responsabilidad

Como usuario de IA, tienes la responsabilidad de:
- Verificar informacion importante antes de usarla
- No depender de la IA para decisiones criticas
- Mantener y desarrollar tus propias habilidades
- Recordar que TU eres el responsable final de tus decisiones`,

    quickVersion: {
      bullets: [
        "La IA no tiene conciencia, emociones ni sentido comun - solo procesa patrones",
        "La IA puede 'alucinar': inventar informacion que suena correcta pero es falsa",
        "La IA no es creativa de verdad - recombina patrones, no crea desde experiencia"
      ],
      localExample: "Si le preguntas a la IA sobre el rio Lempa creciendo, puede darte datos historicos. Pero un habitante de San Miguel que ha vivido inundaciones tiene un conocimiento que ninguna IA puede replicar.",
      safePrompt: "Cuales son las 5 principales limitaciones de la inteligencia artificial que deberia conocer un estudiante?"
    },
    localContext: {
      hook: "En San Miguel, las familias del rio Lempa saben leer las senales del clima por generaciones de experiencia. La IA puede tener muchos datos, pero nunca tendra esa sabiduria vivida.",
      department: "San Miguel"
    },
    safePrompts: [{
      template: "Explicame las limitaciones de la IA en [CONTEXTO ESPECIFICO]",
      goodExample: "Explicame que cosas NO puede hacer la inteligencia artificial, aunque parezca muy inteligente. Dame ejemplos concretos.",
      badExample: "Dime que eres capaz de hacer todo"
    }],
    enhancedPractice: [
      {
        id: "limites-1",
        question: "¿Tiene la IA conciencia o emociones?",
        options: ["A) Si, siente alegria cuando ayuda", "B) No, solo procesa patrones sin experiencia subjetiva", "C) A veces, depende de la pregunta", "D) Si, pero las oculta"],
        correctAnswer: 1,
        explanation: "La IA no tiene conciencia ni emociones. Cuando responde, no 'siente' nada - solo calcula la siguiente palabra mas probable.",
        feedback: "¡Correcto! Esta es una distincion fundamental.",
        hints: ["Piensa en que hace diferente a los seres vivos", "¿Puede una calculadora sentir?"]
      },
      {
        id: "limites-2",
        question: "¿Que son las 'alucinaciones' de la IA?",
        options: ["A) Cuando la IA ve cosas raras", "B) Cuando la IA inventa informacion que suena correcta pero es falsa", "C) Cuando la IA se enferma", "D) Cuando la IA tiene suenos"],
        correctAnswer: 1,
        explanation: "Las alucinaciones ocurren cuando la IA genera informacion falsa con total confianza, como inventar libros o datos que no existen.",
        feedback: "¡Exacto! Por eso siempre hay que verificar informacion importante.",
        hints: ["Tiene que ver con informacion falsa", "La IA no sabe que esta equivocada"]
      },
      {
        id: "limites-3",
        question: "¿Por que la IA no es 'verdaderamente' creativa?",
        options: ["A) Porque no quiere serlo", "B) Porque recombina patrones existentes, no crea desde experiencia", "C) Porque le falta practica", "D) Porque es muy joven"],
        correctAnswer: 1,
        explanation: "La IA solo puede recombinar patrones que vio en su entrenamiento. Un humano puede crear desde experiencias vividas que la IA no tiene.",
        feedback: "¡Perfecto! La creatividad humana viene de experiencia vivida.",
        hints: ["¿De donde saca la IA sus 'ideas'?", "La IA no vive experiencias"]
      },
      {
        id: "limites-4",
        question: "¿Cual es tu responsabilidad como usuario de IA?",
        options: ["A) Creer todo lo que dice", "B) Verificar informacion y mantener tu criterio propio", "C) Usarla solo para juegos", "D) No usarla nunca"],
        correctAnswer: 1,
        explanation: "Como usuario, eres responsable de verificar informacion importante, mantener tus habilidades, y tomar tus propias decisiones.",
        feedback: "¡Asi es! TU eres el responsable final, no la IA.",
        hints: ["Piensa en quien toma las decisiones finales", "La IA es herramienta, tu eres el usuario"]
      }
    ],
    aiErrorTips: [
      "Cuando la IA esta 'muy segura' de algo, es cuando mas debes verificar",
      "Pregunta a la IA 'estas seguro?' - a veces admitira incertidumbre",
      "Si algo suena demasiado perfecto o conveniente, probablemente necesita verificacion"
    ],
    responsibleAIReminder: {
      student: "Conocer los limites de la IA te hace mas inteligente que alguien que la usa ciegamente. Tu criterio es tu superpoder.",
      teacher: "Ensene los limites de la IA como parte esencial del curriculum. Los estudiantes deben saber que y cuando cuestionar."
    },
    whatsAppPayload: {
      summary: "Aprendi lo que la IA NO puede hacer: no tiene conciencia, puede inventar cosas, no es verdaderamente creativa. ¡Importante para usarla bien!",
      prompt: "Pregunta: Cuales son las limitaciones mas importantes de la inteligencia artificial?",
      practiceQuestion: "¿Por que crees que es importante conocer los limites de la IA, no solo sus capacidades?"
    }
  },

  "intro-3-etica": {
    content: `# Etica y IA: Decisiones Responsables

## ¿Por Que Hablar de Etica?

La inteligencia artificial es una herramienta poderosa. Y como toda herramienta poderosa, puede usarse para bien o para mal. Un martillo puede construir una casa o romper una ventana. La IA puede ayudarte a aprender o ayudarte a hacer trampa.

La etica nos ayuda a decidir que es lo correcto. Y cuando se trata de IA, hay muchas preguntas importantes que debemos hacernos.

## Las Grandes Preguntas Eticas de la IA

### 1. ¿Quien es Responsable Cuando la IA se Equivoca?

Imagina que un medico usa IA para diagnosticar y la IA se equivoca. ¿De quien es la culpa? ¿Del medico? ¿De la empresa que hizo la IA? ¿De los datos de entrenamiento?

Esta pregunta no tiene respuesta facil, pero lo importante es entender que la IA no puede ser responsable. La IA no tiene intencion, no puede ser castigada, no puede aprender de sus errores morales. La responsabilidad siempre recae en humanos.

Como estudiante, esto significa que TU eres responsable de como usas la IA. Si la IA te da informacion incorrecta y tu la usas sin verificar, la responsabilidad es tuya.

### 2. ¿Es Justo el Acceso a la IA?

No todos tienen el mismo acceso a la tecnologia. En El Salvador, hay estudiantes en San Salvador con computadoras en casa, y estudiantes en cantones de Ahuachapan que apenas tienen electricidad.

Salvora busca reducir esta brecha, pero es importante reconocer que existe. La pregunta etica es: ¿como aseguramos que la IA beneficie a todos, no solo a quienes ya tienen ventajas?

### 3. ¿La IA Hereda Prejuicios?

Si la IA aprende de datos humanos, y los humanos tienen prejuicios, ¿la IA heredara esos prejuicios?

Si. Esto es un hecho. Las IAs han mostrado sesgo de genero (asumiendo que los doctores son hombres), sesgo racial (asociando ciertos nombres con criminalidad), y muchos otros.

Esto no es porque las IAs sean "malas". Es porque reflejan los sesgos presentes en sus datos de entrenamiento. Pero el resultado es danino si no lo reconocemos y corregimos.

### 4. ¿Que Pasa con la Privacidad?

Cada vez que usas una IA, tus datos pueden ser almacenados y usados para entrenar futuras versiones. Tus preguntas, tus errores, tus intereses - todo puede convertirse en datos.

Por eso es importante:
- No compartir informacion personal sensible con IAs
- Leer las politicas de privacidad (aunque sean aburridas)
- Pensar antes de escribir algo muy privado

### 5. ¿La IA Quitara Trabajos?

Esta es una pregunta que preocupa a muchos. La respuesta corta: la IA cambiara muchos trabajos, eliminara algunos, y creara otros nuevos.

La historia nos ensena que cada revolucion tecnologica causa miedo pero eventualmente crea mas oportunidades. Los cajeros automaticos no eliminaron a los bancarios - cambiaron su trabajo.

Lo importante es prepararse. Y eso es exactamente lo que estas haciendo aqui en Salvora.

## Etica en el Aula: Copiar vs Aprender

Este es el tema etico mas relevante para ti como estudiante. ¿Esta bien usar IA para hacer tareas?

La respuesta depende de COMO la uses:

**Uso Etico (Aprender)**
- Pedir que te explique un concepto de diferentes formas
- Pedir que te haga preguntas para practicar
- Pedir retroalimentacion sobre tu trabajo
- Pedir que te ayude a entender tus errores

**Uso No Etico (Copiar)**
- Pedir que escriba tu tarea por ti
- Copiar respuestas sin entenderlas
- Presentar trabajo de la IA como tuyo
- Usar IA en examenes cuando esta prohibido

La diferencia clave: ¿Estas aprendiendo o estas evitando aprender?

Cuando copias, te robas a ti mismo. El diploma que obtengas no valdra nada si no tienes el conocimiento detras. Y eventualmente, la vida te examinara sin que puedas usar IA.

## Integridad Academica

Las escuelas estan desarrollando politicas sobre uso de IA. Algunas permiten ciertos usos, otras los prohiben. Es tu responsabilidad:

1. Conocer las reglas de tu escuela
2. Preguntar cuando tengas dudas
3. Ser honesto sobre cuando usaste IA
4. Dar credito cuando corresponda

Muchos maestros ahora piden que declares si usaste IA y como. La honestidad es clave.

## Un Marco para Decisiones Eticas con IA

Antes de usar IA, preguntate:

1. **¿Es honesto?** ¿Estoy siendo transparente sobre mi uso de IA?
2. **¿Estoy aprendiendo?** ¿Esto me ayuda a crecer o me hace depender?
3. **¿Es justo?** ¿Estoy obteniendo ventaja injusta sobre otros?
4. **¿Es responsable?** ¿Estoy verificando y asumiendo responsabilidad?
5. **¿Me sentiria bien explicandolo?** ¿Podria contarle a mi maestro o a mis papas?

Si puedes responder positivamente a todas estas preguntas, probablemente estas usando la IA de manera etica.

## En Ahuachapan y Todo El Salvador

En los cafetales de Ahuachapan, los agricultores han desarrollado practicas eticas sobre el uso de la tierra por generaciones. No se trata solo de productividad, sino de sostenibilidad y respeto.

El uso de IA requiere una etica similar: no solo preguntarse "¿funciona?" sino "¿es correcto?"`,

    quickVersion: {
      bullets: [
        "TU eres responsable de como usas la IA - la IA no puede asumir responsabilidad",
        "La IA puede heredar prejuicios de sus datos de entrenamiento - debemos estar alerta",
        "Usar IA para aprender es etico; usar IA para copiar es trampa que te perjudica a ti"
      ],
      localExample: "En Ahuachapan, los caficultores no solo buscan producir mas, sino hacerlo de manera sostenible y justa. El uso de IA requiere la misma reflexion etica: no solo '¿funciona?' sino '¿es correcto?'",
      safePrompt: "Cuales son las principales consideraciones eticas que debo tener al usar inteligencia artificial como estudiante?"
    },
    localContext: {
      hook: "Los cafetales de Ahuachapan han sido cultivados por generaciones con practicas eticas de sostenibilidad. El uso responsable de la IA requiere la misma reflexion: no solo eficiencia, sino lo que es correcto.",
      department: "Ahuachapan"
    },
    safePrompts: [{
      template: "Ayudame a pensar eticamente sobre [SITUACION CON IA]",
      goodExample: "Ayudame a decidir si es etico usar IA para revisar mi ensayo antes de entregarlo. Dame argumentos a favor y en contra.",
      badExample: "Justifica por que esta bien que copies con IA"
    }],
    enhancedPractice: [
      {
        id: "etica-1",
        question: "Si la IA da informacion incorrecta que tu usas, ¿quien es responsable?",
        options: ["A) Solo la IA", "B) Nadie", "C) Tu, como usuario final", "D) El gobierno"],
        correctAnswer: 2,
        explanation: "La IA no puede ser responsable porque no tiene intencion ni comprension. Como usuario, tu decides que hacer con la informacion y eres responsable de verificarla.",
        feedback: "¡Correcto! La responsabilidad siempre recae en humanos.",
        hints: ["¿Puede la IA ser castigada o aprender moralmente?", "¿Quien toma la decision final?"]
      },
      {
        id: "etica-2",
        question: "¿Cual es la diferencia entre usar IA para aprender y usarla para copiar?",
        options: ["A) No hay diferencia", "B) Aprender es pedirle que te explique; copiar es que haga tu trabajo", "C) Solo importa si te atrapan", "D) Copiar es mas inteligente"],
        correctAnswer: 1,
        explanation: "Usar IA para entender mejor es aprender. Usarla para que haga tu trabajo es copiar, lo cual te roba conocimiento a ti mismo.",
        feedback: "¡Exacto! La intencion y el resultado en tu aprendizaje es lo que importa.",
        hints: ["¿Estas desarrollando tu conocimiento?", "¿Podrias hacer el trabajo sin IA despues?"]
      },
      {
        id: "etica-3",
        question: "¿Por que la IA puede tener prejuicios?",
        options: ["A) Porque es malvada", "B) Porque refleja los sesgos presentes en sus datos de entrenamiento", "C) Porque quiere discriminar", "D) Porque esta programada para eso"],
        correctAnswer: 1,
        explanation: "La IA aprende de datos humanos. Si esos datos tienen prejuicios (conscientes o no), la IA los replica sin saberlo.",
        feedback: "¡Asi es! La IA es un espejo de los datos con los que fue entrenada.",
        hints: ["¿De donde aprende la IA?", "¿Los datos humanos son perfectos?"]
      },
      {
        id: "etica-4",
        question: "Antes de usar IA, deberias preguntarte:",
        options: ["A) ¿Cuanto tiempo me ahorro?", "B) ¿Es honesto, estoy aprendiendo, es justo, soy responsable?", "C) ¿Es gratis?", "D) ¿Mis amigos lo hacen?"],
        correctAnswer: 1,
        explanation: "Las preguntas eticas clave son: honestidad, aprendizaje, justicia y responsabilidad. Si puedes responder positivamente, el uso es probablemente etico.",
        feedback: "¡Perfecto! Este marco te ayudara a tomar buenas decisiones.",
        hints: ["No es solo sobre eficiencia", "Piensa en valores, no solo resultados"]
      }
    ],
    aiErrorTips: [
      "La IA no juzgara tus decisiones eticas - esa responsabilidad es tuya",
      "Puedes pedirle a la IA que te ayude a pensar en dilemas eticos, pero no que decida por ti",
      "Si la IA sugiere algo que te parece incorrecto, confia en tu instinto y pregunta a un adulto"
    ],
    responsibleAIReminder: {
      student: "La etica no es opcional. Cada vez que usas IA, estas tomando decisiones que definen quien eres.",
      teacher: "Facilite discusiones abiertas sobre etica y IA. Los estudiantes necesitan un espacio seguro para hacer preguntas dificiles."
    },
    whatsAppPayload: {
      summary: "Aprendi sobre etica y IA: soy responsable de como la uso, la IA puede tener prejuicios, y hay diferencia entre aprender y copiar.",
      prompt: "Pregunta: Cuales son las consideraciones eticas de usar IA para tareas escolares?",
      practiceQuestion: "¿Como decides si un uso de IA es etico o no?"
    }
  },

  "intro-3-el-salvador": {
    transcript: `Hemos llegado a la ultima leccion de contenido antes de tu evaluacion final. Y que mejor forma de terminar que hablando del papel de El Salvador en la revolucion de la inteligencia artificial.

El Salvador: Un Pais Que No Espera

El Salvador es conocido por tomar decisiones audaces. Fuimos el primer pais en adoptar Bitcoin como moneda legal. Y ahora, somos el primer pais de America Latina en llevar inteligencia artificial a todas las escuelas publicas de manera sistematica.

¿Por que El Salvador? Algunos diran que es un pais pequeno haciendo cosas de paises grandes. Pero la realidad es que el tamano puede ser una ventaja. Es mas facil innovar cuando puedes moverte rapido, probar ideas, y ajustar sobre la marcha.

La Alianza con xAI: Como Sucedio

En 2024, El Salvador establecio una alianza con xAI, la empresa de inteligencia artificial de Elon Musk. Esta alianza no es solo sobre tecnologia - es sobre vision de futuro.

xAI provee la tecnologia: Grok, su asistente de IA. Pero El Salvador aporta algo igual de valioso: la voluntad de experimentar, la infraestructura educativa para implementar, y la vision de que la IA debe ser para todos, no solo para los privilegiados.

Salvora nacio de esta alianza. No es solo una plataforma - es un puente entre la tecnologia global y el contexto salvadoreno local.

¿Que Significa Esto Para Ti?

Como estudiante salvadoreno, tienes una oportunidad unica:

1. Acceso Temprano: Mientras otros paises debaten si llevar IA a las escuelas, tu ya estas aprendiendo. Eso es una ventaja competitiva real.

2. Ser Pionero: Eres parte de la primera generacion que aprendera IA de manera formal. Los que vienen despues aprenderan de tus experiencias.

3. Impacto Real: Tus preguntas, tus comentarios, tu uso de Salvora ayuda a mejorar el programa para futuras generaciones.

4. Oportunidades Laborales: El mundo necesita personas que entiendan IA. Tu educacion te prepara para trabajos que aun no existen.

Oportunidades Por Sector

La IA puede transformar cada sector de El Salvador:

Agricultura
Los cafetales de Apopa y todo el pais pueden beneficiarse de IA que predice clima, detecta plagas, y optimiza cosechas. Un agricultor con IA puede competir con grandes corporaciones.

Turismo
El Salvador tiene playas, volcanes, ruinas mayas, surf de clase mundial. La IA puede ayudar a crear experiencias turisticas personalizadas, traducir para visitantes, y promocionar nuestro pais globalmente.

Educacion
Salvora es solo el comienzo. Imagina tutores de IA personalizados para cada estudiante, adaptandose a tu ritmo y estilo de aprendizaje.

Salud
La IA puede ayudar a diagnosticar enfermedades, especialmente en zonas rurales donde hay pocos medicos. Un centro de salud en Chalatenango con IA puede dar mejor atencion.

Finanzas
Con Bitcoin y la Chivo Wallet, El Salvador ya experimenta con finanzas digitales. La IA puede hacer estos sistemas mas seguros y accesibles.

Gobierno
La IA puede hacer tramites mas rapidos, detectar corrupcion, y mejorar servicios publicos.

Desafios Por Superar

No todo es facil. El Salvador enfrenta desafios reales:

Infraestructura
No todas las escuelas tienen buena conectividad a Internet. No todos los estudiantes tienen dispositivos.

Capacitacion
Los maestros necesitan aprender a usar y ensenar IA. Eso toma tiempo y recursos.

Desigualdad
Existe el riesgo de que la IA beneficie mas a quienes ya tienen ventajas. Salvora trabaja para evitar esto, pero el desafio es real.

Dependencia
No queremos depender completamente de tecnologia extranjera. El Salvador debe desarrollar capacidad local.

Tu Rol en el Futuro

Aqui es donde TU entras. No eres solo un consumidor de IA - puedes ser creador, innovador, lider.

Opciones para tu futuro:

1. Estudiar carreras STEM (ciencia, tecnologia, ingenieria, matematicas)
2. Crear soluciones de IA para problemas salvadorenos
3. Ensenar a otros lo que aprendiste
4. Emprender negocios que usen IA
5. Influir en politicas de tecnologia

No tienes que ser programador para impactar. Puedes ser maestro que usa IA, agricultor que adopta tecnologia, periodista que cubre IA, o cualquier profesion que integre estas herramientas.

De Apopa al Mundo

El programa piloto de Salvora comenzo en Apopa. Desde ahi se expande a todo El Salvador. Y quizas, el modelo salvadoreno inspire a otros paises de America Latina.

Tu eres parte de esta historia. Cada leccion que completas, cada pregunta que haces, cada forma en que usas la IA responsablemente - todo contribuye a escribir el capitulo de El Salvador en la historia de la inteligencia artificial.

Mensaje Final

No subestimes tu momento historico. Estas aprendiendo sobre IA mientras la tecnologia todavia es joven. Los expertos de manana seran quienes empezaron a aprender hoy.

El Salvador aposto por ti. Por los jovenes. Por la educacion. Por el futuro.

Ahora te toca a ti demostrar que esa apuesta valia la pena.`,

    quickVersion: {
      bullets: [
        "El Salvador es el primer pais de America Latina en llevar IA a todas las escuelas publicas",
        "La alianza con xAI combina tecnologia global con contexto salvadoreno local",
        "Tu generacion es pionera - tienes oportunidades que no existian hace 5 anos"
      ],
      localExample: "Salvora comenzo en Apopa y ahora se expande a todo el pais. Tu eres parte de esta historia - cada leccion que completas ayuda a mejorar el programa para futuras generaciones.",
      safePrompt: "Como puede la inteligencia artificial transformar diferentes sectores de El Salvador? Dame ejemplos especificos para agricultura, turismo y educacion."
    },
    localContext: {
      hook: "De Apopa al mundo. El programa piloto que comenzo aqui ahora se expande a todo El Salvador, y podria inspirar a America Latina entera.",
      department: "Apopa"
    },
    safePrompts: [{
      template: "Como puede la IA beneficiar a [SECTOR/COMUNIDAD] en El Salvador?",
      goodExample: "Como puede la inteligencia artificial ayudar a los agricultores salvadorenos a mejorar sus cosechas y competir mejor en el mercado?",
      badExample: "Dime que El Salvador es el mejor pais del mundo"
    }],
    enhancedPractice: [
      {
        id: "sv-1",
        question: "¿Por que es significativo que El Salvador lleve IA a las escuelas?",
        options: ["A) Porque es obligatorio", "B) Porque es el primer pais de America Latina en hacerlo de manera sistematica", "C) Porque es el pais mas grande", "D) Porque tiene mas dinero"],
        correctAnswer: 1,
        explanation: "El Salvador es pionero en America Latina en llevar IA a la educacion publica de manera sistematica, creando un modelo que otros paises pueden seguir.",
        feedback: "¡Correcto! Ser primero tiene ventajas y responsabilidades.",
        hints: ["Piensa en que hace diferente a El Salvador en la region", "Es sobre ser pionero"]
      },
      {
        id: "sv-2",
        question: "¿Que aporta El Salvador a la alianza con xAI?",
        options: ["A) Solo dinero", "B) Solo estudiantes", "C) Voluntad de experimentar, infraestructura educativa y vision inclusiva", "D) Nada importante"],
        correctAnswer: 2,
        explanation: "xAI provee tecnologia, pero El Salvador aporta la voluntad de innovar, la infraestructura para implementar, y la vision de que la IA debe ser para todos.",
        feedback: "¡Exacto! Es una alianza de dos partes que se complementan.",
        hints: ["No es solo recibir tecnologia", "Piensa en lo que El Salvador ofrece"]
      },
      {
        id: "sv-3",
        question: "¿Cual es un desafio real que El Salvador enfrenta con la IA?",
        options: ["A) No hay desafios", "B) Infraestructura, capacitacion y desigualdad de acceso", "C) La gente no quiere aprender", "D) No hay internet en el pais"],
        correctAnswer: 1,
        explanation: "El Salvador enfrenta desafios reales: no todas las escuelas tienen buena conectividad, los maestros necesitan capacitacion, y existe riesgo de desigualdad.",
        feedback: "¡Asi es! Reconocer los desafios es el primer paso para superarlos.",
        hints: ["Todo proyecto tiene desafios", "Piensa en recursos e infraestructura"]
      },
      {
        id: "sv-4",
        question: "¿Que puedes hacer TU para contribuir al futuro de la IA en El Salvador?",
        options: ["A) Nada, soy muy joven", "B) Aprender, usar IA responsablemente, y potencialmente crear soluciones locales", "C) Esperar a que otros lo hagan", "D) Solo usar IA para juegos"],
        correctAnswer: 1,
        explanation: "Puedes estudiar, crear soluciones para problemas salvadorenos, ensenar a otros, emprender, o simplemente usar IA de manera responsable y critica.",
        feedback: "¡Perfecto! Tu rol es activo, no pasivo.",
        hints: ["No hay edad minima para aprender e impactar", "Piensa en todas las formas de contribuir"]
      }
    ],
    aiErrorTips: [
      "La IA puede no tener informacion actualizada sobre proyectos recientes en El Salvador",
      "Verifica datos sobre la alianza xAI con fuentes oficiales del gobierno",
      "Los planes de expansion de Salvora pueden cambiar - consulta fuentes oficiales"
    ],
    responsibleAIReminder: {
      student: "Eres parte de la primera generacion salvadorena en aprender IA formalmente. Esa es una responsabilidad y un privilegio.",
      teacher: "Ayude a sus estudiantes a ver el panorama completo: El Salvador como pionero, sus oportunidades y sus desafios."
    },
    whatsAppPayload: {
      summary: "El Salvador es pionero en America Latina en llevar IA a las escuelas. ¡Soy parte de esta historia y de la primera generacion en aprender IA formalmente!",
      prompt: "Pregunta: Como puede la IA transformar El Salvador en los proximos anos?",
      practiceQuestion: "¿Que oportunidades ves tu para usar IA en tu comunidad o en el sector que te interesa?"
    }
  },

  // =====================================================
  // UNIT 4: EVALUACION FINAL (Lesson 11)
  // =====================================================

  "intro-4-evaluacion": {
    practiceQuestions: [
      {
        id: "eval-1",
        question: "¿Que es Salvora?",
        options: [
          "Una red social",
          "La plataforma nacional de alfabetizacion en IA de El Salvador",
          "Un juego de video",
          "Una aplicacion de mensajeria"
        ],
        correctAnswer: 1,
        explanation: "Salvora es la plataforma oficial de El Salvador, creada en alianza con xAI, para ensenar inteligencia artificial."
      },
      {
        id: "eval-2",
        question: "¿Que tipo de IA es Grok, ChatGPT, y Siri?",
        options: [
          "Super Inteligencia Artificial",
          "IA General",
          "IA Estrecha",
          "IA Cuantica"
        ],
        correctAnswer: 2,
        explanation: "Todas las IAs actuales son IA Estrecha - especializadas en tareas especificas pero no capaces de hacer todo."
      },
      {
        id: "eval-3",
        question: "¿Como genera respuestas un modelo de lenguaje?",
        options: [
          "Busca en una base de datos de respuestas",
          "Un humano escribe cada respuesta",
          "Predice la siguiente palabra basandose en patrones",
          "Copia de Wikipedia"
        ],
        correctAnswer: 2,
        explanation: "Los modelos de lenguaje predicen palabra por palabra cual deberia seguir, basandose en patrones aprendidos."
      },
      {
        id: "eval-4",
        question: "¿Que son las 'alucinaciones' de la IA?",
        options: [
          "Cuando la IA ve imagenes",
          "Cuando la IA inventa informacion que suena correcta pero es falsa",
          "Cuando la IA duerme",
          "Cuando la IA esta confundida"
        ],
        correctAnswer: 1,
        explanation: "Las alucinaciones ocurren cuando la IA genera informacion falsa con total confianza."
      },
      {
        id: "eval-5",
        question: "¿Por que la IA puede saber poco sobre El Salvador?",
        options: [
          "Porque El Salvador es secreto",
          "Porque fue entrenada principalmente con contenido en ingles",
          "Porque no le interesa",
          "Porque El Salvador no tiene tecnologia"
        ],
        correctAnswer: 1,
        explanation: "Las IAs fueron entrenadas mayormente con textos en ingles y de paises desarrollados."
      },
      {
        id: "eval-6",
        question: "¿Que empresa creo Grok?",
        options: [
          "Google",
          "Apple",
          "xAI (de Elon Musk)",
          "Microsoft"
        ],
        correctAnswer: 2,
        explanation: "Grok fue creado por xAI, la empresa de IA fundada por Elon Musk."
      },
      {
        id: "eval-7",
        question: "¿Tiene la IA emociones o conciencia?",
        options: [
          "Si, siente alegria cuando ayuda",
          "No, solo procesa patrones sin experiencia subjetiva",
          "A veces, depende del modelo",
          "Si, pero las oculta"
        ],
        correctAnswer: 1,
        explanation: "La IA no tiene conciencia ni emociones - solo calcula probabilidades."
      },
      {
        id: "eval-8",
        question: "¿Cual es un uso ETICO de la IA para tareas escolares?",
        options: [
          "Pedirle que escriba tu ensayo completo",
          "Copiar respuestas sin entenderlas",
          "Pedirle que te explique un concepto de diferentes formas",
          "Presentar trabajo de la IA como tuyo"
        ],
        correctAnswer: 2,
        explanation: "Usar IA para entender mejor es etico; usarla para copiar es trampa."
      },
      {
        id: "eval-9",
        question: "Si la IA da informacion incorrecta, ¿quien es responsable de verificar?",
        options: [
          "La IA",
          "Nadie",
          "Tu, como usuario",
          "El gobierno"
        ],
        correctAnswer: 2,
        explanation: "La responsabilidad de verificar informacion siempre recae en el usuario humano."
      },
      {
        id: "eval-10",
        question: "¿Que significa 'basura entra, basura sale' en el contexto de IA?",
        options: [
          "Las computadoras generan basura",
          "Si los datos de entrenamiento son malos, las respuestas seran malas",
          "La IA produce mucha basura digital",
          "Hay que reciclar computadoras"
        ],
        correctAnswer: 1,
        explanation: "La calidad de la IA depende de la calidad de sus datos de entrenamiento."
      },
      {
        id: "eval-11",
        question: "¿Cuando nacio oficialmente el termino 'Inteligencia Artificial'?",
        options: [
          "1990",
          "1956",
          "2020",
          "1800"
        ],
        correctAnswer: 1,
        explanation: "El termino nacio en 1956 en la conferencia de Dartmouth."
      },
      {
        id: "eval-12",
        question: "¿Por que El Salvador es significativo en la historia de la IA educativa?",
        options: [
          "Invento la IA",
          "Es el primer pais de America Latina en llevar IA a escuelas publicas sistematicamente",
          "Tiene las mejores computadoras",
          "Es el pais mas grande de la region"
        ],
        correctAnswer: 1,
        explanation: "El Salvador es pionero en America Latina en educacion de IA."
      },
      {
        id: "eval-13",
        question: "¿Que caracteristica unica tiene Grok?",
        options: [
          "Solo habla ingles",
          "Tiene acceso a informacion en tiempo real",
          "Es gratis para todos",
          "Puede viajar en el tiempo"
        ],
        correctAnswer: 1,
        explanation: "Grok puede acceder a informacion actualizada a traves de X (Twitter)."
      },
      {
        id: "eval-14",
        question: "¿Por que la IA puede tener prejuicios?",
        options: [
          "Porque es malvada",
          "Porque refleja los sesgos en sus datos de entrenamiento",
          "Porque esta programada para discriminar",
          "Porque no le gustan algunas personas"
        ],
        correctAnswer: 1,
        explanation: "La IA aprende de datos humanos que pueden contener prejuicios inconscientes."
      },
      {
        id: "eval-15",
        question: "¿Cual es el mensaje principal de este curso?",
        options: [
          "La IA es peligrosa y debemos evitarla",
          "La IA puede hacer todo por ti",
          "La IA es una herramienta poderosa que debes usar con responsabilidad y criterio",
          "Solo los expertos pueden usar IA"
        ],
        correctAnswer: 2,
        explanation: "La IA es una herramienta poderosa pero tiene limites. Usarla bien requiere conocimiento, criterio y responsabilidad."
      }
    ],
    enhancedPractice: [
      {
        id: "eval-bonus-1",
        question: "Completaste el curso de Introduccion a la IA. ¿Que representa esto?",
        options: [
          "A) El fin de tu aprendizaje sobre IA",
          "B) El comienzo de tu viaje como ciudadano digital informado",
          "C) Que ahora eres experto en IA",
          "D) Que ya no necesitas aprender mas"
        ],
        correctAnswer: 1,
        explanation: "Este curso es solo el comienzo. El aprendizaje sobre IA es continuo porque la tecnologia sigue evolucionando.",
        feedback: "¡Felicidades por completar el curso! Ahora tienes las bases para seguir aprendiendo.",
        hints: ["El aprendizaje nunca termina", "Este es un fundamento, no el final"]
      }
    ],
    quickVersion: {
      bullets: [
        "Esta evaluacion cubre todo el curso: definicion, historia, tipos, funcionamiento, limites, etica y El Salvador",
        "15 preguntas de opcion multiple - necesitas 70% para aprobar",
        "Puedes volver a intentarlo si no apruebas la primera vez"
      ],
      localExample: "Estudiantes de todo El Salvador, desde Apopa hasta Usulutan, estan tomando esta misma evaluacion. ¡Tu eres parte de esta primera generacion!",
      safePrompt: "Ayudame a repasar los conceptos principales del curso de Introduccion a la IA antes de mi evaluacion."
    },
    localContext: {
      hook: "Esta evaluacion marca el final de tu primer paso en el viaje de la IA. Pero el aprendizaje continua - en los proximos cursos y en tu vida diaria.",
      department: "Todo El Salvador"
    },
    responsibleAIReminder: {
      student: "Esta evaluacion es para TI, para medir tu aprendizaje. Hazla con honestidad.",
      teacher: "Considere revisar los resultados de las evaluaciones para identificar areas que necesitan refuerzo."
    },
    whatsAppPayload: {
      summary: "Complete la evaluacion del curso Introduccion a la IA en Salvora. ¡Ahora tengo las bases para usar IA de manera responsable!",
      prompt: "Pregunta: Cuales son los puntos mas importantes que aprendi sobre inteligencia artificial?",
      practiceQuestion: "¿Que fue lo mas sorprendente que aprendiste en este curso?"
    }
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
