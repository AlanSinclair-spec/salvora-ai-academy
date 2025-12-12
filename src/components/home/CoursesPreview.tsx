import { Link } from "react-router-dom";
import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Sparkles, Code, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Introducción a la IA",
    description: "Aprende los conceptos fundamentales de la Inteligencia Artificial y cómo está transformando el mundo.",
    icon: Brain,
    color: "blue" as const,
    href: "/cursos/introduccion-ia",
    lessons: 12,
  },
  {
    title: "IA Generativa",
    description: "Descubre cómo funcionan las herramientas de IA generativa como ChatGPT y cómo usarlas efectivamente.",
    icon: Sparkles,
    color: "purple" as const,
    href: "/cursos/ia-generativa",
    lessons: 8,
  },
  {
    title: "Prompting Efectivo",
    description: "Domina el arte de escribir prompts para obtener mejores resultados de los modelos de IA.",
    icon: Bot,
    color: "green" as const,
    href: "/cursos/prompting",
    lessons: 10,
  },
  {
    title: "IA para Programadores",
    description: "Aprende a integrar herramientas de IA en tu flujo de trabajo de desarrollo.",
    icon: Code,
    color: "orange" as const,
    href: "/cursos/ia-programadores",
    lessons: 15,
  },
];

export function CoursesPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="salvora-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Explora Nuestros Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cursos diseñados para estudiantes y educadores salvadoreños, desde conceptos básicos hasta aplicaciones avanzadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/cursos">
              Ver todos los cursos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
