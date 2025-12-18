import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeroSection() {
  const totalCourses = courses.length;
  const totalLessons = courses.reduce(
    (acc, course) => acc + course.units.reduce(
      (unitAcc, unit) => unitAcc + unit.lessons.length, 0
    ), 0
  );

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Subtle background orbs */}
      <div className="floating-orb floating-orb-1 -top-40 -left-40 -z-10" />
      <div className="floating-orb floating-orb-2 -bottom-60 -right-40 -z-10" />

      <div className="salvora-container py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl">
          {/* Minimal badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground text-sm mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
            En alianza con xAI
          </div>

          {/* Main headline - clean, serious */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Educación en{" "}
            <span className="gradient-text">Inteligencia Artificial</span>
            <br />
            para El Salvador
          </h1>

          {/* Subtext - restrained, clear */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 opacity-0 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Plataforma gratuita para estudiantes y maestros. 
            Aprende a usar Grok y herramientas de IA para transformar tu aprendizaje.
          </p>

          {/* CTAs - clean, confident */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 mb-16 opacity-0 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/cursos">
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="ghost" size="xl" className="text-muted-foreground hover:text-foreground" asChild>
              <Link to="/maestro">
                Soy Maestro
              </Link>
            </Button>
          </div>

          {/* Stats - minimal, refined */}
          <div
            className="flex flex-wrap gap-12 pt-8 border-t border-border/30 opacity-0 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="group">
              <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">
                <AnimatedCounter value={totalCourses} duration={1500} />
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Cursos</p>
            </div>
            <div className="group">
              <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">
                <AnimatedCounter value={totalLessons} duration={2000} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Lecciones</p>
            </div>
            <div className="group">
              <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-1 transition-colors group-hover:text-accent">
                <AnimatedCounter value={100} duration={1000} suffix="%" />
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Gratis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}