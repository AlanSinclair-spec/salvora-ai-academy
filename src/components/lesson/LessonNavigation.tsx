// Lesson Navigation Component
// Previous/Next navigation and progress indicator

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, Home, Lock, CheckCircle } from "lucide-react";
import type { Lesson } from "@/types/courses";

interface LessonNavigationProps {
  courseId: string;
  prevLesson?: { lesson: Lesson; unitId: string };
  nextLesson?: { lesson: Lesson; unitId: string };
  currentProgress?: { completed: number; total: number };
  canProceed?: boolean;
  isCompleted?: boolean;
}

export function LessonNavigation({
  courseId,
  prevLesson,
  nextLesson,
  currentProgress,
  canProceed = true,
  isCompleted = false,
}: LessonNavigationProps) {
  return (
    <div className="border-t border-border pt-6 mt-8">
      {/* Completion Indicator */}
      {isCompleted && (
        <div className="flex items-center justify-center gap-2 text-salvora-green mb-4">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Lección completada</span>
        </div>
      )}

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
            <Link to={`/leccion/${courseId}/${prevLesson.unitId}/${prevLesson.lesson.id}`}>
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
            canProceed ? (
              <Link to={`/leccion/${courseId}/${nextLesson.unitId}/${nextLesson.lesson.id}`}>
                <Button variant="hero" className="w-full justify-end">
                  <div className="text-right truncate">
                    <div className="text-xs opacity-80">Siguiente</div>
                    <div className="truncate">{nextLesson.lesson.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="w-full">
                      <Button
                        variant="hero"
                        className="w-full justify-end opacity-50 cursor-not-allowed"
                        disabled
                        aria-describedby="next-lesson-tooltip"
                      >
                        <div className="text-right truncate">
                          <div className="text-xs opacity-80">Siguiente</div>
                          <div className="truncate">{nextLesson.lesson.title}</div>
                        </div>
                        <Lock className="w-4 h-4 ml-2" />
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent id="next-lesson-tooltip" side="top">
                    <p>Completa el video y la práctica para continuar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          ) : (
            <Link to={`/cursos`}>
              <Button variant="hero" className="w-full justify-end">
                <div className="text-right">
                  <div className="text-xs opacity-80">Curso completado</div>
                  <div>Ver más cursos</div>
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
