import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, School } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-dark min-h-[90vh] flex items-center">
      {/* Decorative orbs */}
      <div className="orb orb-electric w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow" />
      <div className="orb orb-cyan w-[500px] h-[500px] top-1/3 -right-32 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="orb orb-electric w-[300px] h-[300px] bottom-20 left-1/4 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
      
      {/* Subtle volcano silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.03]">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-white"
            d="M0,320L48,288C96,256,192,192,288,176C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="salvora-container relative z-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-salvora-cyan text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-salvora-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-salvora-cyan"></span>
            </span>
            En alianza con xAI para El Salvador
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            El Salvador, primer país en educar a toda una generación en{" "}
            <span className="text-gradient">IA</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Salvora es la plataforma nacional para que maestros y estudiantes aprendan a usar 
            inteligencia artificial con Grok y otras herramientas, desde cualquier rincón del país.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-salvora-electric to-salvora-cyan hover:opacity-90 text-white font-semibold shadow-lg glow-effect" 
              asChild
            >
              <Link to="/estudiante">
                <GraduationCap className="w-5 h-5 mr-2" />
                Empieza como Estudiante
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent" 
              asChild
            >
              <Link to="/maestro">
                <School className="w-5 h-5 mr-2" />
                Empieza como Maestro
              </Link>
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/80 text-sm">
              <span>🇸🇻</span>
              <span>Diseñado para escuelas públicas</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/80 text-sm">
              <span>🤝</span>
              <span>Complemento al despliegue de IA nacional</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/80 text-sm">
              <span>📱</span>
              <span>Funciona en teléfonos de baja gama</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
