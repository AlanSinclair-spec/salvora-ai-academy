import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { courses } from "@/data/courses";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeroSection() {
  // Calculate actual totals from course data
  const totalCourses = courses.length;
  const totalLessons = courses.reduce(
    (acc, course) => acc + course.units.reduce(
      (unitAcc, unit) => unitAcc + unit.lessons.length, 0
    ), 0
  );

  return (
    <section className="relative overflow-hidden">
      <div className="salvora-container py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partnership Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            En alianza con xAI para El Salvador
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Aprende a usar{" "}
            <span className="gradient-text">Inteligencia Artificial</span>{" "}
            de forma efectiva
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Plataforma gratuita para estudiantes y maestros salvadorenos.
            Aprende a usar Grok y otras herramientas de IA para mejorar tu aprendizaje y ensenanza.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="xl" className="group hover-glow" asChild>
              <Link to="/cursos">
                Empezar a Aprender
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="group" asChild>
              <Link to="/maestro">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Soy Maestro
              </Link>
            </Button>
          </div>

          {/* Stats with animated counters */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 opacity-0 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-black text-primary transition-transform group-hover:scale-110">
                <AnimatedCounter value={totalCourses} duration={1500} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Cursos</p>
            </div>
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-black text-primary transition-transform group-hover:scale-110">
                <AnimatedCounter value={totalLessons} duration={2000} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Lecciones</p>
            </div>
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-black text-primary transition-transform group-hover:scale-110">
                <AnimatedCounter value={100} duration={1000} suffix="%" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Gratis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative orbs */}
      <div className="floating-orb floating-orb-1 top-20 left-10 -z-10" />
      <div className="floating-orb floating-orb-2 bottom-20 right-10 -z-10" />
      <div className="floating-orb floating-orb-3 top-1/2 left-1/4 -z-10" />

      {/* Sparkle particles */}
      <Sparkles className="absolute top-32 right-1/4 w-6 h-6 text-primary/30 animate-sparkle" />
      <Sparkles className="absolute bottom-40 left-1/3 w-4 h-4 text-salvora-purple/30 animate-sparkle" style={{ animationDelay: "0.5s" }} />
      <Sparkles className="absolute top-1/2 right-1/3 w-5 h-5 text-salvora-green/30 animate-sparkle" style={{ animationDelay: "1s" }} />
    </section>
  );
}
