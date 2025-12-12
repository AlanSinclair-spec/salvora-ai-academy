import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  FileText, 
  Lightbulb, 
  Copy, 
  Check,
  BookOpen,
  ClipboardList,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  {
    id: "planner",
    title: "Planificador de Lecciones",
    description: "Crea planes de clase estructurados sobre temas de IA",
    icon: Calendar,
  },
  {
    id: "quiz",
    title: "Generador de Cuestionarios",
    description: "Genera preguntas de evaluación automáticamente",
    icon: ClipboardList,
  },
  {
    id: "prompts",
    title: "Plantillas de Prompts",
    description: "Prompts listos para usar en clase con tus estudiantes",
    icon: MessageSquare,
  },
];

const promptTemplates = [
  {
    title: "Explicar un concepto",
    prompt: "Explica el concepto de [TEMA] de manera simple para estudiantes de [GRADO]. Usa ejemplos de la vida cotidiana en El Salvador. Incluye una analogía fácil de recordar.",
    category: "Explicación",
  },
  {
    title: "Generar ejercicios",
    prompt: "Crea 5 ejercicios prácticos sobre [TEMA] para estudiantes de [GRADO]. Los ejercicios deben ser progresivos en dificultad. Incluye las respuestas correctas.",
    category: "Práctica",
  },
  {
    title: "Crear evaluación",
    prompt: "Diseña una evaluación de 10 preguntas sobre [TEMA]. Incluye: 5 preguntas de opción múltiple, 3 de verdadero/falso, y 2 de respuesta corta. Nivel: [GRADO].",
    category: "Evaluación",
  },
  {
    title: "Resumen de tema",
    prompt: "Resume el tema de [TEMA] en máximo 200 palabras. Destaca los 3 puntos más importantes que los estudiantes deben recordar.",
    category: "Resumen",
  },
  {
    title: "Actividad grupal",
    prompt: "Diseña una actividad grupal de 30 minutos sobre [TEMA] para una clase de [NÚMERO] estudiantes. Incluye instrucciones paso a paso y materiales necesarios.",
    category: "Actividad",
  },
  {
    title: "Caso de estudio",
    prompt: "Crea un caso de estudio sobre cómo la IA se aplica en [SECTOR] en El Salvador. Incluye preguntas de discusión para la clase.",
    category: "Caso de estudio",
  },
];

function PromptCard({ template }: { template: typeof promptTemplates[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
          {template.category}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Copiar prompt"
        >
          {copied ? (
            <Check className="w-4 h-4 text-salvora-green" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <h4 className="font-bold text-foreground mb-2">{template.title}</h4>
      <p className="text-sm text-muted-foreground font-mono bg-muted/50 p-3 rounded-lg">
        {template.prompt}
      </p>
    </div>
  );
}

function LessonPlanner() {
  const [topic, setTopic] = useState("");
  const [grade, setGrade] = useState("");
  const [duration, setDuration] = useState("45");

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        Planificador de Lecciones
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tema de la lección
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ej: Introducción a ChatGPT"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Grado
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Seleccionar</option>
              <option value="7-9">7° - 9° grado</option>
              <option value="bachillerato">Bachillerato</option>
              <option value="universidad">Universidad</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Duración (min)
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="30">30 minutos</option>
              <option value="45">45 minutos</option>
              <option value="60">60 minutos</option>
              <option value="90">90 minutos</option>
            </select>
          </div>
        </div>

        <Button variant="hero" className="w-full mt-4">
          <Lightbulb className="w-4 h-4 mr-2" />
          Generar Plan de Lección
        </Button>
      </div>

      {/* Sample output */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground text-center">
          El plan de lección aparecerá aquí después de generarlo.
        </p>
      </div>
    </div>
  );
}

function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [questionCount, setQuestionCount] = useState("5");

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <ClipboardList className="w-5 h-5 text-salvora-green" />
        Generador de Cuestionarios
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tema del cuestionario
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ej: Machine Learning básico"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Número de preguntas
          </label>
          <select
            value={questionCount}
            onChange={(e) => setQuestionCount(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="5">5 preguntas</option>
            <option value="10">10 preguntas</option>
            <option value="15">15 preguntas</option>
            <option value="20">20 preguntas</option>
          </select>
        </div>

        <Button variant="course" className="w-full mt-4">
          <FileText className="w-4 h-4 mr-2" />
          Generar Cuestionario
        </Button>
      </div>

      {/* Sample output */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground text-center">
          El cuestionario aparecerá aquí después de generarlo.
        </p>
      </div>
    </div>
  );
}

const Maestro = () => {
  const [activeTab, setActiveTab] = useState("prompts");

  return (
    <Layout>
      <div className="bg-gradient-to-b from-salvora-blue-light to-background py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Herramientas para Maestros
            </h1>
            <p className="text-lg text-muted-foreground">
              Recursos y herramientas de IA diseñadas para apoyar tu labor educativa.
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

        {/* Content based on active tab */}
        {activeTab === "prompts" && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Plantillas de Prompts
            </h2>
            <p className="text-muted-foreground mb-8">
              Copia estos prompts y personalízalos reemplazando los valores entre corchetes [].
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptTemplates.map((template) => (
                <PromptCard key={template.title} template={template} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "planner" && (
          <div className="max-w-2xl">
            <LessonPlanner />
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="max-w-2xl">
            <QuizGenerator />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Maestro;
