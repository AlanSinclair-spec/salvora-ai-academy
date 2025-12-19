// OralGuideButton - Text-to-Speech button for Salvora AI Academy
// "Guía Oral" - Reads text aloud for low-literacy accessibility

import { Volume2, VolumeX, Pause, Play, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { cn } from '@/lib/utils';
import { useSettings } from '@/contexts/SettingsContext';

interface OralGuideButtonProps {
  text: string;
  label?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  showLabel?: boolean;
  className?: string;
  rate?: number; // Speech rate (0.5 = slow, 1 = normal, 1.5 = fast)
}

export function OralGuideButton({
  text,
  label = 'Escuchar',
  size = 'sm',
  variant = 'outline',
  showLabel = true,
  className,
  rate,
}: OralGuideButtonProps) {
  const { isSupported, isSpeaking, isPaused, toggle, stop } = useTextToSpeech();
  const { settings } = useSettings();

  // Don't render if TTS not supported
  if (!isSupported) {
    return null;
  }

  // In Lite Mode, use slower speech rate by default
  const speechRate = rate ?? (settings.liteMode ? 0.75 : 0.85);

  const isActive = isSpeaking || isPaused;
  const isPlaying = isSpeaking && !isPaused;

  const handleClick = () => {
    if (isActive) {
      stop();
    } else {
      toggle(text, { rate: speechRate });
    }
  };

  const getIcon = () => {
    if (isPlaying) {
      return <Pause className={cn(
        size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4',
        'animate-pulse'
      )} />;
    }
    if (isPaused) {
      return <Play className={cn(
        size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
      )} />;
    }
    return <Volume2 className={cn(
      size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
    )} />;
  };

  const getLabel = () => {
    if (isPlaying) return 'Detener';
    if (isPaused) return 'Continuar';
    return label;
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(
        'gap-1.5 transition-all',
        isActive && 'bg-primary/10 border-primary/30',
        isPlaying && 'text-primary',
        className
      )}
      aria-label={`${getLabel()} lectura en voz alta`}
      title={getLabel()}
    >
      {getIcon()}
      {showLabel && (
        <span className={cn(
          size === 'sm' ? 'text-xs' : 'text-sm'
        )}>
          {getLabel()}
        </span>
      )}
    </Button>
  );
}

// Compact version for inline use
export function OralGuideIconButton({
  text,
  className,
  rate,
}: {
  text: string;
  className?: string;
  rate?: number;
}) {
  const { isSupported, isSpeaking, isPaused, toggle, stop } = useTextToSpeech();
  const { settings } = useSettings();

  if (!isSupported) return null;

  const speechRate = rate ?? (settings.liteMode ? 0.75 : 0.85);
  const isActive = isSpeaking || isPaused;
  const isPlaying = isSpeaking && !isPaused;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      stop();
    } else {
      toggle(text, { rate: speechRate });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-1.5 rounded-full transition-all',
        'hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30',
        isPlaying && 'bg-primary/10 text-primary animate-pulse',
        className
      )}
      aria-label={isPlaying ? 'Detener lectura' : 'Escuchar'}
      title={isPlaying ? 'Detener' : 'Escuchar'}
    >
      {isPlaying ? (
        <Pause className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}

// Banner version for prominent placement
export function OralGuideBanner({
  text,
  title = 'Guía Oral',
  description = 'Escucha esta lección en voz alta',
  className,
}: {
  text: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  const { isSupported, isSpeaking, isPaused, toggle, stop } = useTextToSpeech();
  const { settings } = useSettings();

  if (!isSupported) return null;

  const isActive = isSpeaking || isPaused;
  const isPlaying = isSpeaking && !isPaused;

  const handleClick = () => {
    if (isActive) {
      stop();
    } else {
      toggle(text, { rate: settings.liteMode ? 0.75 : 0.85 });
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4 rounded-xl border transition-all',
        'bg-gradient-to-r from-primary/5 to-primary/10',
        'border-primary/20 hover:border-primary/30',
        isActive && 'border-primary/40 bg-primary/10',
        className
      )}
    >
      <button
        onClick={handleClick}
        className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center transition-all',
          'bg-primary text-primary-foreground',
          'hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30',
          isPlaying && 'animate-pulse'
        )}
        aria-label={isPlaying ? 'Detener' : 'Escuchar'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      <div className="flex-1">
        <h4 className="font-semibold text-foreground flex items-center gap-2">
          {title}
          {isPlaying && (
            <span className="text-xs text-primary font-normal">
              Reproduciendo...
            </span>
          )}
        </h4>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      {isActive && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            stop();
          }}
          className="text-muted-foreground hover:text-foreground"
        >
          <VolumeX className="w-4 h-4 mr-1" />
          Detener
        </Button>
      )}
    </div>
  );
}

export default OralGuideButton;
