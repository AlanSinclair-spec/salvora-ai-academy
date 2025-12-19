// VideoSection Component
// Displays YouTube video embed for any lesson type
// Handles lite mode with external link to save data

import { useState } from "react";
import { Volume2, ExternalLink, Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLiteMode } from "@/contexts/SettingsContext";
import type { Lesson } from "@/types/courses";

interface VideoSectionProps {
  lesson: Lesson;
  onVideoWatched?: () => void;
  showWatchButton?: boolean;
}

// Helper to detect placeholder video IDs
const isPlaceholderVideo = (videoId: string | undefined): boolean => {
  if (!videoId) return true;
  if (videoId === "placeholder") return true;
  if (videoId.startsWith("placeholder")) return true;
  if (videoId.startsWith("SALVORA_")) return true;
  return false;
};

export function VideoSection({ lesson, onVideoWatched, showWatchButton = true }: VideoSectionProps) {
  const [videoWatched, setVideoWatched] = useState(false);
  const isLiteMode = useLiteMode();

  const handleVideoWatched = () => {
    setVideoWatched(true);
    onVideoWatched?.();
  };

  // No video available
  if (!lesson.videoId || isPlaceholderVideo(lesson.videoId)) {
    return null;
  }

  // Lite mode: show link instead of embed to save data
  if (isLiteMode) {
    return (
      <div className="bg-muted/50 rounded-xl p-6 text-center">
        <Volume2 className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">Modo Lite Activado</h3>
        <p className="text-muted-foreground mb-4">
          El video no se muestra para ahorrar datos.
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${lesson.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Ver video en YouTube
        </a>
      </div>
    );
  }

  // Normal mode: embed YouTube video
  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
        <iframe
          src={`https://www.youtube.com/embed/${lesson.videoId}`}
          title={lesson.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video Watch Confirmation */}
      {showWatchButton && (
        <div className="flex items-center justify-center">
          {videoWatched ? (
            <div className="flex items-center gap-2 text-salvora-green">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Video visto</span>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleVideoWatched}
              className="text-primary"
            >
              <Eye className="w-4 h-4 mr-2" />
              He visto el video
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoSection;
