import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { courses } from "@/data/courses";

export function HeroSection() {
  // Calculate actual totals from course data
  const totalCourses = courses.length;
  const totalLessons = courses.reduce(
    (acc, course) => acc + course.units.reduce(
      (unitAcc, unit) => unitAcc + unit.lessons.length, 0
    ), 0
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-salvora-blue-light to-background">
      <div className="salvora-container py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            En alianza con xAI para El Salvador
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            Aprende a usar{" "}
            <span className="text-primary">Inteligencia Artificial</span>{" "}
            de forma efectiva
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Plataforma gratuita para estudiantes y maestros salvadorenos.
            Aprende a usar Grok y otras herramientas de IA para mejorar tu aprendizaje y ensenanza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/cursos">
                Empezar a Aprender
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/maestro">
                <Play className="w-5 h-5 mr-2" />
                Soy Maestro
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">{totalCourses}</p>
              <p className="text-sm text-muted-foreground mt-1">Cursos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">{totalLessons}+</p>
              <p className="text-sm text-muted-foreground mt-1">Lecciones</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Gratis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-salvora-green/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
