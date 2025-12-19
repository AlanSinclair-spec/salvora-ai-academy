// GroupDiscussion Component
// Large-format classroom discussion tool with timer and role assignments
// Designed to be visible from the back of a classroom

import { useState } from "react";
import {
  Users,
  UserCircle,
  Play,
  CheckCircle,
  MessageSquare,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityTimer } from "./ActivityTimer";
import { OralGuideBanner } from "@/components/ui/OralGuideButton";
import { cn } from "@/lib/utils";

interface GroupDiscussionProps {
  prompt: string;
  timer: number; // Seconds
  roles?: string[];
  groupSize?: number;
  onComplete?: () => void;
  className?: string;
}

const defaultRoles = ["Facilitador", "Relator", "Cronometrista", "Participante"];

const roleDescriptions: Record<string, string> = {
  Facilitador: "Dirige la discusion y asegura que todos participen",
  Relator: "Toma notas y comparte con la clase",
  Cronometrista: "Controla el tiempo",
  Participante: "Comparte ideas y escucha a los demas",
};

const roleColors: Record<string, string> = {
  Facilitador: "bg-blue-500/20 border-blue-500/40 text-blue-700 dark:text-blue-300",
  Relator: "bg-green-500/20 border-green-500/40 text-green-700 dark:text-green-300",
  Cronometrista: "bg-amber-500/20 border-amber-500/40 text-amber-700 dark:text-amber-300",
  Participante: "bg-purple-500/20 border-purple-500/40 text-purple-700 dark:text-purple-300",
};

export function GroupDiscussion({
  prompt,
  timer,
  roles = defaultRoles,
  groupSize = 4,
  onComplete,
  className,
}: GroupDiscussionProps) {
  const [phase, setPhase] = useState<"intro" | "discussion" | "share" | "complete">("intro");

  const displayRoles = roles.slice(0, groupSize);

  const handleStartDiscussion = () => {
    setPhase("discussion");
  };

  const handleDiscussionComplete = () => {
    setPhase("share");
  };

  const handleComplete = () => {
    setPhase("complete");
    onComplete?.();
  };

  // Intro Phase - Show prompt and roles
  if (phase === "intro") {
    return (
      <div className={cn("bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl border border-blue-500/20 overflow-hidden", className)}>
        {/* Header */}
        <div className="bg-blue-500/20 px-6 py-4 border-b border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Discusion en Grupo</h3>
              <p className="text-sm text-muted-foreground">Grupos de {groupSize} estudiantes</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Prompt with TTS */}
          <OralGuideBanner
            text={prompt}
            title="Pregunta para discutir"
            description="Escucha la pregunta"
          />

          {/* Prompt Display */}
          <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 text-center">
            <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <p className="text-2xl font-semibold text-foreground leading-relaxed">
              {prompt}
            </p>
          </div>

          {/* Role Cards */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-primary" />
              Roles del grupo:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {displayRoles.map((role) => (
                <div
                  key={role}
                  className={cn(
                    "rounded-xl p-4 border text-center",
                    roleColors[role] || "bg-gray-500/20 border-gray-500/40"
                  )}
                >
                  <p className="font-bold text-lg mb-1">{role}</p>
                  <p className="text-xs opacity-80">
                    {roleDescriptions[role] || "Participa activamente"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleStartDiscussion}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Comenzar discusion ({Math.floor(timer / 60)} min)
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Discussion Phase - Large timer
  if (phase === "discussion") {
    return (
      <div className={cn("bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl border border-blue-500/20 p-8", className)}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Discusion en curso</h3>
          <p className="text-lg text-muted-foreground">{prompt}</p>
        </div>

        <ActivityTimer
          duration={timer}
          label="Tiempo para discutir"
          onComplete={handleDiscussionComplete}
          autoStart={true}
          size="xl"
        />

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={handleDiscussionComplete}
            className="text-muted-foreground"
          >
            Terminar antes
          </Button>
        </div>
      </div>
    );
  }

  // Share Phase - Share with class
  if (phase === "share") {
    return (
      <div className={cn("bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl border border-green-500/20 p-8 text-center", className)}>
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <Share2 className="w-10 h-10 text-green-600" />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-2">
          Compartir con la clase
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          El relator de cada grupo comparte las ideas principales
        </p>

        <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 mb-6 max-w-lg mx-auto">
          <p className="text-lg font-medium text-foreground">
            Que descubrieron sobre:
          </p>
          <p className="text-primary font-semibold mt-2">{prompt}</p>
        </div>

        <Button
          onClick={handleComplete}
          size="lg"
          variant="hero"
          className="px-8 py-6 text-lg"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Discusion completada
        </Button>
      </div>
    );
  }

  // Complete Phase
  return (
    <div className={cn("bg-salvora-green/10 rounded-2xl border border-salvora-green/30 p-8 text-center", className)}>
      <div className="w-16 h-16 rounded-full bg-salvora-green/20 flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-salvora-green" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        Excelente discusion!
      </h3>
      <p className="text-muted-foreground">
        Todas las voces fueron escuchadas
      </p>
    </div>
  );
}

export default GroupDiscussion;
