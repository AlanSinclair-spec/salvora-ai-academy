/**
 * CompleteButton Component
 * Shared completion button for all lesson types.
 * Provides consistent UI and accessibility for marking lessons complete.
 */

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompleteButtonProps {
  /** Whether the lesson is already completed */
  isCompleted: boolean;
  /** Callback when button is clicked */
  onComplete: () => void;
  /** Optional custom className */
  className?: string;
  /** Optional disabled state (in addition to isCompleted) */
  disabled?: boolean;
  /** Optional custom labels */
  labels?: {
    complete?: string;
    completed?: string;
  };
}

const defaultLabels = {
  complete: "Marcar como completado",
  completed: "Completado",
};

export function CompleteButton({
  isCompleted,
  onComplete,
  className,
  disabled = false,
  labels = defaultLabels,
}: CompleteButtonProps) {
  const mergedLabels = { ...defaultLabels, ...labels };

  return (
    <Button
      onClick={onComplete}
      disabled={isCompleted || disabled}
      variant={isCompleted ? "outline" : "hero"}
      className={cn("gap-2", className)}
      aria-label={isCompleted ? mergedLabels.completed : mergedLabels.complete}
    >
      <CheckCircle className="w-4 h-4" />
      {isCompleted ? mergedLabels.completed : mergedLabels.complete}
    </Button>
  );
}

/**
 * Wrapper component for positioning the complete button.
 * Typically used at the bottom of lesson content.
 */
export function CompleteButtonContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-end", className)}>
      {children}
    </div>
  );
}
