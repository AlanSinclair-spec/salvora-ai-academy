// PausePoint Component
// Displays a discussion prompt when video is paused at a checkpoint
// Encourages active engagement instead of passive watching

import { useState } from "react";
import { Pause, Play, MessageCircle, Lightbulb, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityTimer } from "./ActivityTimer";
import { OralGuideIconButton } from "@/components/ui/OralGuideButton";
import type { PausePoint as PausePointType } from "@/types/courses";

interface PausePointProps {
  pausePoint: PausePointType;
  onContinue: () => void;
  isActive: boolean;
}

export function PausePoint({ pausePoint, onContinue, isActive }: PausePointProps) {
  const [showTimer, setShowTimer] = useState(false);

  if (!isActive) return null;

  const getIcon = () => {
    switch (pausePoint.type) {
      case "discussion":
        return <MessageCircle className="w-6 h-6" />;
      case "prediction":
        return <Lightbulb className="w-6 h-6" />;
      case "reflection":
        return <Eye className="w-6 h-6" />;
    }
  };

  const getTypeLabel = () => {
    switch (pausePoint.type) {
      case "discussion":
        return "Discusion en parejas";
      case "prediction":
        return "Haz una prediccion";
      case "reflection":
        return "Momento de reflexion";
    }
  };

  const getBackgroundColor = () => {
    switch (pausePoint.type) {
      case "discussion":
        return "from-blue-500/20 to-blue-500/5 border-blue-500/30";
      case "prediction":
        return "from-amber-500/20 to-amber-500/5 border-amber-500/30";
      case "reflection":
        return "from-purple-500/20 to-purple-500/5 border-purple-500/30";
    }
  };

  const getIconColor = () => {
    switch (pausePoint.type) {
      case "discussion":
        return "text-blue-500 bg-blue-500/20";
      case "prediction":
        return "text-amber-500 bg-amber-500/20";
      case "reflection":
        return "text-purple-500 bg-purple-500/20";
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${getBackgroundColor()} rounded-xl border p-6 animate-in fade-in slide-in-from-bottom-4 duration-300`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconColor()}`}>
          <Pause className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground flex items-center gap-2">
            Pausa Activa
            {getIcon()}
          </h4>
          <p className="text-sm text-muted-foreground">{getTypeLabel()}</p>
        </div>
        <OralGuideIconButton
          text={pausePoint.prompt}
          className="text-muted-foreground hover:text-primary"
        />
      </div>

      {/* Prompt */}
      <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 mb-4">
        <p className="text-lg font-medium text-foreground text-center">
          {pausePoint.prompt}
        </p>
      </div>

      {/* Instructions based on type */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
        <Users className="w-4 h-4" />
        {pausePoint.type === "discussion" && (
          <span>Habla con tu companero sobre esta pregunta</span>
        )}
        {pausePoint.type === "prediction" && (
          <span>Piensa: que crees que pasara?</span>
        )}
        {pausePoint.type === "reflection" && (
          <span>Toma un momento para pensar en silencio</span>
        )}
      </div>

      {/* Timer or Continue */}
      {!showTimer ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => setShowTimer(true)}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Pause className="w-4 h-4 mr-2" />
            Discutir (30 seg)
          </Button>
          <Button
            onClick={onContinue}
            variant="hero"
            className="w-full sm:w-auto"
          >
            <Play className="w-4 h-4 mr-2" />
            Continuar video
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <ActivityTimer
            duration={30}
            label="Tiempo para discutir"
            onComplete={() => {}}
            autoStart={true}
            size="md"
            showControls={false}
          />
          <div className="flex justify-center">
            <Button onClick={onContinue} variant="hero">
              <Play className="w-4 h-4 mr-2" />
              Continuar video
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Compact version for overlay on video
export function PausePointOverlay({
  pausePoint,
  onContinue,
}: {
  pausePoint: PausePointType;
  onContinue: () => void;
}) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-card rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="text-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <Pause className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Pausa para pensar</h3>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-4">
          <p className="text-lg text-foreground text-center flex items-center justify-center gap-2">
            {pausePoint.prompt}
            <OralGuideIconButton
              text={pausePoint.prompt}
              className="text-muted-foreground hover:text-primary"
            />
          </p>
        </div>

        <Button onClick={onContinue} className="w-full" size="lg">
          <Play className="w-5 h-5 mr-2" />
          Continuar
        </Button>
      </div>
    </div>
  );
}

export default PausePoint;
