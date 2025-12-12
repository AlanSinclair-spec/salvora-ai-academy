// Lesson Navigation Component
// Previous/Next navigation and progress indicator

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import type { Lesson } from "@/types/courses";

interface LessonNavigationProps {
  courseId: string;
  prevLesson?: { lesson: Lesson; unitId: string };
  nextLesson?: { lesson: Lesson; unitId: string };
  currentProgress?: { completed: number; total: number };
}

export function LessonNavigation({
  courseId,
  prevLesson,
  nextLesson,
  currentProgress,
}: LessonNavigationProps) {
  return (
    <div className="border-t border-border pt-6 mt-8">
      {/* Progress Bar */}
      {currentProgress && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Progreso del curso</span>
            <span>
              {currentProgress.completed} de {currentProgress.total} lecciones
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-salvora-green transition-all duration-500"
              style={{
                width: `${
                  currentProgress.total > 0
                    ? (currentProgress.completed / currentProgress.total) * 100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        {/* Previous */}
        <div className="flex-1">
          {prevLesson ? (
            <Link to={`/leccion/${courseId}/${prevLesson.lesson.id}`}>
              <Button variant="outline" className="w-full justify-start">
                <ChevronLeft className="w-4 h-4 mr-2" />
                <div className="text-left truncate">
                  <div className="text-xs text-muted-foreground">Anterior</div>
                  <div className="truncate">{prevLesson.lesson.title}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <Link to={`/cursos`}>
              <Button variant="outline" className="w-full justify-start">
                <Home className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Volver a</div>
                  <div>Todos los cursos</div>
                </div>
              </Button>
            </Link>
          )}
        </div>

        {/* Next */}
        <div className="flex-1">
          {nextLesson ? (
            <Link to={`/leccion/${courseId}/${nextLesson.lesson.id}`}>
              <Button variant="hero" className="w-full justify-end">
                <div className="text-right truncate">
                  <div className="text-xs opacity-80">Siguiente</div>
                  <div className="truncate">{nextLesson.lesson.title}</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Link to={`/cursos`}>
              <Button variant="hero" className="w-full justify-end">
                <div className="text-right">
                  <div className="text-xs opacity-80">Curso completado</div>
                  <div>Ver mas cursos</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
