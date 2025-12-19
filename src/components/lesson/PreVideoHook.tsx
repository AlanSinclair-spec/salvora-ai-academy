// PreVideoHook Component
// Displays a discussion prompt or image before the video starts
// Activates prior knowledge and engages students before passive watching

import { useState } from "react";
import { MessageCircle, Image, Package, Play, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityTimer } from "./ActivityTimer";
import { OralGuideBanner } from "@/components/ui/OralGuideButton";
import type { PreVideoHook as PreVideoHookType } from "@/types/courses";

interface PreVideoHookProps {
  hook: PreVideoHookType;
  onComplete: () => void;
}

export function PreVideoHook({ hook, onComplete }: PreVideoHookProps) {
  const [showTimer, setShowTimer] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);

  const getIcon = () => {
    switch (hook.type) {
      case "question":
        return <MessageCircle className="w-8 h-8" />;
      case "image":
        return <Image className="w-8 h-8" />;
      case "object":
        return <Package className="w-8 h-8" />;
    }
  };

  const getTypeLabel = () => {
    switch (hook.type) {
      case "question":
        return "Pregunta para pensar";
      case "image":
        return "Observa la imagen";
      case "object":
        return "Objeto para explorar";
    }
  };

  const handleStartDiscussion = () => {
    setShowTimer(true);
  };

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 overflow-hidden">
      {/* Header */}
      <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Antes de Ver el Video</h3>
            <p className="text-sm text-muted-foreground">{getTypeLabel()}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Main Content/Question */}
        <div className="text-center">
          {hook.type === "image" ? (
            <div className="mb-4">
              <img
                src={hook.content}
                alt="Imagen para discutir"
                className="max-w-full h-auto rounded-xl mx-auto shadow-lg"
              />
            </div>
          ) : (
            <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 mb-4">
              <p className="text-2xl font-semibold text-foreground leading-relaxed">
                {hook.content}
              </p>
            </div>
          )}

          {/* TTS for the content */}
          <OralGuideBanner
            text={`${hook.content}. ${hook.prompt}`}
            title="Escucha la pregunta"
            description="Toca para escuchar en voz alta"
          />
        </div>

        {/* Teacher Prompt */}
        <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                Instruccion para el maestro:
              </p>
              <p className="text-amber-700 dark:text-amber-300">{hook.prompt}</p>
            </div>
          </div>
        </div>

        {/* Timer Section */}
        {!showTimer ? (
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleStartDiscussion}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            >
              <Clock className="w-5 h-5 mr-2" />
              Iniciar discusion ({Math.floor(hook.discussionTime / 60)}:{(hook.discussionTime % 60).toString().padStart(2, "0")})
            </Button>
            <p className="text-sm text-muted-foreground">
              Da tiempo a los estudiantes para pensar y discutir
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <ActivityTimer
              duration={hook.discussionTime}
              label="Tiempo para discutir"
              onComplete={handleTimerComplete}
              autoStart={true}
              size="lg"
            />

            {timerComplete && (
              <div className="flex justify-center pt-4">
                <Button
                  onClick={onComplete}
                  size="lg"
                  variant="hero"
                  className="px-8 py-6 text-lg animate-pulse"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver el video
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Skip option */}
        {!timerComplete && (
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={onComplete}
              className="text-muted-foreground"
            >
              Saltar y ver video
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreVideoHook;
