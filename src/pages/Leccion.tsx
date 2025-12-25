import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ChevronLeft, AlertCircle, Lock } from "lucide-react";
import { getLessonById, getAdjacentLessons } from "@/data/courses";
import { getLessonContent } from "@/data/lesson-content";
import { useProgress } from "@/contexts/ProgressContext";
import { getIconByName } from "@/lib/icons";
import {
  VideoLesson,
  ReadingLesson,
  QuizLesson,
  PracticeLesson,
  LessonNavigation,
  VideoSection
} from "@/components/lesson";
import { LessonBlocks } from "@/components/lesson/blocks";
import { ShareButton } from "@/components/ui/ShareButton";
import { ClassroomPackButton } from "@/components/lesson/ClassroomPackButton";
import { ClassroomPackModal } from "@/components/lesson/ClassroomPackModal";

const Leccion = () => {
  const { cursoId, leccionId } = useParams<{ cursoId: string; leccionId: string }>();
  const {
    markLessonComplete,
    isLessonComplete,
    getCourseProgress,
    isLessonUnlocked,
    canProceedToNext,
    markVideoWatched,
    markPracticeCompleted
  } = useProgress();
  const [classroomPackOpen, setClassroomPackOpen] = useState(false);

  // Get lesson data
  const lessonData = cursoId && leccionId ? getLessonById(cursoId, leccionId) : undefined;
  const adjacentLessons = cursoId && leccionId ? getAdjacentLessons(cursoId, leccionId) : {};

  // Get enhanced lesson content
  const lessonContent = leccionId ? getLessonContent(leccionId) : undefined;

  // Check if lesson is unlocked (first check before not found)
  const lessonUnlocked = cursoId && leccionId ? isLessonUnlocked(cursoId, leccionId) : false;

  // Handle locked lesson
  if (lessonData && cursoId && leccionId && !lessonUnlocked) {
    return (
      <Layout>
        <div className="salvora-container py-12">
          <div className="max-w-xl mx-auto text-center">
            <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Lección bloqueada
            </h1>
            <p className="text-muted-foreground mb-6">
              Completa la lección anterior para desbloquear esta.
            </p>
            <Link
              to="/cursos"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Volver a cursos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Handle lesson not found
  if (!lessonData || !cursoId || !leccionId) {
    return (
      <Layout>
        <div className="salvora-container py-12">
          <div className="max-w-xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Lección no encontrada
            </h1>
            <p className="text-muted-foreground mb-6">
              La lección que buscas no existe o ha sido movida.
            </p>
            <Link
              to="/cursos"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Volver a cursos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const { lesson, unit, course } = lessonData;
  const isCompleted = isLessonComplete(cursoId, leccionId);
  const courseProgress = getCourseProgress(cursoId);
  const CourseIcon = getIconByName(course.icon);

  // Calculate if user can proceed to next lesson
  const canProceed = canProceedToNext(cursoId, leccionId);

  // Handle marking lesson complete
  const handleComplete = (quizScore?: number) => {
    markLessonComplete(cursoId, leccionId, quizScore);
  };

  // Handle video watched
  const handleVideoWatched = () => {
    markVideoWatched(cursoId, leccionId);
  };

  // Handle practice completed
  const handlePracticeCompleted = () => {
    markPracticeCompleted(cursoId, leccionId);
  };

  // Render the appropriate lesson component based on type
  // For non-video lessons with a videoId, show video first
  const renderLessonContent = () => {
    // Video lessons use VideoLesson which already handles everything
    if (lesson.type === "video") {
      return (
        <VideoLesson
          lesson={lesson}
          onComplete={handleComplete}
          onVideoWatched={handleVideoWatched}
          isCompleted={isCompleted}
        />
      );
    }

    // For other lesson types, show video first (if available) then lesson-specific content
    const videoSection = lesson.videoId ? (
      <VideoSection
        lesson={lesson}
        onVideoWatched={handleVideoWatched}
        showWatchButton={true}
      />
    ) : null;

    const lessonTypeContent = (() => {
      switch (lesson.type) {
        case "reading":
          return (
            <ReadingLesson
              lesson={lesson}
              onComplete={handleComplete}
              isCompleted={isCompleted}
            />
          );
        case "quiz":
          return (
            <QuizLesson
              lesson={lesson}
              onComplete={handleComplete}
              isCompleted={isCompleted}
            />
          );
        case "practice":
          return (
            <PracticeLesson
              lesson={lesson}
              onComplete={handleComplete}
              isCompleted={isCompleted}
            />
          );
        default:
          return (
            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <p className="text-muted-foreground">
                Tipo de lección no reconocido
              </p>
            </div>
          );
      }
    })();

    return (
      <div className="space-y-8">
        {videoSection}
        {lessonTypeContent}
      </div>
    );
  };

  return (
    <Layout>
      <div className="salvora-container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/cursos" className="hover:text-foreground transition-colors">
            Cursos
          </Link>
          <span>/</span>
          <Link to="/cursos" className="hover:text-foreground transition-colors flex items-center gap-1">
            <CourseIcon className="w-4 h-4" />
            {course.title}
          </Link>
          <span>/</span>
          <span className="text-foreground">{unit.title}</span>
        </div>

        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-2 py-0.5 rounded bg-muted text-xs font-medium uppercase">
                {lesson.type === "video" && "Video"}
                {lesson.type === "reading" && "Lectura"}
                {lesson.type === "quiz" && "Cuestionario"}
                {lesson.type === "practice" && "Practica"}
              </span>
              <span>{lesson.duration}</span>
              {isCompleted && (
                <span className="text-salvora-green font-medium">Completado</span>
              )}
            </div>
            {/* Share and Classroom Pack buttons */}
            <div className="flex items-center gap-2">
              {lessonContent?.whatsAppPayload && (
                <ShareButton
                  lessonId={leccionId}
                  lessonTitle={lesson.title}
                  payload={lessonContent.whatsAppPayload}
                  courseId={cursoId}
                />
              )}
              {lessonContent?.classroomPack && (
                <ClassroomPackButton onClick={() => setClassroomPackOpen(true)} />
              )}
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-foreground">
            {lesson.title}
          </h1>
        </div>

        {/* Lesson Content */}
        {renderLessonContent()}

        {/* Enhanced Lesson Blocks */}
        <LessonBlocks
          lessonId={leccionId}
          lessonContent={lessonContent}
          targetAudience={course.targetAudience}
          lessonType={lesson.type}
          onPracticeCompleted={handlePracticeCompleted}
        />

        {/* Navigation */}
        <LessonNavigation
          courseId={cursoId}
          prevLesson={adjacentLessons.prev}
          nextLesson={adjacentLessons.next}
          currentProgress={courseProgress}
          canProceed={canProceed}
          isCompleted={isCompleted}
        />

        {/* Classroom Pack Modal */}
        {lessonContent?.classroomPack && (
          <ClassroomPackModal
            open={classroomPackOpen}
            onOpenChange={setClassroomPackOpen}
            pack={lessonContent.classroomPack}
            lessonTitle={lesson.title}
          />
        )}
      </div>
    </Layout>
  );
};

export default Leccion;
