// Reading Lesson Component
// Displays markdown-style reading content with safe rendering
// Includes Text-to-Speech (Guía Oral) for accessibility

import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, BookOpen } from "lucide-react";
import { getLessonContent } from "@/data/lesson-content";
import { OralGuideBanner } from "@/components/ui/OralGuideButton";
import type { Lesson } from "@/types/courses";
import { Fragment, ReactNode } from "react";

interface ReadingLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

/**
 * Safely parses inline markdown formatting (bold, italic) into React elements.
 * SECURITY: This function does NOT use dangerouslySetInnerHTML - all content is escaped by React.
 */
function parseInlineFormatting(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Match bold first (** **) since it's more specific
    const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)$/s);
    if (boldMatch) {
      const [, before, boldText, after] = boldMatch;
      if (before) result.push(<Fragment key={key++}>{before}</Fragment>);
      result.push(<strong key={key++}>{boldText}</strong>);
      remaining = after;
      continue;
    }

    // Match italic (* *)
    const italicMatch = remaining.match(/^(.*?)\*(.+?)\*(.*)$/s);
    if (italicMatch) {
      const [, before, italicText, after] = italicMatch;
      if (before) result.push(<Fragment key={key++}>{before}</Fragment>);
      result.push(<em key={key++}>{italicText}</em>);
      remaining = after;
      continue;
    }

    // No more formatting, add remaining text
    result.push(<Fragment key={key++}>{remaining}</Fragment>);
    break;
  }

  return result;
}

// Simple markdown-like parser - SAFE (no dangerouslySetInnerHTML)
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
            <li key={i}>{parseInlineFormatting(item)}</li>
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
    // Regular paragraph - SAFE rendering with React elements
    else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
          {parseInlineFormatting(trimmed)}
        </p>
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