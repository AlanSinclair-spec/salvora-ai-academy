// Reading Lesson Component
// Displays markdown-style reading content with safe rendering
// Includes Text-to-Speech (Guía Oral) for accessibility

import { Clock, BookOpen } from "lucide-react";
import { getLessonContent } from "@/data/lesson-content";
import { OralGuideBanner } from "@/components/ui/OralGuideButton";
import { parseMarkdownContent } from "@/lib/markdown-parser";
import { CompleteButton, CompleteButtonContainer } from "./CompleteButton";
import type { Lesson } from "@/types/courses";

interface ReadingLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ReadingLesson({ lesson, onComplete, isCompleted }: ReadingLessonProps) {
  const content = getLessonContent(lesson.id);
  const readingContent = content?.content || lesson.content || "";

  return (
    <div className="space-y-6">
      {/* Reading Header */}
      <div className="bg-primary/5 rounded-xl p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Lectura</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Tiempo estimado: {lesson.duration}</span>
          </div>
        </div>
      </div>

      {/* Guía Oral - Text-to-Speech */}
      {readingContent && (
        <OralGuideBanner
          text={readingContent}
          title="Guía Oral"
          description="Escucha esta lectura en voz alta"
        />
      )}

      {/* Content */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        <article className="prose prose-slate max-w-none">
          {parseMarkdownContent(readingContent)}
        </article>
      </div>

      {/* Complete Button */}
      <CompleteButtonContainer>
        <CompleteButton isCompleted={isCompleted} onComplete={onComplete} />
      </CompleteButtonContainer>
    </div>
  );
}