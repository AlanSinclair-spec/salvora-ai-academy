// Lesson content for Salvora AI Academy
// Contains markdown content, quiz questions, and video transcripts

import type { QuizQuestion } from "@/types/courses";

interface LessonContent {
  content?: string;
  transcript?: string;
  practiceQuestions?: QuizQuestion[];
  practiceInstructions?: string;
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
