import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ChevronLeft, AlertCircle } from "lucide-react";
import { getLessonById, getAdjacentLessons } from "@/data/courses";
import { useProgress } from "@/contexts/ProgressContext";
import { getIconByName } from "@/lib/icons";
import {
  VideoLesson,
  ReadingLesson,
  QuizLesson,
  PracticeLesson,
  LessonNavigation
} from "@/components/lesson";

const Leccion = () => {
  const { cursoId, leccionId } = useParams<{ cursoId: string; leccionId: string }>();
  const { markLessonComplete, isLessonComplete, getCourseProgress } = useProgress();

  // Get lesson data
  const lessonData = cursoId && leccionId ? getLessonById(cursoId, leccionId) : undefined;
  const adjacentLessons = cursoId && leccionId ? getAdjacentLessons(cursoId, leccionId) : {};

  // Handle lesson not found
  if (!lessonData || !cursoId || !leccionId) {
    return (
      <Layout>
        <div className="salvora-container py-12">
          <div className="max-w-xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Leccion no encontrada
            </h1>
            <p className="text-muted-foreground mb-6">
              La leccion que buscas no existe o ha sido movida.
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

  // Handle marking lesson complete
  const handleComplete = (quizScore?: number) => {
    markLessonComplete(cursoId, leccionId, quizScore);
  };

  // Render the appropriate lesson component based on type
  const renderLessonContent = () => {
    switch (lesson.type) {
      case "video":
        return (
          <VideoLesson
            lesson={lesson}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );
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
              Tipo de leccion no reconocido
            </p>
          </div>
        );
    }
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
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
          <h1 className="text-2xl md:text-3xl font-black text-foreground">
            {lesson.title}
          </h1>
        </div>

        {/* Lesson Content */}
        {renderLessonContent()}

        {/* Navigation */}
        <LessonNavigation
          courseId={cursoId}
          prevLesson={adjacentLessons.prev}
          nextLesson={adjacentLessons.next}
          currentProgress={courseProgress}
        />
      </div>
    </Layout>
  );
};

export default Leccion;
