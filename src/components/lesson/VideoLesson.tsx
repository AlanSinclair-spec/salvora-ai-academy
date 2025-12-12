// Video Lesson Component
// Displays video content with optional transcript for Lite Mode

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, FileText, Volume2 } from "lucide-react";
import { useLiteMode } from "@/contexts/SettingsContext";
import { getLessonContent } from "@/data/lesson-content";
import type { Lesson } from "@/types/courses";

interface VideoLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

export function VideoLesson({ lesson, onComplete, isCompleted }: VideoLessonProps) {
  const [showTranscript, setShowTranscript] = useState(false);
  const isLiteMode = useLiteMode();
  const content = getLessonContent(lesson.id);

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
