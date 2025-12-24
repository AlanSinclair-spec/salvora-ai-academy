/**
 * Safe Markdown Parser for Lesson Content
 * SECURITY: All content is rendered through React elements, NOT dangerouslySetInnerHTML.
 * This ensures all text is properly escaped by React's rendering engine.
 */

import { Fragment, ReactNode } from "react";

export interface ParseOptions {
  /** Enable highlight brackets [text] for inline highlights */
  enableHighlights?: boolean;
  /** Custom class for list items */
  listClassName?: string;
  /** Custom class for paragraphs */
  paragraphClassName?: string;
}

const defaultOptions: ParseOptions = {
  enableHighlights: false,
  listClassName: "list-disc list-inside space-y-2 mb-4 text-muted-foreground",
  paragraphClassName: "text-muted-foreground mb-4 leading-relaxed",
};

/**
 * Safely parses inline markdown formatting (bold, italic, highlights) into React elements.
 * SECURITY: This function does NOT use dangerouslySetInnerHTML - all content is escaped by React.
 */
export function parseInlineFormatting(
  text: string,
  options: ParseOptions = {}
): ReactNode[] {
  const { enableHighlights = false } = options;
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

    // Match highlight brackets [text] (optional)
    if (enableHighlights) {
      const highlightMatch = remaining.match(/^(.*?)\[(.+?)\](.*)$/s);
      if (highlightMatch) {
        const [, before, highlightText, after] = highlightMatch;
        if (before) result.push(<Fragment key={key++}>{before}</Fragment>);
        result.push(
          <span
            key={key++}
            className="bg-primary/10 text-primary px-1 rounded"
          >
            {highlightText}
          </span>
        );
        remaining = after;
        continue;
      }
    }

    // No more formatting, add remaining text
    result.push(<Fragment key={key++}>{remaining}</Fragment>);
    break;
  }

  return result;
}

/**
 * Parses markdown-style content into React elements.
 * Supports headers, lists, horizontal rules, and inline formatting.
 * SECURITY: Safe rendering - no dangerouslySetInnerHTML used.
 */
export function parseMarkdownContent(
  content: string,
  options: ParseOptions = {}
): JSX.Element[] {
  const opts = { ...defaultOptions, ...options };
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let inList = false;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className={opts.listClassName}>
          {listItems.map((item, i) => (
            <li key={i}>{parseInlineFormatting(item, opts)}</li>
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
        <h1
          key={index}
          className="text-2xl font-bold text-foreground mb-4 mt-6"
        >
          {trimmed.slice(2)}
        </h1>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={index}
          className="text-xl font-bold text-foreground mb-3 mt-5"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={index}
          className="text-lg font-semibold text-foreground mb-2 mt-4"
        >
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("#### ")) {
      flushList();
      elements.push(
        <h4 key={index} className="font-semibold text-foreground mb-2 mt-3">
          {trimmed.slice(5)}
        </h4>
      );
    }
    // List items (unordered)
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
    // Bold text line (starts and ends with **)
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
        <p key={index} className={opts.paragraphClassName}>
          {parseInlineFormatting(trimmed, opts)}
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

/**
 * Parses practice/instruction content with slightly different styling.
 * Uses smaller margins and indented lists.
 */
export function parseInstructionContent(content: string): JSX.Element[] {
  return parseMarkdownContent(content, {
    enableHighlights: true,
    listClassName:
      "list-disc list-inside space-y-2 mb-4 text-muted-foreground ml-4",
    paragraphClassName: "text-muted-foreground mb-3 leading-relaxed",
  });
}

/**
 * Strips markdown formatting from text to get plain text.
 * Useful for TTS or accessibility purposes.
 */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1") // bold
    .replace(/\*(.+?)\*/g, "$1") // italic
    .replace(/\[(.+?)\]/g, "$1") // highlights
    .replace(/^#+\s/gm, "") // headers
    .replace(/^[-*]\s/gm, "") // list items
    .replace(/^\d+\.\s/gm, "") // numbered lists
    .replace(/---/g, "") // horizontal rules
    .trim();
}
