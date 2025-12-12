// Typing indicator with animated bouncing dots
import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  className?: string;
}

export function TypingIndicator({ className }: TypingIndicatorProps) {
  return (
    <div className={cn("typing-dots text-muted-foreground", className)}>
      <span />
      <span />
      <span />
    </div>
  );
}
