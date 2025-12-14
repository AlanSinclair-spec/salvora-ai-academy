// Responsible AI Footer - Micro-footer for every lesson
// Shows student or teacher variant based on target audience

import { Shield, Lock, Info } from "lucide-react";
import type { ResponsibleAIReminder, TargetAudience } from "@/types/courses";

interface ResponsibleAIFooterProps {
  reminder?: ResponsibleAIReminder;
  targetAudience: TargetAudience;
  showPrivacyNote?: boolean;
}

// Default reminders if none provided
const defaultReminders: ResponsibleAIReminder = {
  student: "Recuerda: La IA es una herramienta para aprender, no para copiar. Tu esfuerzo es lo que te hace crecer.",
  teacher: "Modele el uso responsable de IA. Sus estudiantes aprenden tanto de lo que usted dice como de lo que hace.",
};

export function ResponsibleAIFooter({
  reminder = defaultReminders,
  targetAudience,
  showPrivacyNote = false,
}: ResponsibleAIFooterProps) {
  const isTeacher = targetAudience === "teachers";
  const message = isTeacher ? reminder.teacher : reminder.student;

  return (
    <div className="mt-8 space-y-3">
      {/* Main Reminder */}
      <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-salvora-green/5 rounded-xl border border-primary/10">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-foreground mb-1">
            Recordatorio de IA responsable
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      {/* Privacy Note (for tool/chat lessons) */}
      {showPrivacyNote && (
        <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg">
          <Lock className="w-4 h-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            <strong>Privacidad:</strong> No compartas informacion personal (nombres, direcciones, datos familiares) con herramientas de IA.
          </p>
        </div>
      )}

      {/* Footer info */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
        <Info className="w-3 h-3" />
        <span>
          {isTeacher
            ? "Este contenido sigue los Estandares Nacionales de Alfabetizacion en IA de Salvora."
            : "Aprende con responsabilidad. Tu futuro depende de tu esfuerzo."}
        </span>
      </div>
    </div>
  );
}
