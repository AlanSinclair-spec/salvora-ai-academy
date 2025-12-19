// IconCallout Component
// Visual callout blocks to reduce text reliance
// Uses icons and colors to convey meaning for low-literacy learners

import { LucideIcon, Lightbulb, Brain, Target, AlertTriangle, CheckCircle, Info, Star, Heart, Zap } from "lucide-react";
import { OralGuideIconButton } from "@/components/ui/OralGuideButton";
import { cn } from "@/lib/utils";

type CalloutColor = "yellow" | "blue" | "green" | "red" | "purple" | "orange" | "pink" | "teal";
type CalloutType = "idea" | "concept" | "goal" | "warning" | "success" | "info" | "important" | "tip";

interface IconCalloutProps {
  icon?: LucideIcon;
  type?: CalloutType;
  title: string;
  content: string;
  color?: CalloutColor;
  className?: string;
}

const typeConfig: Record<CalloutType, { icon: LucideIcon; color: CalloutColor; defaultTitle: string }> = {
  idea: { icon: Lightbulb, color: "yellow", defaultTitle: "Idea Clave" },
  concept: { icon: Brain, color: "purple", defaultTitle: "Concepto" },
  goal: { icon: Target, color: "blue", defaultTitle: "Objetivo" },
  warning: { icon: AlertTriangle, color: "orange", defaultTitle: "Cuidado" },
  success: { icon: CheckCircle, color: "green", defaultTitle: "Excelente" },
  info: { icon: Info, color: "teal", defaultTitle: "Informacion" },
  important: { icon: Star, color: "red", defaultTitle: "Importante" },
  tip: { icon: Zap, color: "pink", defaultTitle: "Consejo" },
};

const colorStyles: Record<CalloutColor, { bg: string; border: string; icon: string; title: string }> = {
  yellow: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    icon: "text-yellow-600 bg-yellow-500/20",
    title: "text-yellow-700 dark:text-yellow-300",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-600 bg-blue-500/20",
    title: "text-blue-700 dark:text-blue-300",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-600 bg-green-500/20",
    title: "text-green-700 dark:text-green-300",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: "text-red-600 bg-red-500/20",
    title: "text-red-700 dark:text-red-300",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-600 bg-purple-500/20",
    title: "text-purple-700 dark:text-purple-300",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    icon: "text-orange-600 bg-orange-500/20",
    title: "text-orange-700 dark:text-orange-300",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    icon: "text-pink-600 bg-pink-500/20",
    title: "text-pink-700 dark:text-pink-300",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    icon: "text-teal-600 bg-teal-500/20",
    title: "text-teal-700 dark:text-teal-300",
  },
};

export function IconCallout({
  icon,
  type = "info",
  title,
  content,
  color,
  className,
}: IconCalloutProps) {
  const config = typeConfig[type];
  const Icon = icon || config.icon;
  const finalColor = color || config.color;
  const styles = colorStyles[finalColor];

  return (
    <div
      className={cn(
        "rounded-xl border p-4 flex items-start gap-4",
        styles.bg,
        styles.border,
        className
      )}
    >
      {/* Icon */}
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", styles.icon)}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={cn("font-bold", styles.title)}>{title}</h4>
          <OralGuideIconButton
            text={`${title}. ${content}`}
            className="text-muted-foreground hover:text-primary"
          />
        </div>
        <p className="text-foreground/90 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

// Compact inline version
export function IconCalloutInline({
  icon,
  type = "info",
  content,
  color,
  className,
}: Omit<IconCalloutProps, "title">) {
  const config = typeConfig[type];
  const Icon = icon || config.icon;
  const finalColor = color || config.color;
  const styles = colorStyles[finalColor];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm",
        styles.bg,
        styles.border,
        "border",
        className
      )}
    >
      <Icon className={cn("w-4 h-4", styles.icon.split(" ")[0])} />
      <span className="text-foreground/90">{content}</span>
    </span>
  );
}

// Large hero version for key concepts
export function IconCalloutHero({
  icon,
  type = "idea",
  title,
  content,
  color,
  className,
}: IconCalloutProps) {
  const config = typeConfig[type];
  const Icon = icon || config.icon;
  const finalColor = color || config.color;
  const styles = colorStyles[finalColor];

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 text-center",
        styles.bg,
        styles.border,
        className
      )}
    >
      {/* Icon */}
      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4", styles.icon)}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <h3 className={cn("text-xl font-bold", styles.title)}>{title}</h3>
        <OralGuideIconButton
          text={`${title}. ${content}`}
          className="text-muted-foreground hover:text-primary"
        />
      </div>
      <p className="text-lg text-foreground/90 leading-relaxed max-w-md mx-auto">
        {content}
      </p>
    </div>
  );
}

export default IconCallout;
