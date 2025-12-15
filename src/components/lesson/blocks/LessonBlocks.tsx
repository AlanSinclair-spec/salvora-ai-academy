// Lesson Blocks Orchestrator
// Renders all enhanced lesson blocks based on available content

import { QuickVersionPanel } from "./QuickVersionPanel";
import { LocalContextHook } from "./LocalContextHook";
import { SafePromptBlock } from "./SafePromptBlock";
import { AIErrorBlock } from "./AIErrorBlock";
import { ResponsibleAIFooter } from "./ResponsibleAIFooter";
import { EnhancedPractice } from "./EnhancedPractice";
import type { LessonContent } from "@/data/lesson-content";
import type { TargetAudience } from "@/types/courses";

interface LessonBlocksProps {
  lessonId: string;
  lessonContent: LessonContent | undefined;
  targetAudience: TargetAudience;
  lessonType: "video" | "reading" | "quiz" | "practice";
  onPracticeComplete?: (score: number) => void;
  onPracticeCompleted?: () => void;
}

export function LessonBlocks({
  lessonId,
  lessonContent,
  targetAudience,
  lessonType,
  onPracticeComplete,
  onPracticeCompleted,
}: LessonBlocksProps) {
  if (!lessonContent) return null;

  // Handle practice completion - call both callbacks
  const handlePracticeComplete = (score: number) => {
    onPracticeComplete?.(score);
    onPracticeCompleted?.();
  };

  const {
    quickVersion,
    localContext,
    safePrompts,
    aiErrorTips,
    responsibleAIReminder,
    enhancedPractice,
  } = lessonContent;

  // Determine tool link based on audience
  const toolLink = targetAudience === "teachers" ? "/maestro" : "/estudiante";

  // Determine if this is a tool/chat lesson (show privacy note)
  const showPrivacyNote = lessonType === "practice" ||
    lessonId.includes("chat") ||
    lessonId.includes("tool");

  return (
    <div className="mt-8 space-y-2">
      {/* Quick Version Panel - Always first if available */}
      {quickVersion && (
        <QuickVersionPanel quickVersion={quickVersion} />
      )}

      {/* Local Context Hook */}
      {localContext && (
        <LocalContextHook localContext={localContext} />
      )}

      {/* Safe Prompt Block */}
      {safePrompts && safePrompts.length > 0 && (
        <SafePromptBlock safePrompts={safePrompts} toolLink={toolLink} />
      )}

      {/* Enhanced Practice (only if not already a quiz lesson) */}
      {enhancedPractice && enhancedPractice.length >= 3 && lessonType !== "quiz" && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Practica lo aprendido
          </h3>
          <EnhancedPractice
            questions={enhancedPractice}
            lessonId={lessonId}
            onComplete={handlePracticeComplete}
          />
        </div>
      )}

      {/* AI Error Block - Collapsed by default */}
      <AIErrorBlock tips={aiErrorTips} />

      {/* Responsible AI Footer - Always last */}
      <ResponsibleAIFooter
        reminder={responsibleAIReminder}
        targetAudience={targetAudience}
        showPrivacyNote={showPrivacyNote}
      />
    </div>
  );
}
