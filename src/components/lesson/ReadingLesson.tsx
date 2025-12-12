// Reading Lesson Component
// Displays markdown-style reading content

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, BookOpen } from "lucide-react";
import { getLessonContent } from "@/data/lesson-content";
import type { Lesson } from "@/types/courses";

interface ReadingLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

// Simple markdown-like parser
function parseContent(content: string) {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let inList = false;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Headers
    if (trimmed.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={index} className="text-2xl font-bold text-foreground mb-4 mt-6">
          {trimmed.slice(2)}
        </h1>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={index} className="text-xl font-bold text-foreground mb-3 mt-5">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={index} className="text-lg font-semibold text-foreground mb-2 mt-4">
          {trimmed.slice(4)}
        </h3>
      );
    }
    // List items
    else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      listItems.push(trimmed.slice(2));
    }
    // Numbered lists
    else if (/^\d+\.\s/.test(trimmed)) {
      inList = true;
      listItems.push(trimmed.replace(/^\d+\.\s/, ""));
    }
    // Horizontal rule
    else if (trimmed === "---") {
      flushList();
      elements.push(<hr key={index} className="my-6 border-border" />);
    }
    // Bold text (simple)
    else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      flushList();
      elements.push(
        <p key={index} className="font-semibold text-foreground mb-2">
          {trimmed.slice(2, -2)}
        </p>
      );
    }
    // Regular paragraph
    else if (trimmed.length > 0) {
      flushList();
      // Process inline formatting
      const processed = trimmed
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");

      elements.push(
        <p
          key={index}
          className="text-muted-foreground mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }
    // Empty line - might end a list
    else if (inList) {
      flushList();
    }
  });

  // Flush any remaining list items
  flushList();

  return elements;
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

      {/* Content */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        <article className="prose prose-slate max-w-none">
          {parseContent(readingContent)}
        </article>
      </div>

      {/* Complete Button */}
      <div className="flex justify-end">
        <Button
          onClick={onComplete}
          disabled={isCompleted}
          variant={isCompleted ? "outline" : "hero"}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Completado
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Marcar como completado
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
