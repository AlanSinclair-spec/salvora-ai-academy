import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MessageSquare, 
  Lightbulb,
  GraduationCap,
  ChevronRight,
  Brain,
  Target,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  {
    id: "helper",
    title: "Ayudante de Tareas",
    description: "Obtén explicaciones paso a paso para tus tareas",
    icon: BookOpen,
  },
  {
    id: "literacy",
    title: "Alfabetización en IA",
    description: "Aprende conceptos básicos de IA de forma simple",
    icon: Brain,
  },
  {
    id: "guides",
    title: "Guías de Estudio",
    description: "Métodos de estudio efectivos con IA",
    icon: Target,
  },
];

const aiLiteracyTopics = [
  {
    title: "¿Qué es la IA?",
    summary: "La Inteligencia Artificial es tecnología que permite a las computadoras realizar tareas que normalmente requieren inteligencia humana.",
    details: [
      "La IA aprende de datos, como tú aprendes de tus experiencias",
      "No es mágica, son programas muy avanzados",
      "Puede cometer errores, siempre verifica la información",
      "Es una herramienta, no un reemplazo del pensamiento crítico",
    ],
    icon: "🤖",
  },
  {
    title: "¿Qué es ChatGPT?",
    summary: "ChatGPT es un modelo de lenguaje que puede conversar contigo y ayudarte con tareas de escritura y aprendizaje.",
    details: [
      "Predice la siguiente palabra basándose en probabilidades",
      "Fue entrenado con textos de internet",
      "No sabe todo y puede inventar información",
      "Es mejor para explicar que para dar datos exactos",
    ],
    icon: "💬",
  },
  {
    title: "Cómo usar IA responsablemente",
    summary: "La IA es una herramienta poderosa, pero debes usarla de manera ética y crítica.",
    details: [
      "Nunca copies directamente sin entender",
      "Verifica la información en fuentes confiables",
      "Cita cuando uses IA para ayudarte",
      "Usa la IA para aprender, no para evitar aprender",
    ],
    icon: "✅",
  },
  {
    title: "Detectar información falsa",
    summary: "Aprende a identificar cuando la IA genera información incorrecta o inventada.",
    details: [
      "Pregunta por las fuentes de la información",
      "Compara con otras fuentes confiables",
      "Desconfía de datos muy específicos (fechas, números)",
      "Si algo suena demasiado bueno, verifica",
    ],
    icon: "🔍",
  },
];

const studyGuides = [
  {
    title: "Método Feynman con IA",
    steps: [
      "Pide a la IA que te explique un tema de forma simple",
      "Lee y entiende la explicación",
      "Intenta explicar el tema con tus propias palabras",
      "Identifica las partes que no entiendes bien",
      "Pide a la IA que te aclare esas partes específicas",
    ],
    icon: Lightbulb,
  },
  {
    title: "Crear flashcards con IA",
    steps: [
      "Pide: 'Crea 10 flashcards sobre [tema]'",
      "Revisa que las respuestas sean correctas",
      "Practica con las flashcards",
      "Pide más sobre los temas difíciles",
      "Repasa regularmente para memorizar",
    ],
    icon: BookOpen,
  },
  {
    title: "Preparar exámenes",
    steps: [
      "Pide un resumen de los temas del examen",
      "Solicita preguntas de práctica",
      "Responde sin ver las respuestas primero",
      "Verifica tus respuestas con la IA",
      "Pide explicaciones de tus errores",
    ],
    icon: GraduationCap,
  },
];

function HomeworkHelper() {
  const [question, setQuestion] = useState("");

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-primary" />
        Ayudante de Tareas
      </h3>
      <p className="text-muted-foreground mb-6">
        Describe tu tarea o pregunta y obtén una explicación paso a paso.
      </p>

      <div className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ej: ¿Cómo resuelvo una ecuación cuadrática? Explícame paso a paso..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <Button variant="hero" className="w-full">
          <Lightbulb className="w-4 h-4 mr-2" />
          Obtener Ayuda
        </Button>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground text-center">
          La explicación aparecerá aquí.
        </p>
      </div>

      <div className="mt-6 p-4 bg-salvora-orange/10 rounded-lg border border-salvora-orange/20">
        <p className="text-sm text-foreground font-medium mb-1">
          💡 Consejo
        </p>
        <p className="text-sm text-muted-foreground">
          Usa esta herramienta para entender conceptos, no para copiar respuestas. 
          ¡Aprender es más valioso que solo obtener la respuesta!
        </p>
      </div>
    </div>
  );
}

function AILiteracy() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(aiLiteracyTopics[0].title);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Brain className="w-5 h-5 text-salvora-purple" />
        Conceptos Básicos de IA
      </h3>

      {aiLiteracyTopics.map((topic) => (
        <div
          key={topic.title}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          <button
            onClick={() => setExpandedTopic(expandedTopic === topic.title ? null : topic.title)}
            className="w-full p-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{topic.icon}</span>
              <div className="text-left">
                <h4 className="font-bold text-foreground">{topic.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">{topic.summary}</p>
              </div>
            </div>
            <ChevronRight
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform",
                expandedTopic === topic.title && "rotate-90"
              )}
            />
          </button>

          {expandedTopic === topic.title && (
            <div className="px-5 pb-5 animate-fade-in">
              <div className="pl-12">
                <p className="text-muted-foreground mb-4">{topic.summary}</p>
                <ul className="space-y-2">
                  {topic.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-salvora-green mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StudyGuides() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-salvora-green" />
        Guías de Estudio con IA
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studyGuides.map((guide) => (
          <div key={guide.title} className="bg-card rounded-xl border border-border p-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <guide.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-4">{guide.title}</h4>
            <ol className="space-y-3">
              {guide.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

const Estudiante = () => {
  const [activeTab, setActiveTab] = useState("helper");

  return (
    <Layout>
      <div className="bg-gradient-to-b from-salvora-blue-light to-background py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Herramientas para Estudiantes
            </h1>
            <p className="text-lg text-muted-foreground">
              Recursos para ayudarte a aprender mejor y usar la IA de forma responsable.
            </p>
          </div>
        </div>
      </div>

      <div className="salvora-container py-12">
        {/* Tool tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                activeTab === tool.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <tool.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tool.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "helper" && (
          <div className="max-w-2xl">
            <HomeworkHelper />
          </div>
        )}

        {activeTab === "literacy" && <AILiteracy />}

        {activeTab === "guides" && <StudyGuides />}
      </div>
    </Layout>
  );
};

export default Estudiante;
