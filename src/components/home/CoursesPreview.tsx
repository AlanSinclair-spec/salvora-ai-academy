import { Link } from "react-router-dom";
import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, BookOpen, Globe, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

// Map icon strings to components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  GraduationCap,
  BookOpen,
  Globe,
};

// Map color strings to CourseCard colors
const colorMap: Record<string, "blue" | "purple" | "green" | "orange"> = {
  blue: "blue",
  green: "green",
  purple: "purple",
  teal: "green", // Map teal to green for CourseCard
};

// Map colors to glow classes
const glowMap: Record<string, string> = {
  blue: "card-glow-blue",
  green: "card-glow-green",
  purple: "card-glow-purple",
  orange: "card-glow-orange",
  teal: "card-glow-teal",
};

export function CoursesPreview() {
  // Get first 4 courses from data
  const previewCourses = courses.slice(0, 4).map(course => {
    const totalLessons = course.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
    const firstLesson = course.units[0]?.lessons[0];

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      icon: iconMap[course.icon] || Brain,
      color: colorMap[course.color] || "blue",
      originalColor: course.color,
      href: firstLesson
        ? `/leccion/${course.id}/${course.units[0].id}/${firstLesson.id}`
        : `/cursos`,
      lessons: totalLessons,
    };
  });

  return (
    <section className="py-16 md:py-24">
      <div className="salvora-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Explora Nuestros Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cursos disenados para estudiantes y educadores salvadorenos, desde conceptos basicos hasta aplicaciones practicas con Grok.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewCourses.map((course, index) => (
            <div
              key={course.id}
              className={cn(
                "card-enter opacity-0",
                glowMap[course.originalColor] || "card-glow-blue",
                `stagger-${index + 1}`
              )}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div
          className="text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "500ms" }}
        >
          <Button variant="hero-outline" size="lg" className="group" asChild>
            <Link to="/cursos">
              Ver todos los cursos
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
