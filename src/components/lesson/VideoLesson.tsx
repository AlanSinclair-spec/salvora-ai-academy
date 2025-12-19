// Video Lesson Component
// Displays video content with optional transcript for Lite Mode
// Includes Text-to-Speech (Guía Oral) for accessibility
// Supports interactive video phases: PreVideoHook → Video → PostVideoActivity

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, FileText, Volume2, ExternalLink, Eye } from "lucide-react";
import { useLiteMode } from "@/contexts/SettingsContext";
import { getLessonContent } from "@/data/lesson-content";
import { OralGuideButton, OralGuideBanner } from "@/components/ui/OralGuideButton";
import { PreVideoHook } from "./PreVideoHook";
import { PostVideoActivity } from "./PostVideoActivity";
import type { Lesson, VideoInteractivity } from "@/types/courses";

interface VideoLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  onVideoWatched?: () => void;
  isCompleted: boolean;
}

// Helper to detect placeholder video IDs
const isPlaceholderVideo = (videoId: string | undefined): boolean => {
  if (!videoId) return true;
  if (videoId === "placeholder") return true;
  if (videoId.startsWith("placeholder")) return true;
  if (videoId.startsWith("SALVORA_")) return true;
  return false;
};

type VideoPhase = "preVideo" | "watching" | "postVideo" | "complete";

export function VideoLesson({ lesson, onComplete, onVideoWatched, isCompleted }: VideoLessonProps) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const isLiteMode = useLiteMode();
  const content = getLessonContent(lesson.id);
  const contentEndRef = useRef<HTMLDivElement>(null);

  // Interactive video phases
  const interactivity: VideoInteractivity | undefined = content?.videoInteractivity;
  const hasPreVideoHook = !!interactivity?.preVideoHook;
  const hasPostVideoActivity = !!interactivity?.postVideoActivity;

  // Determine initial phase
  const getInitialPhase = (): VideoPhase => {
    if (hasPreVideoHook) return "preVideo";
    return "watching";
  };

  const [phase, setPhase] = useState<VideoPhase>(getInitialPhase);

  const handlePreVideoComplete = () => {
    setPhase("watching");
  };

  const handleVideoComplete = () => {
    setVideoWatched(true);
    onVideoWatched?.();
    if (hasPostVideoActivity) {
      setPhase("postVideo");
    } else {
      setPhase("complete");
    }
  };

  const handlePostVideoComplete = () => {
    setPhase("complete");
  };

  // Intersection Observer for Lite Mode scroll tracking
  useEffect(() => {
    if (!isLiteMode || !contentEndRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoWatched) {
          setVideoWatched(true);
          onVideoWatched?.();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(contentEndRef.current);
    return () => observer.disconnect();
  }, [isLiteMode, videoWatched, onVideoWatched]);

  const handleVideoWatched = () => {
    setVideoWatched(true);
    onVideoWatched?.();
  };

  // Pre-Video Hook Phase
  if (phase === "preVideo" && interactivity?.preVideoHook) {
    return (
      <div className="space-y-6">
        <PreVideoHook
          hook={interactivity.preVideoHook}
          onComplete={handlePreVideoComplete}
        />
      </div>
    );
  }

  // Post-Video Activity Phase
  if (phase === "postVideo" && interactivity?.postVideoActivity) {
    return (
      <div className="space-y-6">
        <PostVideoActivity
          activity={interactivity.postVideoActivity}
          onComplete={handlePostVideoComplete}
        />
        {/* Complete Button */}
        <div className="flex justify-end">
          <Button
            onClick={onComplete}
            disabled={isCompleted}
            variant={isCompleted ? "outline" : "hero"}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Completado
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Marcar como completado
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }

  // In lite mode, show transcript instead of video
  if (isLiteMode) {
    return (
      <div className="space-y-6">
        <div className="bg-muted/50 rounded-xl p-8 text-center">
          <Volume2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Modo Lite Activado</h3>
          <p className="text-muted-foreground mb-4">
            El video no se muestra para ahorrar datos. Lee la transcripcion abajo.
          </p>
          {!isPlaceholderVideo(lesson.videoId) && (
            <a
              href={`https://www.youtube.com/watch?v=${lesson.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir en YouTube
            </a>
          )}
        </div>

        {content?.transcript && (
          <div className="space-y-4">
            {/* Guía Oral - Text-to-Speech */}
            <OralGuideBanner
              text={content.transcript}
              title="Guía Oral"
              description="Escucha la transcripción en voz alta"
            />

            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Transcripcion del video
              </h4>
              <div className="prose prose-sm max-w-none">
                {content.transcript.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Sentinel for scroll tracking */}
              <div ref={contentEndRef} className="h-1" />
            </div>
          </div>
        )}

        {videoWatched && (
          <div className="flex items-center justify-center gap-2 text-salvora-green">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Contenido leido</span>
          </div>
        )}

        <div className="flex justify-end">
          <Button
            onClick={onComplete}
            disabled={isCompleted}
            variant={isCompleted ? "outline" : "hero"}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Completado
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Marcar como completado
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
        {!isPlaceholderVideo(lesson.videoId) ? (
          <iframe
            src={`https://www.youtube.com/embed/${lesson.videoId}`}
            title={lesson.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Play className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg font-medium">Video en desarrollo</p>
            <p className="text-sm opacity-70">Proximamente disponible</p>
          </div>
        )}
      </div>

      {/* Video Watch Confirmation */}
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

      {/* Transcript Toggle & Guía Oral */}
      {content?.transcript && (
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="ghost"
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-primary"
            >
              <FileText className="w-4 h-4 mr-2" />
              {showTranscript ? "Ocultar transcripcion" : "Ver transcripcion"}
            </Button>

            <OralGuideButton
              text={content.transcript}
              label="Escuchar"
              variant="outline"
              size="sm"
            />
          </div>

          {showTranscript && (
            <div className="mt-4 bg-muted/50 rounded-xl p-6">
              <div className="prose prose-sm max-w-none">
                {content.transcript.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Additional Content */}
      {lesson.content && (
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="prose max-w-none">
            {lesson.content}
          </div>
        </div>
      )}

      {/* Complete Button */}
      <div className="flex justify-end">
        <Button
          onClick={onComplete}
          disabled={isCompleted}
          variant={isCompleted ? "outline" : "hero"}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Completado
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Marcar como completado
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
