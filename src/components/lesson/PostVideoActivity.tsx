// PostVideoActivity Component
// Displays activities after video completion to reinforce learning
// Supports recap, drawing, roleplay, and discussion activities

import { useState } from "react";
import {
  MessageCircle,
  Pencil,
  Users,
  CheckCircle,
  Sparkles,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityTimer } from "./ActivityTimer";
import { OralGuideBanner } from "@/components/ui/OralGuideButton";
import type { PostVideoActivity as PostVideoActivityType } from "@/types/courses";

interface PostVideoActivityProps {
  activity: PostVideoActivityType;
  onComplete: () => void;
}

export function PostVideoActivity({ activity, onComplete }: PostVideoActivityProps) {
  const [activityStarted, setActivityStarted] = useState(false);
  const [activityComplete, setActivityComplete] = useState(false);

  const getIcon = () => {
    switch (activity.type) {
      case "recap":
        return <MessageCircle className="w-8 h-8" />;
      case "drawing":
        return <Pencil className="w-8 h-8" />;
      case "roleplay":
        return <Users className="w-8 h-8" />;
      case "discussion":
        return <MessageCircle className="w-8 h-8" />;
    }
  };

  const getTitle = () => {
    switch (activity.type) {
      case "recap":
        return "Cuenta lo que aprendiste";
      case "drawing":
        return "Dibuja lo que entendiste";
      case "roleplay":
        return "Actúa la situación";
      case "discussion":
        return "Discusión en grupo";
    }
  };

  const getInstructions = () => {
    switch (activity.type) {
      case "recap":
        return activity.pairWork
          ? "Cuéntale a tu compañero 3 cosas que aprendiste del video"
          : "Piensa en 3 cosas importantes que aprendiste";
      case "drawing":
        return "Dibuja en tu cuaderno lo más importante del video";
      case "roleplay":
        return activity.roles
          ? `Roles: ${activity.roles.join(", ")}`
          : "Actúa la situación con tu compañero";
      case "discussion":
        return activity.pairWork
          ? "Discute con tu compañero"
          : "Discute con tu grupo";
    }
  };

  const getBackgroundGradient = () => {
    switch (activity.type) {
      case "recap":
        return "from-green-500/20 via-green-500/10 to-transparent";
      case "drawing":
        return "from-pink-500/20 via-pink-500/10 to-transparent";
      case "roleplay":
        return "from-orange-500/20 via-orange-500/10 to-transparent";
      case "discussion":
        return "from-blue-500/20 via-blue-500/10 to-transparent";
    }
  };

  const getIconColor = () => {
    switch (activity.type) {
      case "recap":
        return "text-green-500 bg-green-500/20";
      case "drawing":
        return "text-pink-500 bg-pink-500/20";
      case "roleplay":
        return "text-orange-500 bg-orange-500/20";
      case "discussion":
        return "text-blue-500 bg-blue-500/20";
    }
  };

  const handleTimerComplete = () => {
    setActivityComplete(true);
  };

  if (activityComplete) {
    return (
      <div className="bg-salvora-green/10 rounded-2xl border border-salvora-green/30 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-salvora-green/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-salvora-green" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Excelente trabajo!
        </h3>
        <p className="text-muted-foreground mb-6">
          Completaste la actividad después del video
        </p>
        <Button onClick={onComplete} variant="hero" size="lg">
          <Sparkles className="w-5 h-5 mr-2" />
          Continuar con la lección
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br ${getBackgroundGradient()} rounded-2xl border border-primary/20 overflow-hidden`}>
      {/* Header */}
      <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColor()}`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Después del Video</h3>
            <p className="text-sm text-muted-foreground">{getTitle()}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Main Prompt with TTS */}
        <OralGuideBanner
          text={activity.prompt}
          title="Actividad"
          description="Escucha las instrucciones"
        />

        {/* Prompt Card */}
        <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 text-center">
          <p className="text-xl font-semibold text-foreground mb-2">
            {activity.prompt}
          </p>
          <p className="text-muted-foreground">
            {getInstructions()}
          </p>
        </div>

        {/* Pair/Group Indicator */}
        {activity.pairWork && (
          <div className="flex items-center justify-center gap-2 text-primary">
            <Users className="w-5 h-5" />
            <span className="font-medium">Actividad en parejas</span>
          </div>
        )}

        {/* Roleplay Roles */}
        {activity.type === "roleplay" && activity.roles && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {activity.roles.map((role, index) => (
              <div
                key={index}
                className="bg-orange-500/10 rounded-lg p-3 text-center border border-orange-500/20"
              >
                <span className="font-medium text-orange-700 dark:text-orange-300">
                  {role}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Timer Section */}
        {!activityStarted ? (
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => setActivityStarted(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Comenzar actividad ({Math.floor(activity.timer / 60)}:{(activity.timer % 60).toString().padStart(2, "0")})
            </Button>
          </div>
        ) : (
          <ActivityTimer
            duration={activity.timer}
            label={getTitle()}
            onComplete={handleTimerComplete}
            autoStart={true}
            size="lg"
          />
        )}

        {/* Skip Option */}
        {!activityComplete && (
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActivityComplete(true)}
              className="text-muted-foreground"
            >
              Saltar actividad
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostVideoActivity;
