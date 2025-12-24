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
  // ===== CURSO 1: FUNDAMENTOS DE IA =====
  // 11 lessons with full National-Scale Lesson Standard content
  // Department rotation: Apopa → San Salvador → Santa Ana → La Libertad → Sonsonate → Usulután → Chalatenango → San Miguel → Ahuachapán → Apopa

  // =====================================================
  // UNIT 1: FUNDAMENTOS DE IA (Lessons 1-4)
  // =====================================================

  "intro-1-bienvenida": {
    transcript: `## Bienvenida: Tu Viaje con la IA

### Por que esto importa

La inteligencia artificial ya toma decisiones que afectan tu vida diaria. Cuando tu telefono sugiere la siguiente palabra que vas a escribir, cuando Netflix te recomienda una pelicula, cuando el banco detecta si alguien esta usando tu tarjeta sin permiso - eso es IA trabajando. El Salvador ha decidido que todos sus ciudadanos entiendan esta tecnologia, no solo los expertos. Salvora existe para que tu seas parte de ese futuro, no un espectador.

### Explicacion paso a paso

**Paso 1: Entiende que es Salvora**

Salvora es la plataforma oficial de El Salvador para aprender sobre inteligencia artificial. El nombre combina "Salvador" con "ahora" - porque el momento de aprender es ahora. A diferencia de videos de YouTube o articulos sueltos, Salvora te guia paso a paso con contenido disenado especificamente para estudiantes y maestros salvadorenos.

**Paso 2: Conoce el contexto historico**

En 2024, El Salvador se convirtio en el primer pais de America Latina en establecer una alianza nacional con xAI, la empresa fundada por Elon Musk. Esta alianza significa que el gobierno salvadoreno esta comprometido a llevar la IA a todas las escuelas publicas. Grok, el asistente de IA de xAI, estara disponible para maestros y estudiantes. Pero antes de usar Grok, necesitas aprender como funciona la IA y como usarla responsablemente.

**Paso 3: Reconoce lo que aprenderas**

En este curso de Fundamentos de IA, cubriras seis areas esenciales: que es la IA y como funciona realmente, la diferencia entre la IA de las peliculas y la IA real, como "piensa" una IA y por que puede equivocarse, los limites de la IA y cuando confiar en ella, como usar la IA para aprender mejor sin hacer trampa, y el papel unico de El Salvador en esta revolucion tecnologica.

### Ejemplo concreto

**Escenario:** Maria es estudiante de 8vo grado en una escuela publica. Tiene que hacer un trabajo sobre los volcanes de El Salvador.

1. **Sin saber usar IA:** Maria le pide a la IA "hazme el trabajo de los volcanes" y copia lo que le da. El maestro se da cuenta porque el texto no suena como ella escribe. Maria saca cero.

2. **Sabiendo usar IA (lo que aprenderas aqui):** Maria le pide a la IA "explicame como se forman los volcanes usando palabras simples". Lee la explicacion, la entiende, y luego escribe el trabajo con sus propias palabras. Cuando tiene dudas, le pregunta a la IA "¿por que el volcan de San Salvador tiene esa forma?" La IA le ayuda a entender, no a copiar. Maria saca buena nota porque demostro que aprendio.

3. **Resultado:** La diferencia no es la IA - es saber usarla. Eso es lo que Salvora te ensena.

### Contexto salvadoreno

**En Apopa:** Salvora comenzo como programa piloto en escuelas de este municipio. Estudiantes de la Escuela Nacional de Apopa fueron los primeros en probar las lecciones y dar retroalimentacion. Una estudiante de 8vo grado, que antes tenia dificultades con matematicas, uso la IA para entender fracciones paso a paso. Hoy ayuda a sus companeros a aprender. Los maestros de Apopa contribuyeron a mejorar las explicaciones para que fueran mas claras. Cuando usas Salvora, estas usando una plataforma moldeada por salvadorenos para salvadorenos.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras una explicacion simple de un concepto que no entiendes
- Cuando necesites ejemplos adicionales para practicar
- Cuando quieras verificar si entendiste algo correctamente

**Por que ayuda:** La IA puede explicar el mismo concepto de diferentes maneras hasta que lo entiendas. Un libro tiene una sola explicacion; la IA puede darte diez si las necesitas.

**Prompt seguro:** "Explicame que es la inteligencia artificial como si fuera un estudiante de secundaria en El Salvador. Usa ejemplos de mi vida diaria como el telefono o las redes sociales."

**Cuidado:** Nunca le pidas a la IA que haga tu tarea completa. Eso no es aprender - es copiar. La IA es tu tutor, no tu reemplazo.

### Errores comunes

1. **Creer que la IA lo sabe todo** → La IA se equivoca, especialmente con datos locales de El Salvador o eventos recientes. Siempre verifica informacion importante con fuentes confiables como periodicos salvadorenos o tus maestros.

2. **Pensar que necesitas ser experto en tecnologia** → No necesitas saber programar ni tener computadora costosa. Si puedes usar un telefono, puedes aprender IA. Salvora esta disenada para principiantes absolutos.

3. **Confundir usar IA con hacer trampa** → Usar IA para entender mejor no es trampa. Copiar respuestas sin entenderlas si lo es. La diferencia esta en tu intencion: ¿quieres aprender o quieres evitar aprender?

### Recordatorio de IA responsable

La IA es una herramienta poderosa, pero tu cerebro es mas poderoso. La IA puede procesar informacion rapidamente, pero no puede pensar criticamente, sentir empatia ni tomar decisiones eticas. Esas habilidades son tuyas. Usa la IA para amplificar tu inteligencia, no para reemplazarla.

### Al terminar esta leccion, puedes...

1. Explicar que es Salvora y por que El Salvador tiene esta plataforma
2. Describir la diferencia entre usar IA para aprender y usar IA para copiar
3. Identificar cuando es apropiado pedir ayuda a una IA`,

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
    transcript: `## Que es la Inteligencia Artificial

### Por que esto importa

Todos hablan de inteligencia artificial, pero pocos pueden explicar que es realmente. Algunos creen que son robots como en las peliculas. Otros piensan que es magia tecnologica. La realidad es mas simple y mas interesante: la IA ya esta en tu bolsillo, en tu casa, en tu escuela. Entender que es te permite usarla mejor y no dejarte enganar por quienes exageran sus capacidades o sus peligros.

### Explicacion paso a paso

**Paso 1: Define la inteligencia artificial**

La Inteligencia Artificial es la capacidad de las computadoras para realizar tareas que normalmente requieren inteligencia humana. Esto incluye entender lenguaje, reconocer imagenes, resolver problemas, aprender de experiencias pasadas y tomar decisiones basadas en informacion. Cuando una computadora hace alguna de estas cosas, decimos que usa "inteligencia artificial".

**Paso 2: Entiende como funciona (sin complicaciones)**

La IA funciona encontrando patrones en grandes cantidades de datos. Imagina que le muestras a una computadora un millon de fotos de gatos. La computadora no "sabe" que es un gato, pero aprende a reconocer patrones: orejas puntiagudas, ojos redondos, bigotes, ciertas formas y colores. Cuando le muestras una foto nueva, busca esos patrones y calcula la probabilidad de que haya un gato.

Esto es crucial: la IA no "piensa" como tu. No entiende nada en el sentido humano. Solo hace calculos muy rapidos sobre probabilidades basadas en patrones que aprendio de millones de ejemplos.

**Paso 3: Reconoce que la IA no es magia**

La IA es matematicas y estadistica aplicadas de manera muy sofisticada. No es magia, no es ciencia ficcion, no son robots conscientes. Son programas de computadora muy avanzados que hacen predicciones. Pueden equivocarse, y de hecho se equivocan con frecuencia. Por eso tu criterio humano sigue siendo esencial.

### Ejemplo concreto

**Escenario:** Tu teclado del telefono mientras escribes un mensaje de WhatsApp.

1. **Lo que ves:** Escribes "Hola, como est-" y el teclado te sugiere "estas", "esta" o "estamos".

2. **Lo que pasa por dentro:** La IA del teclado ha aprendido de millones de mensajes que despues de "como est-" la gente suele escribir "estas" (si habla con alguien directamente), "esta" (si pregunta por otra persona) o "estamos" (si habla de un grupo). Calcula cual es mas probable basandose en tus mensajes anteriores y el contexto.

3. **Por que importa:** Esto demuestra que la IA aprende de datos reales (tus mensajes y los de millones de personas) para hacer predicciones utiles. No "sabe" que significa "como estas" - solo sabe que esas letras suelen ir juntas.

### Contexto salvadoreno

**En San Salvador:** La IA ya trabaja en la vida diaria de la capital sin que la mayorias la note. Los bancos salvadorenos usan IA para detectar transacciones sospechosas en tarjetas de credito. Si alguien intenta usar tu tarjeta de manera inusual, la IA lo detecta y bloquea la transaccion. Las camaras de seguridad en centros comerciales como Metrocentro usan IA para reconocer rostros. Las aplicaciones de trafico como Waze analizan en tiempo real el congestionamiento del Boulevard de los Heroes para sugerirte rutas alternativas. Incluso los hospitales estan comenzando a usar IA para analizar radiografias.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras mas ejemplos de IA en tu vida diaria
- Cuando quieras entender como funciona un sistema especifico de IA
- Cuando quieras verificar si algo que escuchaste sobre IA es verdad o mito

**Por que ayuda:** La IA puede darte ejemplos personalizados y explicarte conceptos de diferentes maneras hasta que los entiendas. Es como tener un tutor disponible las 24 horas.

**Prompt seguro:** "Dame 5 ejemplos de inteligencia artificial que un estudiante de secundaria en El Salvador usa todos los dias sin darse cuenta. Explica cada ejemplo de forma simple."

**Cuidado:** La IA puede inventar ejemplos que suenan bien pero no son reales. Si te da un ejemplo especifico (como "el sistema X del banco Y"), verifica que realmente exista antes de repetirlo.

### Errores comunes

1. **Creer que la IA piensa como humano** → La IA no tiene conciencia, emociones ni deseos. No "entiende" nada. Solo calcula probabilidades basadas en patrones. Cuando parece que "te entiende", esta prediciendo que palabras suelen ir juntas.

2. **Pensar que la IA siempre tiene razon** → La IA funciona por probabilidades, no certezas. Puede equivocarse, especialmente con informacion local, reciente o poco comun. Siempre verifica informacion importante.

3. **Confundir IA con robots fisicos** → La IA es software (programas de computadora), no hardware (maquinas fisicas). Puede existir en tu telefono, en una computadora o en la nube, sin necesitar un cuerpo de robot.

### Recordatorio de IA responsable

La IA es una herramienta, como una calculadora muy avanzada. Asi como no dejarias que una calculadora decida por ti si un precio es justo, no dejes que la IA decida por ti si una informacion es verdadera. Tu criterio humano es irremplazable.

### Al terminar esta leccion, puedes...

1. Explicar que es la inteligencia artificial en palabras simples
2. Identificar al menos 5 ejemplos de IA en tu vida diaria
3. Distinguir entre lo que la IA puede hacer y lo que no puede hacer`,

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
    content: `## Historia de la IA: De Ciencia Ficcion a Realidad

### Por que esto importa

Conocer la historia de la IA te protege de dos extremos peligrosos: creer que la IA es nueva y por lo tanto no se puede confiar, o creer que la IA es tan avanzada que pronto reemplazara a los humanos. La realidad es que la IA tiene 70 anos de historia, con exitos y fracasos. Entender ese recorrido te da perspectiva para evaluar las promesas y los miedos de hoy.

### Explicacion paso a paso

**Paso 1: Los origenes (1950-1956)**

En 1950, el matematico britanico Alan Turing publico un articulo preguntando: ¿Pueden las maquinas pensar? Propuso el "Test de Turing": si una maquina conversa con un humano y este no puede distinguir si habla con maquina o persona, la maquina es "inteligente". En 1956, en una conferencia en Dartmouth College, se uso por primera vez el termino "Inteligencia Artificial". Los cientificos de entonces predijeron que en 20 anos tendriamos maquinas tan inteligentes como humanos. Se equivocaron por mucho.

**Paso 2: Los inviernos de la IA (1970s-1980s)**

Las computadoras de esa epoca eran lentas y costosas. Los programas de IA no cumplian las promesas. El financiamiento se redujo drasticamente. A estos periodos de decepcion les llamamos "inviernos de la IA". Mucha gente perdio la fe. Pero los investigadores persistentes siguieron trabajando en silencio.

**Paso 3: El renacimiento y la explosion (1997-presente)**

En 1997, la computadora Deep Blue derroto al campeon mundial de ajedrez Garry Kasparov. En 2011, Apple lanzo Siri. En 2012, el "deep learning" gano una competencia de imagenes. En 2017, se invento el Transformer, la arquitectura detras de ChatGPT y Grok. En 2022, ChatGPT hizo que millones de personas usaran IA por primera vez. En 2024, El Salvador se convirtio en el primer pais latinoamericano en llevar IA a todas sus escuelas publicas.

### Ejemplo concreto

**Escenario:** Comparemos como ha evolucionado la IA para jugar juegos.

1. **1956:** Los primeros programas de ajedrez apenas podian calcular unos pocos movimientos. Cualquier nino que supiera jugar les ganaba facilmente.

2. **1997:** Deep Blue, una supercomputadora del tamano de un refrigerador, logro vencer al campeon mundial Garry Kasparov. Fue noticia mundial porque por primera vez una maquina superaba al mejor humano en un juego de estrategia.

3. **2023:** Hoy, una aplicacion gratuita de ajedrez en tu telefono puede vencer a cualquier humano del planeta. La IA que antes requeria una supercomputadora ahora cabe en tu bolsillo.

Esta evolucion muestra como 70 anos de trabajo acumulado transformaron lo imposible en cotidiano.

### Contexto salvadoreno

**En Santa Ana:** Asi como el cafe de las montanas de Santa Ana transformo la economia salvadorena en el siglo XIX y creo fortunas, escuelas y desarrollo, la IA tiene el potencial de transformar las oportunidades de los jovenes salvadorenos en el siglo XXI. Los cafetaleros de Santa Ana de hace 150 anos no imaginaban que sus nietos tendrian telefonos inteligentes. Los estudiantes de hoy no pueden imaginar lo que sus nietos tendran. Lo que si pueden hacer es prepararse para ese futuro, siendo los primeros en America Latina en aprender IA formalmente en las escuelas.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras saber mas detalles sobre un evento especifico de la historia de la IA
- Cuando quieras entender como funciona una tecnologia mencionada (deep learning, Transformers)
- Cuando quieras comparar diferentes momentos historicos

**Por que ayuda:** La IA puede contarte la historia de formas diferentes - como cuento, como linea de tiempo, con mas detalles tecnicos - adaptandose a lo que necesitas.

**Prompt seguro:** "Cuentame la historia de la inteligencia artificial desde 1950 hasta hoy como si fuera una historia de aventuras, con sus momentos dificiles y sus triunfos. Explicalo para alguien de 15 anos."

**Cuidado:** Las fechas exactas pueden variar segun la fuente. La IA puede no saber eventos muy recientes (2024-2025). Siempre verifica fechas importantes con fuentes confiables.

### Errores comunes

1. **Creer que la IA es algo nuevo** → La IA tiene 70 anos de historia. Lo nuevo es que ahora es accesible para todos, pero los fundamentos se desarrollaron hace decadas.

2. **Pensar que el progreso es constante** → Hubo "inviernos" donde parecia que la IA habia fracasado. El progreso no es lineal. Esto significa que las predicciones actuales sobre el futuro de la IA tambien podrian estar equivocadas.

3. **Ignorar el rol de los datos y la computacion** → La IA no despego solo por mejores algoritmos, sino porque llegaron Internet (enormes cantidades de datos) y computadoras mas baratas y potentes. El contexto importa tanto como la tecnologia.

### Recordatorio de IA responsable

La historia de la IA esta llena de promesas incumplidas. Los expertos de 1956 predijeron IA igual a humanos para 1976. No sucedio. Cuando escuches predicciones sobre el futuro de la IA, recuerda esta leccion: la tecnologia avanza, pero no siempre como esperamos.

### Al terminar esta leccion, puedes...

1. Explicar los momentos clave en la historia de la IA (1950, 1956, 1997, 2012, 2022)
2. Describir que son los "inviernos de la IA" y por que ocurrieron
3. Contextualizar el momento actual de la IA dentro de 70 anos de desarrollo`,

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
    transcript: `## Tipos de IA: Estrecha, General y Super

### Por que esto importa

Cuando la gente habla de inteligencia artificial, mezcla conceptos muy diferentes. Unos creen que Grok puede hacer cualquier cosa. Otros temen que robots superinteligentes tomaran el control. Ambos estan equivocados. Conocer los tres tipos de IA te permite tener expectativas realistas: ni subestimar la tecnologia que ya tenemos, ni sobrestimar lo que puede hacer.

### Explicacion paso a paso

**Paso 1: IA Estrecha (ANI) - La unica que existe hoy**

La IA Estrecha (ANI por Artificial Narrow Intelligence) es especialista en UNA tarea. Toda la IA que usas hoy es de este tipo. Grok es excelente conversando, pero no puede conducir un carro. El algoritmo de TikTok es genial recomendando videos, pero no puede escribir codigo. La IA que reconoce tu cara en el telefono no puede ayudarte con matematicas. Cada IA Estrecha es como un especialista medico: un cardiologo sabe mucho del corazon, pero no te opera los ojos.

**Paso 2: IA General (AGI) - El objetivo futuro que no existe**

La IA General (AGI por Artificial General Intelligence) seria una IA capaz de hacer CUALQUIER tarea intelectual que un humano puede hacer. Podria aprender nuevas habilidades, resolver problemas nunca vistos, entender emociones y contexto. Aqui esta lo crucial: la AGI NO existe todavia. ChatGPT y Grok parecen muy inteligentes, pero son IA Estrecha muy avanzada, especializada en lenguaje. No pueden hacer todo lo que hace un humano.

**Paso 3: Super Inteligencia (ASI) - Ciencia ficcion por ahora**

La Super Inteligencia Artificial (ASI) seria una IA mas inteligente que todos los humanos en todas las areas. No solo igual, sino superior. ¿Existe? No. ¿Existira? Nadie sabe con certeza. Es tan hipotetica como los viajes en el tiempo. Las peliculas con robots superinteligentes que dominan el mundo hablan de ASI. Eso es ficcion, no realidad.

### Ejemplo concreto

**Escenario:** Comparemos a Grok con un ser humano comun.

1. **Lo que Grok hace mejor que tu:** Puede procesar y generar texto en segundos sobre casi cualquier tema. Puede escribir codigo, resumir documentos largos, traducir idiomas. En tareas de texto, es impresionantemente rapido.

2. **Lo que tu haces y Grok no puede:** Reconocer si tu mama esta triste aunque diga "estoy bien". Decidir si un precio es justo basandote en tu experiencia. Aprender a andar en bicicleta. Sentir el sabor de una pupusa. Grok no tiene cuerpo, no tiene emociones reales, no tiene sentido comun del mundo fisico.

3. **Conclusion:** Grok es IA Estrecha. Extraordinaria en lenguaje, inexistente en todo lo demas. Un humano promedio puede hacer miles de tareas diferentes. Grok solo puede hacer una categoria de tareas.

### Contexto salvadoreno

**En La Libertad:** En las playas de La Libertad hay surfistas profesionales que dominan las olas mejor que casi cualquiera en el mundo. Pero ser campeon de surf no te hace automaticamente buen futbolista, o buen matematico, o buen padre. Los surfistas son especialistas. Asi es exactamente la IA de hoy: Grok es el "campeon de surf" del lenguaje, pero no sabe hacer nada mas. Cuando alguien te diga que la IA "puede hacer todo", recuerda a los surfistas de La Libertad: increibles en su area, pero eso no los hace buenos en otras cosas.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras mas ejemplos de las diferencias entre tipos de IA
- Cuando escuches noticias sobre avances en IA y quieras entender que tipo es
- Cuando quieras explicarle a alguien por que la IA no es como en las peliculas

**Por que ayuda:** La IA puede darte analogias adicionales y explicar conceptos tecnicos de formas mas simples.

**Prompt seguro:** "Explicame la diferencia entre IA Estrecha, IA General y Super Inteligencia usando analogias con deportes o profesiones. Hazlo simple para alguien de 15 anos."

**Cuidado:** Algunas IAs pueden exagerar sus propias capacidades. Si una IA te dice que "puede hacer todo", recuerda esta leccion: es IA Estrecha, aunque muy avanzada.

### Errores comunes

1. **Creer que ChatGPT/Grok es IA General** → No lo son. Son IA Estrecha muy impresionante, especializada en lenguaje. No pueden hacer tareas fuera de su especialidad.

2. **Temer a los robots de las peliculas** → Las peliculas muestran ASI (Super Inteligencia). Eso no existe y nadie sabe si existira. El miedo a robots superinteligentes se basa en ficcion, no en realidad.

3. **Pensar que la IA actual es solo un juguete** → Aunque es "estrecha", la IA actual es muy poderosa en su area. Un "especialista" puede ser extremadamente util si lo usas para lo que sabe hacer.

### Recordatorio de IA responsable

La IA Estrecha es una herramienta poderosa cuando la usas para lo que fue disenada. Pedirle que haga algo fuera de su especialidad dara malos resultados. Conocer sus limites te ayuda a aprovechar sus fortalezas.

### Al terminar esta leccion, puedes...

1. Explicar la diferencia entre IA Estrecha, IA General y Super Inteligencia
2. Identificar que toda la IA que usas hoy (Grok, ChatGPT, Siri) es IA Estrecha
3. Responder cuando alguien exagere lo que la IA puede hacer, con informacion correcta`,

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
    transcript: `## Modelos de Lenguaje: Como Piensa la IA

### Por que esto importa

La mayoria de personas usa Grok o ChatGPT sin entender como funcionan. Esto es como conducir un carro sin saber que necesita gasolina. Cuando entiendes que la IA predice palabras en vez de "pensar", puedes usarla mucho mejor: sabes cuando confiar en ella, cuando verificar, y como hacer preguntas que den buenas respuestas.

### Explicacion paso a paso

**Paso 1: Entiende que es un modelo de lenguaje**

Un modelo de lenguaje es el "cerebro" de asistentes como Grok, ChatGPT o Claude. Es un programa que ha "leido" billones de textos: libros, articulos, conversaciones, paginas web. No memorizo cada oracion, pero aprendio patrones de como funciona el lenguaje humano.

**Paso 2: Comprende como genera respuestas**

Cuando le haces una pregunta, el modelo NO busca la respuesta en una base de datos. En vez de eso, predice cual deberia ser la siguiente palabra, luego la siguiente, y la siguiente, hasta formar una respuesta completa. Es como un juego: "El estudiante abrio su..." - tu cerebro predice "libro" o "cuaderno" porque has visto esa estructura antes. La IA hace esto mismo, pero a escala masiva.

**Paso 3: Reconoce las implicaciones**

Esto explica por que la IA puede sonar muy segura pero estar equivocada - esta prediciendo lo que "suena correcto", no verificando hechos. Por que funciona mejor con contexto - mas informacion le da mas patrones para trabajar. Por que puede no saber de El Salvador - la mayoria de sus textos de entrenamiento son en ingles.

### Ejemplo concreto

**Escenario:** Quieres saber donde comer mariscos.

1. **Pregunta vaga:** "¿Donde puedo comer buenos mariscos?"
   - Respuesta probable: Restaurantes en Miami, Los Angeles, o sitios genericos. La IA no sabe donde estas.

2. **Pregunta con contexto:** "¿Donde puedo comer mariscos frescos en Sonsonate, cerca del puerto de Acajutla? Busco un lugar economico."
   - Respuesta probable: Opciones locales relevantes, precios aproximados, ubicaciones especificas.

3. **Leccion:** El contexto transforma una respuesta generica en una respuesta util. La IA predice mejor cuando tiene mas informacion para trabajar.

### Contexto salvadoreno

**En Sonsonate:** Los pescadores de Acajutla han aprendido a "leer" el mar durante generaciones. Observan patrones en las olas, las corrientes, el color del agua, para predecir donde habra peces. No entienden cada molecula de agua, pero reconocen patrones que funcionan. Los modelos de lenguaje hacen algo similar: no "entienden" el espanol como tu, pero reconocen patrones tan bien que pueden predecir que palabras deberian seguir. El pescador no garantiza que encontrara peces; la IA no garantiza que su respuesta sea correcta. Ambos trabajan con probabilidades basadas en patrones.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras entender mejor un concepto tecnico sobre IA
- Cuando quieras saber como mejorar tus preguntas para obtener mejores respuestas
- Cuando quieras verificar si entendiste bien como funciona la IA

**Por que ayuda:** Ironicamente, la IA es buena explicando como funciona la IA. Puede darte analogias diferentes hasta que entiendas.

**Prompt seguro:** "Explicame como funcionan los modelos de lenguaje como Grok usando una analogia simple. Imagina que soy un estudiante de secundaria que nunca ha tomado clases de computacion."

**Cuidado:** La IA puede hacer que su funcionamiento suene mas "inteligente" o "consciente" de lo que realmente es. Recuerda: predice patrones, no "piensa".

### Errores comunes

1. **Creer que la IA "busca" respuestas** → No hay base de datos de respuestas. La IA genera texto nuevo prediciendo palabra por palabra. Por eso puede inventar informacion que suena correcta.

2. **No dar contexto suficiente** → La IA no sabe quien eres, donde vives, ni que necesitas. Mientras mas contexto le des, mejores respuestas obtendras.

3. **Asumir que recordara conversaciones anteriores** → Cada conversacion nueva empieza desde cero. La IA no "recuerda" lo que hablaste ayer.

### Recordatorio de IA responsable

La IA no tiene acceso a informacion secreta ni a verdades absolutas. Solo predice patrones basados en textos que leyo durante su entrenamiento. Eres tu quien debe verificar si lo que dice es correcto para tu situacion especifica.

### Al terminar esta leccion, puedes...

1. Explicar que los modelos de lenguaje predicen palabras, no "piensan" como humanos
2. Describir por que dar contexto mejora las respuestas de la IA
3. Identificar por que la IA puede equivocarse con confianza`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "¿Como crees que 'piensa' un robot o una computadora?",
        prompt: "Pregunta a tus estudiantes si creen que las computadoras piensan como nosotros. Escucha 2-3 respuestas.",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Cuentale a tu companero: ¿Que es lo mas sorprendente que aprendiste sobre como 'piensa' la IA?",
        pairWork: true,
        timer: 90
      }
    }
  },

  "intro-2-entrenamiento": {
    content: `## Como Aprende una IA: Datos y Entrenamiento

### Por que esto importa

Entender como aprende una IA te permite usarla mejor y detectar cuando se equivoca. La IA no nacio sabiendo - alguien la "entreno" con datos, y esos datos definen todo lo que sabe y no sabe. Cuando una IA da una respuesta incorrecta sobre El Salvador, probablemente es porque nadie le enseno sobre nuestro pais. Conocer este proceso te hace un usuario mas inteligente.

### Explicacion paso a paso

**Paso 1: Recolectar datos masivos**

Imagina que quieres ensenarle espanol a una persona que nunca ha escuchado el idioma. ¿Cuanto texto necesitarias? Miles de libros, articulos, conversaciones. Ahora multiplica eso por mil - esa es la cantidad de datos que usa una IA. Los ingenieros recopilan billones de palabras de libros, paginas web, articulos cientificos, y conversaciones. Hablamos de mas texto del que cualquier humano podria leer en mil vidas.

**Paso 2: Limpiar los datos**

No todo texto sirve para entrenar una IA. Hay que quitar spam, contenido danino, errores graves, y textos de mala calidad. Es como limpiar arroz antes de cocinarlo - solo quieres los granos buenos. Si dejas basura, la IA aprendera basura. Este proceso se llama "curado de datos" y requiere equipos de personas revisando y filtrando contenido.

**Paso 3: El entrenamiento real**

Aqui viene la magia. La IA "lee" todo ese texto y busca patrones. Su tarea principal es simple pero poderosa: predecir la siguiente palabra. Por ejemplo, si la frase es "El Salvador es un pais de America ___", la IA intenta adivinar "Central". Al principio falla mucho. Pero practica millones de veces hasta que se vuelve muy buena prediciendo. Esta prediccion constante es lo que le da su capacidad de generar texto coherente.

**Paso 4: Ajuste fino (fine-tuning)**

Despues del entrenamiento general, la IA recibe entrenamiento especifico para ser util y segura. Le ensenan a ser educada, a admitir cuando no sabe algo, a rechazar peticiones daninas, y a dar respuestas utiles. Es como la diferencia entre un estudiante que sabe mucho y uno que sabe mucho Y sabe explicar bien.

### Ejemplo concreto

**Escenario:** Un maestro de Usulutan quiere usar la IA para crear material sobre volcanes salvadorenos.

1. **El maestro pregunta:** "Hablame del Volcan de Usulutan."

2. **La IA responde vagamente:** Da informacion generica sobre volcanes porque no tiene datos especificos sobre volcanes de la zona oriental de El Salvador en su entrenamiento.

3. **El maestro entiende el problema:** La IA fue entrenada principalmente con textos en ingles sobre volcanes famosos como el Vesuvio o el Monte Fuji. Los volcanes salvadorenos aparecen poco en sus datos.

4. **Solucion:** El maestro reformula: "Explicame como se forman los volcanes y dame ejemplos que yo pueda adaptar para estudiantes de El Salvador." Ahora usa la IA para conceptos generales y anade el contexto local el mismo.

5. **Resultado:** El maestro obtiene una explicacion cientifica solida y la personaliza con ejemplos del Volcan de San Salvador, Chaparrastique, y otros que conoce mejor que la IA.

### Contexto salvadoreno

**En Usulutan:** Los agricultores de Usulutan tienen conocimiento generacional sobre sus cultivos - saben cuando plantar maiz, como detectar plagas, que senales del clima observar. Este conocimiento existe en sus cabezas y conversaciones, no en libros digitales que la IA pueda leer. Por eso, si le preguntas a una IA sobre agricultura en Usulutan, probablemente dara consejos genericos que no aplican al clima ni suelos especificos de la zona. La IA sabe mucho sobre agricultura en Iowa, Estados Unidos, porque hay muchos datos de esa region. Sabe poco de Usulutan porque hay pocos datos. La oportunidad: si documentamos el conocimiento agricola salvadoreno, las futuras IAs podran ayudar mejor a nuestros agricultores.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras entender como funcionan tecnologias de IA en general
- Cuando necesites explicaciones de conceptos tecnicos en palabras simples
- Cuando quieras comparar diferentes tipos de IA o metodos de entrenamiento

**Por que ayuda:** La IA puede explicar conceptos tecnicos complejos de maneras simples. Puede darte analogias, ejemplos, y responder preguntas de seguimiento hasta que entiendas.

**Prompt seguro:** "Explicame como se entrena una inteligencia artificial usando una analogia con algo que conozco, como aprender a cocinar o practicar un deporte."

**Cuidado:** La IA puede explicar como funciona el entrenamiento, pero no puede decirte exactamente con que datos fue entrenada. Si te da informacion muy especifica sobre su entrenamiento, verifica - a veces inventa detalles.

### Errores comunes

1. **Creer que la IA "entiende" como nosotros** → La IA encuentra patrones estadisticos en texto. No entiende conceptos como tu los entiendes. Cuando dice "el fuego es peligroso", no sabe que es el calor ni que es el dolor. Solo sabe que esas palabras suelen aparecer juntas.

2. **Asumir que todos los datos son iguales** → La mayoria de datos de entrenamiento son en ingles, de paises ricos. Por eso la IA sabe mas de Nueva York que de San Salvador. No es maldad - es estadistica.

3. **Pensar que mas datos siempre es mejor** → Datos de mala calidad producen IAs de mala calidad. Es mejor tener menos datos pero correctos que muchos datos con errores.

### Practica con razonamiento

**Pregunta 1:** ¿Por que una IA puede saber poco sobre pupusas?
- A) Porque le prohibieron aprender sobre El Salvador
- B) Porque hay pocos textos sobre pupusas en sus datos de entrenamiento
- C) Porque las pupusas son un secreto nacional
- D) Porque la IA prefiere comida de otros paises

**Respuesta:** B - La IA aprende de textos. Si hay millones de paginas sobre hamburguesas y pocas sobre pupusas, la IA sabra mas de hamburguesas. No hay preferencia ni prohibicion - es simple matematica de datos.

**Pregunta 2:** ¿Que significa "basura entra, basura sale"?
- A) Las computadoras generan mucha basura fisica
- B) Datos de mala calidad producen respuestas de mala calidad
- C) Hay que reciclar las computadoras viejas
- D) La IA contamina el medio ambiente

**Respuesta:** B - Si entrenas una IA con datos incorrectos, sesgados, o de mala calidad, sus respuestas tendran esos mismos problemas. La calidad del entrenamiento determina la calidad del resultado.

**Pregunta 3:** ¿Que es el "ajuste fino" (fine-tuning)?
- A) Hacer la IA mas pequena
- B) Entrenamiento adicional para que sea util y segura
- C) Ponerle mejor conexion a internet
- D) Agregarle una camara

**Respuesta:** B - Despues del entrenamiento general con datos masivos, la IA recibe entrenamiento especifico para ser educada, rechazar contenido danino, y dar respuestas utiles. Es como la diferencia entre saber mucho y saber comunicar bien.

### Recordatorio de IA responsable

La IA aprende de datos creados por humanos. Si esos datos tienen errores o prejuicios, la IA los hereda. No culpes a la IA por reflejar los problemas de la sociedad - pero tampoco confies ciegamente en sus respuestas. Tu trabajo es verificar, especialmente cuando se trata de tu pais, tu cultura, y tu contexto.

### Al terminar esta leccion, puedes...

1. Explicar los cuatro pasos del entrenamiento de una IA (datos, limpieza, entrenamiento, ajuste fino)
2. Entender por que la IA puede saber poco sobre El Salvador y como compensar eso
3. Identificar cuando la respuesta de una IA refleja limitaciones de sus datos, no falta de inteligencia`,

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
    transcript: `## Conoce a Grok: Tu Asistente de IA

### Por que esto importa

Grok es el asistente de IA que usaras en las escuelas salvadorenas gracias a la alianza historica entre El Salvador y xAI. No es cualquier chatbot - es una herramienta disenada para ayudarte a aprender, no para hacer tu trabajo por ti. Conocer sus capacidades y limitaciones te permite usarlo como aliado de aprendizaje en lugar de muleta para evitar pensar.

### Explicacion paso a paso

**Paso 1: Entiende que es xAI**

xAI es una empresa de inteligencia artificial fundada por Elon Musk en 2023. Si, el mismo Elon Musk de Tesla, SpaceX, y X (antes llamado Twitter). Musk creo xAI con un objetivo ambicioso: desarrollar una IA que busque entender el universo y sea genuinamente util para la humanidad. A diferencia de otras empresas de IA, xAI se enfoca en transparencia y en responder preguntas dificiles que otros asistentes podrian evitar.

**Paso 2: Conoce las caracteristicas de Grok**

Grok tiene tres ventajas principales sobre otros asistentes de IA. Primero, tiene acceso a informacion en tiempo real a traves de X, lo que significa que puede saber que esta pasando hoy, no solo lo que paso antes de su fecha de entrenamiento. Segundo, tiene personalidad - responde con humor y sarcasmo cuando es apropiado, lo que hace las conversaciones mas naturales. Tercero, esta dispuesto a abordar temas controversiales de manera responsable, sin simplemente rechazar preguntas dificiles.

**Paso 3: Entiende la alianza con El Salvador**

El Salvador es el primer pais de America Latina en llevar herramientas de IA a escuelas publicas de manera sistematica. xAI eligio El Salvador por varias razones: el pais ha demostrado apertura a la innovacion tecnologica (fue el primero en adoptar Bitcoin como moneda legal), es lo suficientemente pequeno para medir impacto, y puede servir de modelo para toda la region. Esta alianza significa que tu, como estudiante salvadoreno, tienes acceso a la misma tecnologia que estudiantes en paises desarrollados.

**Paso 4: Aprende la diferencia entre usar y abusar**

Usar Grok para aprender es correcto. Usar Grok para evitar aprender es trampa que solo te perjudica a ti. La diferencia esta en tu intencion: ¿quieres entender o quieres copiar? Ejemplo correcto: "Grok, explicame las fracciones de tres formas diferentes porque no entiendo." Ejemplo incorrecto: "Grok, resuelve estos 20 ejercicios de fracciones que tengo de tarea." En el primer caso, aprendes. En el segundo, solo pospones no saber.

### Ejemplo concreto

**Escenario:** Andrea es estudiante de 9no grado en Chalatenango y tiene examen de historia manana.

1. **El problema:** Andrea no entiende las causas de la independencia de Centroamerica. El libro usa lenguaje complicado.

2. **Intento incorrecto:** Le pide a Grok "Dame un resumen para copiar en el examen." Grok le da un texto, ella lo memoriza sin entender. En el examen, cuando le preguntan algo diferente, no sabe responder.

3. **Intento correcto:** Le pide a Grok "Soy estudiante de 9no en El Salvador. Explicame las tres causas principales de la independencia de 1821 como si se las explicaras a alguien de mi edad. Despues hazme preguntas para ver si entendi."

4. **Lo que pasa:** Grok le explica en lenguaje simple. Luego le hace preguntas. Andrea se da cuenta que no entendio la segunda causa, y pide que le explique de otra forma.

5. **Resultado:** Andrea no memorizo un texto - entendio los conceptos. En el examen puede responder preguntas que nunca habia visto porque entiende la logica, no solo los datos.

### Contexto salvadoreno

**En Chalatenango:** Imagina a un estudiante en La Palma, en las montanas de Chalatenango, a dos horas de la capital. Antes de Grok, si no entendia algo y su maestro no podia explicarlo de otra forma, se quedaba sin opciones. Tal vez sus papas no terminaron la escuela y no pueden ayudarlo. Ahora, con Grok y Salvora, tiene un tutor disponible en cualquier momento. No reemplaza al maestro - lo complementa. La promesa de Salvora es que un estudiante en La Palma tenga las mismas oportunidades de aprendizaje que uno en San Salvador. La geografia ya no determina el acceso al conocimiento.

### Usalo con IA

**Cuando usar Grok para este tema:**
- Cuando quieras entender un concepto de varias formas diferentes
- Cuando necesites practicar para un examen con preguntas personalizadas
- Cuando tengas ideas para un proyecto y quieras organizarlas
- Cuando quieras mejorar tu escritura con sugerencias especificas

**Por que ayuda:** Grok es como tener un tutor personal ilimitado. No se cansa, no se impacienta, y puede explicar lo mismo de cien formas hasta que entiendas. La diferencia con un tutor humano es que Grok no puede evaluar si realmente estas aprendiendo - eso depende de tu honestidad contigo mismo.

**Prompt seguro:** "Hola Grok, soy estudiante de [grado] en El Salvador. Estoy aprendiendo sobre [tema]. Puedes explicarme [concepto especifico] de manera simple y luego hacerme preguntas para verificar si entendi?"

**Cuidado:** Nunca compartas informacion personal con Grok (direccion, contrasenas, datos de tu familia). Y recuerda que Grok puede equivocarse - siempre verifica informacion importante con tu maestro o fuentes confiables.

### Errores comunes

1. **Confundir "acceso a informacion" con "siempre tiene razon"** → Aunque Grok tiene acceso a informacion reciente, eso no significa que toda su informacion es correcta. Puede leer noticias falsas igual que nosotros. Verifica siempre.

2. **Usar Grok solo cuando hay tarea** → Grok es mas util para explorar curiosidades, no solo para resolver obligaciones. Preguntale sobre cosas que te interesan - deportes, musica, ciencia. Aprender por gusto es mejor que aprender por obligacion.

3. **Esperar que Grok reemplace al maestro** → Grok no conoce tu contexto escolar, no sabe que vieron en clase, no puede leer tu lenguaje corporal. Tu maestro sigue siendo esencial. Grok es un complemento, no un reemplazo.

### Practica con razonamiento

**Pregunta 1:** ¿Que hace diferente a Grok de otros asistentes de IA?
- A) Es mas caro
- B) Tiene acceso a informacion en tiempo real
- C) Solo habla ingles
- D) No puede responder preguntas dificiles

**Respuesta:** B - Grok puede acceder a informacion actualizada a traves de X, mientras otros asistentes como ChatGPT tienen una fecha de corte despues de la cual no saben nada.

**Pregunta 2:** ¿Por que xAI eligio El Salvador para su alianza educativa?
- A) Porque es el pais mas grande de America Latina
- B) Por su apertura a la innovacion y por poder servir de modelo regional
- C) Porque tiene el internet mas rapido
- D) Porque no hay otras opciones

**Respuesta:** B - El Salvador ha demostrado apertura a nuevas tecnologias y es un pais donde se puede medir impacto para luego expandir a toda America Latina.

**Pregunta 3:** ¿Cual es la diferencia clave entre usar y abusar de Grok?
- A) Cuantas horas lo usas
- B) Si lo usas para entender o para evitar aprender
- C) Si pagas o no por usarlo
- D) El tipo de dispositivo que usas

**Respuesta:** B - La intencion importa. Usar Grok para entender mejor es correcto. Usarlo para copiar respuestas sin aprender es abuso que solo te perjudica a ti.

**Pregunta 4:** ¿Que NO deberias hacer con Grok?
- A) Pedirle que te explique conceptos dificiles
- B) Practicar para examenes con preguntas
- C) Compartir tu direccion y datos personales
- D) Explorar temas que te interesan

**Respuesta:** C - Nunca compartas informacion personal con ninguna IA. Direcciones, contrasenas, datos familiares deben permanecer privados.

### Recordatorio de IA responsable

Grok es una herramienta poderosa, pero tu eres mas poderoso. La IA puede darte informacion rapidamente, pero no puede decidir por ti que hacer con esa informacion. Tu criterio, tu etica, y tu esfuerzo son irreemplazables. Usa Grok para crecer, no para atajar.

### Al terminar esta leccion, puedes...

1. Explicar que es xAI y por que creo Grok con caracteristicas distintas a otros asistentes
2. Distinguir entre uso responsable y abuso de la IA para aprendizaje
3. Formular un primer prompt efectivo para iniciar una conversacion productiva con Grok`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "¿Has usado un chatbot o asistente virtual antes? ¿Cual?",
        prompt: "Pregunta si han usado Siri, Alexa, ChatGPT, o cualquier asistente. Escucha sus experiencias.",
        discussionTime: 45
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "En parejas, piensen: ¿Como podria Grok ayudarles a estudiar mejor sin hacer trampa?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "intro-2-prompts": {
    content: `## Como Hablar con la IA: Prompts Efectivos

### Por que esto importa

La forma en que le hablas a la IA determina completamente la calidad de sus respuestas. No es magia - es comunicacion clara. Un estudiante que sabe escribir buenos prompts obtendra respuestas diez veces mejores que uno que pregunta vagamente, aunque ambos tengan acceso a la misma IA. Esta habilidad te da ventaja en cualquier trabajo futuro que involucre tecnologia - y la mayoria de trabajos la involucraran.

### Explicacion paso a paso

**Paso 1: Entiende que es un prompt**

Un prompt es simplemente la instruccion o pregunta que le das a la IA. Puede ser una oracion o varios parrafos. La IA no lee tu mente - solo lee lo que escribes. Si tu prompt es vago, la respuesta sera vaga. Si tu prompt es claro y especifico, la respuesta sera clara y especifica. Es como pedir comida: "Dame algo" te dara cualquier cosa; "Dame dos pupusas de queso con curtido y poca salsa" te da exactamente lo que quieres.

**Paso 2: Domina los 5 elementos de un buen prompt**

Primer elemento: CONTEXTO. Dile a la IA quien eres y por que preguntas. "Soy estudiante de 8vo grado preparando un examen" cambia completamente como la IA te responde.

Segundo elemento: ESPECIFICIDAD. Se exacto sobre lo que necesitas. "Explicame 3 causas de la independencia de 1821" es mejor que "Hablame de historia".

Tercer elemento: FORMATO. Pide como quieres la respuesta. "Dame una lista de 5 puntos", "Explicalo en 2 parrafos", "Hazme una tabla comparativa".

Cuarto elemento: RESTRICCIONES. Di lo que NO quieres. "No uses palabras dificiles", "Mantenlo en 100 palabras o menos", "No incluyas formulas".

Quinto elemento: EJEMPLOS. Si puedes, muestra lo que buscas. "Quiero algo como esto: [ejemplo]" ayuda mucho.

**Paso 3: Aprende a iterar**

No tienes que obtener la respuesta perfecta al primer intento. Puedes seguir conversando: "Eso esta bien, pero hazlo mas simple", "Ahora dame un ejemplo de El Salvador", "Explicalo de otra forma". Esto se llama iteracion - ir mejorando paso a paso. Los profesionales de IA pasan mas tiempo iterando que escribiendo el primer prompt.

**Paso 4: Usa la plantilla de oro**

Hay una formula que funciona para casi cualquier pregunta: "Soy estudiante de [grado] en El Salvador. Necesito entender [tema] para [proposito]. Explicamelo de forma simple con ejemplos de la vida cotidiana. [Restriccion adicional]." Esta plantilla incluye contexto, especificidad, formato y restricciones automaticamente.

### Ejemplo concreto

**Escenario:** Carlos, estudiante de 9no en San Miguel, tiene que hacer una presentacion sobre volcanes.

**Prompt malo:** "Que es un volcan?"

**Respuesta vaga:** La IA da una definicion de enciclopedia de 500 palabras que Carlos no puede usar directamente.

**Prompt bueno:** "Soy estudiante de 9no grado en San Miguel, El Salvador. Necesito hacer una presentacion de 5 minutos sobre volcanes para mi clase de ciencias. Dame 4 puntos principales que debo incluir, usando el Chaparrastique de San Miguel como ejemplo. Cada punto debe tener una oracion simple que pueda memorizar."

**Respuesta util:** La IA da 4 puntos claros, usa el volcan local como ejemplo, y las oraciones son del tamano adecuado para una presentacion.

**Lo que paso:** El segundo prompt incluye contexto (estudiante de 9no, presentacion de 5 minutos), especificidad (4 puntos, volcan Chaparrastique), formato (oraciones para memorizar), y restricciones (oraciones simples). La IA sabe exactamente que entregar.

### Contexto salvadoreno

**En San Miguel:** Los estudiantes de San Miguel viven a la sombra del Chaparrastique, uno de los volcanes mas activos de El Salvador. Cuando un estudiante de aca pregunta sobre volcanes, tiene un laboratorio natural en su patio. Un buen prompt aprovecha esto: "Explicame la actividad volcanica usando el Chaparrastique como ejemplo. Vivo en San Miguel y veo el volcan todos los dias, asi que usa ejemplos que pueda verificar." Este nivel de contexto local convierte una respuesta generica sobre volcanes en una explicacion relevante para tu vida real.

### Usalo con IA

**Cuando usar buenos prompts:**
- Siempre que hagas una pregunta a la IA
- Especialmente cuando la primera respuesta no te sirve
- Cuando necesitas algo muy especifico para una tarea

**Por que ayuda:** Un buen prompt ahorra tiempo. En lugar de hacer 5 preguntas vagas, una pregunta clara te da lo que necesitas al primer intento. Ademas, la habilidad de escribir prompts claros es la misma habilidad de pensar claramente - te beneficia mas alla de la IA.

**Prompt seguro:** "Soy estudiante de [grado] en [lugar de El Salvador]. Necesito entender [tema especifico] para [proposito concreto]. Explicamelo en [formato deseado] usando [restricciones]. Dame un ejemplo de [contexto local]."

**Cuidado:** Un prompt muy largo puede confundir a la IA igual que uno muy corto. Busca el balance: suficiente contexto para ser claro, pero no tanto que se pierda el punto principal.

### Errores comunes

1. **Ser demasiado vago y esperar respuestas precisas** → "Ayudame con matematicas" puede darte desde aritmetica basica hasta calculo avanzado. La IA no sabe que necesitas. Especifica: "No entiendo como resolver ecuaciones de primer grado con una variable."

2. **Pedir demasiado en un solo prompt** → "Explicame toda la historia de El Salvador desde los mayas hasta hoy" es demasiado. Divide en partes: empieza con una era, luego pregunta por la siguiente.

3. **No iterar cuando la respuesta no sirve** → Si la primera respuesta es muy complicada, no abandones. Di "Eso es muy dificil, explicalo como si tuviera 12 anos" y la IA ajustara.

### Practica con razonamiento

**Pregunta 1:** ¿Cual prompt dara una respuesta mas util?
- A) "Dime sobre ciencia"
- B) "Soy estudiante de 7mo. Explicame la gravedad en 3 puntos simples."
- C) "Ciencia para ninos"
- D) "Todo sobre el universo"

**Respuesta:** B - Incluye contexto (7mo grado), especificidad (gravedad, no toda la ciencia), y formato (3 puntos). La IA sabe exactamente que entregar.

**Pregunta 2:** ¿Que falta en "Explicame la fotosintesis"?
- A) Emojis
- B) Contexto sobre quien pregunta y para que
- C) Mas palabras
- D) La palabra "por favor"

**Respuesta:** B - Sin contexto, la IA no sabe si explicar para primaria o para universidad. El nivel de complejidad depende de quien pregunta.

**Pregunta 3:** Si la respuesta de la IA es muy complicada, ¿que deberias hacer?
- A) Rendirte
- B) Copiarla aunque no entiendas
- C) Iterar: pedir que la simplifique
- D) Quejarte

**Respuesta:** C - Puedes decir "Eso es muy complicado, explicalo mas simple" o "Explicalo como si fuera para un nino de 10 anos". La IA ajustara.

**Pregunta 4:** ¿Cual es una buena restriccion para una tarea escolar?
- A) "Hazlo lo mas largo posible"
- B) "Usa maximo 100 palabras y evita terminos tecnicos"
- C) "No me importa"
- D) "Responde en japones"

**Respuesta:** B - Las restricciones de longitud y nivel de lenguaje aseguran que la respuesta sea adecuada para tu proposito.

### Recordatorio de IA responsable

Escribir buenos prompts no es hacer trampa - es comunicacion efectiva. La habilidad de expresar claramente lo que necesitas es valiosa en cualquier contexto, no solo con IA. Cuando escribes un buen prompt, estas practicando pensamiento claro. Pero recuerda: el objetivo es entender la respuesta, no solo obtenerla.

### Al terminar esta leccion, puedes...

1. Escribir prompts que incluyan los 5 elementos clave (contexto, especificidad, formato, restricciones, ejemplos)
2. Iterar sobre respuestas de IA para obtener exactamente lo que necesitas
3. Identificar por que un prompt vago da resultados pobres y como mejorarlo`,

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
      hook: "Un estudiante de San Miguel que sabe escribir buenos prompts obtendra mejores respuestas que uno de San Salvador que no sabe. La habilidad de comunicarte con la IA es tu ventaja competitiva - y viviendo cerca del Chaparrastique, puedes dar contexto local unico.",
      department: "San Miguel"
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
    transcript: `## Los Limites de la Inteligencia Artificial

### Por que esto importa

Conocer los limites de la IA es tan importante como conocer sus capacidades. Un usuario ingenuo cree todo lo que la IA dice y depende de ella para todo. Un usuario inteligente sabe cuando confiar, cuando verificar, y cuando la IA simplemente no puede ayudar. Esta leccion te convierte en el segundo tipo de usuario - el que usa la IA como herramienta, no como oraculo infalible.

### Explicacion paso a paso

**Paso 1: La IA no tiene conciencia ni emociones**

Cuando Grok te responde, no esta "pensando" - esta calculando la siguiente palabra mas probable. No siente satisfaccion al ayudarte ni frustracion cuando no te entiende. No tiene experiencias subjetivas. Esto parece abstracto, pero tiene consecuencias practicas: no puedes "convencer" a la IA con argumentos emocionales, no la puedes herir, y no necesitas ser cortés por obligacion social (aunque ser claro siempre ayuda).

**Paso 2: La IA no entiende, solo imita**

Cuando lees "el cielo esta azul", tu mente evoca el color, quizas memorias de tardes soleadas en tu pueblo. La IA no "ve" el cielo ni recuerda nada. Solo sabe que las palabras "cielo" y "azul" frecuentemente aparecen juntas en textos. Por eso puede escribir poesia sobre el amor sin haber amado, o describir el dolor sin haberlo sentido. Imita patrones linguisticos con precision, pero no comprende las experiencias detras de las palabras.

**Paso 3: La IA puede "alucinar" - inventar cosas falsas**

Este es un limite critico. La IA puede inventar informacion completamente falsa y presentarla con total confianza. Los expertos llaman a esto "alucinaciones". La IA podria decirte que un libro existe (con titulo, autor, editorial, y resumen convincente) cuando ese libro nunca fue escrito. No esta mintiendo a proposito - simplemente predijo palabras que suenan correctas sin poder verificar si son verdaderas.

**Paso 4: La IA carece de sentido comun**

Si le dices a un amigo "quiero volar a la escuela", entendera que es una metafora o un deseo imaginario. La IA podria darte informacion sobre vuelos comerciales. No tiene el contexto de vida que los humanos acumulamos naturalmente. Otro ejemplo: si le cuentas que tu mascota murio, puede darte consejos tecnicamente correctos sobre como procesarlo, pero no captara el peso emocional real de tu experiencia.

### Ejemplo concreto

**Escenario:** Sofia, estudiante de 8vo grado en Ahuachapan, esta investigando sobre el cafe salvadoreno para una tarea.

1. **Sofia pregunta:** "Dame la historia del cafe en Ahuachapan, incluyendo la primera finca y su fundador."

2. **La IA responde con confianza:** Inventa el nombre de una finca ("Hacienda Los Ceibos") y un fundador ("Don Antonio Melendez, 1847") que suenan perfectamente creibles.

3. **El problema:** Esta informacion es inventada. La IA no tiene acceso a archivos historicos de Ahuachapan. Genero una respuesta que suena correcta basandose en patrones de como se escribe historia.

4. **Lo que Sofia debio hacer:** Verificar con fuentes locales - preguntarle a su maestro, buscar en la biblioteca municipal, o consultar a ancianos de la comunidad que conocen la historia real.

5. **Leccion:** La IA es util para entender conceptos generales (como funciona el cultivo del cafe), pero no para datos historicos especificos que necesitan verificacion.

### Contexto salvadoreno

**En Ahuachapan:** Los caficultores de Ahuachapan conocen sus tierras por generaciones de experiencia. Saben cual cerro da mejor grano, cuando las lluvias cambian de patron, que plagas aparecen cada temporada. Este conocimiento vive en las familias y comunidades, no en los datos de entrenamiento de ninguna IA. Si le preguntas a Grok sobre tu finca especifica, puede darte consejos genericos sobre cafe. Pero tu abuelo, que ha trabajado esas tierras por 50 anos, tiene un conocimiento que ninguna IA puede replicar. La IA complementa el conocimiento local - no lo reemplaza.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras entender conceptos generales que la IA explica bien
- Cuando necesites contrastar informacion que puedes verificar despues
- Cuando busques ejemplos ilustrativos, no datos precisos

**Por que ayuda:** La IA es excelente para explicar conceptos abstractos, dar ejemplos genericos, y ayudarte a organizar ideas. Los limites estan en datos especificos, informacion local, y cualquier cosa que requiera verificacion factual.

**Prompt seguro:** "Explicame [concepto general] de manera simple. No necesito datos especificos - solo quiero entender como funciona."

**Cuidado:** Nunca uses informacion de IA para algo importante (una tarea, una decision, una presentacion) sin verificarla primero. La IA no sabe que esta equivocada cuando lo esta.

### Errores comunes

1. **Creer que la confianza de la IA significa precision** → La IA presenta informacion inventada con la misma confianza que informacion correcta. No puede distinguir entre las dos. Tu si puedes - verificando.

2. **Asumir que la IA entiende tu contexto** → La IA no sabe que vives en Ahuachapan, que tu familia cultiva cafe, o que tienes un examen manana. Solo sabe lo que le dices explicitamente.

3. **Pensar que la IA es creativa como un humano** → La IA recombina patrones existentes. No puede tener una idea genuinamente nueva basada en experiencias vividas que nunca ha tenido.

### Practica con razonamiento

**Pregunta 1:** ¿Tiene la IA emociones o conciencia?
- A) Si, siente alegria cuando ayuda
- B) No, solo calcula probabilidades sin experiencia subjetiva
- C) A veces, depende de la pregunta
- D) Si, pero las oculta

**Respuesta:** B - La IA procesa informacion estadisticamente. No hay "alguien" adentro que sienta o piense. Cuando parece empatica, esta imitando patrones de texto empatico.

**Pregunta 2:** ¿Que son las "alucinaciones" de la IA?
- A) Cuando la IA tiene suenos
- B) Cuando la IA inventa informacion falsa presentandola como verdadera
- C) Cuando la IA ve imagenes
- D) Cuando la IA se confunde temporalmente

**Respuesta:** B - Las alucinaciones son inventos de la IA - datos, nombres, fechas, libros que no existen - presentados con total confianza. Es un limite fundamental de como funciona.

**Pregunta 3:** ¿Por que la IA puede escribir poesia sobre el amor sin haberlo sentido?
- A) Porque la IA si siente amor
- B) Porque imita patrones de texto romantico sin comprender la experiencia
- C) Porque copio poemas de otros
- D) Porque estudio libros de poesia

**Respuesta:** B - La IA encuentra patrones en miles de textos romanticos y los recombina. No entiende la experiencia del amor - solo como se escribe sobre el.

**Pregunta 4:** ¿Cual es tu responsabilidad cuando usas informacion de la IA?
- A) Creer todo sin cuestionar
- B) Verificar informacion importante antes de usarla
- C) Solo usar IA para juegos
- D) Nunca usar IA

**Respuesta:** B - Tu eres responsable de verificar. La IA es una herramienta, no una autoridad. Las consecuencias de usar informacion incorrecta recaen sobre ti, no sobre la IA.

### Recordatorio de IA responsable

Los limites de la IA son tambien tu oportunidad. Las cosas que la IA no puede hacer - sentir, vivir, crear desde experiencia, verificar verdades, tener sentido comun - son exactamente las cosas que te hacen valioso como humano. No compitas con la IA en lo que ella hace bien. Usa la IA para amplificar lo que tu haces bien.

### Al terminar esta leccion, puedes...

1. Identificar al menos 5 limitaciones fundamentales de la inteligencia artificial
2. Detectar cuando una respuesta de IA podria ser una "alucinacion" y necesita verificacion
3. Explicar por que el conocimiento humano local complementa pero no es reemplazado por la IA`,

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
      hook: "En Ahuachapan, los caficultores conocen sus tierras por generaciones de experiencia. Saben cuando cambian las lluvias y que plagas aparecen cada temporada. La IA puede tener muchos datos, pero nunca tendra esa sabiduria vivida.",
      department: "Ahuachapan"
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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "¿Crees que la IA puede hacer TODO? ¿Hay algo que no pueda hacer?",
        prompt: "Haga una lluvia de ideas sobre cosas que creen que la IA puede y no puede hacer. Escriba las respuestas en la pizarra.",
        discussionTime: 60
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Menciona a tu companero 3 cosas que la IA NO puede hacer. ¿Por que es importante saberlo?",
        pairWork: true,
        timer: 90
      }
    }
  },

  "intro-3-etica": {
    content: `## Etica y IA: Decisiones Responsables

### Por que esto importa

La inteligencia artificial es una herramienta poderosa, y como toda herramienta poderosa, puede usarse para bien o para mal. Un martillo puede construir una casa o romper una ventana. La IA puede ayudarte a aprender o puede ayudarte a hacer trampa. La diferencia esta en tus decisiones. Esta leccion te da un marco para tomar esas decisiones de manera etica - no porque alguien te obligue, sino porque entiendes por que importa.

### Explicacion paso a paso

**Paso 1: Entiende la responsabilidad**

La IA no puede ser responsable de nada. No tiene intencion, no puede ser castigada, no puede aprender de errores morales. Si un medico usa IA para diagnosticar y la IA se equivoca, la IA no puede ir a la carcel ni pagar danos. El medico si. Como estudiante, esto significa que TU eres responsable de como usas la IA. Si copias informacion incorrecta sin verificar, la responsabilidad es tuya. La IA es tu herramienta, no tu excusa.

**Paso 2: Reconoce los sesgos heredados**

La IA aprende de datos humanos. Si esos datos tienen prejuicios - y los tienen - la IA los hereda. Las IAs han mostrado sesgo de genero (asumiendo que los doctores son hombres), sesgo racial (asociando ciertos nombres con criminalidad), y sesgo geografico (sabiendo mas de Estados Unidos que de El Salvador). No es que la IA sea "mala". Refleja los patrones de sus datos, buenos y malos. Tu trabajo es estar alerta y cuestionar cuando algo parece injusto.

**Paso 3: Protege tu privacidad**

Cada vez que usas una IA, tus datos pueden ser almacenados y usados para entrenar futuras versiones. Tus preguntas, tus errores, tus intereses - todo puede convertirse en datos. Por eso: nunca compartas informacion personal sensible, piensa antes de escribir algo muy privado, y entiende que nada que le digas a una IA es completamente confidencial.

**Paso 4: Distingue entre aprender y copiar**

Esta es la decision etica mas frecuente para ti como estudiante. ¿Esta bien usar IA para tareas? Depende del COMO. Uso etico: pedir explicaciones, practicar con preguntas, solicitar retroalimentacion. Uso no etico: pedir que escriba tu tarea, copiar respuestas sin entender, presentar trabajo de la IA como tuyo. La diferencia clave: ¿estas desarrollando tu conocimiento o estas evitandolo?

### Ejemplo concreto

**Escenario:** Marcos, estudiante de 9no en Apopa, tiene un ensayo sobre la independencia de Centroamerica.

1. **Opcion A (no etica):** Le pide a la IA "Escribe un ensayo de 500 palabras sobre la independencia de Centroamerica en 1821." Copia el resultado y lo entrega como suyo.

2. **Opcion B (etica):** Le pide a la IA "Explicame las tres causas principales de la independencia de 1821 de manera simple." Lee la explicacion, la entiende, y luego escribe el ensayo con sus propias palabras. Cuando tiene dudas sobre un punto, le pregunta a la IA "¿Por que el descontento criollo fue tan importante?" La IA le ayuda a entender, no a escribir.

3. **Resultado:** En la opcion A, Marcos entreg algo pero no aprendio nada. Si le preguntan en clase, no sabra explicar. En la opcion B, Marcos tardo mas pero ahora entiende el tema. Puede discutir, responder preguntas, y usar ese conocimiento en el futuro.

4. **La prueba del maestro:** Si tu maestro te preguntara "¿Como escribiste esto?", ¿podrias explicarlo con tranquilidad?

### Contexto salvadoreno

**En Apopa:** Apopa fue sede del programa piloto de Salvora. Estudiantes de aca fueron los primeros en enfrentar estas preguntas eticas con la IA en escuelas salvadorenas. Algunos cayeron en la tentacion de copiar al principio. Pero los que aprendieron a usar la IA responsablemente descubrieron algo: entender un tema es mas satisfactorio que copiarlo, porque el conocimiento te queda para siempre. Los maestros de Apopa ahora piden que los estudiantes declaren si usaron IA y como - la honestidad se valora mas que el resultado perfecto.

### Usalo con IA

**Cuando usar IA para decisiones eticas:**
- Cuando quieras explorar diferentes perspectivas sobre un dilema
- Cuando necesites argumentos a favor y en contra de una posicion
- Cuando quieras verificar si tu razonamiento tiene fallas

**Por que ayuda:** La IA puede ayudarte a pensar sobre etica, pero no puede decidir por ti. Puede darte argumentos, perspectivas, y preguntas para considerar. Pero la decision y la responsabilidad son tuyas.

**Prompt seguro:** "Tengo un dilema etico sobre usar IA para [situacion]. Dame argumentos a favor y en contra, y preguntas que deberia hacerme antes de decidir."

**Cuidado:** La IA no juzgara tus decisiones morales. No te dira "eso esta mal" con conviccion. Puede ayudarte a razonar, pero la brujula moral eres tu.

### Errores comunes

1. **Creer que si la IA lo permite, es etico** → La IA hara casi cualquier cosa que le pidas. Que puedas hacer algo no significa que debas hacerlo. Tu criterio define la etica, no las capacidades de la IA.

2. **Pensar que "todos lo hacen" lo justifica** → Aunque otros estudiantes copien con IA, eso no lo hace correcto. Ademas, el perjudicado eres tu - el conocimiento que no adquieres hoy te faltara manana.

3. **Separar la etica de la IA de la etica general** → Las mismas reglas que aplican a copiar de un companero aplican a copiar de una IA. La deshonestidad academica es la misma, solo cambio la herramienta.

### Practica con razonamiento

**Pregunta 1:** Si la IA da informacion incorrecta que usas en tu tarea, ¿quien es responsable?
- A) Solo la IA
- B) Nadie
- C) Tu, como usuario final
- D) La empresa que hizo la IA

**Respuesta:** C - Tu decides que hacer con la informacion. La IA no puede ser responsable porque no tiene intencion ni comprension moral. Verificar es tu trabajo.

**Pregunta 2:** ¿Cual es la diferencia clave entre usar IA para aprender y usarla para copiar?
- A) El tiempo que tardas
- B) Si estas desarrollando tu conocimiento o evitandolo
- C) El tipo de tarea
- D) Si te atrapan o no

**Respuesta:** B - La intencion y el resultado en tu aprendizaje es lo que importa. Aprender te hace crecer; copiar te estanca.

**Pregunta 3:** ¿Por que la IA puede tener prejuicios?
- A) Porque esta programada para discriminar
- B) Porque refleja los sesgos presentes en sus datos de entrenamiento
- C) Porque es malvada
- D) Porque prefiere ciertos grupos

**Respuesta:** B - La IA es un espejo de sus datos. Si los datos tienen sesgos (y los datos humanos siempre los tienen), la IA los replica sin saber que lo hace.

**Pregunta 4:** ¿Cual es una buena pregunta para decidir si tu uso de IA es etico?
- A) ¿Es gratis?
- B) ¿Me sentiria bien explicandole a mi maestro como lo hice?
- C) ¿Lo hicieron mis amigos?
- D) ¿Es rapido?

**Respuesta:** B - Si puedes explicar tu uso de IA con tranquilidad a tu maestro o a tus papas, probablemente es un uso etico. Si tendrias que ocultarlo, es senal de alarma.

### Recordatorio de IA responsable

La etica no es opcional ni es un tema aburrido para adultos. Cada vez que usas IA, estas tomando decisiones que definen quien eres. Las decisiones pequenas de hoy - copiar o aprender, verificar o asumir, ser honesto o mentir - construyen tu caracter para toda la vida. La IA amplifica lo que ya eres: si eres curioso, te ayuda a aprender mas; si eres perezoso, te ayuda a evadir mas. Tu decides cual version de ti mismo quieres construir.

### Al terminar esta leccion, puedes...

1. Aplicar un marco de 5 preguntas para evaluar si tu uso de IA es etico
2. Distinguir claramente entre usar IA para aprender y usarla para copiar
3. Explicar por que la responsabilidad del uso de IA siempre recae en humanos, no en la tecnologia`,

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
      hook: "En Apopa, el programa piloto de Salvora obligo a estudiantes y maestros a enfrentar estas preguntas eticas desde el principio. Los que aprendieron a usar IA responsablemente se convirtieron en ejemplo para todo el pais.",
      department: "Apopa"
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
    transcript: `## El Salvador y la Revolucion de la IA

### Por que esto importa

Esta es la leccion final antes de tu evaluacion. Y que mejor forma de cerrar que entendiendo por que El Salvador esta haciendo algo que ningun otro pais de America Latina ha hecho: llevar inteligencia artificial a todas sus escuelas publicas de manera sistematica. No eres un simple usuario de tecnologia extranjera - eres parte de una apuesta nacional por el futuro. Entender esto te da perspectiva sobre tu momento historico.

### Explicacion paso a paso

**Paso 1: Entiende la posicion historica de El Salvador**

El Salvador tiene historial de decisiones audaces. Fue el primer pais del mundo en adoptar Bitcoin como moneda legal en 2021. Ahora, con la alianza con xAI, se convierte en el primer pais de America Latina en llevar IA a escuelas publicas de manera sistematica. Algunos cuestionan estas decisiones. Pero la realidad es que el tamano pequeno puede ser una ventaja: es mas facil probar ideas, ajustar sobre la marcha, y moverse rapido que en paises grandes con burocracias lentas.

**Paso 2: Conoce la alianza con xAI**

En 2024, El Salvador establecio una alianza con xAI, la empresa de Elon Musk. Esta alianza tiene dos lados. xAI aporta la tecnologia: Grok, su asistente de IA con acceso a informacion en tiempo real. El Salvador aporta algo igual de valioso: la voluntad de experimentar, la infraestructura educativa para implementar, y la vision de que la IA debe ser para todos, no solo para quienes pueden pagarla. Salvora nacio de esta alianza como puente entre tecnologia global y contexto salvadoreno local.

**Paso 3: Reconoce las oportunidades por sector**

La IA puede transformar cada area de El Salvador. Agricultura: predecir clima, detectar plagas, optimizar cosechas para competir con corporaciones grandes. Turismo: experiencias personalizadas, traduccion, promocion global de playas, volcanes y ruinas mayas. Educacion: tutores personalizados que se adaptan a cada estudiante. Salud: diagnosticos en zonas rurales donde hay pocos medicos. Finanzas: sistemas mas seguros complementando Bitcoin y Chivo Wallet. Gobierno: tramites mas rapidos y deteccion de corrupcion.

**Paso 4: Acepta los desafios reales**

No todo es facil. El Salvador enfrenta desafios concretos: infraestructura desigual (no todas las escuelas tienen buen internet), necesidad de capacitacion para maestros, riesgo de que la IA beneficie mas a quienes ya tienen ventajas, y la pregunta de como desarrollar capacidad local en lugar de depender completamente de tecnologia extranjera. Salvora trabaja en estos frentes, pero el camino es largo.

### Ejemplo concreto

**Escenario:** Proyeccion a 10 anos - donde podrias estar.

1. **2024:** Maria, estudiante de 8vo en San Salvador, completa el curso de Fundamentos de IA en Salvora. Aprende a usar Grok para estudiar matematicas.

2. **2027:** Maria, ahora en bachillerato tecnico, usa sus conocimientos de IA para un proyecto escolar que optimiza rutas de buses en su colonia. Gana un concurso nacional de innovacion.

3. **2030:** Maria estudia ingenieria en la UES con beca parcial. Su proyecto de tesis usa IA para predecir inundaciones en la zona metropolitana de San Salvador.

4. **2034:** Maria trabaja en una startup salvadorena que vende soluciones de IA climatica a otros paises centroamericanos. El Salvador exporta tecnologia, no solo la importa.

5. **La leccion:** Maria no era genio ni tenia recursos especiales. Solo tomo en serio la oportunidad que Salvora le dio. Tu tienes la misma oportunidad ahora.

### Contexto salvadoreno

**En San Salvador:** Desde el centro de San Salvador, donde se toman las decisiones de politica nacional, hasta los cantones rurales mas alejados, la vision es la misma: preparar a los jovenes para un futuro donde la IA sera tan comun como el internet. La capital es donde convergen las instituciones, las empresas, y las universidades que implementaran esta vision. Pero el impacto debe llegar a todo el pais. Un estudiante de Morazan debe tener las mismas oportunidades que uno de San Salvador. Esa es la promesa de Salvora y la apuesta nacional.

### Usalo con IA

**Cuando usar IA para este tema:**
- Cuando quieras explorar como la IA puede impactar sectores especificos de El Salvador
- Cuando busques ideas de proyectos o emprendimientos con IA
- Cuando quieras entender tendencias globales de IA y como aplican a tu contexto

**Por que ayuda:** La IA puede darte informacion sobre tendencias, ejemplos de otros paises, y ayudarte a generar ideas. Pero el contexto salvadoreno especifico - los problemas locales, las oportunidades culturales, las realidades economicas - eso lo conoces tu mejor que ninguna IA.

**Prompt seguro:** "Como puede la inteligencia artificial transformar [sector especifico] en El Salvador? Dame ejemplos concretos y desafios realistas."

**Cuidado:** La IA puede ser optimista sobre tecnologia sin considerar desafios locales. Siempre filtra sus sugerencias por la realidad que conoces.

### Errores comunes

1. **Pensar que la tecnologia resuelve todo** → La IA es una herramienta, no magia. Los problemas complejos (desigualdad, educacion, salud) requieren soluciones humanas con apoyo tecnologico, no al reves.

2. **Subestimar tu momento historico** → Los expertos de IA de manana son los estudiantes que empiezan a aprender hoy. Estas en el momento correcto para desarrollar habilidades que seran esenciales.

3. **Esperar que otros lo hagan** → El futuro de la IA en El Salvador no lo construiran extranjeros ni corporaciones. Lo construiran salvadorenos que entienden el contexto local. Eso te incluye.

### Practica con razonamiento

**Pregunta 1:** ¿Por que es significativo que El Salvador lleve IA a las escuelas?
- A) Porque es obligatorio por ley internacional
- B) Porque es el primer pais de America Latina en hacerlo de manera sistematica
- C) Porque es el pais mas grande de la region
- D) Porque tiene mas recursos que otros paises

**Respuesta:** B - El Salvador es pionero en America Latina. Ser primero tiene ventajas (aprender antes, atraer atencion) y responsabilidades (resolver problemas sin manual).

**Pregunta 2:** ¿Que aporta El Salvador a la alianza con xAI?
- A) Solo dinero
- B) Solo estudiantes para probar la tecnologia
- C) Voluntad de experimentar, infraestructura educativa, y vision inclusiva
- D) Nada significativo

**Respuesta:** C - Es una alianza de dos partes. xAI trae tecnologia; El Salvador trae voluntad de innovar, escuelas para implementar, y la vision de que la IA debe ser para todos.

**Pregunta 3:** ¿Cual es un desafio real que El Salvador enfrenta con la IA?
- A) No hay ningun desafio
- B) Infraestructura desigual, capacitacion necesaria, y riesgo de desigualdad
- C) La gente no tiene interes en aprender
- D) No hay suficientes computadoras en todo el pais

**Respuesta:** B - Los desafios son reales y reconocerlos es el primer paso para superarlos. No todo es optimismo; tambien hay trabajo duro por delante.

**Pregunta 4:** ¿Que puedes hacer TU para el futuro de la IA en El Salvador?
- A) Nada, soy muy joven para impactar
- B) Aprender, usar IA responsablemente, crear soluciones locales, ensenar a otros
- C) Esperar a que el gobierno resuelva todo
- D) Solo usar IA para entretenimiento

**Respuesta:** B - Tu rol es activo. Puedes aprender, crear, ensenar, emprender. No hay edad minima para impactar.

### Recordatorio de IA responsable

No eres solo consumidor de tecnologia - eres potencial creador del futuro tecnologico salvadoreno. Cada leccion completada, cada uso responsable de IA, cada idea que desarrollas contribuye a escribir el capitulo de El Salvador en la historia de la inteligencia artificial. El Salvador aposto por los jovenes. Ahora te toca demostrar que esa apuesta vale la pena.

### Al terminar esta leccion, puedes...

1. Explicar por que la alianza El Salvador-xAI es historica para America Latina
2. Identificar oportunidades concretas de la IA en diferentes sectores salvadorenos
3. Reconocer tu rol potencial en el futuro tecnologico del pais, sea cual sea tu profesion`,

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
      hook: "Desde San Salvador, donde se toman las decisiones de politica nacional, la vision de IA para todos se extiende a cada rincon del pais. El Salvador apuesta por el futuro.",
      department: "San Salvador"
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
        question: "Completaste el curso de Fundamentos de IA. ¿Que representa esto?",
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
      safePrompt: "Ayudame a repasar los conceptos principales del curso de Fundamentos de IA antes de mi evaluacion."
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
      summary: "Complete la evaluacion del curso Fundamentos de IA en Salvora. ¡Ahora tengo las bases para usar IA de manera responsable!",
      prompt: "Pregunta: Cuales son los puntos mas importantes que aprendi sobre inteligencia artificial?",
      practiceQuestion: "¿Que fue lo mas sorprendente que aprendiste en este curso?"
    }
  },

  // ===== CURSO 2: IA PARA MAESTROS =====

  "maestros-1-plantilla": {
    transcript: `## Creando Planes de Leccion con IA

### Por que esto importa

Planificar lecciones toma tiempo - tiempo que podrias dedicar a tus estudiantes. La IA puede generar borradores de planes en minutos, pero tu experiencia profesional sigue siendo esencial. No se trata de reemplazarte, sino de darte un asistente que trabaja rapido. Tu conviertes ese borrador en una leccion que realmente funciona para TUS estudiantes.

### Explicacion paso a paso

**Paso 1: Entiende la division del trabajo**

La IA es excelente para generar estructuras, buscar actividades, y organizar tiempos. Tu eres excelente para conocer a tus estudiantes, adaptar al contexto, y tomar decisiones pedagogicas. Cuando ambos trabajan juntos, obtienes planes mejores en menos tiempo. La IA genera el 70% del borrador; tu aportas el 30% que lo hace relevante.

**Paso 2: Prepara los 4 elementos esenciales**

Para obtener buenos resultados, necesitas darle a la IA cuatro cosas. Primero: el tema especifico (no "ciencias", sino "el ciclo del agua"). Segundo: el grado o nivel de los estudiantes. Tercero: la duracion de la clase. Cuarto: los objetivos de aprendizaje que quieres lograr. Sin estos elementos, la IA dara respuestas genericas que no te serviran.

**Paso 3: Formula el prompt completo**

Un prompt efectivo combina los 4 elementos en una oracion clara. Ejemplo: "Crea un plan de leccion de 45 minutos para estudiantes de 7mo grado sobre el ciclo del agua. Objetivos: que los estudiantes puedan explicar las 4 etapas del ciclo y relacionarlo con el clima de El Salvador. Incluye una actividad practica que no requiera tecnologia." Este prompt da contexto suficiente para un resultado util.

**Paso 4: Revisa y adapta el resultado**

La IA te dara un borrador con actividades de apertura, contenido principal, ejercicios, y evaluacion. Tu trabajo: verificar que las actividades sean realistas para tus recursos, ajustar los tiempos a tu experiencia, agregar ejemplos locales, y modificar segun las necesidades especificas de tu grupo.

### Ejemplo concreto

**Escenario:** Una maestra de 7mo grado en Santa Ana quiere ensenarelciclo del agua.

**Prompt original (malo):** "Hazme un plan sobre ciencias."
**Resultado:** La IA da un plan generico, sin nivel, sin duracion, sin objetivos claros. Inutil.

**Prompt mejorado (bueno):** "Crea un plan de leccion de 45 minutos para estudiantes de 7mo grado sobre el ciclo del agua. Objetivos: que los estudiantes puedan explicar las 4 etapas del ciclo y relacionarlo con el clima de Santa Ana. Incluye: actividad de apertura (5 min), desarrollo con explicacion (20 min), actividad practica sin tecnologia (15 min), y cierre con preguntas (5 min)."

**Resultado:** La IA genera un plan estructurado con actividades apropiadas. La maestra revisa y cambia la actividad practica a algo que tiene en su aula (botellas plasticas para simular el ciclo) y agrega una pregunta sobre las lluvias de octubre en Santa Ana.

**Tiempo total:** 15 minutos en lugar de 1-2 horas.

### Contexto salvadoreno

**En Santa Ana:** Los maestros de Santa Ana conocen su contexto mejor que ninguna IA - las lluvias de la cordillera Apaneca, el clima de la zona cafetalera, los recursos disponibles en sus escuelas. Cuando piden planes a la IA, agregan ese contexto local: "Usa ejemplos del clima de Santa Ana" o "Incluye referencias al Lago de Coatepeque". Un plan de ciencias que menciona el Volcan de Santa Ana conecta mejor con estudiantes que ven ese volcan todos los dias.

### Usalo con IA

**Cuando usar IA para planificar:**
- Cuando necesites un borrador inicial para modificar
- Cuando busques ideas de actividades para un tema
- Cuando quieras variar tu enfoque usual de ensenanza

**Por que ayuda:** La IA puede generar en 2 minutos lo que te tomaria 30 minutos investigar. Pero recuerda que es un punto de partida, no un producto final. Tu experiencia lo perfecciona.

**Prompt seguro:** "Crea un plan de leccion de [DURACION] para estudiantes de [GRADO] sobre [TEMA ESPECIFICO]. Objetivos: [OBJETIVOS CLAROS]. Incluye actividad de apertura, desarrollo, practica, y cierre. Usa ejemplos de [CONTEXTO LOCAL]."

**Cuidado:** La IA puede sugerir recursos que no tienes (proyectores, tablets). Siempre especifica "actividades que no requieran tecnologia" o "usando solo materiales basicos" segun tu realidad.

### Errores comunes

1. **Prompts demasiado vagos** → "Hazme un plan de ciencias" no le da a la IA suficiente contexto. Seras especifico siempre: tema, grado, duracion, objetivos.

2. **Aceptar el plan sin revisar** → La IA no conoce a tus estudiantes ni tus recursos. Siempre adapta los tiempos, las actividades, y los ejemplos a tu realidad.

3. **Ignorar el contexto local** → Un plan sobre el ciclo del agua es mejor si menciona los rios y lagos de tu departamento, no los del libro de texto generico.

### Practica con razonamiento

**Pregunta 1:** ¿Que informacion es ESENCIAL al pedir un plan de leccion a la IA?
- A) Solo el tema
- B) Tema, grado, duracion y objetivos
- C) El nombre de la escuela
- D) El numero de estudiantes

**Respuesta:** B - La IA necesita estos 4 elementos para generar un plan util. Sin ellos, el resultado sera demasiado generico.

**Pregunta 2:** ¿Cual es tu rol cuando usas IA para planificar?
- A) Copiar el plan sin cambios
- B) Revisar, adaptar y perfeccionar el plan
- C) Dejar que la IA ensene
- D) Solo imprimir el resultado

**Respuesta:** B - La IA da borradores; tu los conviertes en lecciones memorables. Conoces a tus estudiantes mejor que cualquier algoritmo.

**Pregunta 3:** ¿Por que agregar contexto local de El Salvador mejora los planes?
- A) No es necesario
- B) Porque la IA solo entiende espanol
- C) Porque ejemplos locales conectan mejor con los estudiantes
- D) Porque es obligatorio por ley

**Respuesta:** C - Un plan que menciona el Volcan de Santa Ana o el Lago de Coatepeque es mas significativo para estudiantes que viven cerca de esos lugares.

### Recordatorio de IA responsable

La IA es tu asistente de planificacion, no tu reemplazo. Tu juicio profesional, tu conocimiento de los estudiantes, y tu creatividad siguen siendo insustituibles. Usa la IA para ahorrar tiempo en tareas mecanicas, y dedica ese tiempo ganado a lo que realmente importa: conectar con tus estudiantes.

### Al terminar esta leccion, puedes...

1. Formular prompts efectivos para generar planes de leccion incluyendo los 4 elementos esenciales
2. Revisar y adaptar planes generados por IA a tu contexto especifico
3. Ahorrar tiempo de planificacion sin sacrificar calidad pedagogica`,

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
      hook: "Maestros en Santa Ana estan usando IA para reducir el tiempo de planificacion. En lugar de pasar horas buscando ideas, generan borradores en minutos y adaptan con ejemplos del Volcan de Santa Ana y el Lago de Coatepeque.",
      department: "Santa Ana"
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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "¿Cuanto tiempo les toma preparar un plan de leccion? ¿Que es lo mas dificil?",
        prompt: "Pida a los maestros que compartan sus mayores retos al planificar. Anote los mas comunes.",
        discussionTime: 60
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "En parejas, piensen en una leccion que ensenan esta semana. ¿Que informacion le darian a la IA para crear un plan?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "maestros-1-personalizar": {
    content: `## Personalizando Planes de Leccion para Tu Contexto

### Por que esto importa

Los planes generados por IA son borradores, no productos finales. La IA no conoce a tus estudiantes, no sabe que recursos tienes, y no entiende las particularidades de tu comunidad. Tu si. Esta leccion te ensena a transformar un borrador generico en una leccion que realmente funciona en TU aula.

### Explicacion paso a paso

**Paso 1: Adapta el contexto local**

La IA genera ejemplos genericos. Tu trabajo es reemplazarlos con referencias que tus estudiantes reconozcan. Si el plan menciona "el rio", cambialo por el Rio Lempa o el Rio Jiboa si estas en La Libertad. Si habla de "tradiciones", menciona las fiestas de tu municipio. El aprendizaje es mas significativo cuando conecta con la vida real de los estudiantes.

**Paso 2: Ajusta a los recursos reales**

La IA puede sugerir "usa tablets para investigar" o "proyecta un video". Si no tienes esos recursos, pide alternativas: "Como puedo ensenar esto solo con pizarra, marcadores y materiales reciclados?" La IA puede darte versiones sin tecnologia de casi cualquier actividad. No permitas que la falta de equipo detenga una buena leccion.

**Paso 3: Corrige los tiempos**

Los planes de IA asumen condiciones ideales: estudiantes enfocados, cero interrupciones, transiciones instantaneas. La realidad es diferente. Agrega 5 minutos para imprevistos, reduce actividades largas, y siempre ten una actividad de respaldo por si algo termina antes. Con experiencia, sabras exactamente cuanto tiempo toman las cosas en tu clase.

**Paso 4: Considera necesidades especiales**

La IA no sabe que tienes estudiantes con diferentes niveles, estudiantes con necesidades especificas, o un grupo inusualmente grande o pequeno. Ajusta las actividades para inclusion. Prepara versiones simplificadas para quienes necesitan apoyo extra y extensiones para quienes avanzan rapido.

### Ejemplo concreto

**Escenario:** Un maestro de La Libertad recibe un plan de IA sobre ecosistemas.

**Plan original de IA:** "Actividad: Los estudiantes usaran tablets para investigar ecosistemas. Despues, crearan una presentacion en PowerPoint."

**Problema:** La escuela no tiene tablets ni PowerPoint.

**Plan adaptado:** "Actividad: En grupos de 4, los estudiantes leen una pagina del libro de texto sobre ecosistemas. Cada grupo dibuja en un papelografo un ecosistema cercano: la playa de El Tunco (ecosistema costero), el manglar del Estero de Jaltepeque (ecosistema humedal), o la Cordillera del Balsamo (ecosistema de montana). Presentan al grupo y comparan."

**Resultado:** La misma meta de aprendizaje, sin tecnologia, con ejemplos que los estudiantes de La Libertad reconocen.

### Contexto salvadoreno

**En La Libertad:** Los maestros de La Libertad tienen a su disposicion algunos de los ecosistemas mas diversos de El Salvador. La costa con El Tunco, El Sunzal y La Paz; los manglares del Estero de Jaltepeque; las montanas de la Cordillera del Balsamo. Cuando personalizas un plan sobre ecosistemas, ciencias o geografia, tienes laboratorios naturales a minutos de distancia. Un plan que dice "visita un ecosistema" puede significar una excursion real a la playa o al manglar. Eso es personalizacion que ninguna IA puede hacer por ti.

### Usalo con IA

**Cuando usar IA para personalizar:**
- Pide alternativas sin tecnologia: "Como puedo hacer esta actividad sin proyector?"
- Pide ejemplos locales: "Dame ejemplos de ecosistemas de la zona costera de El Salvador"
- Pide adaptaciones: "Modifica este plan para un grupo de 45 estudiantes"

**Por que ayuda:** La IA puede generar multiples versiones de una actividad. Pidele 3 opciones y elige la que mejor funcione para tu contexto.

**Prompt seguro:** "Tengo este plan de leccion: [PEGAR PLAN]. Necesito adaptarlo porque mi escuela no tiene [RECURSO]. Dame una version que funcione con [RECURSOS DISPONIBLES]."

**Cuidado:** La IA no puede predecir como reaccionara TU grupo. Despues de probar una leccion, toma notas de que funciono y que cambiar para la proxima vez.

### Errores comunes

1. **No personalizar nada** → Un plan generico se siente generico para los estudiantes. Siempre agrega al menos 2-3 referencias locales.

2. **Frustrarse por falta de recursos** → La IA puede adaptar cualquier actividad a recursos basicos. Solo tienes que pedirlo.

3. **No guardar las adaptaciones** → Cada plan personalizado es una inversion. Guardalo para reutilizarlo. En un ano tendras una biblioteca de lecciones probadas.

### Practica con razonamiento

**Pregunta 1:** ¿Por que es importante personalizar los planes generados por IA?
- A) Porque la IA siempre se equivoca
- B) Porque la IA no conoce tu contexto, recursos y estudiantes
- C) Porque es obligatorio
- D) Porque la IA no habla espanol

**Respuesta:** B - La IA genera borradores genericos. Tu conocimiento de tu aula es lo que convierte ese borrador en una leccion efectiva.

**Pregunta 2:** Si la IA sugiere usar tablets y no las tienes, ¿que deberias hacer?
- A) Cancelar la leccion
- B) Pedir a la IA alternativas que funcionen con tus recursos
- C) Comprar tablets
- D) Ignorar el plan

**Respuesta:** B - Siempre puedes pedir versiones alternativas. "Como puedo hacer esta actividad sin tecnologia?" genera opciones utiles.

**Pregunta 3:** ¿Que debes hacer con tus planes personalizados?
- A) Tirarlos despues de usarlos
- B) Guardarlos para reutilizar y mejorar
- C) Compartirlos en redes sociales
- D) Olvidarlos

**Respuesta:** B - Cada plan personalizado es una inversion. Con el tiempo tendras una biblioteca de lecciones probadas que funcionan en tu contexto.

### Recordatorio de IA responsable

La IA es tu asistente, no tu reemplazo. Los mejores planes son colaboraciones: la IA aporta estructura y ideas; tu aportas conocimiento de tus estudiantes, tu comunidad, y tu experiencia. Ninguna IA puede replicar los anos que llevas ensenando.

### Al terminar esta leccion, puedes...

1. Adaptar cualquier plan de IA a tu contexto local con ejemplos relevantes
2. Modificar actividades para funcionar con los recursos que realmente tienes
3. Ajustar tiempos basandote en tu experiencia real de clase`,

    quickVersion: {
      bullets: [
        "Los planes de IA son borradores - tu los perfeccionas con contexto local",
        "Siempre puedes pedir alternativas sin tecnologia a la IA",
        "Guarda tus planes personalizados para reutilizarlos"
      ],
      localExample: "Un plan sobre ecosistemas se transforma cuando mencionas El Tunco, el manglar de Jaltepeque o la Cordillera del Balsamo - lugares que tus estudiantes de La Libertad conocen.",
      safePrompt: "Adapta este plan para que funcione solo con pizarra, marcadores y materiales reciclados. Usa ejemplos de [MI DEPARTAMENTO]."
    },
    localContext: {
      hook: "En La Libertad, tienes ecosistemas diversos a minutos de distancia: playas, manglares, montanas. Un plan sobre ciencias se personaliza mencionando El Tunco o el Estero de Jaltepeque.",
      department: "La Libertad"
    },
    safePrompts: [{
      template: "Adapta este plan para [CONTEXTO ESPECIFICO] con recursos [DISPONIBLES]",
      goodExample: "Adapta este plan sobre ecosistemas para una escuela en La Libertad que no tiene proyector. Usa ejemplos de la costa y el manglar cercanos.",
      badExample: "Haz el plan mejor"
    }]
  },

  "maestros-1-practica": {
    practiceInstructions: `## Practica: Crea Tu Primer Plan de Leccion con IA

### Por que esta practica importa

La teoria sin practica queda incompleta. En esta sesion, aplicaras todo lo aprendido creando un plan de leccion real que usaras en tu proxima clase. Al finalizar, tendras un plan listo y habras experimentado el flujo de trabajo con IA de principio a fin.

### Instrucciones paso a paso

**Paso 1: Prepara tu tema (5 minutos)**

Antes de abrir la herramienta, decide: Que tema ensenaras esta semana? Para que grado? Cuanto tiempo dura tu clase? Tener esto claro hace la interaccion con IA mas productiva. Ejemplo: "Ciclo del agua, 5to grado, 45 minutos".

**Paso 2: Accede al Planificador (2 minutos)**

Ve a la seccion "Maestro" en el menu principal de Salvora. Selecciona "Planificador de Lecciones". Asegurate de estar en modo Maestro para ver todas las herramientas disponibles.

**Paso 3: Completa los campos con detalle (5 minutos)**

- **Tema**: Se especifico. "Ciclo del agua" es mejor que "ciencias". "Multiplicacion de fracciones" es mejor que "matematicas".
- **Grado**: El nivel real de tus estudiantes
- **Duracion**: El tiempo REAL de tu clase (no idealizado)
- **Contexto adicional**: Si tienes recursos limitados, mencionalos. "Sin proyector, escuela rural"

**Paso 4: Genera y revisa el plan (10 minutos)**

Genera el plan y leelo completamente. No lo aceptes sin revisar. Usa la lista de verificacion:
- Los objetivos son claros y medibles?
- Las actividades son apropiadas para MIS estudiantes?
- Tengo los materiales necesarios?
- El tiempo esta bien distribuido?
- Incluye evaluacion del aprendizaje?

**Paso 5: Personaliza para tu contexto (10 minutos)**

Aqui es donde tu expertise entra. Ajusta vocabulario, cambia ejemplos a tu region, modifica tiempos segun conoces a tu grupo, agrega tu toque personal. El plan de IA es un borrador; el plan final es TUYO.

### Ejemplo de flujo completo

**Escenario:** Un maestro de Sonsonate prepara clase sobre ecosistemas costeros.

1. **Tema decidido:** "Ecosistemas costeros de El Salvador" para 6to grado, 45 minutos
2. **Prompt usado:** "Plan de leccion sobre ecosistemas costeros para 6to grado en Sonsonate. 45 minutos. Incluir ejemplos del manglar de la Barra de Santiago. Sin proyector disponible."
3. **Plan generado:** Incluye actividades, pero menciona "ver video" (no hay proyector)
4. **Ajuste del maestro:** Reemplaza video por "observacion de fotos impresas" y agrega "discusion sobre lo que han visto en la playa"
5. **Plan final:** Listo para usar, personalizado para Sonsonate

### Contexto salvadoreno

**En Sonsonate:** Los maestros de la costa de Sonsonate aprovechan su entorno para ensenar. Un plan sobre ecosistemas puede incluir visita real al manglar de la Barra de Santiago o fotos que los mismos estudiantes han tomado. La IA genera estructura; tu conocimiento de Sonsonate lo hace relevante.

### Lista de verificacion para tu plan

Antes de considerar el plan "listo", verifica:

- [ ] Los objetivos describen que el estudiante podra HACER al final
- [ ] Las actividades usan materiales que REALMENTE tengo
- [ ] Incluye ejemplos de MI region o contexto
- [ ] Los tiempos son realistas (no optimistas)
- [ ] Hay forma de evaluar si aprendieron
- [ ] Tengo plan B si algo no funciona

### Errores comunes en esta practica

1. **Generar plan y usarlo sin leer** → Revisa cada seccion. La IA puede incluir actividades imposibles para tu contexto.

2. **No agregar contexto local** → Un plan generico es menos efectivo. Anade ejemplos de tu departamento.

3. **Tiempos irrealistas** → La IA puede subestimar transiciones. Agrega 5 minutos extra a cada actividad.

### Reflexion al finalizar

Responde en tu cuaderno o mentalmente:
- Cuanto tiempo te tomo crear este plan vs. hacerlo desde cero?
- Que partes del plan generado fueron mas utiles?
- Que ajustes hiciste para tu contexto especifico?
- Lo usarias en tu proxima clase? Por que si o por que no?

### Al terminar esta practica, puedes...

1. Crear planes de leccion usando IA como punto de partida
2. Personalizar planes generados para tu contexto especifico
3. Evaluar criticamente si un plan es adecuado para tus estudiantes`,
    localContext: {
      hook: "Los maestros de Sonsonate aprovechan los ecosistemas costeros cercanos para hacer planes de leccion hiperlocales. La Barra de Santiago y sus manglares son aula natural.",
      department: "Sonsonate"
    },
  },

  "maestros-2-quizzes": {
    transcript: `## Generando Cuestionarios con IA

### Por que esto importa

Crear evaluaciones de calidad toma tiempo - tiempo que podrias usar para ensenyar o retroalimentar a tus estudiantes. La IA puede generar cuestionarios en minutos, con variedad de tipos de preguntas y niveles de dificultad. Pero la revision humana sigue siendo esencial: la IA puede crear preguntas ambiguas o con respuestas incorrectas. Tu ojo experto es la diferencia entre una evaluacion util y una problematica.

### Explicacion paso a paso

**Paso 1: Define el contenido a evaluar**

Antes de pedir preguntas a la IA, ten claro que quieres medir. ¿Conocimiento basico (recordar datos)? ¿Comprension (explicar conceptos)? ¿Aplicacion (usar conocimiento en situaciones nuevas)? La IA puede generar cualquier tipo, pero tu debes especificar. Un cuestionario que solo pide memorizar fechas es diferente de uno que pide analizar causas y consecuencias.

**Paso 2: Formula un prompt especifico**

Dale a la IA informacion clara: el tema exacto, el numero de preguntas, el tipo de preguntas (opcion multiple, verdadero/falso, respuesta corta), y el nivel de dificultad. Ejemplo: "Genera 10 preguntas de opcion multiple sobre el ciclo del agua para 6to grado. 5 de conocimiento basico y 5 de aplicacion. Incluye las respuestas correctas."

**Paso 3: Revisa SIEMPRE antes de usar**

Este paso no es opcional. La IA puede generar respuestas incorrectas, especialmente en temas locales de El Salvador. Puede crear preguntas ambiguas donde varias opciones parecen correctas. Puede inventar datos. Tu trabajo: verificar cada pregunta, ajustar la redaccion, y asegurar que las respuestas son correctas.

**Paso 4: Pide variaciones segun necesites**

Puedes pedir a la IA ajustes especificos: "Hazlas mas dificiles", "Agrega preguntas de analisis", "Crea versiones alternativas para evitar copia", "Incluye preguntas sobre aplicacion en El Salvador". La IA responde a instrucciones claras.

### Ejemplo concreto

**Escenario:** Un maestro de Chalatenango necesita un quiz de historia para 8vo grado sobre la independencia de Centroamerica.

**Prompt usado:** "Genera 10 preguntas de opcion multiple sobre la independencia de Centroamerica en 1821 para estudiantes de 8vo grado. Incluye 4 de conocimiento basico (fechas, nombres), 3 de comprension (causas, consecuencias), y 3 de aplicacion (relacionar con El Salvador hoy). Incluye las respuestas correctas."

**Resultado de la IA:** 10 preguntas variadas con diferentes niveles de dificultad.

**Revision del maestro:** Encuentra que la pregunta 7 tiene la respuesta incorrecta (la IA confundio la fecha de un evento). Corrige. Ajusta la redaccion de la pregunta 3 que estaba ambigua. Agrega una pregunta sobre el papel de El Salvador que la IA no incluyo.

**Tiempo total:** 10 minutos (vs. 1 hora hacerlo desde cero).

### Contexto salvadoreno

**En Chalatenango:** Los maestros de zonas rurales de Chalatenango a menudo trabajan solos, sin colegas con quienes compartir material. La IA les da un punto de partida que antes no tenian. Un maestro en La Palma puede generar un quiz variado en minutos y dedicar mas tiempo a sus estudiantes. Pero recuerda: la IA sabe poco sobre la historia local de Chalatenango. Si quieres preguntas sobre eventos especificos del departamento, tendras que agregarlas tu o verificar cuidadosamente.

### Usalo con IA

**Cuando usar IA para evaluaciones:**
- Cuando necesites cuestionarios rapidos sobre contenido estandar
- Cuando quieras variedad de tipos de preguntas
- Cuando busques diferentes niveles de dificultad

**Por que ayuda:** La IA genera estructura y variedad en minutos. Tu aportas la verificacion y el conocimiento local.

**Prompt seguro:** "Genera [NUMERO] preguntas de [TIPO] sobre [TEMA ESPECIFICO] para [GRADO]. Incluye [NIVEL DE DIFICULTAD]. Agrega las respuestas correctas con explicacion breve."

**Cuidado:** NUNCA uses cuestionarios generados sin revisar. La IA puede tener respuestas incorrectas, especialmente en datos de El Salvador o eventos recientes.

### Errores comunes

1. **Usar preguntas sin revisar** → Esto es peligroso. La IA puede generar respuestas incorrectas y tus estudiantes aprenderan informacion falsa. Siempre verifica.

2. **Solo pedir preguntas de memoria** → Un cuestionario que solo pide fechas y nombres no mide comprension real. Pide tambien preguntas de aplicacion y analisis.

3. **Esperar que la IA sepa sobre El Salvador** → La IA sabe poco sobre historia local, lugares especificos, y eventos recientes de El Salvador. Agrega ese contexto tu mismo.

### Practica con razonamiento

**Pregunta 1:** ¿Por que es obligatorio revisar las preguntas generadas por IA?
- A) No es obligatorio
- B) Porque la IA puede crear preguntas incorrectas o ambiguas
- C) Porque la IA no habla espanol
- D) Porque el director lo exige

**Respuesta:** B - La IA puede generar respuestas incorrectas, especialmente en temas locales. La revision profesional es esencial.

**Pregunta 2:** ¿Que tipo de preguntas miden mejor la comprension profunda?
- A) Preguntas de fechas y nombres
- B) Preguntas de verdadero/falso simples
- C) Preguntas de aplicacion y analisis
- D) Preguntas de opcion multiple basicas

**Respuesta:** C - Las preguntas de aplicacion muestran que los estudiantes pueden usar lo aprendido en situaciones nuevas, no solo recordar datos.

**Pregunta 3:** ¿Que informacion debe incluir un buen prompt para generar cuestionarios?
- A) Solo el tema
- B) Tema, numero de preguntas, tipo de preguntas, y nivel de dificultad
- C) El nombre de la escuela
- D) La fecha del examen

**Respuesta:** B - Cuanto mas especifico el prompt, mejores seran las preguntas generadas.

### Recordatorio de IA responsable

Las evaluaciones son herramientas de aprendizaje, no solo de calificacion. Un cuestionario bien disenado ayuda a los estudiantes a identificar que saben y que necesitan repasar. La IA puede acelerar la creacion, pero tu criterio profesional determina si la evaluacion realmente mide lo que importa.

### Al terminar esta leccion, puedes...

1. Generar cuestionarios variados usando prompts especificos
2. Revisar y corregir preguntas generadas por IA antes de usarlas
3. Crear evaluaciones que midan diferentes niveles de aprendizaje, no solo memoria`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "¿Cuanto tiempo les toma crear un examen de 10 preguntas?",
        prompt: "Pregunte cuanto tiempo invierten en crear evaluaciones. Compare despues con el tiempo usando IA.",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "En parejas, practiquen: ¿Que prompt usarian para crear un quiz de 10 preguntas sobre un tema que ensenan?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "maestros-2-rubricas": {
    content: `## Crear Rubricas Efectivas con IA

### Por que esto importa

Una rubrica bien disenada transforma la evaluacion de subjetiva a objetiva. Sin rubrica, dos maestros pueden dar notas diferentes al mismo trabajo. Con rubrica, los criterios son claros para ti, para tus colegas, y especialmente para tus estudiantes. Pero crear rubricas detalladas toma tiempo - la IA puede generar borradores en minutos que luego personalizas segun tu contexto.

### Explicacion paso a paso

**Paso 1: Define que vas a evaluar**

Antes de pedir una rubrica a la IA, identifica los aspectos que quieres medir. Para un proyecto de investigacion, podrias evaluar: contenido (precision de informacion), organizacion (estructura logica), fuentes (uso de referencias), y presentacion (claridad visual). Para una exposicion oral: dominio del tema, contacto visual, volumen de voz, y respuesta a preguntas. La IA puede sugerir criterios, pero tu conoces mejor que competencias quieres desarrollar en tus estudiantes.

**Paso 2: Decide cuantos niveles de desempeno**

Las rubricas tipicamente tienen 3 a 5 niveles. Cuatro niveles funcionan bien: Excelente (4 puntos), Bueno (3 puntos), En Desarrollo (2 puntos), Necesita Mejora (1 punto). Evita usar "0" porque desmoraliza; mejor describe el nivel minimo aceptable. Cada nivel debe tener descripciones especificas de que se espera ver - no solo "bueno" vs "malo", sino comportamientos observables.

**Paso 3: Usa un prompt especifico para la IA**

Dale contexto completo: el tipo de actividad, el grado de los estudiantes, los criterios que quieres, y cuantos niveles. Ejemplo: "Crea una rubrica de 4 criterios y 4 niveles para evaluar una maqueta del ciclo del agua en 5to grado. Los criterios son: precision cientifica, creatividad, presentacion oral, y trabajo en equipo. Cada celda debe describir comportamientos especificos."

**Paso 4: Revisa y personaliza la rubrica**

La IA genera un borrador generico. Tu trabajo: ajustar las descripciones a tu contexto, verificar que los niveles sean distinguibles entre si, agregar ejemplos locales si aplica, y asegurar que el puntaje maximo es alcanzable pero representa verdadera excelencia.

### Ejemplo concreto

**Escenario:** Un maestro de San Miguel quiere evaluar presentaciones sobre "Volcanes de El Salvador".

1. Identifica criterios: Contenido cientifico, Ejemplos locales, Claridad de exposicion, Material visual
2. Usa prompt: "Crea rubrica de 4 criterios x 4 niveles para presentaciones de 5to grado sobre volcanes salvadorenos"
3. La IA genera descripciones como: "Excelente en Ejemplos Locales: Menciona al menos 3 volcanes salvadorenos con datos correctos de ubicacion y ultima actividad"
4. Personaliza: Agrega que deben mencionar el volcan mas cercano a San Miguel (Chaparrastique)
5. Resultado: Rubrica clara que estudiantes entienden antes de preparar su presentacion

### Contexto salvadoreno

**En San Miguel:** Los maestros de la zona oriental han desarrollado rubricas adaptadas a proyectos sobre riesgos volcanicos, dada la presencia del Chaparrastique. Una rubrica local incluye criterios como "conocimiento de rutas de evacuacion" y "aplicacion a la comunidad". La IA puede generar estructuras, pero el conocimiento del contexto de San Miguel lo aportas tu.

### Usalo con IA

**Cuando usar IA para rubricas:**
- Necesitas crear rubricas para multiples tipos de actividades
- Quieres asegurar criterios consistentes en tu departamento
- Necesitas ideas de descriptores para niveles intermedios

**Por que ayuda:** La IA genera estructuras completas que te tomarian horas. Tu rol es personalizar y verificar que aplica a tu realidad.

**Prompt seguro:** "Crea una rubrica de evaluacion para [ACTIVIDAD] en [GRADO]. Incluye [NUMERO] criterios y 4 niveles de desempeno. Cada celda debe describir comportamientos observables especificos."

**Cuidado:** Las rubricas de IA pueden ser demasiado genericas. Anade ejemplos de tu escuela o region para que estudiantes conecten con los criterios.

### Errores comunes

1. **Crear la rubrica despues de recibir trabajos** → **Correccion:** Comparte la rubrica ANTES de la actividad. Los estudiantes deben saber exactamente que se espera.

2. **Niveles indistinguibles ("bueno" vs "muy bueno")** → **Correccion:** Cada nivel debe describir comportamientos especificos y observables. "Excelente: 4+ fuentes citadas. Bueno: 2-3 fuentes citadas."

3. **Criterios demasiados vagos** → **Correccion:** En lugar de "creatividad", especifica: "uso de materiales variados, solucion original a un problema, presentacion visualmente atractiva."

### Practica con razonamiento

**Pregunta 1:** Cual es la principal ventaja de usar rubrica vs. calificar "a ojo"?
A) Es mas rapido
B) Los estudiantes no pueden reclamar
C) La evaluacion es consistente y transparente
D) Se ahorra papel

**Respuesta:** C - **Razonamiento:** La rubrica hace explicitos los criterios, permitiendo evaluacion justa y feedback especifico.

**Pregunta 2:** Cuando debes compartir la rubrica con estudiantes?
A) Despues de entregar notas
B) Cuando pidan verla
C) ANTES de que hagan la actividad
D) No es necesario compartirla

**Respuesta:** C - **Razonamiento:** Los estudiantes trabajan mejor cuando saben exactamente que se espera. La rubrica es una guia, no un secreto.

**Pregunta 3:** Un maestro genera rubrica con IA y la usa sin revisar. Que riesgo corre?
A) Ningun riesgo, la IA es precisa
B) Criterios que no aplican a su contexto o nivel de estudiantes
C) Estudiantes aprenden mas
D) Ahorra tiempo

**Respuesta:** B - **Razonamiento:** La IA genera rubricas genericas. Sin revision, los criterios pueden no aplicar a tu grado, tema, o contexto salvadoreno.

### Recordatorio de IA responsable

Las rubricas generadas por IA son puntos de partida, no productos finales. Tu expertise como docente es insustituible para decidir que es "excelente" en tu contexto especifico.

### Al terminar esta leccion, puedes...

1. Disenar rubricas con criterios claros y niveles de desempeno especificos
2. Usar IA para generar borradores de rubricas que luego personalizas
3. Compartir rubricas con estudiantes como guia de evaluacion transparente`,
    localContext: {
      hook: "Los maestros de San Miguel han desarrollado rubricas adaptadas a su contexto volcanico, evaluando conocimientos sobre el Chaparrastique y protocolos de emergencia.",
      department: "San Miguel"
    },
  },

  "maestros-2-practica": {
    practiceInstructions: `## Practica: Crea Cuestionario y Rubrica para Tu Clase

### Por que esta practica importa

Un buen cuestionario revela lo que tus estudiantes realmente aprendieron. Una buena rubrica les dice exactamente que se espera. En esta practica, crearas ambos usando IA, y los personalizaras para usar en tu proxima evaluacion real.

### Instrucciones paso a paso

**Parte 1: Generar un Cuestionario (15 minutos)**

**Paso 1: Elige el tema a evaluar (3 minutos)**

Selecciona un tema que hayas ensenado recientemente y que quieras evaluar esta semana. Decide: Quieres evaluar memorizacion (datos, fechas) o comprension (explicar por que)? Cuantas preguntas necesitas? Que tipos de preguntas: opcion multiple, verdadero/falso, respuesta corta?

**Paso 2: Accede al generador (2 minutos)**

Ve a "Maestro" > "Generador de Cuestionarios" en Salvora. Ingresa el tema, grado, y especifica cuantas preguntas de cada tipo quieres.

**Paso 3: Genera y revisa CADA pregunta (10 minutos)**

Esto es critico: revisa CADA pregunta antes de usar. Verifica:
- La pregunta es clara? Un estudiante entenderia que se le pide?
- La respuesta correcta es REALMENTE correcta?
- Las opciones incorrectas son plausibles pero claramente incorrectas?
- El nivel de dificultad es apropiado para tu grupo?
- Hay algun sesgo cultural o error de contexto salvadoreno?

**Parte 2: Crear una Rubrica (15 minutos)**

**Paso 4: Elige el proyecto a evaluar (3 minutos)**

Piensa en un proyecto que asignaras proximo. Puede ser exposicion oral, trabajo escrito, maqueta, investigacion. Define 4 criterios que evaluaras.

**Paso 5: Genera rubrica con IA (5 minutos)**

Usa prompt como: "Crea rubrica de 4 criterios x 4 niveles para evaluar [PROYECTO] en [GRADO]. Criterios: [LISTA]. Cada celda debe describir comportamientos observables."

**Paso 6: Personaliza la rubrica (7 minutos)**

Ajusta las descripciones. Un nivel "Excelente" en tu escuela puede ser diferente al estandar generico. Anade ejemplos locales. Asegurate de que los niveles son distinguibles entre si.

### Ejemplo de flujo completo

**Escenario:** Un maestro de Ahuachapan evalua su unidad sobre el cafe.

1. **Cuestionario**: Genera 10 preguntas sobre el proceso del cafe, desde semilla hasta taza
2. **Revision**: Encuentra que una pregunta dice "Colombia es el mayor productor" - corrige a "Brasil"
3. **Ajuste local**: Agrega pregunta sobre zonas cafetaleras de Ahuachapan
4. **Rubrica**: Para exposicion sobre "El cafe en mi comunidad", criterios: Contenido, Ejemplos locales, Presentacion oral, Material visual
5. **Personalizacion**: En "Ejemplos locales" agrega "menciona fincas de Apaneca o Juayua"
6. **Resultado**: Cuestionario verificado y rubrica personalizada, listos para usar

### Contexto salvadoreno

**En Ahuachapan:** La region cafetalera occidental ofrece oportunidades unicas para evaluaciones locales. Los maestros de Ahuachapan crean cuestionarios que incluyen la Ruta de las Flores, las fincas de Apaneca, y el impacto del cafe en la economia local. La IA genera estructura; tu conocimiento del occidente lo hace relevante.

### Lista de verificacion

**Para el cuestionario:**
- [ ] Revise CADA pregunta, no solo ojee
- [ ] Verifique que respuestas "correctas" son realmente correctas
- [ ] Las preguntas cubren los temas mas importantes
- [ ] El nivel de dificultad es apropiado
- [ ] Incluye al menos 1-2 preguntas de contexto local

**Para la rubrica:**
- [ ] Los 4 niveles son distinguibles (no solo "bueno" vs "muy bueno")
- [ ] Las descripciones son de comportamientos observables
- [ ] Incluye criterios que valoras para TU contexto
- [ ] La rubrica sera compartida con estudiantes ANTES del proyecto

### Errores comunes en esta practica

1. **Aceptar cuestionario sin revisar cada pregunta** → La IA puede generar respuestas incorrectas. Verifica todo.

2. **Rubrica con niveles vagos** → "Excelente: muy bueno" no dice nada. Describe comportamientos especificos.

3. **No probar el cuestionario antes de aplicarlo** → Si es posible, resuelve tu propio cuestionario para detectar problemas.

### Reflexion al finalizar

- Las preguntas del cuestionario cubren los puntos MAS importantes del tema?
- La rubrica ayudara a los estudiantes a entender exactamente que esperas?
- Que ajustaste del contenido generado por IA para adaptarlo a TU contexto?
- Usaras estos materiales esta semana? Que observaras?

### Al terminar esta practica, puedes...

1. Generar cuestionarios con IA y revisarlos criticamente antes de usar
2. Crear rubricas con criterios claros y niveles de desempeno especificos
3. Personalizar evaluaciones para tu contexto salvadoreno especifico`,
    localContext: {
      hook: "En Ahuachapan, los maestros aprovechan la Ruta de las Flores y las fincas cafetaleras para crear evaluaciones con contexto local. La IA genera estructura; tu conocimiento del occidente lo hace relevante.",
      department: "Ahuachapan"
    },
  },

  "maestros-3-seguridad": {
    transcript: `## Seguridad y Privacidad con IA en el Aula

### Por que esto importa

Como maestro, eres guardian de la privacidad de tus estudiantes. Las herramientas de IA son poderosas, pero cada dato que ingresas puede ser almacenado, procesado, y usado de formas que no controlas. Esta leccion te ensena a usar IA de manera segura, protegiendo a tus estudiantes mientras aprovechas los beneficios de la tecnologia.

### Explicacion paso a paso

**Paso 1: Nunca ingreses datos personales de estudiantes**

Esta es la regla mas importante. Nunca ingreses en ninguna herramienta de IA: nombres completos de estudiantes, datos familiares, informacion medica o psicologica, direcciones, telefonos, o cualquier dato que identifique a un menor. Si necesitas consultar sobre un estudiante, usa descripciones genericas: "Tengo un estudiante de 8vo grado que tiene dificultades con matematicas" en lugar de "Juan Perez de 8vo B tiene problemas con matematicas".

**Paso 2: Verifica todo antes de usar**

La IA puede generar informacion incorrecta con total confianza. Antes de usar cualquier dato en tu clase, verifica: calculos matematicos (la IA puede equivocarse con numeros), fechas historicas (puede inventar fechas), datos de El Salvador (probablemente tiene informacion desactualizada o incorrecta), y estrategias pedagogicas (algunas pueden no ser apropiadas para tu contexto).

**Paso 3: Modela el uso responsable**

Tus estudiantes te observan. Cuando usas IA en clase, estas ensenando como usarla. Si la usas responsablemente - citando cuando la usas, verificando informacion, protegiendo privacidad - ellos aprenderan esas practicas. Si la usas descuidadamente, ellos copiaran ese comportamiento.

**Paso 4: Conoce los limites de la IA**

La IA no debe reemplazar tu juicio profesional, la relacion humana con tus estudiantes, tu creatividad como educador, ni la empatia que solo un humano puede dar. Usa la IA para tareas mecanicas (generar borradores, buscar ideas) y reserva tu energia para lo que solo tu puedes hacer: conectar con tus estudiantes.

### Ejemplo concreto

**Escenario:** Una maestra de Apopa quiere consultar a la IA sobre un estudiante que tiene dificultades.

**Forma incorrecta:** "Pedro Martinez, estudiante de 6to B de la Escuela Republica de Honduras en Apopa, hijo de Maria Martinez de colonia Las Brisas, tiene problemas de conducta y le diagnosticaron TDAH. Que hago?"

**Problema:** Esta consulta expone el nombre del menor, su escuela, su familia, su direccion, y su condicion medica. Toda esta informacion podria ser almacenada y procesada.

**Forma correcta:** "Tengo un estudiante de 6to grado que tiene dificultades para mantener atencion en clase y a veces interrumpe. Que estrategias practicas puedo usar en el aula para ayudarlo?"

**Resultado:** La segunda version obtiene las mismas estrategias utiles sin exponer ningun dato del menor.

### Contexto salvadoreno

**En Apopa:** El programa piloto de Salvora establecio protocolos claros de privacidad desde el inicio. Los maestros de Apopa aprendieron a consultar sobre situaciones sin revelar identidades. Una directora implemento una regla simple: "Si la IA pudiera identificar al estudiante por tu pregunta, reformula." Este enfoque protege a los menores mientras permite a los maestros beneficiarse de la tecnologia. El modelo de Apopa ahora se replica en todo El Salvador.

### Usalo con IA

**Cuando usar IA de manera segura:**
- Consultas sobre estrategias pedagogicas generales
- Generacion de materiales y planes (sin datos de estudiantes)
- Busqueda de ideas para actividades

**Por que ayuda:** Puedes obtener consejos utiles sin comprometer la privacidad de nadie.

**Prompt seguro:** "Tengo un estudiante de [GRADO] que tiene dificultades con [SITUACION GENERAL]. Que estrategias practicas puedo implementar en clase?"

**Cuidado:** Si la IA pide mas detalles, NO des informacion identificable. Responde con descripciones genericas o reformula tu pregunta.

### Errores comunes

1. **Usar nombres reales por conveniencia** → Es mas facil escribir "Pedro" que "el estudiante". Pero esa comodidad puede comprometer la privacidad de un menor. Siempre usa descripciones anonimas.

2. **Compartir diagnosticos o situaciones familiares** → Informacion medica o familiar es especialmente sensible. Consulta sobre "dificultades de atencion" en general, no sobre diagnosticos especificos.

3. **Confiar ciegamente en recomendaciones de IA** → La IA puede sugerir estrategias que no son apropiadas para tu contexto o cultura. Tu juicio profesional siempre es la ultima palabra.

### Practica con razonamiento

**Pregunta 1:** ¿Que informacion NUNCA debes compartir con una IA sobre tus estudiantes?
- A) El grado escolar
- B) Nombres completos, datos familiares, direcciones, informacion medica
- C) El tema que estudian
- D) La materia

**Respuesta:** B - Los datos personales identificables de menores deben protegerse siempre. El grado y la materia son informacion generica que no identifica a nadie.

**Pregunta 2:** ¿Como debes referirte a un estudiante cuando consultas con IA?
- A) Por su nombre completo
- B) Por su apodo
- C) Con descripciones genericas: "un estudiante de 7mo con dificultades en..."
- D) Por su numero de carnet

**Respuesta:** C - Descripciones anonimas protegen la identidad mientras permiten obtener consejos utiles.

**Pregunta 3:** ¿Que debes hacer si la IA sugiere algo que parece inapropiado para tu contexto?
- A) Seguir el consejo igual porque la IA sabe mas
- B) Usar tu juicio profesional para decidir que es apropiado
- C) Abandonar la IA completamente
- D) Preguntar a la IA si esta segura

**Respuesta:** B - Tu conoces a tus estudiantes y tu contexto. La IA da sugerencias generales; tu decides que aplica.

### Recordatorio de IA responsable

Eres el guardian de la privacidad de tus estudiantes. La informacion que compartes con herramientas de IA puede ser almacenada, analizada, y usada de formas que no controlas. Proteger a tus estudiantes es parte de tu responsabilidad profesional. La IA es una herramienta poderosa, pero tu etica es mas poderosa.

### Al terminar esta leccion, puedes...

1. Consultar sobre situaciones de estudiantes sin revelar datos identificables
2. Verificar informacion de IA antes de usarla en clase
3. Modelar uso responsable de IA para que tus estudiantes aprendan buenas practicas`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Que informacion de tus estudiantes consideras privada?",
        prompt: "Piensa en datos que NO deberian compartirse con herramientas externas",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "Discute con un colega: Como puedes consultar sobre un estudiante con IA sin revelar su identidad?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "maestros-3-cheating": {
    content: `## Detectando y Previniendo el Uso Inapropiado de IA

### Por que esto importa

La misma herramienta que puede transformar el aprendizaje puede sabotearlo si se usa para copiar. Tu rol no es convertirte en detective de trampa, sino disenar experiencias de aprendizaje donde copiar sea dificil y aprender sea mas atractivo que hacer trampa. Esta leccion te da estrategias practicas para ambos objetivos.

### Explicacion paso a paso

**Paso 1: Entiende por que los estudiantes copian**

Antes de detectar o prevenir, comprende las causas. Los estudiantes copian cuando: sienten que la tarea es irrelevante ("para que me sirve esto?"), estan abrumados y no saben por donde empezar, priorizan la nota sobre el aprendizaje, o ven que otros copian sin consecuencias. Cada causa requiere una respuesta diferente. No todas se resuelven con "mas vigilancia".

**Paso 2: Reconoce las senales de trabajo generado por IA**

Algunas senales son sutiles, otras obvias. En trabajos escritos: vocabulario inusualmente sofisticado para el nivel del estudiante, estilo de escritura inconsistente (parrafos que suenan diferentes entre si), ausencia de errores ortograficos tipicos de la edad, ejemplos genericos que no reflejan el contexto salvadoreno, y respuestas "perfectas" pero superficiales. En el comportamiento: el estudiante no puede explicar su propio trabajo, evita preguntas de seguimiento, o muestra cambio drastico en calidad respecto a trabajos anteriores.

**Paso 3: Disena tareas dificiles de copiar con IA**

La mejor defensa es una buena tarea. Incluye reflexion personal ("que opinas TU de..."), contexto local especifico ("como se aplica esto en tu colonia"), trabajo en clase supervisado donde puedas observar el proceso, formatos creativos (audio, dibujo, presentacion oral), y conexion con experiencias personales que la IA no puede inventar.

**Paso 4: Evalua el proceso, no solo el producto**

Pide borradores previos y compara con el trabajo final. Haz preguntas de seguimiento orales ("explicame este parrafo"). Observa como trabajan en clase. Si un estudiante "entrego" algo excelente pero no puede explicarlo, la conversacion educativa es mas valiosa que la acusacion.

**Paso 5: Habla abiertamente sobre IA y honestidad**

Explica POR QUE copiar es problematico - no por la nota, sino porque se estan enganando a si mismos. En 10 anos, nadie preguntara su nota de 7mo grado, pero si preguntaran si saben resolver problemas. Ensenales a usar IA de manera legitima: para estudiar, verificar, explorar - no para entregar trabajo que no es suyo.

### Ejemplo concreto

**Escenario:** Un maestro de Usulutan recibe una composicion sobre "mi comunidad" que tiene vocabulario universitario y no menciona nada especifico de Usulutan.

1. **Senal detectada:** Vocabulario inconsistente, contenido generico
2. **Antes de acusar:** "Me encanta tu composicion. Cuentame mas sobre el ejemplo del parrafo 3."
3. **Si no puede explicar:** "Noto que hay partes que suenan diferentes. Trabajemos juntos en la proxima version - quiero escuchar TU voz."
4. **Conversacion educativa:** Explicar que la IA puede ayudar a explorar ideas, pero el trabajo final debe ser suyo
5. **Replanteamiento:** Asignar version donde incluya fotos de SU barrio y entrevista a un vecino

### Contexto salvadoreno

**En Usulutan:** Los maestros de la zona costera han desarrollado tareas "a prueba de IA" que incluyen contexto ultralocal. "Describe el proceso de pesca en tu comunidad" o "Entrevista a alguien que vivio el terremoto del 2001" son imposibles de copiar porque requieren experiencia personal. Este enfoque convierte la limitacion (la IA no conoce tu comunidad) en fortaleza pedagogica.

### Usalo con IA

**Cuando usar IA en la deteccion:**
- Puedes pedir a la IA que identifique patrones de lenguaje atipicos
- Pero NO confies solo en "detectores de IA" - son muy imprecisos

**Por que NO depender de detectores:** Los detectores de IA tienen altas tasas de falsos positivos - pueden acusar a estudiantes honestos. Es mejor disenar buenas tareas y conversar con estudiantes que depender de tecnologia imprecisa.

**Prompt seguro:** "Ayudame a disenar una tarea sobre [TEMA] para [GRADO] que requiera reflexion personal y contexto local, dificil de completar solo con IA."

**Cuidado:** No conviertas tu aula en un ambiente de sospecha constante. La confianza pedagogica es mas valiosa que atrapar copiones.

### Errores comunes

1. **Acusar sin evidencia clara** → **Correccion:** Haz preguntas de seguimiento primero. "Cuentame mas sobre esto" es mejor que "esto lo copiaste".

2. **Usar "detectores de IA" como prueba definitiva** → **Correccion:** Estos detectores son muy imprecisos. Conversa con el estudiante; el dialogo revela mas que cualquier software.

3. **Prohibir toda IA en lugar de ensenar uso legitimo** → **Correccion:** La IA es parte del futuro. Ensena cuando es apropiado usarla (para estudiar, explorar) vs. inapropiado (para entregar trabajo ajeno).

### Practica con razonamiento

**Pregunta 1:** Un estudiante entrega trabajo excelente pero no puede explicarlo. Que haces primero?
A) Ponerle cero inmediatamente
B) Reportarlo al director
C) Hacerle preguntas de seguimiento en conversacion
D) Usar un detector de IA

**Respuesta:** C - **Razonamiento:** El dialogo revela si entendio el tema. Acusar sin conversacion dana la relacion pedagogica.

**Pregunta 2:** Cual es la mejor forma de prevenir copia con IA?
A) Prohibir todos los dispositivos
B) Disenar tareas que requieran reflexion personal y contexto local
C) Vigilar constantemente
D) Usar solo examenes escritos en papel

**Respuesta:** B - **Razonamiento:** Tareas bien disenadas son la mejor prevencion. La vigilancia constante crea ambiente negativo.

**Pregunta 3:** Por que NO debes confiar solo en detectores de IA?
A) Son muy costosos
B) Tienen altas tasas de error y pueden acusar a inocentes
C) Los estudiantes pueden hackearlos
D) Solo funcionan en ingles

**Respuesta:** B - **Razonamiento:** Los detectores tienen muchos falsos positivos. El dialogo con el estudiante es mas confiable.

### Recordatorio de IA responsable

Tu objetivo es formar estudiantes eticos que usen tecnologia responsablemente, no atrapar copiones. La conversacion educativa es mas poderosa que la acusacion.

### Al terminar esta leccion, puedes...

1. Reconocer senales de trabajo potencialmente generado por IA
2. Disenar tareas dificiles de copiar que requieran reflexion personal
3. Manejar situaciones de posible copia con conversacion educativa, no acusacion`,
    localContext: {
      hook: "En Usulutan, los maestros disenan tareas con contexto ultralocal - describir la pesca en Puerto El Triunfo o entrevistar sobrevivientes del terremoto - que son imposibles de copiar porque requieren experiencia personal.",
      department: "Usulutan"
    },
  },

  "maestros-3-privacidad": {
    transcript: `## Proteccion de Datos y Comunicacion con Padres sobre IA

### Por que esto importa

Cada vez que ingresas informacion en una herramienta de IA, esos datos pueden ser almacenados, procesados, y usados de formas que no controlas. Como maestro, manejas informacion sensible de menores de edad - nombres, situaciones familiares, necesidades especiales, comportamientos. Proteger estos datos no es solo buena practica: es tu responsabilidad etica y, en muchos casos, legal.

### Explicacion paso a paso

**Paso 1: Conoce que datos son sensibles**

Datos sensibles de estudiantes incluyen: nombres completos y apodos, direcciones y telefonos, situaciones familiares (divorcios, enfermedades, problemas economicos), condiciones medicas o de aprendizaje, comportamientos problematicos, notas y evaluaciones, fotos y videos. Incluso datos que parecen inocuos pueden identificar a un estudiante cuando se combinan ("el nino de 5to B con lentes que vive cerca del mercado").

**Paso 2: Nunca ingreses datos identificables en IA**

Si necesitas consultar sobre una situacion especifica, usa descripciones genericas. En lugar de "Pedro Martinez de 6to B tiene TDAH y sus papas estan divorciados", di "Un estudiante de 6to grado tiene dificultades de atencion y viene de hogar uniparental. Que estrategias me recomiendas?" La segunda version obtiene las mismas sugerencias utiles sin exponer al menor.

**Paso 3: Ten cuidado con trabajos de estudiantes**

Si quieres que la IA te ayude a dar retroalimentacion, elimina primero cualquier informacion identificable: nombres, numeros de carnet, referencias a su familia o comunidad especifica. Puedes copiar solo el texto del trabajo sin encabezados que identifiquen.

**Paso 4: Comunica a padres y directores como usas IA**

La transparencia genera confianza. Informa a padres en reuniones: "Uso herramientas de IA para generar materiales educativos. Nunca ingreso datos personales de sus hijos." Informa a tu director sobre que herramientas usas. Documenta tu uso responsable - si alguien pregunta, tendras respuestas claras.

**Paso 5: Conoce las politicas de tu institucion**

Algunas escuelas tienen reglas especificas sobre uso de IA y manejo de datos. El MINED puede emitir lineamientos. Asegurate de conocer y cumplir las politicas vigentes. Ante la duda, pregunta a tu director o supervisor.

### Ejemplo concreto

**Escenario:** Una maestra de San Salvador quiere usar IA para obtener ideas sobre como ayudar a una estudiante con dificultades.

**Forma incorrecta:** "Maria Fernanda Lopez de 4to A en la Escuela Republica de Chile tiene problemas de lectura. Su mama trabaja en el mercado Central y no puede ayudarla con tareas. Tambien tiene deficit de atencion. Que hago?"

**Problema:** Esta consulta expone el nombre completo, escuela, grado, condicion medica, situacion laboral de la mama, y ubicacion geografica.

**Forma correcta:** "Una estudiante de 4to grado tiene dificultades con comprension lectora, posible problema de atencion, y poco apoyo en casa para tareas. Que estrategias practicas puedo usar en el aula para ayudarla?"

**Resultado:** Mismas sugerencias utiles, cero riesgo de privacidad.

### Contexto salvadoreno

**En San Salvador:** Con la concentracion de escuelas en la capital, la proteccion de datos es especialmente importante. Los maestros de San Salvador han aprendido a consultar de manera anonima, usando descripciones de situacion sin revelar identidades. Una directora implemento una politica simple: "Si la IA pudiera identificar al estudiante, reformula tu consulta." Este protocolo se ha convertido en modelo para otras escuelas del departamento.

### Usalo con IA

**Cuando usar IA de manera segura:**
- Consultas sobre estrategias pedagogicas generales
- Generacion de materiales y planes sin datos de estudiantes
- Busqueda de ideas para actividades y diferenciacion

**Por que importa proteger:** Los datos de menores son especialmente sensibles. Una vez compartidos, no puedes controlar como se usan o almacenan.

**Prompt seguro:** "Tengo un estudiante de [GRADO] con [SITUACION GENERAL SIN DATOS IDENTIFICABLES]. Que estrategias practicas puedo implementar en clase?"

**Cuidado:** Si la IA pide mas detalles, NO des informacion identificable. Responde con descripciones genericas o reformula tu pregunta.

### Errores comunes

1. **Compartir nombres "porque nadie mas ve la conversacion"** → **Correccion:** Los datos pueden ser almacenados y procesados. Nunca uses nombres reales, aunque parezca privado.

2. **Copiar trabajos completos de estudiantes con encabezados** → **Correccion:** Elimina nombre, grado, escuela, y cualquier referencia identificable antes de pedir retroalimentacion.

3. **No informar a padres sobre uso de IA** → **Correccion:** La transparencia genera confianza. Menciona en reuniones como usas IA responsablemente.

### Practica con razonamiento

**Pregunta 1:** Que informacion de estudiantes NUNCA debes ingresar en herramientas de IA?
A) El grado escolar
B) Nombres, direcciones, y condiciones medicas
C) El tema que estudian
D) La materia

**Respuesta:** B - **Razonamiento:** Los datos personales identificables estan prohibidos. El grado o materia no identifican a nadie.

**Pregunta 2:** Como debes referirte a un estudiante al consultar con IA?
A) Por su nombre de pila
B) Por su numero de lista
C) Con descripciones genericas anonimas
D) Por su apodo

**Respuesta:** C - **Razonamiento:** "Un estudiante de 7mo con dificultades en matematicas" protege la identidad mientras te permite obtener ayuda.

**Pregunta 3:** Que debes hacer antes de pedir a la IA que revise un trabajo de estudiante?
A) Nada especial
B) Eliminar informacion identificable del trabajo
C) Agregar mas contexto sobre el estudiante
D) Pedir permiso a la IA

**Respuesta:** B - **Razonamiento:** Antes de compartir trabajo estudiantil, remueve nombres, encabezados, y cualquier dato que identifique al menor.

### Recordatorio de IA responsable

Eres el guardian de la privacidad de tus estudiantes. La IA es una herramienta, no un confidente. Cada dato que compartes puede tener consecuencias que no controlas.

### Al terminar esta leccion, puedes...

1. Identificar que datos de estudiantes son sensibles y nunca deben compartirse
2. Formular consultas efectivas sin revelar informacion identificable
3. Comunicar a padres y directores tu uso responsable de IA`,
    localContext: {
      hook: "En San Salvador, los maestros han desarrollado protocolos de privacidad que se han convertido en modelo para todo el pais. La regla simple: si la IA pudiera identificar al estudiante, reformula tu consulta.",
      department: "San Salvador"
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Has usado alguna vez herramientas digitales para hablar de estudiantes?",
        prompt: "Piensa en chats, emails, o cualquier plataforma donde mencionas a estudiantes",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Menciona las 4 reglas de privacidad que aprendiste. Cual es la mas importante para ti?",
        pairWork: true,
        timer: 90
      }
    }
  },

  // ===== CURSO 3: IA PARA ESTUDIANTES =====

  "estudiantes-1-pedir-ayuda": {
    transcript: `## Como Pedir Ayuda a la IA de Manera Efectiva

### Por que esto importa

Imagina tener un tutor personal disponible las 24 horas, los 7 dias de la semana, que nunca se cansa de explicarte algo, que no te juzga por no entender, y que puede darte ejemplos personalizados. Eso es la IA cuando sabes usarla bien. Pero hay una condicion: tienes que saber COMO preguntar. Una buena pregunta te da una buena explicacion. Una mala pregunta te da una respuesta inutil o, peor, te da la respuesta sin que aprendas nada.

### Explicacion paso a paso

**Paso 1: Se especifico sobre lo que no entiendes**

La IA no puede leer tu mente. Si dices "no entiendo matematicas", la IA no sabe si te refieres a fracciones, algebra, geometria, o todo. Cuanto mas especifico seas, mejor te puede ayudar.

Malo: "No entiendo matematicas"
Bueno: "No entiendo como multiplicar fracciones. Por ejemplo, 3/4 por 2/5. Puedes explicarme paso a paso?"

La segunda pregunta le dice exactamente a la IA que necesitas: multiplicacion de fracciones, un ejemplo especifico, y explicacion paso a paso.

**Paso 2: Pide explicaciones, no respuestas**

Esta es la regla de oro. Si le pides a la IA "cual es la respuesta de 2x + 5 = 15?", te la dara: x = 5. Pero no aprendiste nada. En el examen, no tendras IA, y no sabras resolver problemas similares.

Malo: "Cual es la respuesta a 2x + 5 = 15?"
Bueno: "Explicame los pasos para resolver 2x + 5 = 15. Dime que estoy haciendo en cada paso y por que."

La segunda pregunta te ensenara a resolver CUALQUIER ecuacion similar, no solo esa.

**Paso 3: Si no entiendes, pide que lo explique de otra forma**

La IA puede explicar el mismo concepto de muchas maneras. Si la primera explicacion no te queda clara, no te rindas. Pide alternativas:
- "Puedes explicarlo de manera mas simple?"
- "Dame un ejemplo con cosas de la vida real"
- "Explicalo como si tuviera 10 anos"
- "Usa un ejemplo con comida o deportes"

**Paso 4: Verifica tu entendimiento**

Despues de que la IA te explique algo, verifica que entendiste bien. Intenta explicarlo con tus palabras:
- "Entendi que para multiplicar fracciones multiplico arriba con arriba y abajo con abajo. Es correcto?"
- "Entonces el ciclo del agua es: evaporacion, condensacion, precipitacion. Estoy bien?"

Si entendiste mal, la IA te corregira. Mejor descubrirlo ahora que en el examen.

### Ejemplo concreto

**Escenario:** Una estudiante de Usulutan tiene tarea de fracciones pero no entiende como dividir fracciones.

1. **Pregunta mala:** "Cuanto es 3/4 dividido 1/2?" (solo pide respuesta)
2. **Pregunta buena:** "No entiendo como dividir fracciones. Puedes explicarme el proceso paso a paso? Por ejemplo, 3/4 dividido 1/2. Quiero entender POR QUE volteo la segunda fraccion."
3. **La IA explica:** El proceso de multiplicar por el reciproco y por que funciona matematicamente
4. **La estudiante verifica:** "Entonces siempre volteo la segunda fraccion y luego multiplico. Es como convertir la division en multiplicacion?"
5. **Resultado:** Ahora puede dividir CUALQUIER fraccion, no solo la de la tarea

### Contexto salvadoreno

**En Usulutan:** Los estudiantes han descubierto que la IA entiende ejemplos locales. "Explicame las fracciones usando pupusas" funciona perfectamente. "Si tengo 8 pupusas y doy 2 a mi hermano, que fraccion le di?" La IA puede usar ejemplos con colones, con distancias entre pueblos de Usulutan, o con ingredientes de comida salvadorena. No tengas miedo de pedir ejemplos de tu vida.

### Usalo con IA

**Cuando usar IA para pedir ayuda:**
- Cuando no entiendes un tema de clase
- Cuando quieres practicar antes de un examen
- Cuando necesitas ejemplos diferentes a los del libro
- Cuando quieres verificar si entendiste bien

**Por que ayuda:** Un tutor humano puede cansarse, puede no estar disponible, puede juzgarte. La IA esta siempre disponible, nunca se cansa, y explica las veces que necesites sin impacientarse.

**Prompt seguro:** "No entiendo [TEMA]. Explicame paso a paso con ejemplos simples. Si no entiendo la primera vez, te voy a pedir que lo expliques de otra forma."

**Cuidado:** La IA a veces da explicaciones complicadas. Si no entiendes, pide que simplifique. No copies algo que no entiendes.

### Errores comunes

1. **Preguntar demasiado vago** → **Correccion:** Se especifico. En lugar de "ayudame con ciencias", di "explicame como funciona la fotosintesis paso a paso".

2. **Copiar la respuesta sin entender** → **Correccion:** Pide explicaciones. Intenta resolver tu solo despues. Si no puedes explicar lo que entregaste, no lo entendiste.

3. **Rendirse si no entiendes a la primera** → **Correccion:** Pide otra explicacion. "No me quedo claro. Puedes usar otro ejemplo?" La IA tiene infinita paciencia.

### Practica con razonamiento

**Pregunta 1:** Cual es una MEJOR forma de pedir ayuda a la IA?
A) "No entiendo matematicas"
B) "No entiendo como multiplicar fracciones. Explicame con un ejemplo simple"
C) "Resuelve mi tarea"
D) "Matematicas es muy dificil"

**Respuesta:** B - **Razonamiento:** Entre mas especifico seas, mejor te puede ayudar la IA. "Multiplicar fracciones" es claro; "matematicas" es demasiado amplio.

**Pregunta 2:** Si la IA te explica algo y no entiendes, que debes hacer?
A) Rendirte y buscar en otro lugar
B) Copiar la explicacion aunque no entiendas
C) Pedir que lo explique de otra forma o mas simple
D) Decir que la IA no sirve

**Respuesta:** C - **Razonamiento:** La IA puede explicar de muchas formas. Siempre puedes pedir otra version mas simple o con ejemplos diferentes.

**Pregunta 3:** Por que es mejor pedir "explicame los pasos" en lugar de "dame la respuesta"?
A) No hay diferencia
B) Porque asi APRENDES y puedes resolver problemas similares tu solo
C) Porque la IA no sabe las respuestas
D) Porque toma mas tiempo y asi parece que trabajaste mas

**Respuesta:** B - **Razonamiento:** Entender el proceso te prepara para resolver cualquier problema similar. La respuesta sola no te ensena nada.

### Recordatorio de IA responsable

Pedir ayuda es inteligente. Copiar sin entender es enganarte a ti mismo. Tu cerebro necesita trabajar para aprender - la IA facilita el trabajo, pero no puede aprender por ti.

### Al terminar esta leccion, puedes...

1. Formular preguntas especificas que obtienen explicaciones utiles de la IA
2. Pedir explicaciones alternativas cuando no entiendes a la primera
3. Verificar tu entendimiento antes de pasar al siguiente tema`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Cuando tienes una tarea dificil, que es lo primero que haces?",
        prompt: "Piensa en tus estrategias actuales para pedir ayuda",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Comparte con tu companero: Cual es el tip mas util que aprendiste para pedir ayuda a la IA?",
        pairWork: true,
        timer: 90
      }
    }
  },

  "estudiantes-1-aprender": {
    transcript: `## La Diferencia entre Aprender con IA y Copiar de IA

### Por que esto importa

Esta es la leccion mas importante del curso. La IA puede hacerte mas inteligente O puede hacerte mas tonto - depende de como la uses. Si la usas para aprender, desarrollas tu cerebro. Si la usas para copiar, tu cerebro se debilita. La diferencia parece pequena al principio, pero con el tiempo, los que aprenden se adelantan mucho a los que copian.

### Explicacion paso a paso

**Paso 1: Entiende que es COPIAR**

Copiar es cuando le pides a la IA que haga tu trabajo por ti. Ejemplos de copiar:
- "Escribe mi ensayo sobre la independencia de Centroamerica"
- "Resuelve estos 10 problemas de matematicas"
- "Dame las respuestas del cuestionario"
- Usar IA en examenes sin permiso

En todos estos casos, la IA hace el trabajo, tu cerebro no trabaja, y no aprendes nada.

**Paso 2: Entiende que es APRENDER**

Aprender es cuando usas la IA como herramienta para entender mejor. Ejemplos de aprender:
- "Explicame las causas de la independencia de Centroamerica para que yo escriba mi ensayo"
- "Muestrame como resolver este tipo de problema, luego yo intento uno similar"
- "Revisa mi trabajo y dime donde me equivoque, pero no me des la respuesta"
- Usar IA para prepararte para examenes practicando

En estos casos, TU haces el trabajo final, pero la IA te ayuda a entender mejor.

**Paso 3: Compara los resultados**

Imagina dos estudiantes con el mismo examen de matematicas. El primero copio todas las tareas con IA - nunca entendio nada. El segundo pidio explicaciones a la IA, luego resolvio los problemas el mismo. El dia del examen, no hay IA disponible. Quien crees que aprobara?

El segundo, obviamente. El primero no sabe nada porque nunca aprendio.

**Paso 4: La metafora del gimnasio**

Piensa en la IA como un gimnasio para tu cerebro. Ir al gimnasio no te hace fuerte si alguien mas levanta las pesas por ti. TU tienes que hacer el esfuerzo. La IA puede ser tu entrenador - te guia, te corrige, te explica - pero tu tienes que hacer las repeticiones. Tu cerebro, igual que tus musculos, se fortalece con el uso.

### Ejemplo concreto

**Escenario:** Dos estudiantes de Santa Ana tienen tarea de escribir un ensayo sobre los volcanes de El Salvador.

**Estudiante A (Copia):**
1. Pide a la IA: "Escribe un ensayo de 500 palabras sobre volcanes de El Salvador"
2. Copia el ensayo exacto que la IA genera
3. Lo entrega sin leerlo bien
4. Saca buena nota en la tarea
5. En el examen, no recuerda nada sobre volcanes
6. Reprueba el examen

**Estudiante B (Aprende):**
1. Pide a la IA: "Cuales son los volcanes mas importantes de El Salvador y por que son importantes?"
2. Lee la explicacion y toma notas
3. Pide: "Que estructura deberia tener mi ensayo sobre volcanes?"
4. Escribe SU ensayo con sus propias palabras
5. Pide a la IA: "Revisa mi ensayo y dime que puedo mejorar"
6. En el examen, recuerda todo porque realmente aprendio
7. Aprueba el examen

### Contexto salvadoreno

**En Santa Ana:** Los estudiantes de la segunda ciudad de El Salvador enfrentan el mismo dilema que estudiantes en todo el mundo: la tentacion de copiar vs. el esfuerzo de aprender. Los colegios de Santa Ana estan ensenando a distinguir entre uso responsable e irresponsable de IA. Los estudiantes que aprenden a usarla bien tendran ventaja en universidades y trabajos; los que solo copian se quedaran atras.

### Usalo con IA

**Cuando estas APRENDIENDO (bien):**
- Pides explicaciones de conceptos que no entiendes
- Practicas problemas y pides verificacion
- La IA te guia pero TU haces el trabajo final
- Puedes explicar lo que entregaste

**Cuando estas COPIANDO (mal):**
- Pides respuestas completas
- Entregas sin entender
- No puedes explicar tu propio trabajo
- Usas IA cuando esta prohibido

**Prompt seguro:** "Explicame [TEMA] paso a paso. Despues dame un problema para que yo lo resuelva, y luego verificas si lo hice bien."

**Cuidado:** Si no puedes explicar lo que entregaste, probablemente copiaste.

### Errores comunes

1. **"Nadie se va a dar cuenta si copio"** → **Realidad:** En el examen, no habra IA, y tu falta de conocimiento sera evidente. Te estas enganando a ti mismo.

2. **"Solo copio esta vez porque no tengo tiempo"** → **Realidad:** Cada vez que copias, tu cerebro se debilita. Copiar una vez lleva a copiar siempre.

3. **"La IA sabe mas que yo, para que esforzarme"** → **Realidad:** El objetivo no es competir con la IA, sino usar la IA para ser MEJOR de lo que serias sin ella.

### Practica con razonamiento

**Pregunta 1:** Un estudiante pide a la IA "Escribe mi ensayo sobre la independencia". Esto es:
A) Aprender con IA
B) Copiar de IA
C) Uso responsable
D) Lo correcto en situaciones de prisa

**Respuesta:** B - **Razonamiento:** Pedir que hagan tu trabajo por ti es copiar. No aprendes nada si la IA escribe por ti.

**Pregunta 2:** Un estudiante pide "Explicame las causas de la independencia para que yo escriba mi ensayo". Esto es:
A) Copiar
B) Hacer trampa
C) Aprender con IA
D) Perder tiempo

**Respuesta:** C - **Razonamiento:** Pedir explicaciones para luego hacer TU trabajo es aprender. El estudiante entendera el tema y escribira con sus propias palabras.

**Pregunta 3:** Por que copiar con IA es enganarte a TI mismo?
A) Porque el maestro se molesta
B) Porque en el examen no tendras IA y no sabras nada
C) Porque la IA cobra por respuestas
D) Porque otros estudiantes se enojan

**Respuesta:** B - **Razonamiento:** El examen evalua TU conocimiento. Si copiaste, no tienes conocimiento. Te enganaste pensando que estabas "listo" cuando realmente no sabes nada.

### Recordatorio de IA responsable

Tu cerebro es como un musculo. Si la IA hace todo el trabajo por ti, tu cerebro no se ejercita y se debilita. Usa la IA como entrenador, no como reemplazo de tu esfuerzo.

### Al terminar esta leccion, puedes...

1. Distinguir entre usar IA para aprender (bien) y para copiar (mal)
2. Identificar cuando estas aprendiendo vs. cuando estas enganandote a ti mismo
3. Usar la IA como herramienta de estudio sin caer en la trampa de copiar`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "APRENDER con IA: pedir explicaciones, practicar, verificar tu trabajo",
        "COPIAR de IA: entregar respuestas sin entender = enganarte a ti mismo",
        "La IA es como un gimnasio: tu tienes que hacer el esfuerzo para fortalecerte"
      ],
      localExample: "En un colegio de Santa Ana, dos estudiantes usaron IA. Uno copio las respuestas, otro pidio explicaciones. En el examen, solo el segundo aprobo. El primero no sabia nada porque nunca aprendio.",
      safePrompt: "Explicame [TEMA] paso a paso. Despues quiero intentar un problema similar yo solo para practicar."
    },
    localContext: {
      hook: "En El Salvador, los estudiantes que aprenden a usar IA responsablemente tendran ventaja en el futuro. Los que solo copian se quedaran atras cuando no tengan IA disponible.",
      department: "Santa Ana"
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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Has copiado alguna vez algo sin entenderlo? Como te sentiste despues?",
        prompt: "Piensa en la diferencia entre copiar y aprender",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "Discute con tu companero: Por que es mejor aprender con IA que copiar de IA? Den un ejemplo cada uno.",
        pairWork: true,
        timer: 120
      }
    }
  },

  "estudiantes-1-practica": {
    practiceInstructions: `## Practica: Escribe un Resumen Usando IA como Tutor

### Por que esta practica importa

Leer sobre aprender vs. copiar es una cosa. Hacerlo es otra. En esta practica, experimentaras la diferencia: primero intentaras algo TU solo, luego usaras la IA para mejorar. Al final, veras que aprender con IA te hace mas inteligente que copiar de IA.

### Instrucciones paso a paso

**Paso 1: Elige un tema (3 minutos)**

Piensa en algo que estes estudiando en la escuela esta semana. Puede ser de cualquier materia: ciencias, sociales, espanol, matematicas. Escribe el tema en una hoja o en tu cuaderno.

Ejemplos: "El ciclo del agua", "Las causas de la independencia", "Multiplicacion de fracciones", "Los ecosistemas"

**Paso 2: Escribe lo que ya sabes (5 minutos)**

ANTES de usar la IA, escribe todo lo que ya sabes sobre el tema. No importa si esta incompleto o si no estas seguro. Esto es tu punto de partida.

Incluye:
- Que es el tema (una oracion)
- Por que es importante
- Un ejemplo que conozcas

**Paso 3: Usa IA para aprender mas (5 minutos)**

Ahora ve al Ayudante de Tareas y pregunta:
"Explicame [tu tema] de manera simple. Dame 3 puntos importantes que debo recordar y un ejemplo facil de entender."

Lee la respuesta con atencion. Compara con lo que escribiste:
- Que puntos importantes te faltaron?
- Hay algo que tu explicaste mejor?
- Que informacion nueva aprendiste?

**Paso 4: Escribe TU resumen mejorado (7 minutos)**

Sin copiar la respuesta de la IA, escribe un resumen con TUS palabras que combine:
- Lo que ya sabias
- Lo nuevo que aprendiste
- Ejemplos que tengan sentido para ti

Tu resumen debe tener 4-5 oraciones. Usa tus propias palabras, no las de la IA.

**Paso 5: Verifica con la IA (3 minutos)**

Pide a la IA: "Este es mi resumen sobre [tema]: [copia tu resumen]. Tengo algun error? Falta algo importante?"

Lee la retroalimentacion y corrige si es necesario.

### Ejemplo de flujo completo

**Escenario:** Un estudiante de La Libertad practica con el tema "Ecosistemas costeros"

1. **Lo que sabia:** "Los ecosistemas costeros son donde el mar se junta con la tierra. Hay animales como cangrejos. Son importantes para los pescadores."

2. **Pregunta a IA:** "Explicame los ecosistemas costeros de manera simple. Dame 3 puntos importantes."

3. **Aprende cosas nuevas:** La IA menciona manglares, que protegen de inundaciones, y que los pescadores dependen de ellos.

4. **Resumen mejorado:** "Los ecosistemas costeros, como los manglares de La Libertad, son donde el mar se junta con la tierra. Son importantes porque protegen de inundaciones y dan hogar a peces y cangrejos que los pescadores necesitan. Debemos cuidarlos porque si se destruyen, las tormentas harian mas dano a las comunidades costeras."

5. **Verificacion:** La IA confirma que esta correcto y sugiere agregar sobre la contaminacion.

### Contexto salvadoreno

**En La Libertad:** Los estudiantes pueden practicar con temas locales: el surf en El Tunco, la pesca artesanal, los manglares del Estero de Jaltepeque. Cuando el tema te es familiar, aprendes mas rapido y puedes verificar si la IA dice cosas correctas.

### Lista de verificacion

Antes de terminar, verifica:

- [ ] Escribi lo que sabia ANTES de usar IA
- [ ] Lei la explicacion de la IA con atencion
- [ ] Mi resumen usa MIS palabras, no copia de la IA
- [ ] Combine lo que sabia con lo nuevo
- [ ] Pedi a la IA que verificara mi resumen
- [ ] Corregi los errores que encontre

### Errores comunes en esta practica

1. **Saltar el Paso 2** → Si no escribes lo que ya sabes primero, no puedes comparar y no sabes cuanto aprendiste.

2. **Copiar frases exactas de la IA** → El resumen debe ser con TUS palabras. Si copias, no aprendes.

3. **No verificar al final** → La verificacion te ayuda a encontrar errores y completar informacion.

### Reflexion al finalizar

Responde honestamente:
- Entendiste mejor el tema despues de este ejercicio?
- Que aprendiste que no sabias antes?
- Si hubieras solo copiado, sabrias lo mismo ahora?

### Al terminar esta practica, puedes...

1. Usar IA para complementar lo que ya sabes, no para reemplazarlo
2. Escribir resumenes con tus propias palabras que demuestran aprendizaje real
3. Verificar tu trabajo usando IA como revisor, no como hacedor`,
    localContext: {
      hook: "Los estudiantes de La Libertad pueden practicar con temas locales como los ecosistemas costeros, el surf, o la pesca artesanal. Cuando el tema te es familiar, aprendes mas rapido.",
      department: "La Libertad"
    },
  },

  "estudiantes-2-explicaciones": {
    transcript: `## Matematicas Paso a Paso: Pidiendo Explicaciones a la IA

### Por que esto importa

Las matematicas son como un edificio: cada piso se construye sobre el anterior. Si no entiendes fracciones, no entenderas algebra. Si no entiendes algebra, no entenderas funciones. La IA puede ayudarte a llenar los huecos - pero solo si le pides EXPLICACIONES, no respuestas. Una respuesta sin explicacion es como un piso sin base: se cae cuando lo necesitas.

### Explicacion paso a paso

**Paso 1: Identifica que tipo de problema tienes**

Antes de pedir ayuda, identifica que tipo de problema estas resolviendo. Es algebra (con letras como x)? Es geometria (areas, perimetros)? Es un problema de palabras (un texto que debes convertir en numeros)? Saber el tipo te ayuda a pedir mejor ayuda.

**Paso 2: Pide explicacion del PROCESO, no la respuesta**

La diferencia clave:
- **Malo:** "Resuelve 3x + 7 = 22" (te da la respuesta, no aprendes nada)
- **Bueno:** "Explicame como resolver 3x + 7 = 22 paso a paso. En cada paso, dime que regla matematica estoy usando y por que funciona."

La segunda pregunta te ensena a resolver CUALQUIER ecuacion similar. La primera solo te da un numero.

**Paso 3: Pregunta "por que" en cada paso**

Cuando la IA te explica un paso, pregunta POR QUE funciona. Por ejemplo:
- "Dices que paso el 7 al otro lado con signo contrario. Por que se cambia el signo?"
- "Por que se divide entre 3 al final? Que regla es esa?"

Entender el "por que" te hace independiente. Memorizar el "que" te hace dependiente.

**Paso 4: Usa ejemplos de la vida real**

Las matematicas son abstractas, pero puedes hacerlas concretas. Pide a la IA:
- "Explicame fracciones usando pupusas"
- "Explicame porcentajes usando un descuento en una tienda"
- "Explicame ecuaciones usando un ejemplo con dinero"

Cuando conectas los numeros con cosas que conoces, el concepto se queda en tu memoria.

**Paso 5: Verifica TU trabajo, no pidas que lo hagan**

Despues de resolver un problema TU, pide verificacion:
- "Resolvi 3x + 7 = 22 y me dio x = 5. Revisa mis pasos y dime si me equivoque, pero no me digas la respuesta correcta todavia."

Esto te obliga a PENSAR antes de recibir ayuda.

### Ejemplo concreto

**Escenario:** Un estudiante de Sonsonate tiene tarea de algebra y no entiende ecuaciones.

1. **Problema:** Resolver 5x - 8 = 17
2. **Pregunta a IA:** "No entiendo como resolver 5x - 8 = 17. Explicame paso a paso que debo hacer y por que."
3. **La IA explica:** Primero sumar 8 a ambos lados (para aislar el termino con x), luego dividir entre 5 (para despejar x)
4. **El estudiante pregunta:** "Por que sumo 8 y no resto?"
5. **La IA explica:** Porque el 8 tiene signo negativo, y para eliminarlo sumamos el opuesto
6. **El estudiante intenta otro:** 3x + 4 = 19 (aplica los mismos pasos)
7. **Resultado:** Ahora entiende el PROCESO y puede resolver cualquier ecuacion similar

### Contexto salvadoreno

**En Sonsonate:** Los estudiantes de la costa occidental pueden usar ejemplos locales para entender matematicas. "Si una lancha recorre 12 km en 3 horas, cual es la velocidad?" es mas facil de entender que un problema abstracto. La IA puede darte ejemplos con distancias de Sonsonate a San Salvador, precios del mercado de Izalco, o puntuaciones de equipos locales de futbol.

### Usalo con IA

**Cuando usar IA para matematicas:**
- Cuando no entiendes un tipo de problema
- Cuando quieres verificar tu trabajo
- Cuando necesitas ejemplos diferentes a los del libro
- Cuando preparas un examen y quieres practicar

**Por que ayuda:** La IA puede explicar el mismo concepto de 10 formas diferentes hasta que una te haga sentido. No se cansa, no se impacienta, no te juzga.

**Prompt seguro:** "Explicame como resolver [TIPO DE PROBLEMA] paso a paso. Dime que regla uso en cada paso y por que funciona. Usa un ejemplo con [algo que conozco]."

**Cuidado:** La IA puede equivocarse en calculos. Siempre verifica los numeros tu mismo con calculadora o a mano.

### Errores comunes

1. **Pedir solo respuestas** → **Correccion:** Pide siempre los PASOS y el POR QUE. "Explicame..." es mejor que "Resuelve..."

2. **No intentar antes de pedir ayuda** → **Correccion:** Intenta primero. Aunque te equivoques, aprendes de tus errores cuando la IA te corrige.

3. **Confiar ciegamente en los calculos de la IA** → **Correccion:** Verifica. La IA puede sumar mal o saltarse pasos.

### Practica con razonamiento

**Pregunta 1:** Cual es la MEJOR forma de pedir ayuda con matematicas a la IA?
A) "Resuelve 5x + 3 = 18"
B) "Explicame paso a paso como resolver 5x + 3 = 18 y dime por que funciona cada paso"
C) "Dame la respuesta rapido que tengo tarea"
D) "Las matematicas son muy dificiles"

**Respuesta:** B - **Razonamiento:** Entender el proceso te prepara para resolver cualquier problema similar. La respuesta sola no te ensena nada.

**Pregunta 2:** Resolviste un problema de matematicas. Como deberias usar la IA?
A) Pedirle que lo resuelva por ti
B) Pedirle que revise tu trabajo y te diga donde te equivocaste SIN darte la respuesta
C) Copiar la respuesta de la IA
D) No usarla para nada

**Respuesta:** B - **Razonamiento:** Verificar tu trabajo te ayuda a encontrar y corregir errores mientras todavia tienes tiempo de aprender.

**Pregunta 3:** No entiendes un concepto matematico abstracto. Que le pides a la IA?
A) La respuesta de la tarea
B) Que me lo explique con ejemplos de la vida real de El Salvador
C) Que haga la tarea por mi
D) Nada, la IA no entiende matematicas

**Respuesta:** B - **Razonamiento:** Ejemplos de la vida real (pupusas, dinero, distancias locales) hacen los conceptos abstractos mas concretos y memorables.

### Recordatorio de IA responsable

El objetivo es que TU aprendas a resolver problemas. La IA es tu tutor, no tu calculadora. En el examen, solo estaras tu y tu cerebro - asegurate de que tu cerebro sepa resolver.

### Al terminar esta leccion, puedes...

1. Pedir explicaciones paso a paso en lugar de solo respuestas
2. Preguntar "por que" funciona cada paso matematico
3. Usar ejemplos de la vida real para entender conceptos abstractos`,

    // === Enhanced National-Scale Lesson Standard Content ===
    quickVersion: {
      bullets: [
        "Pide explicaciones paso a paso, no solo respuestas",
        "Pregunta 'por que' funciona cada paso, no solo 'como'",
        "Usa la IA para verificar TU trabajo, no para que haga el trabajo por ti"
      ],
      localExample: "Un estudiante de Sonsonate tenia problemas con algebra. En lugar de pedir respuestas, pregunto: 'Explicame paso a paso como resolver ecuaciones. Por que sumo en lugar de restar?' Ahora puede resolver cualquier ecuacion.",
      safePrompt: "Explicame como resolver [TIPO DE PROBLEMA] paso a paso. Dime que regla uso en cada paso y por que funciona."
    },
    localContext: {
      hook: "Las matematicas son iguales en todo el mundo, pero los ejemplos pueden ser diferentes. La IA puede explicarte con ejemplos de El Salvador: precios del mercado de Izalco, distancias de Sonsonate a San Salvador.",
      department: "Sonsonate"
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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Cual es el tema de matematicas que mas te cuesta entender?",
        prompt: "Piensa en como has pedido ayuda con matematicas antes",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Practica con tu companero: Uno dice un problema, el otro explica como pediria ayuda a la IA sin pedir la respuesta directa.",
        pairWork: true,
        timer: 120
      }
    }
  },

  "estudiantes-2-ejercicios": {
    practiceInstructions: `## Practica: Resuelve Matematicas con IA como Tutor

### Por que esta practica importa

Leer sobre como pedir ayuda es diferente a hacerlo. En esta practica, resolveras problemas reales de matematicas usando la IA como tutor - no como calculadora. Al final, sabras si realmente entendiste o solo copiaste.

### Instrucciones paso a paso

**Ejercicio 1: Ecuacion Basica (10 minutos)**

Problema: 5x - 3 = 17

**Paso 1: Intentalo TU primero (3 min)**
En tu cuaderno, escribe cada paso que haces para resolver:
- Que hago primero?
- Que hago despues?
- Cual es mi respuesta final?

**Paso 2: Verifica con IA (3 min)**
Ve a "Estudiante" > "Ayudante de Matematicas" y pide:
"Resolvi 5x - 3 = 17 y me dio x = [tu respuesta]. Revisa mis pasos y dime si me equivoque."

**Paso 3: Analiza (2 min)**
- Acertaste?
- Si te equivocaste, en que paso fue?
- Pide a la IA que te explique ESE paso especifico

**Ejercicio 2: Problema de Palabras (10 minutos)**

Problema: "Maria tiene el doble de dinero que Pedro. Juntos tienen $45. Cuanto tiene cada uno?"

**Paso 1: Identifica la informacion (3 min)**
- Que datos te dan?
- Que te piden encontrar?
- Intenta escribirlo como ecuacion (no importa si esta mal al principio)

**Paso 2: Pide PISTAS, no respuesta (3 min)**
Pide a la IA: "Tengo este problema: [copia el problema]. No se como convertirlo en ecuacion. Dame una pista sin decirme la respuesta."

**Paso 3: Resuelve y verifica (4 min)**
- Usa la pista para plantear la ecuacion
- Resuelvela
- Pide a la IA que verifique tu proceso completo

**Ejercicio 3: Tu Propia Tarea (10 minutos)**

Elige UN problema de tu tarea actual de matematicas:
1. Intentalo primero sin ayuda
2. Si te trabas, pide pistas (no respuestas)
3. Si terminas, pide verificacion
4. Escribe en tu cuaderno: "Hoy aprendi que..."

### Ejemplo de flujo completo

**Escenario:** Un estudiante de Chalatenango resuelve una ecuacion

1. **Intenta solo:** 3x + 8 = 20. Escribe: "Resto 8 a ambos lados: 3x = 12. Divido entre 3: x = 4"
2. **Pide verificacion:** "Resolvi 3x + 8 = 20 y me dio x = 4. Esta bien?"
3. **IA confirma:** Correcto, y explica por que funciono cada paso
4. **Siguiente problema:** Intenta 4x - 5 = 15 aplicando los mismos pasos
5. **Resultado:** Ahora puede resolver cualquier ecuacion similar

### Contexto salvadoreno

**En Chalatenango:** Los estudiantes del norte del pais usan problemas con contexto local para practicar. "Si un camion sale de La Palma con 200 artesanias y vende 3/4 en el camino, cuantas le quedan?" Cuando el problema tiene contexto familiar, es mas facil entenderlo y resolverlo.

### Lista de verificacion

Antes de terminar, verifica:

- [ ] Intente CADA problema yo primero antes de usar IA
- [ ] Escribi mis pasos en el cuaderno
- [ ] Pedi VERIFICACION, no que me resolvieran
- [ ] Cuando me equivoque, entendi POR QUE
- [ ] Puedo explicar como resolver problemas similares

### Errores comunes en esta practica

1. **Pedir la respuesta directamente** → Pide verificacion de TU trabajo o pistas, nunca la respuesta completa.

2. **No escribir los pasos** → Si no escribes, no puedes revisar donde te equivocaste.

3. **Rendirse muy rapido** → Intenta al menos 3 minutos antes de pedir ayuda. El esfuerzo es parte del aprendizaje.

### Reflexion al finalizar

- El Ayudante te ayudo a ENTENDER o solo te dio respuestas?
- Que aprendiste que no sabias antes de esta practica?
- Te sientes mas preparado para tu proxima clase de matematicas?
- Que harias diferente la proxima vez?

### Al terminar esta practica, puedes...

1. Resolver ecuaciones basicas paso a paso
2. Convertir problemas de palabras en ecuaciones
3. Usar IA para verificar tu trabajo sin depender de ella para hacer el trabajo`,
    localContext: {
      hook: "Los estudiantes de Chalatenango usan problemas con contexto local - artesanias de La Palma, distancias entre pueblos, precios del mercado - para hacer las matematicas mas relevantes y faciles de entender.",
      department: "Chalatenango"
    },
  },

  "estudiantes-3-simplificar": {
    transcript: `## Simplificando Textos Dificiles con IA

### Por que esto importa

Todos hemos encontrado textos que parecen escritos en otro idioma - palabras largas, oraciones complicadas, conceptos abstractos. A veces el libro de ciencias o historia parece mas dificil de lo necesario. La IA puede traducir ese "espanol complicado" a "espanol simple" sin perder la informacion importante. Pero hay un secreto: el objetivo no es evitar el texto dificil, sino usarlo como puente para ENTENDER el texto original.

### Explicacion paso a paso

**Paso 1: Identifica que parte no entiendes**

Antes de pedir ayuda, lee el texto completo. A veces solo hay una palabra o frase que te confunde, no todo el parrafo. Subraya o copia SOLO la parte que no entiendes. Esto hace la simplificacion mas efectiva.

**Paso 2: Copia el texto al simplificador**

Ve al Simplificador de Textos de Salvora. Pega el texto o parrafo que te cuesta entender. Entre mas especifico seas, mejor sera la explicacion.

**Paso 3: Pide explicacion, no solo version simple**

Hay una diferencia entre pedir que "simplifiquen" el texto y pedir que te "expliquen" el texto. Mejor pide ambas cosas:
- "Explicame que dice este parrafo con palabras simples"
- "Dame un ejemplo de la vida real de lo que describe"
- "Que palabras importantes debo aprender de este texto?"

**Paso 4: Lee la version simplificada con atencion**

No solo ojees - lee activamente. Preguntate: Ahora entiendo la idea principal? Puedo explicarlo con mis palabras? Que informacion nueva aprendi?

**Paso 5: Vuelve al texto original**

Este paso es crucial: VUELVE a leer el texto original. Ahora deberia tener mas sentido. Si todavia hay partes confusas, pide mas explicacion de ESA parte especifica. El objetivo es que entiendas el texto original, no que lo evites.

### Ejemplo concreto

**Escenario:** Un estudiante de San Miguel tiene que leer sobre volcanes para ciencias.

**Texto original del libro:**
"La actividad volcanica en El Salvador se debe a la subduccion de la Placa de Cocos bajo la Placa del Caribe, lo que genera un arco volcanico que atraviesa el territorio nacional."

**El estudiante no entiende:** Que es subduccion? Que es una placa? Que es un arco volcanico?

**Pide al simplificador:**
"Explicame este parrafo sobre volcanes con palabras simples. Que es subduccion?"

**Version simplificada:**
"Debajo de El Salvador, hay enormes pedazos de la tierra (placas) que se mueven lentamente. Una placa se mete debajo de otra (subduccion). Esto crea presion y calor, que hace que los volcanes se formen en linea a lo largo del pais (arco volcanico)."

**Luego, vuelve al original:** "Ahora entiendo - la Placa de Cocos es uno de esos pedazos enormes, y se mete debajo de la Placa del Caribe. Por eso tenemos tantos volcanes como el Chaparrastique."

### Contexto salvadoreno

**En San Miguel:** Los estudiantes pueden usar ejemplos locales para entender conceptos cientificos. "Explicame la actividad volcanica usando el Chaparrastique como ejemplo" hace el texto mucho mas relevante y memorable. La IA puede conectar conceptos abstractos con la realidad de San Miguel.

### Usalo con IA

**Cuando usar el simplificador:**
- Textos con vocabulario tecnico o academico
- Parrafos muy largos y complicados
- Textos en espanol formal o antiguo
- Articulos cientificos o historicos
- Documentos oficiales que debes entender

**Por que ayuda:** No todos aprendemos igual. Algunos necesitamos ver la version simple primero para luego entender la version completa.

**Prompt seguro:** "Este texto es de mi libro de [MATERIA]: [pegar texto]. Explicamelo con palabras simples. Dame un ejemplo de la vida real. Que palabras importantes debo aprender?"

**Cuidado:** El simplificador es un PUENTE, no un reemplazo. Tu maestro espera que aprendas el vocabulario original. Usa la version simple para entender, luego aprende los terminos correctos.

### Errores comunes

1. **Quedarse solo con la version simplificada** → **Correccion:** Siempre vuelve al texto original. El objetivo es ENTENDERLO, no evitarlo.

2. **Pedir que simplifiquen TODO** → **Correccion:** Identifica QUE parte no entiendes. Quizas solo es una palabra o frase.

3. **No aprender el vocabulario academico** → **Correccion:** Usa la simplificacion para entender, pero luego aprende los terminos correctos para la clase.

### Practica con razonamiento

**Pregunta 1:** Tu libro dice "fotosintesis es el proceso metabolico..." y no entiendes. Que haces primero?
A) Ignorar esa parte
B) Copiar la definicion sin entender
C) Pedir a la IA que explique con palabras simples
D) Quejarte de que el libro es muy dificil

**Respuesta:** C - **Razonamiento:** La simplificacion te ayuda a entender. Luego puedes volver al texto original con mejor comprension.

**Pregunta 2:** Despues de leer la version simplificada, que debes hacer?
A) Olvidar el texto original
B) Volver a leer el texto original para entenderlo mejor
C) Entregar la version simplificada como tarea
D) Pedir otra simplificacion

**Respuesta:** B - **Razonamiento:** El objetivo es entender el ORIGINAL. La simplificacion es un puente, no un destino.

**Pregunta 3:** Por que es importante aprender el vocabulario academico aunque uses simplificaciones?
A) Porque el maestro se enoja si usas palabras simples
B) Porque en examenes y trabajos esperan el vocabulario correcto
C) Porque las palabras dificiles suenan mas inteligentes
D) No es importante

**Respuesta:** B - **Razonamiento:** En examenes, investigaciones, y la universidad, necesitaras usar el vocabulario academico. La simplificacion te ayuda a ENTENDERLO, no a evitarlo.

### Recordatorio de IA responsable

El simplificador es un puente hacia el conocimiento, no una forma de evitar el esfuerzo. Usa las versiones simples para entender, pero siempre regresa al texto original para aprender el vocabulario correcto.

### Al terminar esta leccion, puedes...

1. Usar IA para simplificar textos dificiles sin perder informacion importante
2. Identificar que partes especificas de un texto no entiendes
3. Volver al texto original con mejor comprension despues de la simplificacion`,
    localContext: {
      hook: "Los estudiantes de San Miguel usan ejemplos locales como el volcan Chaparrastique para entender conceptos cientificos. Cuando conectas lo abstracto con lo familiar, el aprendizaje es mas rapido.",
      department: "San Miguel"
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Has leido algun texto escolar que era muy dificil de entender?",
        prompt: "Piensa en libros o articulos con palabras complicadas",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Explica a tu companero los 5 pasos para usar el Simplificador de Textos. Luego cambien de rol.",
        pairWork: true,
        timer: 90
      }
    }
  },

  "estudiantes-3-historias": {
    content: `## Comprension Lectora: Historias de El Salvador

### Por que esto importa

Leer y entender textos es una habilidad que usaras toda tu vida - en la escuela, en el trabajo, en la universidad, en la vida diaria. Pero leer no es solo pasar los ojos por las palabras; es ENTENDER, conectar, y recordar. En esta leccion, practicaras la comprension lectora con historias de El Salvador, y aprenderas como la IA puede ayudarte cuando encuentres partes dificiles.

### Explicacion paso a paso

**Paso 1: Lee activamente, no pasivamente**

Leer activamente significa preguntarte mientras lees: Que esta pasando? Por que es importante? Como se conecta con lo que ya se? Leer pasivamente es solo pasar los ojos sin pensar. La diferencia en lo que recuerdas es enorme.

**Paso 2: Identifica la idea principal**

Despues de leer un parrafo, preguntate: Si tuviera que explicar esto en UNA oracion, que diria? Esta es la idea principal. Todo lo demas son detalles de apoyo.

**Paso 3: Conecta con lo que conoces**

La informacion que conectas con tu vida se queda en tu memoria. Cuando lees sobre el Lago de Coatepeque, piensa: Lo he visitado? Conozco a alguien de ahi? Se parece a algun lugar cerca de mi casa?

**Paso 4: Si no entiendes, usa herramientas**

No te frustres con palabras dificiles. Usa el Simplificador para entender, busca la palabra, o pide a la IA que te explique. Lo importante es ENTENDER, no solo terminar de leer.

**Paso 5: Resume y verifica**

Despues de leer, intenta resumir con tus palabras. Si no puedes, vuelve a leer. Si puedes resumirlo, lo entendiste.

---

## Lectura 1: El Lago de Coatepeque

El Lago de Coatepeque es una de las joyas naturales de El Salvador. Ubicado en el departamento de Santa Ana, este lago de origen volcanico tiene mas de 25,000 anos de antiguedad.

Lo que hace especial a Coatepeque no es solo su belleza. Cada ciertos anos, el lago cambia de color, pasando de azul a un verde turquesa brillante. Este fenomeno, llamado "florecimiento de algas", ocurre naturalmente y atrae a cientificos de todo el mundo.

**Datos Interesantes:**
- Profundidad maxima: 115 metros
- Diametro: aproximadamente 6 kilometros
- Temperatura del agua: entre 24°C y 28°C todo el ano

**Pregunta de comprension:** Por que el lago cambia de color a veces?

---

## Lectura 2: El Arbol de la Ceiba

En muchas comunidades de El Salvador, encontraras una ceiba en el centro del pueblo. Este arbol, que puede vivir cientos de anos, tiene un significado especial para nuestra cultura.

Los pueblos indigenas consideraban la ceiba un arbol sagrado. Creian que sus raices llegaban al inframundo, su tronco representaba el mundo terrenal, y sus ramas tocaban el cielo.

Hoy, las ceibas siguen siendo simbolo de comunidad. Bajo su sombra se reunen los vecinos, se hacen mercados, y los ninos juegan.

**Pregunta de comprension:** Por que los pueblos indigenas consideraban sagrada a la ceiba?

---

## Lectura 3: El Cafe de Ahuachapan

La zona occidental de El Salvador, especialmente Ahuachapan, es famosa por su cafe de alta calidad. Los granos cultivados en las montanas cerca de Apaneca y Juayua son conocidos en todo el mundo.

El cafe no es solo un producto; es parte de la identidad de la region. Generaciones de familias han cultivado cafe, pasando conocimiento de padres a hijos. La "Ruta de las Flores" atrae turistas que quieren ver las fincas cafetaleras y probar el cafe salvadoreno.

Hoy, la tecnologia esta cambiando la agricultura. Algunos agricultores usan sensores para medir humedad del suelo, otros usan apps para predecir el clima. Pero el conocimiento tradicional sigue siendo valioso.

**Pregunta de comprension:** Por que el cafe es importante para la identidad de Ahuachapan?

---

### Contexto salvadoreno

**En Ahuachapan:** Los estudiantes de la region cafetalera tienen conexion directa con estas historias. Quizas tus abuelos trabajan o trabajaron en fincas de cafe. Quizas has visitado Juayua o Apaneca. Cuando lees sobre algo que conoces, la comprension es mas profunda.

### Usalo con IA

**Cuando usar IA para comprension lectora:**
- Cuando no entiendes una palabra o frase
- Cuando quieres verificar si entendiste bien
- Cuando necesitas ejemplos adicionales
- Cuando quieres saber mas sobre un tema

**Prompt seguro:** "Lei este texto: [pegar texto]. Entendi que [tu resumen]. Entendi bien? Me falta algo importante?"

**Cuidado:** Leer el resumen de la IA no es igual a leer el texto original. El objetivo es que TU leas y entiendas, no que la IA lea por ti.

### Actividad de Comprension

Despues de leer las tres historias:

1. **Resume** cada historia en UNA oracion
2. **Identifica** una palabra nueva que aprendiste
3. **Conecta** una de las historias con algo de tu vida o comunidad
4. **Pregunta** algo que te gustaria saber mas sobre estos temas

Puedes usar el Simplificador si alguna parte fue dificil de entender.

### Practica con razonamiento

**Pregunta 1:** Segun el texto, por que el Lago de Coatepeque cambia de color?
A) Porque la gente lo pinta
B) Por el florecimiento de algas
C) Porque es muy profundo
D) Por el clima

**Respuesta:** B - **Razonamiento:** El texto dice claramente que el fenomeno se llama "florecimiento de algas" y ocurre naturalmente.

**Pregunta 2:** Que representaba el tronco de la ceiba para los pueblos indigenas?
A) El inframundo
B) El cielo
C) El mundo terrenal
D) Los animales

**Respuesta:** C - **Razonamiento:** El texto dice que las raices representaban el inframundo, el tronco el mundo terrenal, y las ramas el cielo.

**Pregunta 3:** Por que el conocimiento tradicional sobre cafe sigue siendo valioso aunque hay tecnologia nueva?
A) Porque la tecnologia no funciona
B) Porque el conocimiento se pasa de generacion en generacion y es parte de la identidad
C) Porque es mas barato
D) Porque el gobierno lo exige

**Respuesta:** B - **Razonamiento:** El texto enfatiza que el cafe es "parte de la identidad" y que el conocimiento pasa "de padres a hijos".

### Recordatorio de IA responsable

La IA puede ayudarte a ENTENDER lo que lees, pero no puede leer por ti. El objetivo es desarrollar tu propia capacidad de comprension lectora.

### Al terminar esta leccion, puedes...

1. Leer textos activamente identificando ideas principales
2. Conectar lo que lees con tu conocimiento previo y tu vida
3. Usar IA para aclarar partes dificiles sin depender de ella para todo`,
    localContext: {
      hook: "Los estudiantes de Ahuachapan tienen conexion directa con las historias del cafe. Cuando lees sobre algo que conoces, la comprension es mas profunda y duradera.",
      department: "Ahuachapan"
    },
  },

  // ===== CURSO 4: IA EN LA VIDA REAL =====

  "vida-1-cultivos": {
    transcript: `## IA en la Agricultura: Tecnologia para Nuestros Campos

### Por que esto importa

La agricultura es la base de la seguridad alimentaria de El Salvador. Miles de familias dependen del cafe, el maiz, los frijoles, y otros cultivos. Pero los agricultores enfrentan desafios cada vez mayores: el clima es impredecible, las plagas son mas resistentes, y necesitan producir mas con menos recursos. La IA no va a reemplazar al agricultor - pero puede darle superpoderes para tomar mejores decisiones.

### Explicacion paso a paso

**Paso 1: Recoleccion de datos**

Todo empieza con sensores en el campo que recolectan informacion las 24 horas:
- Humedad del suelo: Cuanta agua hay disponible para las raices?
- Temperatura: Esta demasiado caliente o frio para las plantas?
- Salud de las plantas: Camaras detectan cambios de color que indican enfermedad
- Nutrientes: El suelo tiene lo que las plantas necesitan?

Esta informacion se envia a una computadora donde la IA la analiza.

**Paso 2: Analisis inteligente**

La IA procesa miles de datos y los compara con patrones conocidos. Por ejemplo, sabe que cierta combinacion de humedad y temperatura favorece la aparicion de la roya del cafe. Cuando ve esas condiciones, alerta al agricultor ANTES de que la enfermedad aparezca.

**Paso 3: Recomendaciones personalizadas**

Basandose en los datos, la IA da recomendaciones especificas:
- "Riega el sector norte 30 minutos mas - esta mas seco que el resto"
- "La temperatura para los proximos dias favorece la roya. Aplica fungicida preventivo"
- "El cafe del sector este tiene la madurez optima. Cosecha esta semana"

**Paso 4: Agricultura de precision**

En lugar de tratar todo el campo igual, el agricultor puede dar a cada seccion exactamente lo que necesita. Esto ahorra agua, fertilizantes, y trabajo - mientras mejora la produccion.

### Ejemplo concreto

**Escenario:** Una finca cafetalera en Santa Ana usa IA para optimizar su produccion.

1. **Sensores instalados:** 20 sensores distribuidos en 5 manzanas de cafetal
2. **Datos recolectados:** Humedad, temperatura, y fotos de hojas cada hora
3. **Alerta temprana:** La IA detecta patron de humedad alta + temperatura que favorece roya
4. **Accion preventiva:** El agricultor recibe mensaje: "Condiciones favorables para roya en sector 3. Revise hojas y considere tratamiento preventivo"
5. **Resultado:** Interviene antes de que la enfermedad se propague, salvando cosecha
6. **Impacto:** 40% menos perdidas por enfermedad comparado con el ano anterior

### Contexto salvadoreno

**En Santa Ana:** La zona cafetalera de Santa Ana es una de las mas importantes del pais. Los caficultores de Apaneca, Ataco, y alrededores estan probando tecnologias de IA para proteger sus cultivos. El cafe de altura salvadoreno compite en mercados internacionales - la IA ayuda a mantener la calidad que nos hace famosos.

### Usalo con IA

**Cuando usar IA para aprender sobre agricultura:**
- Para entender como funciona la tecnologia agricola
- Para investigar sobre cultivos especificos de El Salvador
- Para explorar soluciones a problemas agricolas

**Por que importa:** Aunque no seas agricultor, entender esta tecnologia te prepara para un futuro donde sera comun en todo El Salvador.

**Prompt seguro:** "Explicame como la inteligencia artificial puede ayudar a los caficultores de El Salvador a [OBJETIVO ESPECIFICO]. Dame ejemplos practicos."

**Cuidado:** La IA no conoce las condiciones exactas de microclimas salvadorenos. Las recomendaciones generales deben verificarse con la realidad local.

### Errores comunes

1. **Pensar que la IA reemplaza al agricultor** → **Realidad:** La IA es una herramienta. El conocimiento del agricultor sobre su tierra sigue siendo insustituible.

2. **Creer que es solo para grandes fincas** → **Realidad:** Hay aplicaciones de celular gratuitas que dan consejos basados en datos de tu ubicacion.

3. **Ignorar el conocimiento tradicional** → **Realidad:** La mejor combinacion es tecnologia + sabiduria de generaciones de agricultores.

### Practica con razonamiento

**Pregunta 1:** Que datos recolectan los sensores de agricultura inteligente?
A) Solo el precio del mercado
B) Humedad, temperatura, salud de plantas, nutrientes
C) Nombres de los agricultores
D) Solo la cantidad de lluvia

**Respuesta:** B - **Razonamiento:** Estos datos sobre el suelo, clima, y plantas ayudan a la IA a dar recomendaciones precisas para cada parte del campo.

**Pregunta 2:** Que es la "agricultura de precision"?
A) Usar herramientas con medidas exactas
B) Dar a cada planta exactamente lo que necesita basado en datos
C) Medir los campos con GPS
D) Solo cultivar cultivos perfectos

**Respuesta:** B - **Razonamiento:** La precision viene de personalizar el cuidado segun datos especificos, no de tratar todo el campo igual.

**Pregunta 3:** Como beneficia la IA a los caficultores salvadorenos?
A) Les quita el trabajo manual
B) Detecta enfermedades antes de que se propaguen, ahorra recursos, mejora calidad
C) Solo ayuda a fincas muy grandes
D) Reemplaza la necesidad de lluvias

**Respuesta:** B - **Razonamiento:** La IA optimiza decisiones pero no reemplaza al agricultor ni a la naturaleza.

### Recordatorio de IA responsable

La tecnologia puede ayudar a nuestros agricultores a competir globalmente mientras cuidan el medio ambiente. Pero el conocimiento tradicional y la experiencia humana siguen siendo valiosos.

### Al terminar esta leccion, puedes...

1. Explicar como los sensores y la IA trabajan juntos en la agricultura
2. Entender el concepto de "agricultura de precision"
3. Describir como la IA puede ayudar a los caficultores salvadorenos`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Conoces a alguien que trabaje en agricultura? Que desafios enfrenta?",
        prompt: "Piensa en los cultivos de tu comunidad: cafe, maiz, frijoles...",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Explica a tu companero como los sensores y la IA pueden ayudar a un caficultor. Menciona al menos 3 beneficios.",
        pairWork: true,
        timer: 120
      }
    }
  },

  "vida-1-casos": {
    content: `## Casos de Exito: IA en la Agricultura Salvadorena

### Por que esto importa

Los casos de exito no son solo historias bonitas - son pruebas de que la tecnologia funciona en condiciones reales de El Salvador. Cuando ves que agricultores como los de tu comunidad ya estan usando estas herramientas con resultados positivos, sabes que es posible para todos.

### Explicacion paso a paso

**Paso 1: Identificar el problema**

Antes de implementar tecnologia, los agricultores identifican su problema principal. Para los caficultores de Apaneca, era la roya. Para los agricultores del Bajo Lempa, era el riego ineficiente. Sin un problema claro, la tecnologia es inutil.

**Paso 2: Elegir la solucion apropiada**

No toda tecnologia sirve para todos. Los caficultores necesitaban detectar enfermedades visualmente, asi que usaron camaras. Los agricultores de granos necesitaban medir agua, asi que usaron sensores de humedad. La tecnologia debe ajustarse al problema, no al reves.

**Paso 3: Implementar y aprender**

La tecnologia no es "instalala y olvidala". Los agricultores aprenden a interpretar las alertas, a confiar en los datos, y a combinarlos con su experiencia. Los primeros meses son de aprendizaje.

**Paso 4: Medir resultados**

Sin medicion, no sabes si funciono. Los caficultores midieron que perdieron 40% menos por enfermedades. Los agricultores de granos midieron que ahorraron 30% de agua. Estos numeros demuestran el valor.

---

## Caso 1: Cafe Inteligente en Apaneca

**El desafio:** La roya del cafe, causada por un hongo, habia devastado cultivos en anos anteriores. Cuando los productores detectaban la enfermedad, ya era demasiado tarde.

**La solucion:** Camaras y sensores conectados a IA que analizan imagenes de hojas, detectan signos tempranos de enfermedad, y alertan via mensaje de texto.

**Resultados concretos:**
- 40% de reduccion en perdidas por enfermedades
- Uso mas eficiente de fungicidas (aplicados solo donde se necesita)
- Mejor calidad del cafe producido
- Ahorro en costos de tratamiento

---

## Caso 2: Riego Inteligente en el Bajo Lempa

**El desafio:** Agricultores de granos basicos regaban "a ojo", a veces demasiado, a veces muy poco. El agua es cara y escasa; desperdiciarla afecta la produccion y el bolsillo.

**La solucion:** Sensores de humedad en el suelo conectados a IA que miden en tiempo real, predicen necesidades basadas en clima, y activan riego automaticamente.

**Resultados concretos:**
- 30% de ahorro en consumo de agua
- Mejora en rendimiento de los cultivos
- Reduccion en costos de produccion
- Plantas mas sanas (ni ahogadas ni secas)

---

### Contexto salvadoreno

**En Apopa:** Como centro piloto del programa Salvora, Apopa esta cerca de comunidades agricolas que podrian beneficiarse de estas tecnologias. Los casos de Apaneca y el Bajo Lempa son modelos que pueden replicarse en todo el pais. La alianza xAI-El Salvador busca exactamente eso: que la tecnologia llegue a mas agricultores.

### Usalo con IA

**Prompt seguro:** "Explicame un caso de exito de IA en agricultura en America Latina. Que problema resolvieron y cuales fueron los resultados?"

**Cuidado:** Los casos de exito muestran el potencial, pero cada finca es diferente. Lo que funciono en Apaneca puede necesitar ajustes en otra zona.

### Errores comunes

1. **Creer que la tecnologia hace todo sola** → Los agricultores de estos casos tuvieron que aprender y adaptar.

2. **Pensar que es solo para ricos** → Muchas soluciones empezaron con sensores basicos y apps de celular.

3. **Copiar sin adaptar** → El exito de Apaneca con cafe no significa que la misma solucion funcione para maiz sin ajustes.

### Practica con razonamiento

**Pregunta 1:** En el caso de Apaneca, que problema resolvio la IA?
A) Falta de agua
B) Deteccion temprana de la roya del cafe
C) Precios bajos del mercado
D) Falta de trabajadores

**Respuesta:** B - **Razonamiento:** La roya devastaba cultivos porque se detectaba tarde. La IA permite deteccion temprana.

**Pregunta 2:** Cuanto agua ahorraron los agricultores del Bajo Lempa con riego inteligente?
A) 10%
B) 30%
C) 50%
D) No ahorraron agua

**Respuesta:** B - **Razonamiento:** El texto dice especificamente 30% de ahorro en consumo de agua.

**Pregunta 3:** Por que es importante medir los resultados de la tecnologia agricola?
A) Para presumir
B) Para demostrar que funciona y justificar la inversion
C) No es importante
D) Solo para el gobierno

**Respuesta:** B - **Razonamiento:** Sin medicion, no sabes si la tecnologia realmente ayudo o fue desperdicio de dinero.

### Recordatorio de IA responsable

Los casos de exito son inspiracion, no garantia. Cada finca y agricultor debe evaluar si la tecnologia es apropiada para su situacion especifica.

### Al terminar esta leccion, puedes...

1. Describir dos casos de exito de IA en agricultura salvadorena
2. Explicar los resultados concretos que lograron
3. Identificar que la tecnologia requiere adaptacion a cada contexto`,
    localContext: {
      hook: "Los casos de Apaneca y el Bajo Lempa son modelos que pueden replicarse en todo el pais. Apopa, como centro piloto de Salvora, esta cerca de comunidades agricolas que podrian beneficiarse de estas tecnologias.",
      department: "Apopa"
    },
  },

  "vida-2-finanzas": {
    transcript: `## IA y Bitcoin: El Futuro Financiero de El Salvador

### Por que esto importa

El Salvador hizo historia mundial el 7 de septiembre de 2021 al convertirse en el primer pais del mundo en adoptar Bitcoin como moneda de curso legal. Esta decision puso los ojos del mundo sobre nuestro pais. Pero Bitcoin es solo el comienzo - la inteligencia artificial esta transformando como funciona todo el sistema financiero, desde como te protegen los bancos hasta como puedes manejar tu dinero. Entender estas tecnologias no es opcional; es esencial para participar en la economia del siglo XXI.

### Explicacion paso a paso

**Paso 1: Que es la IA en las finanzas?**

La IA financiera son sistemas inteligentes que analizan enormes cantidades de datos sobre dinero para tomar decisiones o ayudar a las personas a tomarlas. Estos sistemas pueden revisar millones de transacciones en segundos, algo imposible para cualquier humano.

**Paso 2: Como protege la IA tu dinero (Deteccion de fraude)**

Cada vez que usas tu tarjeta de debito o credito, la IA esta observando. Aprende tus habitos: donde compras, a que hora, cuanto gastas normalmente. Si alguien roba tu tarjeta y trata de usarla de manera diferente - por ejemplo, comprar $500 en otro pais cuando nunca has viajado - la IA detecta que "esto no parece normal" y puede bloquear la transaccion inmediatamente. Los bancos en El Salvador ya usan estos sistemas.

**Paso 3: Asistentes financieros personales**

Aplicaciones con IA pueden analizar tus gastos y ayudarte a manejar mejor tu dinero. Por ejemplo, pueden detectar que gastas $50 mensuales en cosas que no usas y sugerirte como ahorrar. Chivo Wallet y otras apps financieras estan comenzando a incorporar estas funciones inteligentes.

**Paso 4: Prestamos inteligentes (Inclusion financiera)**

Tradicionalmente, si querias un prestamo necesitabas historial crediticio. Pero muchos salvadorenos nunca han tenido tarjeta de credito o cuenta bancaria. La IA puede analizar otros datos - como tus pagos de telefono, servicios, o patrones de ahorro - para determinar si eres confiable. Esto abre oportunidades para personas que el sistema tradicional excluia.

**Paso 5: Bitcoin, IA y El Salvador**

Bitcoin funciona con tecnologia blockchain, y la IA complementa esto de varias formas. Los sistemas de IA pueden analizar el mercado de Bitcoin para detectar patrones, predecir volatilidad, y ayudar a instituciones a tomar decisiones. La combinacion de Bitcoin legal + alianza con xAI posiciona a El Salvador como laboratorio de innovacion financiera mundial.

### Ejemplo concreto

**Escenario: Maria y el intento de fraude**

Maria es maestra en San Salvador y usa su tarjeta de debito para comprar materiales escolares en la Libreria Hispamer cada mes. Un dia, recibe una notificacion: "Transaccion bloqueada: compra de $800 en Miami, Florida".

Lo que paso fue que alguien clono los datos de su tarjeta. Pero la IA del banco detecto algo sospechoso:

1. **Ubicacion inusual**: Maria nunca ha hecho compras en Estados Unidos
2. **Monto atipico**: Normalmente gasta $30-50, no $800
3. **Patron de tiempo**: La compra fue a las 3am hora de El Salvador
4. **Tipo de comercio**: Era una tienda de electronica, Maria solo compra en librerias

La IA combino todos estos factores en milisegundos y decidio: "Esto tiene 97% de probabilidad de ser fraude". Bloqueo la transaccion y notifico a Maria. Resultado: $800 salvados gracias a la IA.

### Contexto salvadoreno

**En San Salvador:** Como centro financiero del pais, San Salvador concentra los bancos mas importantes que ya usan IA para proteccion. El Banco Central de Reserva estudia como la IA puede mejorar la supervision financiera. Con la Ley Bitcoin, El Salvador se convirtio en caso de estudio global - economistas y tecnologos de todo el mundo observan como evoluciona nuestro experimento. Empresas fintech locales como Hugo y aplicaciones de pagos moviles estan incorporando IA para ofrecer mejores servicios.

### Usalo con IA

**Cuando usar IA para finanzas:**
- Cuando quieras entender como funcionan las criptomonedas
- Para aprender conceptos basicos de ahorro e inversion
- Al querer entender como los bancos protegen tu dinero
- Para comprender noticias economicas sobre El Salvador

**Por que la IA ayuda:**
Los conceptos financieros pueden ser confusos. La IA puede explicarlos en palabras simples, dar ejemplos concretos, y responder tus preguntas especificas sin juzgarte por no saber algo.

**Prompt seguro:**
"Soy estudiante salvadoreno y quiero entender como funciona la deteccion de fraudes bancarios con inteligencia artificial. Explicamelo paso a paso con ejemplos que pueda entender."

**Cuidado:**
Nunca compartas numeros de cuenta, contrasenas, o datos financieros personales con ningun sistema de IA. Y desconfia de cualquiera que prometa "hacerte rico con IA" - generalmente son estafas.

### Errores comunes

1. **Error: "La IA puede predecir si Bitcoin subira o bajara"**
   **Correccion:** La IA puede analizar patrones historicos y noticias, pero NADIE - ni la IA mas avanzada - puede predecir el futuro del mercado con certeza. Bitcoin es altamente volatil. Las "predicciones" son probabilidades, no garantias.

2. **Error: "Si tengo Chivo Wallet soy experto en finanzas digitales"**
   **Correccion:** Chivo Wallet es una herramienta, no conocimiento. Saber usar una app no significa entender como funciona blockchain, IA financiera, o los riesgos de las criptomonedas. El conocimiento requiere estudio.

3. **Error: "Los bancos usan IA para espiarme"**
   **Correccion:** La IA bancaria analiza patrones de transacciones, no lee tus mensajes ni espoia tu vida. Su objetivo es protegerte del fraude. Sin embargo, si debes saber que datos recopilan y como los usan - eso esta en las politicas de privacidad.

### Practica con razonamiento

**Pregunta 1:** Un banco bloquea una transaccion de $500 en Guatemala cuando un cliente salvadoreno nunca ha viajado. Que hizo la IA?

A) Adivino que era fraude
B) Detecto un patron inusual comparando con el historial del cliente
C) Bloqueo todas las transacciones internacionales
D) Llamo a la policia

**Respuesta:** B - **Razonamiento:** La IA comparo la transaccion (ubicacion, monto, tipo) con el historial conocido del cliente. Al detectar multiples anomalias, califico la transaccion como probable fraude. No "adivina" - calcula probabilidades basadas en datos.

**Pregunta 2:** Por que El Salvador es importante en innovacion financiera global?

A) Por tener los bancos mas ricos del mundo
B) Por ser el primer pais en adoptar Bitcoin como moneda legal
C) Por inventar las tarjetas de credito
D) Por prohibir el dinero en efectivo

**Respuesta:** B - **Razonamiento:** El 7 de septiembre de 2021, El Salvador se convirtio en el primer pais del mundo en hacer Bitcoin moneda de curso legal. Esta decision sin precedentes puso a El Salvador en el mapa de la innovacion financiera mundial.

**Pregunta 3:** Que puede hacer un asistente financiero con IA?

A) Depositar dinero en tu cuenta
B) Analizar tus gastos y sugerirte como ahorrar
C) Prestarte dinero sin intereses
D) Hackear bancos para darte mas dinero

**Respuesta:** B - **Razonamiento:** Los asistentes financieros con IA analizan datos de tus transacciones para identificar patrones de gasto, detectar suscripciones que no usas, y sugerir estrategias de ahorro. No pueden mover dinero por ti ni acceder ilegalmente a nada.

### Recordatorio de IA responsable

La IA es una herramienta poderosa para entender finanzas, pero no reemplaza el criterio humano. Nunca inviertas dinero que no puedes perder basandote en predicciones de IA. Y si alguien te ofrece "IA que garantiza ganancias", es casi seguro una estafa.

### Al terminar esta leccion, puedes...

1. Explicar como los bancos usan IA para proteger tu dinero del fraude
2. Describir por que El Salvador es un referente mundial en innovacion financiera
3. Identificar senales de advertencia cuando alguien promete "dinero facil con IA"`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Has escuchado sobre Bitcoin o criptomonedas? Que sabes sobre ellas?",
        prompt: "Piensa en lo que El Salvador ha hecho diferente con el dinero",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "Discute con tu companero: De las 4 formas en que la IA ayuda en finanzas, cual crees que es mas importante para El Salvador y por que?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "vida-2-innovacion": {
    content: `## El Salvador: Laboratorio Mundial de Innovacion Tecnologica

### Por que esto importa

Los paises pequenos tienen dos opciones: seguir las reglas que otros escriben, o escribir reglas nuevas. El Salvador eligio lo segundo. Mientras paises mas grandes debaten por anos sobre nuevas tecnologias, El Salvador actua. Esto nos pone en el mapa mundial y crea oportunidades que antes no existian para los jovenes salvadorenos. Entender por que El Salvador toma estos riesgos - y como funcionan - te prepara para participar en el futuro de tu propio pais.

### Explicacion paso a paso

**Paso 1: La estrategia del "primero en moverse"**

En los negocios existe un concepto llamado "first mover advantage" (ventaja del primero en moverse). El primero en hacer algo nuevo tiene ventajas: aprende mas rapido, construye reputacion, y atrae atencion. El Salvador aplico esta estrategia a nivel nacional. No fuimos el pais mas rico o mas grande, pero fuimos los primeros en varias cosas.

**Paso 2: Bitcoin - La primera apuesta grande (2021)**

El 7 de septiembre de 2021, El Salvador se convirtio en el primer pais del mundo en adoptar Bitcoin como moneda de curso legal. Esto significa que cualquier negocio debe aceptar Bitcoin si el cliente quiere pagar con el. Se lanzo Chivo Wallet, la billetera digital del gobierno. Los ojos del mundo financiero se posaron sobre El Salvador.

Resultado: El Salvador ahora es conocido mundialmente por innovacion financiera. Empresas y expertos vienen a estudiar como funciona. Turistas "Bitcoin" visitan el pais.

**Paso 3: La alianza con xAI (2024)**

El Salvador establecio una alianza con xAI, la empresa de inteligencia artificial de Elon Musk. Esto incluye acceso a Grok (el chatbot de xAI) para el sector publico y educativo. Salvora es parte de esta estrategia: preparar a maestros y estudiantes para usar IA antes de que llegue a todas las escuelas.

El objetivo: que cuando otros paises empiecen a implementar IA en educacion, El Salvador ya tenga anos de experiencia.

**Paso 4: Por que un pais pequeno puede innovar mas rapido**

El Salvador tiene aproximadamente 6.5 millones de habitantes - menos que muchas ciudades grandes. Esto permite:
- **Decisiones rapidas**: Menos burocracia, menos niveles de aprobacion
- **Implementacion agil**: Cambios llegan a todo el pais en meses, no decadas
- **Retroalimentacion directa**: El gobierno puede ver resultados y ajustar rapidamente
- **Riesgo calculado**: Si algo falla, es mas facil corregir en un pais pequeno

**Paso 5: Los desafios reales**

La innovacion no viene sin problemas. El Salvador enfrenta desafios significativos:
- **Brecha digital**: No todos tienen telefono inteligente o internet confiable
- **Educacion tecnologica**: Muchos adultos no saben usar tecnologia basica
- **Infraestructura**: Conexion a internet inestable en zonas rurales
- **Seguridad cibernetica**: Nuevas tecnologias traen nuevos riesgos

Reconocer estos desafios es importante. La innovacion sin inclusion deja gente atras.

### Ejemplo concreto

**Escenario: El turista Bitcoin en La Libertad**

Carlos tiene un pequeno negocio de tablas de surf en El Tunco, La Libertad. Antes de Bitcoin, solo recibia dolares en efectivo o tarjeta de credito (con comisiones altas de 5-7%).

Despues de la Ley Bitcoin:
1. **Instalo Chivo Wallet** en su telefono (gratis)
2. **Puso un codigo QR** en su tienda
3. **Turistas de todo el mundo** comenzaron a pagar con Bitcoin
4. **Comision**: 0% comparado con 5-7% de tarjeta de credito
5. **Conversion instantanea**: Puede convertir Bitcoin a dolares inmediatamente si prefiere

Un dia llego un podcaster de tecnologia de Estados Unidos. Pago su tabla con Bitcoin, le parecio increible poder usar cripto en un negocio real, y publico sobre la experiencia. Ese video tuvo 500,000 vistas. Carlos recibio clientes de Europa y Asia que vieron el video.

**Resultado**: Un pequeno negocio de surf en El Salvador, conectado con el mundo gracias a innovacion tecnologica.

### Contexto salvadoreno

**En La Libertad:** Este departamento, especialmente El Tunco y playa El Zonte, se convirtio en "Bitcoin Beach" antes de la ley nacional. Fue un experimento comunitario donde negocios locales adoptaron Bitcoin desde 2019. El exito de El Zonte fue uno de los argumentos para la ley nacional. Hoy, turistas tecnologicos visitan La Libertad especificamente para ver "el lugar donde empezo Bitcoin en El Salvador". Esta fama puso a comunidades costeras en el mapa mundial de innovacion.

### Usalo con IA

**Cuando usar IA para entender innovacion:**
- Cuando quieras entender conceptos como blockchain o criptomonedas
- Para comparar como diferentes paises adoptan nuevas tecnologias
- Al investigar oportunidades que estas innovaciones crean
- Para analizar pros y contras de decisiones tecnologicas

**Por que la IA ayuda:**
Los temas de innovacion tecnologica cambian rapidamente. La IA puede explicar conceptos actualizados, dar contexto historico, y ayudarte a conectar ideas complejas de forma simple.

**Prompt seguro:**
"Explicame como El Salvador se convirtio en lider de innovacion tecnologica. Incluye Bitcoin y la alianza con xAI. Quiero entender por que un pais pequeno puede innovar mas rapido que paises grandes."

**Cuidado:**
No todo lo que brilla es oro. La IA puede ayudarte a entender la innovacion, pero tambien debes pensar criticamente. Pregunta tambien: "Cuales son las criticas o problemas de [esta innovacion]?"

### Errores comunes

1. **Error: "El Salvador es rico gracias a Bitcoin"**
   **Correccion:** Bitcoin es una apuesta de largo plazo. Ha habido ganancias y perdidas dependiendo del precio del mercado. El beneficio principal hasta ahora es reputacion, turismo tecnologico, e inversion extranjera atraida por la innovacion - no riqueza instantanea.

2. **Error: "Solo los gobiernos pueden innovar"**
   **Correccion:** La innovacion de El Zonte empezo con una comunidad, no con el gobierno. Ciudadanos, emprendedores y comunidades pueden innovar. El gobierno puede ayudar creando condiciones favorables, pero la innovacion viene de muchas partes.

3. **Error: "Si copiamos a El Salvador, cualquier pais puede hacerlo"**
   **Correccion:** El tamano importa. Decisiones que funcionan en un pais de 6.5 millones pueden ser impracticables en paises de 100 millones. El Salvador tiene ventajas unicas de escala y velocidad de implementacion.

### Practica con razonamiento

**Pregunta 1:** Por que un pais pequeno como El Salvador puede implementar innovacion mas rapido que paises grandes?

A) Porque tiene mas dinero
B) Porque tiene menos niveles de decision y puede actuar mas agil
C) Porque otros paises no quieren innovar
D) Porque su tecnologia es mas avanzada

**Respuesta:** B - **Razonamiento:** El tamano permite agilidad. Menos burocracia significa decisiones mas rapidas. Un cambio puede llegar a todo el pais en meses, mientras paises grandes tardan anos en coordinar entre regiones.

**Pregunta 2:** Que fue El Zonte antes de la Ley Bitcoin nacional?

A) Una fabrica de tecnologia
B) Un experimento comunitario donde negocios adoptaron Bitcoin voluntariamente
C) La capital de El Salvador
D) Una sede de gobierno

**Respuesta:** B - **Razonamiento:** El Zonte, en La Libertad, fue "Bitcoin Beach" - una comunidad que adopto Bitcoin desde 2019, antes de cualquier ley. Este experimento exitoso demostro que era posible y ayudo a justificar la ley nacional de 2021.

**Pregunta 3:** Cual es un desafio real de la innovacion tecnologica en El Salvador?

A) Demasiada gente tiene internet
B) La brecha digital entre zonas urbanas y rurales
C) Los jovenes no quieren usar tecnologia
D) No hay electricidad en el pais

**Respuesta:** B - **Razonamiento:** No todos tienen igual acceso a tecnologia. Las zonas rurales tienen menos conectividad, menos smartphones, y menos educacion digital. La innovacion sin inclusion puede dejar atras a poblaciones vulnerables.

**Pregunta 4:** Que incluye la alianza de El Salvador con xAI?

A) Solo dinero para el gobierno
B) Acceso a Grok y herramientas de IA para educacion y sector publico
C) Reemplazo de todos los maestros por robots
D) Obligacion de usar IA en todos los trabajos

**Respuesta:** B - **Razonamiento:** La alianza con xAI da acceso a Grok (chatbot de IA) con enfoque en educacion publica y sector gubernamental. Salvora es parte de esta estrategia: preparar a la poblacion para usar IA responsablemente.

### Recordatorio de IA responsable

La innovacion puede ser emocionante, pero siempre debemos preguntar: quien se beneficia? quien queda atras? La tecnologia debe servir a las personas, no al reves. Parte de ser innovador responsable es asegurarse de que los beneficios lleguen a todos, no solo a algunos.

### Al terminar esta leccion, puedes...

1. Explicar por que El Salvador es considerado un laboratorio de innovacion tecnologica
2. Describir la estrategia de "primero en moverse" y como aplica a Bitcoin y xAI
3. Identificar tanto las oportunidades como los desafios de la innovacion tecnologica en el pais`,
    localContext: {
      hook: "La Libertad, hogar de Bitcoin Beach en El Zonte, es donde empezo la revolucion cripto de El Salvador antes de que fuera ley nacional.",
      department: "La Libertad"
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Has escuchado que El Salvador es pionero en Bitcoin o tecnologia? Que sabes sobre esto?",
        prompt: "Piensa en noticias o conversaciones sobre El Salvador y tecnologia",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "Con tu companero, discutan: Cuales son dos ventajas y dos desafios de que El Salvador sea un laboratorio de innovacion?",
        pairWork: true,
        timer: 120
      }
    }
  },

  "vida-3-turistas": {
    transcript: `## Turismo Inteligente: IA al Servicio de Nuestros Visitantes

### Por que esto importa

El turismo representa uno de los sectores economicos mas importantes de El Salvador. Cada turista que tiene una buena experiencia regresa y recomienda nuestro pais a otros. La inteligencia artificial puede transformar como atendemos a los visitantes, desde el momento en que planean su viaje hasta que regresan a sus paises contando historias increibles. Entender estas tecnologias te prepara para trabajar en turismo o emprender en este sector.

### Explicacion paso a paso

**Paso 1: El problema que la IA puede resolver**

Un turista extranjero que quiere visitar El Salvador enfrenta varios desafios: no habla espanol, no conoce los lugares, no sabe donde comer segun sus gustos, le da miedo perderse. Tradicionalmente, dependia de guias fisicos (caros) o arriesgarse solo. La IA puede ser el "guia personal" de cada visitante, disponible 24/7 en su telefono, en su idioma.

**Paso 2: El asistente de viaje con IA**

Imagina un turista japones que llega al Aeropuerto de El Salvador. Su telefono tiene una app con IA que:

- **Habla japones perfectamente**: Traduce menus, senales, conversaciones en tiempo real
- **Conoce El Salvador**: Sabe sobre Joya de Ceren, Ruta de las Flores, playas del sur
- **Aprende sus gustos**: Si dijo que es vegetariano, no recomendara pupuserias con solo opciones de carne
- **Planifica rutas**: Calcula tiempos de viaje, trafico, horarios de sitios turisticos
- **Responde preguntas 24/7**: A las 3am puede preguntar "donde hay una farmacia" y obtener respuesta

**Paso 3: IA en hoteles y restaurantes**

Los hoteles usan IA para:
- **Personalizar habitaciones**: Si el sistema sabe que prefieres almohadas firmes, las prepara antes de que llegues
- **Predecir demanda**: Saber cuando contratrar mas personal (Semana Santa, fiestas)
- **Chatbots de servicio**: Responder preguntas de huespedes instantaneamente, en cualquier idioma
- **Precios dinamicos**: Ajustar tarifas segun demanda, optimizando ingresos

Los restaurantes usan IA para:
- **Traducir menus**: El turista ve el menu en su idioma con fotos
- **Recomendar platos**: Basado en preferencias, alergias, restricciones
- **Predecir inventario**: Evitar que se acabe la carne justo cuando llegan 50 turistas

**Paso 4: IA en sitios turisticos y patrimonio**

Los destinos pueden usar IA para:
- **Realidad aumentada**: Apuntas tu telefono a ruinas mayas y ves como lucian hace 1,000 anos
- **Control de flujo**: Distribuir visitantes para no saturar sitios fragiles
- **Guias virtuales**: Explicaciones en 20 idiomas sin necesidad de guias humanos para cada uno
- **Conservacion**: Detectar danos en estructuras historicas con camaras inteligentes

**Paso 5: La calidez salvadorena + eficiencia de IA**

La tecnologia no reemplaza la hospitalidad humana. Un abrazo de bienvenida, una sonrisa genuina, compartir una historia familiar - eso solo los salvadorenos podemos darlo. La IA maneja la logistica para que los humanos tengamos mas tiempo para lo que realmente importa: conectar con los visitantes.

### Ejemplo concreto

**Escenario: La familia alemana en la Ruta de las Flores**

Los Mueller, una familia de Berlin, quieren visitar la Ruta de las Flores. No hablan espanol. Antes de la IA, esto significaba contratar un guia caro o arriesgarse a perderse.

**Con tecnologia IA (ya disponible hoy):**

1. **Antes del viaje**: Google Translate traduce la pagina de Turismo El Salvador al aleman. ChatGPT les ayuda a planificar un itinerario de 3 dias basado en que viajan con ninos de 6 y 10 anos.

2. **Dia 1 - Juayua**: Su app les guia por GPS a la feria gastronomica. La IA traduce los nombres de los platos. La nina de 6 anos tiene alergia al mani - la app les advierte cuales platos podrian tenerlo.

3. **Dia 2 - Ataco**: Usan realidad aumentada para ver informacion sobre el mural mas famoso. La IA detecta que les gusta el cafe y sugiere una finca cercana con tour en aleman.

4. **Dia 3 - Apaneca**: Quieren ver un volcan pero no saben a cual ir. La IA analiza el clima, dificultad de caminata (tienen ninos), y sugiere Cerro Verde con guia virtual.

**Resultado**: Experiencia perfecta, gastaron $800 que quedaron en negocios locales, y escribieron una resena de 5 estrellas mencionando lo facil que fue visitar El Salvador sin hablar espanol.

### Contexto salvadoreno

**En Sonsonate:** Este departamento es puerta de entrada a la Ruta de las Flores, uno de los circuitos turisticos mas populares de El Salvador. Municipios como Juayua (con su famosa feria gastronomica), Nahuizalco (artesanias de mimbre y tule), y Salcoatitan atraen miles de turistas nacionales e internacionales. La IA puede ayudar a estos destinos a competir con lugares mas famosos de otros paises, ofreciendo experiencias personalizadas que antes solo daban destinos de lujo.

### Usalo con IA

**Cuando usar IA para turismo:**
- Cuando quieras planificar un viaje (a El Salvador o a cualquier lugar)
- Para traducir informacion turistica a otros idiomas
- Al crear contenido para promocionar un destino
- Para entender que buscan los turistas modernos

**Por que la IA ayuda:**
El turismo es global pero local. La IA puede traducir, recomendar, y personalizar a escala, mientras tu aportas el conocimiento local autentico que ningun algoritmo puede replicar.

**Prompt seguro:**
"Quiero crear un itinerario de 5 dias en El Salvador para un turista estadounidense que le gusta la naturaleza, la historia y la comida local. Incluye playas, sitios arqueologicos, y la Ruta de las Flores. Que deberia incluir?"

**Cuidado:**
La IA no conoce cambios recientes (un restaurante que cerro, un camino en reparacion). Siempre verifica informacion practica con fuentes locales actualizadas.

### Errores comunes

1. **Error: "La IA va a reemplazar a los guias turisticos"**
   **Correccion:** La IA complementa, no reemplaza. Un guia local que conoce historias familiares, que sabe donde conseguir las mejores pupusas, que puede improvisar cuando llueve - eso es irremplazable. La IA maneja traduccion y logistica; los humanos manejan conexion y autenticidad.

2. **Error: "Solo los hoteles caros pueden usar IA"**
   **Correccion:** Herramientas basicas de IA como Google Translate, WhatsApp con traduccion automatica, o ChatGPT son gratuitas o muy baratas. Un hostal pequeno puede ofrecer servicio al cliente en 5 idiomas sin contratar personal bilingue.

3. **Error: "Los turistas prefieren experiencias 100% digitales"**
   **Correccion:** Los estudios muestran que los turistas quieren conveniencia digital + autenticidad humana. Quieren reservar por app pero ser recibidos por una persona. Quieren traduccion automatica pero tambien aprender algunas palabras en espanol de un local.

### Practica con razonamiento

**Pregunta 1:** Un hotel en El Salvador usa IA para ajustar sus precios. Que significa "precios dinamicos"?

A) Precios que cambian cada hora aleatoriamente
B) Precios que se ajustan segun demanda (mas altos en Semana Santa, mas bajos en temporada baja)
C) Precios que solo los gerentes pueden ver
D) Precios que nunca cambian

**Respuesta:** B - **Razonamiento:** Los precios dinamicos responden a oferta y demanda. Cuando hay muchos turistas (alta demanda), los precios suben. En temporada baja, bajan para atraer visitantes. Es la misma logica de los vuelos aereos.

**Pregunta 2:** Como puede la realidad aumentada mejorar la visita a Joya de Ceren?

A) Reemplazando las ruinas con edificios modernos
B) Mostrando como luciaN las estructuras mayas hace siglos cuando apuntas tu telefono
C) Eliminando la necesidad de visitar el sitio fisicamente
D) Traduciendo el nombre "Joya de Ceren" a otros idiomas

**Respuesta:** B - **Razonamiento:** La realidad aumentada superpone imagenes digitales sobre el mundo real. Un turista apunta su telefono a ruinas y ve una reconstruccion de como se veian hace 1,400 anos, con personas, colores, actividades.

**Pregunta 3:** Por que la calidez salvadorena no puede ser reemplazada por IA?

A) Porque la IA no puede hablar espanol
B) Porque la conexion humana genuina, historias personales y hospitalidad autentica son unicamente humanas
C) Porque los salvadorenos no quieren usar tecnologia
D) Porque la IA es muy cara

**Respuesta:** B - **Razonamiento:** La tecnologia maneja eficiencia y logistica. Pero un abrazo de bienvenida, compartir una historia familiar, reirse juntos de un malentendido cultural - esas experiencias humanas son lo que los turistas recuerdan y por lo que regresan.

**Pregunta 4:** Un restaurante en Sonsonate quiere atender turistas. Que puede hacer con IA gratuita?

A) Nada, la IA solo es para empresas grandes
B) Usar Google Translate para crear un menu en ingles, frances y aleman
C) Reemplazar a todos los meseros con robots
D) Aumentar los precios automaticamente

**Respuesta:** B - **Razonamiento:** Herramientas gratuitas como Google Translate permiten a cualquier negocio pequeno crear materiales en multiples idiomas. Un menu traducido puede ser la diferencia entre atraer turistas o que pasen de largo.

### Recordatorio de IA responsable

El turismo es intercambio cultural. Usa la IA para facilitar ese intercambio, no para evitarlo. El objetivo no es que turistas pasen todo el viaje mirando sus telefonos, sino que la tecnologia resuelva fricciones (idioma, navegacion) para que tengan mas tiempo de conectar con personas y lugares reales.

### Al terminar esta leccion, puedes...

1. Describir cinco formas en que la IA mejora la experiencia de turistas en El Salvador
2. Explicar como negocios pequenos pueden usar herramientas de IA gratuitas para atender visitantes
3. Argumentar por que la tecnologia complementa pero no reemplaza la hospitalidad humana`,
    localContext: {
      hook: "Sonsonate, puerta de entrada a la Ruta de las Flores, puede usar IA para competir con destinos turisticos mundiales ofreciendo experiencias personalizadas.",
      department: "Sonsonate"
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Si un turista visitara tu comunidad, que le recomendarias ver o hacer?",
        prompt: "Piensa en lugares especiales de El Salvador",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Menciona 3 formas en que la IA puede mejorar la experiencia de un turista en El Salvador. Luego tu companero menciona otras 3.",
        pairWork: true,
        timer: 90
      }
    }
  },

  "vida-4-planeta": {
    transcript: `## IA para el Medio Ambiente: Protegiendo el Futuro de El Salvador

### Por que esto importa

El Salvador enfrenta desafios ambientales serios: somos uno de los paises mas vulnerables al cambio climatico en America Latina. Inundaciones, sequias, deslizamientos y perdida de bosques amenazan comunidades y medios de vida. La inteligencia artificial ofrece herramientas poderosas para predecir, prevenir y responder a estos desafios. Entender como la tecnologia puede proteger el medio ambiente te prepara para ser parte de la solucion.

### Explicacion paso a paso

**Paso 1: Por que El Salvador es especialmente vulnerable**

Nuestro pais tiene caracteristicas que lo hacen muy vulnerable al cambio climatico:
- **Ubicacion geografica**: En el cinturon de huracanes y zona sismica
- **Alta densidad poblacional**: Mucha gente en poco espacio
- **Deforestacion historica**: Hemos perdido mas del 85% de nuestros bosques originales
- **Dependencia agricola**: Muchas familias dependen del clima para cultivar

Esto significa que los desastres nos afectan mas y nos recuperamos mas lento. La IA puede ayudar a reducir estos riesgos.

**Paso 2: IA para predecir desastres naturales**

Los sistemas de IA pueden analizar enormes cantidades de datos para predecir eventos extremos:

- **Datos de satelites**: Imagenes del clima desde el espacio
- **Sensores meteorologicos**: Temperatura, humedad, presion atmosferica
- **Datos historicos**: Patrones de lluvias y desastres pasados
- **Topografia**: Como el terreno afecta inundaciones y deslizamientos

Con toda esta informacion, la IA puede predecir inundaciones o deslizamientos con dias de anticipacion, dando tiempo para evacuar personas y proteger bienes. El MARN (Ministerio de Medio Ambiente) ya usa algunos de estos sistemas.

**Paso 3: IA para monitorear bosques y biodiversidad**

Satelites y drones con IA pueden:
- **Detectar deforestacion ilegal**: Identificar cuando alguien corta arboles sin permiso
- **Monitorear incendios forestales**: Detectar focos de fuego antes de que se expandan
- **Rastrear cambios en ecosistemas**: Ver como cambian rios, lagos y bosques con el tiempo
- **Identificar especies**: Camaras con IA reconocen animales para estudiar biodiversidad

En El Salvador, donde hemos perdido tantos bosques, esta tecnologia es crucial para proteger lo que queda y reforestar de manera inteligente.

**Paso 4: IA para gestionar agua y energia**

El agua es cada vez mas escasa. La IA ayuda a:
- **Predecir disponibilidad**: Cuando habra suficiente agua y cuando escasez
- **Optimizar distribucion**: Asegurar que llegue a donde mas se necesita
- **Detectar fugas**: Identificar perdidas en sistemas de agua potable
- **Planificar riego agricola**: Usar solo el agua necesaria, no mas

Para energia, la IA predice cuando habra sol o viento para optimizar la produccion de energia renovable. El Salvador tiene potencial geotermico y solar que puede aprovecharse mejor con tecnologia.

**Paso 5: Ciencia ciudadana - tu rol**

No necesitas ser cientifico para contribuir. Existen aplicaciones donde cualquier persona puede reportar:
- Avistamientos de aves o animales
- Calidad del agua en rios locales
- Contaminacion o basura en espacios publicos
- Condiciones meteorologicas desde su ubicacion

Estos datos, analizados por IA, ayudan a cientificos a entender mejor el medio ambiente salvadoreno. Tu telefono puede ser una herramienta de investigacion.

### Ejemplo concreto

**Escenario: Alerta temprana en Chalatenango**

En la zona norte de Chalatenango, muchas comunidades viven cerca de laderas. Historicamente, los deslizamientos causados por lluvias fuertes han cobrado vidas y destruido hogares.

**Con sistema de IA de alerta temprana:**

1. **Monitoreo constante**: Sensores miden humedad del suelo, lluvia acumulada, y movimiento del terreno
2. **Analisis en tiempo real**: La IA compara datos actuales con patrones historicos de deslizamientos
3. **Calculo de riesgo**: El sistema determina que "la combinacion de lluvia + humedad + inclinacion = 78% probabilidad de deslizamiento en las proximas 24 horas"
4. **Alerta automatica**: Mensajes SMS llegan a lideres comunitarios y autoridades
5. **Evacuacion preventiva**: Las familias en riesgo evacuan antes del deslizamiento

**Resultado real**: En Guatemala, sistemas similares han salvado decenas de vidas. El Salvador esta implementando tecnologia comparable.

### Contexto salvadoreno

**En Chalatenango:** Este departamento, con su terreno montanoso y alta deforestacion historica, es especialmente vulnerable a deslizamientos. La cuenca del Rio Lempa, que nace en Guatemala y cruza Chalatenango, es vital para el agua y energia de todo el pais. Proteger los bosques de Chalatenango no solo beneficia al departamento - afecta la disponibilidad de agua y electricidad para todo El Salvador. Proyectos de reforestacion con monitoreo satelital de IA estan en fase piloto en la zona.

### Usalo con IA

**Cuando usar IA para temas ambientales:**
- Cuando quieras entender el cambio climatico y sus efectos en El Salvador
- Para investigar soluciones tecnologicas a problemas ambientales
- Al buscar como contribuir a la proteccion del medio ambiente
- Para analizar datos ambientales de tu comunidad

**Por que la IA ayuda:**
Los sistemas ambientales son complejos - muchas variables interactuan de formas dificiles de predecir. La IA puede procesar esta complejidad y encontrar patrones que los humanos no podemos ver.

**Prompt seguro:**
"Soy estudiante en El Salvador y quiero entender como la inteligencia artificial puede ayudar a predecir y prevenir desastres naturales como inundaciones y deslizamientos. Explicame los sistemas que existen y como funcionan paso a paso."

**Cuidado:**
La IA puede predecir probabilidades, no certezas. Un sistema puede decir "70% de probabilidad de inundacion" - eso no significa que definitivamente pasara, pero si que hay que prepararse.

### Errores comunes

1. **Error: "La tecnologia sola puede resolver el cambio climatico"**
   **Correccion:** La IA es una herramienta, no una solucion magica. Reducir emisiones, cambiar habitos de consumo, y politicas publicas son igualmente importantes. La tecnologia ayuda, pero las decisiones humanas son centrales.

2. **Error: "El Salvador es muy pequeno para afectar el clima global"**
   **Correccion:** Es cierto que nuestras emisiones son pequenas comparadas con China o Estados Unidos. Pero proteger nuestros bosques, gestionar bien el agua, y prepararnos para desastres SI podemos hacerlo - y beneficia directamente a nuestra poblacion.

3. **Error: "Solo los cientificos pueden ayudar al medio ambiente"**
   **Correccion:** La ciencia ciudadana permite que cualquier persona contribuya datos valiosos. Reportar un ave rara, medir la temperatura de un rio, o documentar contaminacion son contribuciones reales que la IA puede analizar.

### Practica con razonamiento

**Pregunta 1:** Por que El Salvador es especialmente vulnerable al cambio climatico?

A) Porque somos el pais mas grande de Centroamerica
B) Por nuestra ubicacion geografica, alta densidad poblacional, deforestacion y dependencia agricola
C) Porque tenemos muchos volcanes activos
D) Porque no usamos tecnologia

**Respuesta:** B - **Razonamiento:** Multiples factores combinados nos hacen vulnerables: estamos en zona de huracanes, somos el pais mas densamente poblado de America continental, hemos perdido la mayoria de nuestros bosques, y muchas familias dependen de la agricultura afectada por el clima.

**Pregunta 2:** Como puede la IA ayudar a prevenir muertes por deslizamientos?

A) Construyendo paredes de concreto automaticamente
B) Analizando datos de lluvia, humedad y terreno para predecir deslizamientos con anticipacion
C) Deteniendo la lluvia con tecnologia
D) Moviendo las casas a lugares seguros

**Respuesta:** B - **Razonamiento:** La IA no puede detener un deslizamiento, pero puede predecirlo analizando multiples datos. Con prediccion anticipada (24-72 horas), las personas pueden evacuar antes del desastre. La prevencion salva vidas.

**Pregunta 3:** Que es la ciencia ciudadana?

A) Ciencia que solo hacen los ciudadanos, no los cientificos
B) Participacion de personas comunes reportando datos que los cientificos analizan
C) Ciencia que se ensena en escuelas publicas
D) Un programa de television educativo

**Respuesta:** B - **Razonamiento:** La ciencia ciudadana combina la capacidad de cientificos para analizar datos con la capacidad de millones de personas para recopilarlos. Tu puedes reportar un avistamiento de ave; los cientificos (con ayuda de IA) analizan miles de reportes para entender migraciones.

**Pregunta 4:** Por que es importante proteger los bosques de Chalatenango?

A) Solo para que se vea bonito
B) Porque la cuenca del Rio Lempa afecta el agua y energia de todo El Salvador
C) Para vender madera
D) No es importante, hay suficientes bosques

**Respuesta:** B - **Razonamiento:** Los bosques de Chalatenango protegen la cuenca del Rio Lempa, fuente principal de agua potable y hidroelectricidad para gran parte del pais. La deforestacion en el norte afecta el agua en San Salvador.

### Recordatorio de IA responsable

El medio ambiente es de todos. La tecnologia puede ayudarnos a protegerlo, pero las decisiones eticas son nuestras. Preguntate: como puedo usar lo que aprendo para cuidar mi comunidad y mi pais? El conocimiento sin accion no cambia nada.

### Al terminar esta leccion, puedes...

1. Explicar por que El Salvador es especialmente vulnerable al cambio climatico
2. Describir tres formas en que la IA ayuda a proteger el medio ambiente
3. Identificar como puedes contribuir a la ciencia ciudadana con tu telefono`,
    localContext: {
      hook: "Chalatenango, con su terreno montanoso y la vital cuenca del Rio Lempa, es clave para el agua de todo El Salvador y necesita proteccion con tecnologia avanzada.",
      department: "Chalatenango"
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Que problemas ambientales has visto en tu comunidad? Contaminacion, deforestacion, inundaciones?",
        prompt: "Piensa en como el cambio climatico afecta a El Salvador",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "discussion",
        prompt: "De las 5 formas en que la IA ayuda al medio ambiente, cual seria mas util para tu comunidad? Explica por que a tu companero.",
        pairWork: true,
        timer: 120
      }
    }
  },

  "vida-5-futbol": {
    transcript: `## IA en el Futbol: La Revolucion del Deporte Rey

### Por que esto importa

El futbol es pasion en El Salvador. Cada salvadoreno tiene una opinion sobre La Selecta, un equipo favorito, un recuerdo de un gol importante. Pero detras de los equipos que vemos en television hay una revolucion silenciosa: la inteligencia artificial esta transformando como se entrena, se juega, y se descubren talentos. Entender estas tecnologias te permite ver el deporte con nuevos ojos - y quien sabe, quiza el proximo talento salvadoreno sea descubierto por IA.

### Explicacion paso a paso

**Paso 1: El problema que la IA puede resolver en el futbol**

El futbol profesional moderno es extremadamente competitivo. La diferencia entre ganar y perder puede ser un detalle: un jugador que corrio 100 metros mas, un pase 5% mas preciso, una lesion que pudo prevenirse. Tradicionalmente, entrenadores dependian de su ojo y experiencia. Pero el ojo humano no puede ver todo lo que pasa en 90 minutos de juego. La IA puede.

**Paso 2: Analisis de rendimiento (Performance Analytics)**

En partidos profesionales, camaras y sensores rastrean cada movimiento:

- **Distancia recorrida**: Cuantos kilometros corrio cada jugador
- **Velocidad maxima**: Que tan rapido puede sprint un jugador
- **Precision de pases**: Que porcentaje de pases llegan a su destino
- **Mapa de calor**: Donde se posiciona el jugador durante el partido
- **Decision making**: Cuanto tarda en decidir que hacer con el balon

La IA procesa todos estos datos y genera informes que antes tomaban semanas en minutos. Un entrenador puede ver despues del partido exactamente donde fallo su equipo.

**Paso 3: Prevencion de lesiones**

Las lesiones son pesadilla para jugadores y equipos. La IA puede predecirlas antes de que ocurran:

- **Carga de trabajo**: Si un jugador corrio demasiado la semana pasada, tiene mayor riesgo
- **Patrones de movimiento**: Cambios sutiles en como corre pueden indicar fatiga muscular
- **Historial de lesiones**: Jugadores que ya se lesionaron tienen mayor riesgo en ciertas zonas
- **Clima y terreno**: Condiciones del partido afectan riesgo de lesiones

El sistema puede alertar: "Jugador X tiene 73% de probabilidad de lesion muscular si juega los 90 minutos el domingo". El cuerpo tecnico decide darle descanso.

**Paso 4: Analisis de rivales (Scouting de equipos)**

Antes de un partido importante, los equipos estudian al rival. Tradicionalmente, un analista veia horas de video. Ahora la IA puede:

- **Identificar patrones**: "Este equipo siempre ataca por la izquierda"
- **Detectar debilidades**: "El portero tiene problemas con tiros de larga distancia"
- **Analizar tendencias**: "En los ultimos 10 partidos, marcan 70% de sus goles en el segundo tiempo"
- **Predecir formacion**: Basado en patrones, que estrategia usara el rival

**Paso 5: Descubrimiento de talentos (Player Scouting)**

Antes, descubrir un talento dependia de que un scout lo viera jugar en persona. Ahora la IA puede analizar videos de miles de jugadores en todo el mundo y detectar quienes tienen potencial. Esto democratiza el scouting: un joven en Soyapango tiene mas posibilidades de ser visto si sus videos llegan a las plataformas correctas.

### Ejemplo concreto

**Escenario: La Selecta se prepara para las eliminatorias**

Imagina que El Salvador va a jugar contra Mexico en las eliminatorias mundialistas. El cuerpo tecnico de La Selecta tiene acceso a herramientas de IA:

**Antes del partido:**
1. **Analisis de Mexico**: La IA procesa los ultimos 20 partidos de Mexico. Identifica que su defensa tiene problemas con pases largos detras de los centrales.
2. **Estado de jugadores salvadorenos**: El sistema detecta que un delantero clave tiene 65% mas fatiga de lo normal. Recomienda que no sea titular.
3. **Estrategia sugerida**: Basada en fortalezas de El Salvador y debilidades de Mexico, la IA sugiere una formacion especifica.

**Durante el partido:**
4. **Analisis en tiempo real**: Sensores GPS en los jugadores envian datos constantemente. El cuerpo tecnico ve quien esta fatigado.
5. **Sugerencias de cambios**: "El mediocampista #8 ha bajado su rendimiento 20% en los ultimos 15 minutos. Considere cambio."

**Despues del partido:**
6. **Informe detallado**: Cada jugador recibe un reporte de su rendimiento con areas de mejora especificas.

### Contexto salvadoreno

**En San Salvador:** El Estadio Cuscatlan, corazon del futbol salvadoreno, es donde La Selecta suena con clasificar a un mundial. Equipos de la primera division como Alianza, FAS, Aguila y otros estan comenzando a incorporar tecnologia de analisis. La Federacion Salvadorena de Futbol (FESFUT) explora como la IA puede mejorar no solo al equipo nacional, sino todo el sistema de desarrollo de talentos. Jovenes salvadorenos con talento podrian ser descubiertos mas facilmente si sus datos llegan a las plataformas correctas.

### Usalo con IA

**Cuando usar IA para futbol:**
- Cuando quieras entender estadisticas de jugadores o equipos
- Para analizar que hace diferente a los mejores jugadores
- Al investigar como la tecnologia transforma el deporte
- Para entender predicciones de partidos (aunque nunca son certezas)

**Por que la IA ayuda:**
El futbol genera enormes cantidades de datos que ningun humano puede procesar solo. La IA puede encontrar patrones en miles de partidos, identificar tendencias, y explicar conceptos tacticos de forma accesible.

**Prompt seguro:**
"Quiero entender como los equipos profesionales de futbol usan inteligencia artificial para mejorar su rendimiento. Explicame el analisis de datos deportivos con ejemplos concretos que un aficionado al futbol pueda entender."

**Cuidado:**
La IA no puede predecir resultados de partidos con certeza - el futbol es famoso por sus sorpresas. Las "predicciones" son probabilidades basadas en datos historicos, no bolas de cristal.

### Errores comunes

1. **Error: "La IA puede predecir quien va a ganar el partido"**
   **Correccion:** La IA puede calcular probabilidades basadas en datos (ej: "Equipo A tiene 60% de probabilidad de ganar"), pero el futbol es impredecible. Un gol temprano, una expulsion, o simplemente un dia inspirado pueden cambiar todo. Las apuestas deportivas que usan "IA" no son garantia de nada.

2. **Error: "Los datos reemplazan el talento"**
   **Correccion:** Los mejores jugadores combinan talento natural con trabajo duro. La IA ayuda a optimizar el entrenamiento y la estrategia, pero no puede reemplazar la creatividad de un Messi o la determinacion de un Ronaldo. Los datos informan, el talento decide.

3. **Error: "Solo equipos ricos pueden usar estas tecnologias"**
   **Correccion:** Herramientas basicas de analisis estan cada vez mas accesibles. Aplicaciones gratuitas pueden analizar videos de partidos. Equipos pequenos pueden usar datos para competir mejor contra equipos con mayores presupuestos.

### Practica con razonamiento

**Pregunta 1:** Que datos puede medir un sistema de analisis de rendimiento en futbol?

A) Solo los goles marcados
B) Distancia recorrida, velocidad, precision de pases, posicionamiento y mas
C) Solo si el equipo gano o perdio
D) Cuanto ganan los jugadores

**Respuesta:** B - **Razonamiento:** Los sistemas modernos capturan datos completos del movimiento de cada jugador durante todo el partido. Esto incluye metricas fisicas (cuanto corrio, que tan rapido), tecnicas (precision de pases, toques), y tacticas (donde se posiciona, como interactua con companeros).

**Pregunta 2:** Como puede la IA ayudar a prevenir lesiones en jugadores?

A) Curando lesiones automaticamente
B) Analizando carga de trabajo, fatiga y patrones de movimiento para predecir riesgo
C) Prohibiendo que los jugadores entrenen
D) Reemplazando a los medicos del equipo

**Respuesta:** B - **Razonamiento:** La IA no cura lesiones, pero puede detectar senales de advertencia antes de que ocurran. Analizando cuanto ha jugado un atleta, como se mueve, y su historial, puede alertar sobre riesgo elevado para que el cuerpo tecnico tome decisiones preventivas.

**Pregunta 3:** Que es el "scouting" con IA en futbol?

A) Buscar uniformes nuevos
B) Analizar videos de miles de jugadores para identificar talentos potenciales
C) Espiar ilegalmente a otros equipos
D) Vender entradas para partidos

**Respuesta:** B - **Razonamiento:** El scouting es la busqueda de talentos. Tradicionalmente, scouts viajaban a ver partidos en persona. La IA puede analizar videos de jugadores en todo el mundo, identificando quienes tienen caracteristicas valiosas. Esto democratiza el proceso: un joven en un pueblo pequeno puede ser "visto" sin que un scout viaje a su ciudad.

**Pregunta 4:** Por que la IA no puede predecir con certeza quien ganara un partido?

A) Porque la IA no entiende futbol
B) Porque el futbol tiene elementos impredecibles: inspiracion, suerte, errores, condiciones
C) Porque los datos son mentira
D) Porque los equipos hacen trampa

**Respuesta:** B - **Razonamiento:** El futbol es famoso por sus sorpresas. Un gol temprano cambia la psicologia del partido. Una expulsion altera todo. Un jugador tiene el partido de su vida o uno terrible. La IA puede calcular probabilidades basadas en datos historicos, pero no puede predecir inspiracion o errores humanos.

### Recordatorio de IA responsable

El futbol es pasion, comunidad, y emocion. La tecnologia puede hacerlo mas justo (VAR para revisar jugadas) y mas competitivo (analisis de rendimiento), pero nunca debe reemplazar lo que lo hace especial: la incertidumbre, los suenos, y la conexion entre aficionados. Usa la tecnologia para entender mejor el juego, no para quitarle la magia.

### Al terminar esta leccion, puedes...

1. Explicar cuatro formas en que la IA se usa en el futbol profesional
2. Describir como la tecnologia puede ayudar a prevenir lesiones deportivas
3. Argumentar por que las predicciones de IA sobre partidos son probabilidades, no certezas`,

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
    },
    videoInteractivity: {
      preVideoHook: {
        type: "question",
        content: "Cual es tu equipo de futbol favorito? Alguna vez has visto estadisticas de jugadores?",
        prompt: "Piensa en como los equipos profesionales analizan a sus jugadores",
        discussionTime: 30
      },
      postVideoActivity: {
        type: "recap",
        prompt: "Con tu companero, expliquen como la IA podria ayudar a un equipo de futbol salvadoreno. Mencionen analisis, lesiones y busqueda de talentos.",
        pairWork: true,
        timer: 120
      }
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
