// Content safety and cheating prevention for Salvora
// Detects inappropriate requests and redirects to learning

import type { SafetyCheckResult } from "./types";

// Patterns that indicate cheating attempts
const CHEATING_PATTERNS: Array<{ pattern: RegExp; response: string }> = [
  {
    pattern: /haz\s*(me\s+)?mi\s+tarea/i,
    response: "Entiendo que necesitas ayuda con tu tarea. En lugar de hacerla por ti, puedo explicarte los conceptos para que la puedas hacer tu mismo. Que parte no entiendes?",
  },
  {
    pattern: /resuelve\s+(esto|este|esta|todo)\s+(por\s+mi|completo)/i,
    response: "Puedo ayudarte a entender como resolver este tipo de problemas. Quieres que te explique el proceso paso a paso?",
  },
  {
    pattern: /dame\s+(la|las)\s+respuesta(s)?/i,
    response: "Si te doy la respuesta directamente, no aprenderas. Mejor te explico el concepto y tu intentas resolverlo. Si te equivocas, te ayudo a corregir.",
  },
  {
    pattern: /copia\s+(esto|este|esta)/i,
    response: "Copiar no te ayuda a aprender. Que tal si trabajamos juntos para que entiendas el material?",
  },
  {
    pattern: /respuestas?\s+(del|de)\s+(examen|test|prueba|quiz)/i,
    response: "No puedo darte respuestas de examenes. Pero puedo ayudarte a estudiar y prepararte para que te vaya bien. Que temas necesitas repasar?",
  },
  {
    pattern: /escribe\s+(un|una|el|la|mi)\s+(ensayo|tarea|trabajo|reporte)/i,
    response: "No puedo escribir tu trabajo por ti, pero puedo ayudarte con ideas, estructura, o revisar lo que hayas escrito. Por donde quieres empezar?",
  },
  {
    pattern: /hazme\s+(un|una|el|la)/i,
    response: "Mejor te enseno como hacerlo tu. Asi aprendes y podras hacerlo solo la proxima vez. Empecemos?",
  },
];

// Patterns for blocked/inappropriate content
const BLOCKED_PATTERNS: Array<{ pattern: RegExp; response: string }> = [
  {
    pattern: /como\s+(hackear|piratear|robar)/i,
    response: "Este tema no esta disponible. Hay algo relacionado con tus estudios en lo que pueda ayudarte?",
  },
  {
    pattern: /(contenido\s+adulto|pornografia)/i,
    response: "Este tipo de contenido no esta disponible en Salvora. Puedo ayudarte con temas educativos.",
  },
  {
    pattern: /(drogas|como\s+conseguir)/i,
    response: "No puedo ayudar con este tema. Si necesitas hablar con alguien, busca ayuda de un adulto de confianza.",
  },
  {
    pattern: /(armas|como\s+hacer\s+una\s+bomba)/i,
    response: "Este contenido no esta permitido. Salvora es para aprendizaje educativo.",
  },
];

/**
 * Check if a message appears to be a cheating attempt
 */
export function checkForCheating(message: string): SafetyCheckResult {
  const normalizedMessage = message.toLowerCase().trim();

  for (const { pattern, response } of CHEATING_PATTERNS) {
    if (pattern.test(normalizedMessage)) {
      return {
        safe: false,
        blocked: true,
        reason: "cheating_attempt",
        suggestion: response,
      };
    }
  }

  return { safe: true, blocked: false };
}

/**
 * Check if content is safe and appropriate
 */
export function checkContentSafety(message: string): SafetyCheckResult {
  const normalizedMessage = message.toLowerCase().trim();

  for (const { pattern, response } of BLOCKED_PATTERNS) {
    if (pattern.test(normalizedMessage)) {
      return {
        safe: false,
        blocked: true,
        reason: "inappropriate_content",
        suggestion: response,
      };
    }
  }

  return { safe: true, blocked: false };
}

/**
 * Comprehensive safety check combining all checks
 */
export function performSafetyCheck(
  message: string,
  classroomMode: boolean = false
): SafetyCheckResult {
  // First check for blocked content
  const contentCheck = checkContentSafety(message);
  if (!contentCheck.safe) {
    return contentCheck;
  }

  // Then check for cheating (more strict in classroom mode)
  const cheatingCheck = checkForCheating(message);
  if (!cheatingCheck.safe) {
    return cheatingCheck;
  }

  // In classroom mode, be extra cautious
  if (classroomMode) {
    // Add additional checks for classroom mode
    const homeworkPatterns = [
      /tarea/i,
      /ejercicio\s+\d/i,
      /problema\s+\d/i,
      /pagina\s+\d/i,
    ];

    for (const pattern of homeworkPatterns) {
      if (pattern.test(message)) {
        return {
          safe: true,
          blocked: false,
          suggestion: "Recuerda: La IA te ayuda a aprender, no a copiar. Pide explicaciones, no respuestas.",
        };
      }
    }
  }

  return { safe: true, blocked: false };
}

/**
 * Get a friendly learning-focused response for blocked content
 */
export function getLearningRedirect(originalQuery: string): string {
  const redirects = [
    "Mejor te ayudo a entender el concepto. Que parte te confunde?",
    "Puedo explicarte como resolver este tipo de problemas. Quieres intentarlo juntos?",
    "En lugar de darte la respuesta, te dare pistas para que llegues tu mismo. Empecemos!",
    "Aprender es mas divertido cuando lo descubres tu. Te guio paso a paso?",
  ];

  return redirects[Math.floor(Math.random() * redirects.length)];
}
