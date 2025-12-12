import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronRight, 
  Play, 
  FileText, 
  CheckCircle2,
  Brain,
  Sparkles,
  Bot,
  Code,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz";
  duration: string;
  completed?: boolean;
  locked?: boolean;
}

interface Unit {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: "blue" | "green" | "orange" | "purple";
  units: Unit[];
}

const courses: Course[] = [
  {
    id: "introduccion-ia",
    title: "Introducción a la IA",
    description: "Conceptos fundamentales de la Inteligencia Artificial",
    icon: Brain,
    color: "blue",
    units: [
      {
        id: "unit-1",
        title: "Unidad 1: ¿Qué es la IA?",
        lessons: [
          { id: "1-1", title: "Bienvenida al curso", type: "video", duration: "5 min", completed: true },
          { id: "1-2", title: "Definición de Inteligencia Artificial", type: "video", duration: "12 min", completed: true },
          { id: "1-3", title: "Historia de la IA", type: "reading", duration: "10 min" },
          { id: "1-4", title: "Cuestionario: Fundamentos", type: "quiz", duration: "15 min" },
        ],
      },
      {
        id: "unit-2",
        title: "Unidad 2: Tipos de IA",
        lessons: [
          { id: "2-1", title: "IA Estrecha vs IA General", type: "video", duration: "15 min" },
          { id: "2-2", title: "Machine Learning explicado", type: "video", duration: "18 min" },
          { id: "2-3", title: "Deep Learning básico", type: "reading", duration: "12 min" },
          { id: "2-4", title: "Práctica: Identificar tipos de IA", type: "quiz", duration: "20 min" },
        ],
      },
      {
        id: "unit-3",
        title: "Unidad 3: IA en la vida diaria",
        lessons: [
          { id: "3-1", title: "IA en tu celular", type: "video", duration: "10 min", locked: true },
          { id: "3-2", title: "IA en redes sociales", type: "video", duration: "12 min", locked: true },
          { id: "3-3", title: "IA en educación", type: "reading", duration: "15 min", locked: true },
        ],
      },
    ],
  },
  {
    id: "ia-generativa",
    title: "IA Generativa",
    description: "Domina herramientas como ChatGPT y más",
    icon: Sparkles,
    color: "purple",
    units: [
      {
        id: "gen-1",
        title: "Unidad 1: Fundamentos de IA Generativa",
        lessons: [
          { id: "g1-1", title: "¿Qué es la IA Generativa?", type: "video", duration: "10 min" },
          { id: "g1-2", title: "Modelos de lenguaje", type: "video", duration: "15 min" },
          { id: "g1-3", title: "Limitaciones y sesgos", type: "reading", duration: "12 min" },
        ],
      },
      {
        id: "gen-2",
        title: "Unidad 2: Usando ChatGPT",
        lessons: [
          { id: "g2-1", title: "Primeros pasos con ChatGPT", type: "video", duration: "12 min" },
          { id: "g2-2", title: "Casos de uso educativo", type: "video", duration: "18 min" },
          { id: "g2-3", title: "Práctica guiada", type: "quiz", duration: "25 min" },
        ],
      },
    ],
  },
  {
    id: "prompting",
    title: "Prompting Efectivo",
    description: "Aprende a comunicarte mejor con la IA",
    icon: Bot,
    color: "green",
    units: [
      {
        id: "prompt-1",
        title: "Unidad 1: Anatomía de un prompt",
        lessons: [
          { id: "p1-1", title: "Estructura básica de prompts", type: "video", duration: "8 min" },
          { id: "p1-2", title: "Contexto y especificidad", type: "video", duration: "12 min" },
          { id: "p1-3", title: "Ejercicios de práctica", type: "quiz", duration: "20 min" },
        ],
      },
    ],
  },
  {
    id: "ia-programadores",
    title: "IA para Programadores",
    description: "Integra IA en tu desarrollo",
    icon: Code,
    color: "orange",
    units: [
      {
        id: "dev-1",
        title: "Unidad 1: Herramientas de IA para código",
        lessons: [
          { id: "d1-1", title: "GitHub Copilot y alternativas", type: "video", duration: "15 min" },
          { id: "d1-2", title: "Depuración con IA", type: "video", duration: "12 min" },
          { id: "d1-3", title: "Documentación automática", type: "reading", duration: "10 min" },
        ],
      },
    ],
  },
];

const colorStyles = {
  blue: "border-primary/20 bg-primary/5",
  green: "border-salvora-green/20 bg-salvora-green/5",
  orange: "border-salvora-orange/20 bg-salvora-orange/5",
  purple: "border-salvora-purple/20 bg-salvora-purple/5",
};

const iconStyles = {
  blue: "bg-primary text-primary-foreground",
  green: "bg-salvora-green text-primary-foreground",
  orange: "bg-salvora-orange text-primary-foreground",
  purple: "bg-salvora-purple text-primary-foreground",
};

function LessonIcon({ type, completed, locked }: { type: string; completed?: boolean; locked?: boolean }) {
  if (locked) return <Lock className="w-4 h-4 text-muted-foreground" />;
  if (completed) return <CheckCircle2 className="w-4 h-4 text-salvora-green" />;
  if (type === "video") return <Play className="w-4 h-4 text-primary" />;
  if (type === "reading") return <FileText className="w-4 h-4 text-salvora-orange" />;
  return <FileText className="w-4 h-4 text-salvora-purple" />;
}

function CourseSection({ course }: { course: Course }) {
  const [expandedUnits, setExpandedUnits] = useState<string[]>([course.units[0]?.id || ""]);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) =>
      prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId]
    );
  };

  const Icon = course.icon;

  return (
    <div className={cn("rounded-xl border-2 overflow-hidden", colorStyles[course.color])}>
      {/* Course Header */}
      <div className="p-6 bg-background/50">
        <div className="flex items-start gap-4">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", iconStyles[course.color])}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-1">{course.title}</h2>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="divide-y divide-border">
        {course.units.map((unit) => {
          const isExpanded = expandedUnits.includes(unit.id);
          const completedCount = unit.lessons.filter((l) => l.completed).length;

          return (
            <div key={unit.id}>
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="font-semibold text-foreground text-left">{unit.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {completedCount}/{unit.lessons.length} completadas
                </span>
              </button>

              {isExpanded && (
                <div className="bg-background/30 animate-accordion-down">
                  {unit.lessons.map((lesson, index) => (
                    <Link
                      key={lesson.id}
                      to={lesson.locked ? "#" : `/leccion/${course.id}/${lesson.id}`}
                      className={cn(
                        "flex items-center gap-4 px-6 py-3 pl-14 hover:bg-muted/30 transition-colors border-t border-border/50",
                        lesson.locked && "opacity-50 cursor-not-allowed"
                      )}
                      onClick={(e) => lesson.locked && e.preventDefault()}
                    >
                      <LessonIcon type={lesson.type} completed={lesson.completed} locked={lesson.locked} />
                      <span className={cn("flex-1 text-sm", lesson.completed ? "text-muted-foreground" : "text-foreground")}>
                        {lesson.title}
                      </span>
                      <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Cursos = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-salvora-blue-light to-background py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Cursos de Inteligencia Artificial
            </h1>
            <p className="text-lg text-muted-foreground">
              Aprende a tu ritmo con nuestros cursos estructurados. Cada curso incluye videos, lecturas y ejercicios prácticos.
            </p>
          </div>
        </div>
      </div>

      <div className="salvora-container py-12">
        <div className="space-y-8">
          {courses.map((course) => (
            <CourseSection key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cursos;
