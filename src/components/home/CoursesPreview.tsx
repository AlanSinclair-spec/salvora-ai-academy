import { Link } from "react-router-dom";
import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, BookOpen, Globe, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

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
  teal: "green",
};

export function CoursesPreview() {
  const previewCourses = courses.slice(0, 4).map(course => {
    const totalLessons = course.units.reduce((acc, unit) => acc + unit.lessons.length, 0);
    const firstLesson = course.units[0]?.lessons[0];

    return {
      title: course.title,
      description: course.description,
      icon: iconMap[course.icon] || Brain,
      color: colorMap[course.color] || "blue",
      href: firstLesson
        ? `/leccion/${course.id}/${course.units[0].id}/${firstLesson.id}`
        : `/cursos`,
      lessons: totalLessons,
    };
  });

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="salvora-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Explora nuestros cursos
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Desde los fundamentos hasta aplicaciones avanzadas de IA.
            </p>
          </div>
          <Button variant="ghost" className="self-start md:self-auto group text-primary hover:text-primary" asChild>
            <Link to="/cursos">
              Ver todos los cursos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
