// ActivityTimer Component
// Large countdown timer for classroom discussions and pair work
// Designed to be visible from the back of a classroom

import { useState, useEffect, useCallback, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActivityTimerProps {
  duration: number; // Duration in seconds
  label?: string;
  onComplete?: () => void;
  autoStart?: boolean;
  showControls?: boolean;
  size?: "sm" | "md" | "lg" | "xl"; // xl for classroom visibility
  className?: string;
}

export function ActivityTimer({
  duration,
  label,
  onComplete,
  autoStart = false,
  showControls = true,
  size = "lg",
  className,
}: ActivityTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progress = ((duration - timeLeft) / duration) * 100;

  // Play completion sound
  const playSound = useCallback(() => {
    if (!soundEnabled) return;

    // Use Web Audio API for a simple beep
    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);

      // Play 3 beeps
      setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.frequency.value = 800;
        osc2.type = "sine";
        gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        osc2.start(audioContext.currentTime);
        osc2.stop(audioContext.currentTime + 0.5);
      }, 600);

      setTimeout(() => {
        const osc3 = audioContext.createOscillator();
        const gain3 = audioContext.createGain();
        osc3.connect(gain3);
        gain3.connect(audioContext.destination);
        osc3.frequency.value = 1000;
        osc3.type = "sine";
        gain3.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        osc3.start(audioContext.currentTime);
        osc3.stop(audioContext.currentTime + 0.8);
      }, 1200);
    } catch (e) {
      console.warn("Audio not supported:", e);
    }
  }, [soundEnabled]);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            playSound();
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, onComplete, playSound]);

  const handleStart = () => {
    if (isComplete) {
      // Reset if complete
      setTimeLeft(duration);
      setIsComplete(false);
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    setIsComplete(false);
  };

  // Size-based styles
  const sizeStyles = {
    sm: {
      container: "p-4",
      timer: "text-3xl",
      label: "text-sm",
      button: "sm" as const,
    },
    md: {
      container: "p-6",
      timer: "text-5xl",
      label: "text-base",
      button: "default" as const,
    },
    lg: {
      container: "p-8",
      timer: "text-7xl",
      label: "text-lg",
      button: "lg" as const,
    },
    xl: {
      container: "p-12",
      timer: "text-9xl",
      label: "text-2xl",
      button: "lg" as const,
    },
  };

  const styles = sizeStyles[size];

  return (
    <div
      className={cn(
        "bg-card rounded-2xl border border-border overflow-hidden",
        styles.container,
        className
      )}
    >
      {/* Label */}
      {label && (
        <div className={cn("text-center text-muted-foreground mb-4", styles.label)}>
          {label}
        </div>
      )}

      {/* Timer Display */}
      <div className="relative">
        {/* Progress Ring Background */}
        <div
          className={cn(
            "mx-auto flex items-center justify-center rounded-full transition-colors duration-300",
            size === "xl" ? "w-80 h-80" : size === "lg" ? "w-48 h-48" : size === "md" ? "w-36 h-36" : "w-24 h-24",
            isComplete
              ? "bg-salvora-green/20"
              : timeLeft <= 10 && timeLeft > 0
              ? "bg-red-500/20 animate-pulse"
              : "bg-primary/10"
          )}
        >
          {/* Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-muted/30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className={cn(
                "transition-all duration-1000",
                isComplete
                  ? "text-salvora-green"
                  : timeLeft <= 10
                  ? "text-red-500"
                  : "text-primary"
              )}
            />
          </svg>

          {/* Time Display */}
          <span
            className={cn(
              "font-mono font-bold tabular-nums",
              styles.timer,
              isComplete
                ? "text-salvora-green"
                : timeLeft <= 10 && timeLeft > 0
                ? "text-red-500"
                : "text-foreground"
            )}
          >
            {formatTime(timeLeft)}
          </span>
        </div>

        {/* Completion Message */}
        {isComplete && (
          <div className="text-center mt-4">
            <span className={cn("font-semibold text-salvora-green", styles.label)}>
              Tiempo completado!
            </span>
          </div>
        )}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-center gap-3 mt-6">
          {/* Sound Toggle */}
          <Button
            variant="ghost"
            size={styles.button}
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-muted-foreground"
            aria-label={soundEnabled ? "Silenciar" : "Activar sonido"}
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </Button>

          {/* Play/Pause */}
          <Button
            variant={isRunning ? "outline" : "hero"}
            size={styles.button}
            onClick={isRunning ? handlePause : handleStart}
            className="min-w-[120px]"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pausar
              </>
            ) : isComplete ? (
              <>
                <Play className="w-5 h-5 mr-2" />
                Repetir
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Iniciar
              </>
            )}
          </Button>

          {/* Reset */}
          <Button
            variant="ghost"
            size={styles.button}
            onClick={handleReset}
            className="text-muted-foreground"
            aria-label="Reiniciar"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default ActivityTimer;
