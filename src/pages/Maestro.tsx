import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Calendar,
  FileText,
  Lightbulb,
  Copy,
  Check,
  ClipboardList,
  MessageSquare,
  TableIcon,
  Loader2,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLessonPlanner, useQuizGenerator, useRubricGenerator } from "@/hooks/useAITools";
import { useSettings } from "@/contexts/SettingsContext";
import { isDemoMode, demoLessonPlanner, demoQuizGenerator, demoRubricGenerator } from "@/data/demo-presets";
import type { LessonPlanResponse, QuizGeneratorResponse, RubricResponse } from "@/types/ai-tools";
import { QuickPromptPanel } from "@/components/maestro/QuickPromptPanel";

const tools = [
  {
    id: "planner",
    title: "Planificador",
    description: "Crea planes de clase estructurados",
    icon: Calendar,
  },
  {
    id: "quiz",
    title: "Cuestionarios",
    description: "Genera preguntas de evaluacion",
    icon: ClipboardList,
  },
  {
    id: "rubric",
    title: "Rubricas",
    description: "Crea rubricas de evaluacion",
    icon: TableIcon,
  },
  {
    id: "prompts",
    title: "Prompts",
    description: "Plantillas listas para usar",
    icon: MessageSquare,
  },
];

const promptTemplates = [
  {
    title: "Explicar un concepto",
    prompt: "Explica el concepto de [TEMA] de manera simple para estudiantes de [GRADO]. Usa ejemplos de la vida cotidiana en El Salvador. Incluye una analogia facil de recordar.",
    category: "Explicacion",
  },
  {
    title: "Generar ejercicios",
    prompt: "Crea 5 ejercicios practicos sobre [TEMA] para estudiantes de [GRADO]. Los ejercicios deben ser progresivos en dificultad. Incluye las respuestas correctas.",
    category: "Practica",
  },
  {
    title: "Crear evaluacion",
    prompt: "Disena una evaluacion de 10 preguntas sobre [TEMA]. Incluye: 5 preguntas de opcion multiple, 3 de verdadero/falso, y 2 de respuesta corta. Nivel: [GRADO].",
    category: "Evaluacion",
  },
  {
    title: "Resumen de tema",
    prompt: "Resume el tema de [TEMA] en maximo 200 palabras. Destaca los 3 puntos mas importantes que los estudiantes deben recordar.",
    category: "Resumen",
  },
  {
    title: "Actividad grupal",
    prompt: "Disena una actividad grupal de 30 minutos sobre [TEMA] para una clase de [NUMERO] estudiantes. Incluye instrucciones paso a paso y materiales necesarios.",
    category: "Actividad",
  },
  {
    title: "Caso de estudio",
    prompt: "Crea un caso de estudio sobre como la IA se aplica en [SECTOR] en El Salvador. Incluye preguntas de discusion para la clase.",
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
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [duration, setDuration] = useState("45");

  const { mutate, isPending, data, reset } = useLessonPlanner();

  // Pre-fill form in demo mode
  useEffect(() => {
    if (isDemoMode()) {
      setTopic(demoLessonPlanner.topic);
      setSubject(demoLessonPlanner.subject);
      setGrade(demoLessonPlanner.grade);
      setDuration(String(demoLessonPlanner.duration));
    }
  }, []);

  const handleGenerate = () => {
    if (!topic || !grade) return;
    mutate({
      topic,
      subject: subject || topic,
      grade,
      duration: parseInt(duration),
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Planificador de Lecciones
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tema de la leccion *
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ej: Introduccion a la fotosintesis"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Materia
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ej: Ciencias Naturales"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Grado *
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Seleccionar</option>
                <option value="1-3">1 - 3 grado</option>
                <option value="4-6">4 - 6 grado</option>
                <option value="7-9">7 - 9 grado</option>
                <option value="bachillerato">Bachillerato</option>
                <option value="universidad">Universidad</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Duracion (min)
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

          <Button
            variant="hero"
            className="w-full mt-4"
            onClick={handleGenerate}
            disabled={isPending || !topic || !grade}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <Lightbulb className="w-4 h-4 mr-2" />
                Generar Plan de Leccion
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results */}
      {data && <LessonPlanResult data={data} onReset={reset} />}
    </div>
  );
}

function LessonPlanResult({ data, onReset }: { data: LessonPlanResponse; onReset: () => void }) {
  return (
    <div className="bg-card rounded-xl border border-salvora-green/50 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-foreground">Plan Generado</h4>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Nuevo plan
        </Button>
      </div>

      {/* Objectives */}
      <div>
        <h5 className="font-semibold text-foreground mb-2">Objetivos de Aprendizaje</h5>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {data.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div>
        <h5 className="font-semibold text-foreground mb-2">Actividades</h5>
        <div className="space-y-3">
          {data.activities.map((activity, i) => (
            <div key={i} className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-foreground">{activity.name}</span>
                <span className="text-xs text-muted-foreground">{activity.duration} min</span>
              </div>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div>
        <h5 className="font-semibold text-foreground mb-2">Materiales</h5>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {data.materials.map((mat, i) => (
            <li key={i}>{mat}</li>
          ))}
        </ul>
      </div>

      {/* Evaluation */}
      <div>
        <h5 className="font-semibold text-foreground mb-2">Evaluacion</h5>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {data.evaluation.map((eval_, i) => (
            <li key={i}>{eval_}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function QuizGenerator() {
  const [text, setText] = useState("");
  const [questionCount, setQuestionCount] = useState("5");

  const { mutate, isPending, data, reset } = useQuizGenerator();

  // Pre-fill form in demo mode
  useEffect(() => {
    if (isDemoMode()) {
      setText(demoQuizGenerator.text);
      setQuestionCount(String(demoQuizGenerator.questionCount));
    }
  }, []);

  const handleGenerate = () => {
    if (!text) return;
    mutate({
      text,
      questionCount: parseInt(questionCount),
      types: ["multiple_choice", "true_false", "short_answer"],
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-salvora-green" />
          Generador de Cuestionarios
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Texto o tema para generar preguntas *
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Pega aqui el texto del que quieres generar preguntas, o escribe el tema..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Numero de preguntas
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

          <Button
            variant="course"
            className="w-full mt-4"
            onClick={handleGenerate}
            disabled={isPending || !text}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generar Cuestionario
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results */}
      {data && <QuizResult data={data} onReset={reset} />}
    </div>
  );
}

function QuizResult({ data, onReset }: { data: QuizGeneratorResponse; onReset: () => void }) {
  return (
    <div className="bg-card rounded-xl border border-salvora-green/50 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-foreground">Cuestionario Generado</h4>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Nuevo cuestionario
        </Button>
      </div>

      {data.questions.map((question, i) => (
        <div key={question.id} className="bg-muted/50 rounded-lg p-4">
          <p className="font-medium text-foreground mb-2">
            {i + 1}. {question.question}
          </p>
          {question.options && (
            <ul className="space-y-1 ml-4">
              {question.options.map((opt, j) => (
                <li key={j} className="text-sm text-muted-foreground">
                  {String.fromCharCode(65 + j)}) {opt}
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-salvora-green mt-2">
            Respuesta: {typeof question.correctAnswer === 'number'
              ? String.fromCharCode(65 + question.correctAnswer)
              : question.correctAnswer}
          </p>
        </div>
      ))}
    </div>
  );
}

function RubricBuilder() {
  const [subject, setSubject] = useState("");
  const [criteria, setCriteria] = useState(["", "", "", ""]);
  const [levels, setLevels] = useState("4");

  const { mutate, isPending, data, reset } = useRubricGenerator();

  // Pre-fill form in demo mode
  useEffect(() => {
    if (isDemoMode()) {
      setSubject(demoRubricGenerator.subject);
      setCriteria(demoRubricGenerator.criteria);
      setLevels(String(demoRubricGenerator.levels));
    }
  }, []);

  const updateCriterion = (index: number, value: string) => {
    const newCriteria = [...criteria];
    newCriteria[index] = value;
    setCriteria(newCriteria);
  };

  const handleGenerate = () => {
    const validCriteria = criteria.filter(c => c.trim());
    if (!subject || validCriteria.length === 0) return;

    mutate({
      subject,
      criteria: validCriteria,
      levels: parseInt(levels),
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <TableIcon className="w-5 h-5 text-salvora-purple" />
          Constructor de Rubricas
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nombre de la actividad/proyecto *
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ej: Presentacion oral sobre el ciclo del agua"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Criterios a evaluar
            </label>
            <div className="space-y-2">
              {criteria.map((criterion, i) => (
                <input
                  key={i}
                  type="text"
                  value={criterion}
                  onChange={(e) => updateCriterion(i, e.target.value)}
                  placeholder={`Criterio ${i + 1} (ej: Contenido, Claridad, Creatividad...)`}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Niveles de desempeno
            </label>
            <select
              value={levels}
              onChange={(e) => setLevels(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="3">3 niveles</option>
              <option value="4">4 niveles</option>
              <option value="5">5 niveles</option>
            </select>
          </div>

          <Button
            variant="hero"
            className="w-full mt-4"
            onClick={handleGenerate}
            disabled={isPending || !subject || criteria.filter(c => c.trim()).length === 0}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <TableIcon className="w-4 h-4 mr-2" />
                Generar Rubrica
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results */}
      {data && <RubricResult data={data} onReset={reset} />}
    </div>
  );
}

function RubricResult({ data, onReset }: { data: RubricResponse; onReset: () => void }) {
  return (
    <div className="bg-card rounded-xl border border-salvora-green/50 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-foreground">{data.title}</h4>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Nueva rubrica
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-2 font-semibold">Criterio</th>
              {data.criteria[0]?.levels.map((level, i) => (
                <th key={i} className="text-center p-2 font-semibold">
                  {level.name} ({level.points}pts)
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.criteria.map((criterion, i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="p-2 font-medium">{criterion.criterion}</td>
                {criterion.levels.map((level, j) => (
                  <td key={j} className="p-2 text-muted-foreground text-xs">
                    {level.description}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground">
        Puntaje maximo: {data.maxPoints} puntos
      </p>
    </div>
  );
}

const Maestro = () => {
  const [activeTab, setActiveTab] = useState("planner");
  const { settings, updateSettings } = useSettings();

  return (
    <Layout>
      <div className="py-12">
        <div className="salvora-container">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Herramientas para Maestros
              </h1>
              <p className="text-lg text-muted-foreground">
                Recursos y herramientas de IA disenadas para apoyar tu labor educativa. Genera planes de leccion, cuestionarios y mas.
              </p>
            </div>

            {/* Classroom Mode Toggle */}
            <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <Shield className={cn(
                "w-5 h-5",
                settings.classroomMode ? "text-salvora-green" : "text-muted-foreground"
              )} />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Modo Salon</p>
                <p className="text-xs text-muted-foreground">Filtros adicionales activos</p>
              </div>
              <Switch
                checked={settings.classroomMode}
                onCheckedChange={(checked) => updateSettings({ classroomMode: checked })}
              />
            </div>
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
        <div className="max-w-3xl">
          {activeTab === "planner" && <LessonPlanner />}
          {activeTab === "quiz" && <QuizGenerator />}
          {activeTab === "rubric" && <RubricBuilder />}
          {activeTab === "prompts" && (
            <div className="space-y-8">
              {/* Quick Prompt Panel - Modo Aula */}
              <QuickPromptPanel />

              {/* Additional Prompt Templates */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Mas Plantillas de Prompts
                </h2>
                <p className="text-muted-foreground mb-8">
                  Copia estos prompts y personalízalos reemplazando los valores entre corchetes [].
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {promptTemplates.map((template) => (
                    <PromptCard key={template.title} template={template} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Maestro;
