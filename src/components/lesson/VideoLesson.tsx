// Video Lesson Component
// Displays video content with optional transcript for Lite Mode

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, FileText, Volume2, ExternalLink, Eye } from "lucide-react";
import { useLiteMode } from "@/contexts/SettingsContext";
import { getLessonContent } from "@/data/lesson-content";
import type { Lesson } from "@/types/courses";

interface VideoLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  onVideoWatched?: () => void;
  isCompleted: boolean;
}

export function VideoLesson({ lesson, onComplete, onVideoWatched, isCompleted }: VideoLessonProps) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const isLiteMode = useLiteMode();
  const content = getLessonContent(lesson.id);
  const contentEndRef = useRef<HTMLDivElement>(null);

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
          {lesson.videoId && !lesson.videoId.startsWith("placeholder") && (
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
        {lesson.videoId && lesson.videoId !== "placeholder" && !lesson.videoId.startsWith("placeholder") ? (
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

      {/* Transcript Toggle */}
      {content?.transcript && (
        <div>
          <Button
            variant="ghost"
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-primary"
          >
            <FileText className="w-4 h-4 mr-2" />
            {showTranscript ? "Ocultar transcripcion" : "Ver transcripcion"}
          </Button>

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
