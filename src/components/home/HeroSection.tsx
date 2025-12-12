import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-salvora-blue-light to-background">
      <div className="salvora-container py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            Tu plataforma nacional para aprender{" "}
            <span className="text-primary">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Cursos gratuitos en IA para estudiantes y maestros salvadoreños. 
            Aprende a tu ritmo, desde cualquier lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/cursos">
                Empieza Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/cursos">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Cursos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Gratis</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary">24/7</p>
              <p className="text-sm text-muted-foreground mt-1">Acceso</p>
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
