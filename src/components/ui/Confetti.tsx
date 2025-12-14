// Simple CSS-based confetti celebration effect
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useEnhancedLiteMode } from "@/hooks/useLiteMode";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
  size: number;
}

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
  pieceCount?: number;
  onComplete?: () => void;
}

const COLORS = [
  "hsl(217 91% 52%)",    // primary blue
  "hsl(168 76% 42%)",    // green
  "hsl(259 63% 59%)",    // purple
  "hsl(28 87% 55%)",     // orange
  "hsl(45 93% 58%)",     // yellow
  "hsl(340 82% 52%)",    // pink
];

export function Confetti({
  isActive,
  duration = 3000,
  pieceCount = 50,
  onComplete,
}: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { disableAnimations } = useEnhancedLiteMode();

  useEffect(() => {
    // Skip confetti in lite mode or when animations are disabled
    if (disableAnimations && isActive) {
      // Still trigger onComplete callback
      onComplete?.();
      return;
    }

    if (isActive) {
      // Generate confetti pieces
      const newPieces: ConfettiPiece[] = Array.from({ length: pieceCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 500,
        rotation: Math.random() * 360,
        size: 8 + Math.random() * 8,
      }));

      setPieces(newPieces);
      setIsVisible(true);

      // Clean up after animation
      const timer = setTimeout(() => {
        setIsVisible(false);
        setPieces([]);
        onComplete?.();
      }, duration + 500);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration, pieceCount, onComplete, disableAnimations]);

  // Don't render if animations are disabled
  if (disableAnimations) return null;
  if (!isVisible || pieces.length === 0) return null;

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${piece.x}%`,
            animationDelay: `${piece.delay}ms`,
            animation: `confetti-fall ${duration}ms linear forwards`,
          }}
        >
          <div
            style={{
              width: piece.size,
              height: piece.size * 0.6,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotation}deg)`,
              borderRadius: "2px",
            }}
          />
        </div>
      ))}
    </div>
  );
}

// Simple hook to trigger confetti
export function useConfetti() {
  const [isActive, setIsActive] = useState(false);

  const trigger = () => {
    setIsActive(true);
  };

  const reset = () => {
    setIsActive(false);
  };

  return { isActive, trigger, reset };
}
