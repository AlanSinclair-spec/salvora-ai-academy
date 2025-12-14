// AI Readiness Score types for Salvora AI Academy

export type ReadinessPillarId = 'conceptos' | 'prompts' | 'uso_responsable' | 'aplicacion';

export interface ReadinessPillar {
  id: ReadinessPillarId;
  label: string;
  score: number; // 0-25 each (total = 100)
  progress: number; // 0-100 percentage within pillar
}

export interface ReadinessScore {
  total: number; // 0-100
  pillars: ReadinessPillar[];
  lastUpdated: number; // timestamp
}

export interface ReadinessCheckpoint {
  lessonId: string;
  pillar: ReadinessPillarId;
  completed: boolean;
  timestamp: number;
}

export interface ReadinessState {
  score: ReadinessScore;
  checkpoints: Record<string, ReadinessCheckpoint>;
  practiceResults: Record<string, { correct: number; total: number }>;
  practiceAccuracy: number; // 0-1 average across all practice
}

// Default pillars configuration
export const DEFAULT_PILLARS: ReadinessPillar[] = [
  { id: 'conceptos', label: 'Conceptos', score: 0, progress: 0 },
  { id: 'prompts', label: 'Prompts', score: 0, progress: 0 },
  { id: 'uso_responsable', label: 'Uso responsable', score: 0, progress: 0 },
  { id: 'aplicacion', label: 'Aplicacion', score: 0, progress: 0 },
];

// Pillar to lesson mapping for tracking
export const PILLAR_LESSONS: Record<ReadinessPillarId, string[]> = {
  conceptos: [
    'intro-1-bienvenida',
    'intro-1-definicion',
    'intro-1-el-salvador',
    'intro-2-grok',
    'intro-2-modelos',
  ],
  prompts: [
    'intro-2-buenas-preguntas',
    'intro-2-ejercicio',
    'maestros-1-plantilla',
    'estudiantes-1-pedir-ayuda',
  ],
  uso_responsable: [
    'maestros-3-seguridad',
    'maestros-3-cheating',
    'maestros-3-privacidad',
    'estudiantes-1-aprender',
  ],
  aplicacion: [
    'vida-1-cultivos',
    'vida-1-casos',
    'vida-2-finanzas',
    'vida-5-futbol',
  ],
};

// Get recommendation based on weakest pillar
export function getReadinessRecommendation(pillars: ReadinessPillar[]): string {
  const weakest = [...pillars].sort((a, b) => a.progress - b.progress)[0];

  const recommendations: Record<ReadinessPillarId, string> = {
    conceptos: 'Refuerza los conceptos basicos de IA completando mas lecciones introductorias.',
    prompts: 'Practica crear mejores prompts en las lecciones de comunicacion con IA.',
    uso_responsable: 'Revisa las lecciones sobre seguridad y uso etico de la IA.',
    aplicacion: 'Explora mas casos de uso real de IA en El Salvador.',
  };

  return recommendations[weakest.id];
}
