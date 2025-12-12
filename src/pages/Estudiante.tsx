// Student Tools Page
// AI-powered study tools with safety features and course modules

import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  FileText,
  Calculator,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Brain,
  Globe,
  Play,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeChat, TextSimplifier, MathHelper } from "@/components/tools";
import { courses } from "@/data/courses";
import { useProgress } from "@/contexts/ProgressContext";

const tools = [
  {
    id: "chat",
    title: "Ayudante",
    description: "Chat para resolver dudas de tareas",
    icon: MessageSquare,
  },
  {
    id: "simplifier",
    title: "Simplificador",
    description: "Simplifica textos difíciles",
    icon: FileText,
  },
  {
    id: "math",
    title: "Matemáticas",
    description: "Resuelve problemas paso a paso",
    icon: Calculator,
  },
  {
    id: "modules",
    title: "Mis Cursos",
    description: "Módulos de estudio sobre IA",
    icon: BookOpen,
  },
];

// Student-focused courses
const studentCourses = courses.filter(
  course => course.id === "introduccion-ia" || course.id === "ia-estudiantes" || course.id === "ia-vida-real"
);

const courseIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Brain": Brain,
  "BookOpen": BookOpen,
  "Globe": Globe,
  "GraduationCap": GraduationCap,
};

const courseColors: Record<string, string> = {
  blue: "bg-salvora-blue text-white",
  purple: "bg-salvora-purple text-white",
  teal: "bg-teal-500 text-white",
  green: "bg-salvora-green text-white",
};

function StudyModules() {
  const { progress, getCompletedLessonsCount } = useProgress();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Módulos de Estudio
        </h3>
        <p className="text-muted-foreground">
          Aprende a usar la IA de forma responsable y efectiva para tus estudios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentCourses.map((course) => {
          const IconComponent = courseIcons[course.icon] || BookOpen;
          const totalLessons = course.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
          const completedLessons = getCompletedLessonsCount(course.id);
          const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
          const firstLesson = course.units[0]?.lessons[0];

          return (
            <div
              key={course.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className={cn("p-4", courseColors[course.color])}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{course.title}</h4>
                    <p className="text-xs opacity-80">{totalLessons} lecciones</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>

                {/* Progress */}
                {completedLessons > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium text-foreground">{progressPercent}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all", courseColors[course.color])}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Units Preview */}
                <div className="space-y-2">
                  {course.units.slice(0, 3).map((unit) => (
                    <div key={unit.id} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-muted-foreground/50" />
                      <span className="text-muted-foreground line-clamp-1">{unit.title}</span>
                    </div>
                  ))}
                  {course.units.length > 3 && (
                    <p className="text-xs text-muted-foreground pl-6">
                      +{course.units.length - 3} unidades más
                    </p>
                  )}
                </div>

                {/* Action */}
                <Link to={firstLesson ? `/leccion/${course.id}/${course.units[0].id}/${firstLesson.id}` : `/cursos`}>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    {completedLessons > 0 ? "Continuar" : "Comenzar"}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* All Courses Link */}
      <div className="text-center pt-4">
        <Link to="/cursos">
          <Button variant="link" className="text-primary">
            Ver todos los cursos
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

const Estudiante = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <Layout>
      <div className="bg-gradient-to-b from-salvora-purple/10 to-background py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-salvora-purple mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Para Estudiantes</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Herramientas de Estudio
            </h1>
            <p className="text-lg text-muted-foreground">
              Usa la IA para aprender mejor. Estas herramientas te ayudan a entender,
              no a copiar. ¡Recuerda: aprender es más valioso que solo obtener respuestas!
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
                  ? "bg-salvora-purple text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <tool.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tool.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          {activeTab === "chat" && <SafeChat />}
          {activeTab === "simplifier" && <TextSimplifier />}
          {activeTab === "math" && <MathHelper />}
          {activeTab === "modules" && <StudyModules />}
        </div>
      </div>
    </Layout>
  );
};

export default Estudiante;
