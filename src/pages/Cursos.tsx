import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  ChevronDown,
  ChevronRight,
  Play,
  FileText,
  CheckCircle2,
  Lock,
  Lightbulb,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";
import { getIconByName } from "@/lib/icons";
import { useProgress } from "@/contexts/ProgressContext";
import type { Course, Lesson } from "@/types/courses";

const colorStyles: Record<string, string> = {
  blue: "border-primary/20 bg-primary/5",
  green: "border-salvora-green/20 bg-salvora-green/5",
  orange: "border-salvora-orange/20 bg-salvora-orange/5",
  purple: "border-salvora-purple/20 bg-salvora-purple/5",
  teal: "border-teal-500/20 bg-teal-500/5",
};

const iconStyles: Record<string, string> = {
  blue: "bg-primary text-primary-foreground",
  green: "bg-salvora-green text-primary-foreground",
  orange: "bg-salvora-orange text-primary-foreground",
  purple: "bg-salvora-purple text-primary-foreground",
  teal: "bg-teal-500 text-primary-foreground",
};

const progressBarColors: Record<string, string> = {
  blue: "bg-primary",
  green: "bg-salvora-green",
  orange: "bg-salvora-orange",
  purple: "bg-salvora-purple",
  teal: "bg-teal-500",
};

function LessonIcon({
  type,
  completed,
  locked
}: {
  type: Lesson["type"];
  completed?: boolean;
  locked?: boolean
}) {
  if (locked) return <Lock className="w-4 h-4 text-muted-foreground" />;
  if (completed) return <CheckCircle2 className="w-4 h-4 text-salvora-green" />;
  if (type === "video") return <Play className="w-4 h-4 text-primary" />;
  if (type === "reading") return <FileText className="w-4 h-4 text-salvora-orange" />;
  if (type === "quiz") return <HelpCircle className="w-4 h-4 text-salvora-purple" />;
  if (type === "practice") return <Lightbulb className="w-4 h-4 text-salvora-green" />;
  return <FileText className="w-4 h-4 text-salvora-purple" />;
}

function CourseSection({ course }: { course: Course }) {
  const [expandedUnits, setExpandedUnits] = useState<string[]>([course.units[0]?.id || ""]);
  const { isLessonComplete, getCourseProgress } = useProgress();

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) =>
      prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId]
    );
  };

  const Icon = getIconByName(course.icon);
  const courseProgress = getCourseProgress(course.id);

  return (
    <div className={cn("rounded-xl border-2 overflow-hidden", colorStyles[course.color])}>
      {/* Course Header */}
      <div className="p-6 bg-background/50">
        <div className="flex items-start gap-4">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", iconStyles[course.color])}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">{course.title}</h2>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>
              {courseProgress.total > 0 && (
                <div className="text-right ml-4">
                  <div className="text-sm font-medium text-foreground">
                    {courseProgress.percentage}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {courseProgress.completed}/{courseProgress.total}
                  </div>
                </div>
              )}
            </div>
            {/* Course Progress Bar */}
            {courseProgress.total > 0 && (
              <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full transition-all duration-700 ease-out shimmer",
                    progressBarColors[course.color]
                  )}
                  style={{ width: `${courseProgress.percentage}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="divide-y divide-border">
        {course.units.map((unit) => {
          const isExpanded = expandedUnits.includes(unit.id);
          const completedCount = unit.lessons.filter((l) =>
            isLessonComplete(course.id, l.id)
          ).length;

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
                  {unit.lessons.map((lesson) => {
                    const completed = isLessonComplete(course.id, lesson.id);

                    return (
                      <Link
                        key={lesson.id}
                        to={`/leccion/${course.id}/${unit.id}/${lesson.id}`}
                        className="flex items-center gap-4 px-6 py-3 pl-14 hover:bg-muted/30 transition-colors border-t border-border/50"
                      >
                        <LessonIcon type={lesson.type} completed={completed} />
                        <span className={cn(
                          "flex-1 text-sm",
                          completed ? "text-muted-foreground" : "text-foreground"
                        )}>
                          {lesson.title}
                        </span>
                        <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      </Link>
                    );
                  })}
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
  const { getOverallProgress } = useProgress();
  const overallProgress = getOverallProgress();

  return (
    <Layout>
      <div className="py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Cursos de Inteligencia Artificial
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Aprende a tu ritmo con nuestros cursos estructurados. Cada curso incluye videos, lecturas y ejercicios practicos alineados con la alianza xAI-El Salvador.
            </p>

            {/* Overall Progress */}
            {overallProgress.total > 0 && (
              <div className="bg-card/50 rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Tu progreso total</span>
                  <span className="text-sm text-muted-foreground">
                    {overallProgress.completed} de {overallProgress.total} lecciones completadas
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-salvora-green transition-all duration-700 ease-out shimmer"
                    style={{ width: `${overallProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="salvora-container py-12">
        <div className="space-y-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <CourseSection course={course} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cursos;
