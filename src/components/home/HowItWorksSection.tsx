import { BookOpen, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Aprende fundamentos",
    description: "Cursos estructurados sobre qué es la IA, cómo funciona y cómo usarla de forma responsable.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Usa IA en clases",
    description: "Herramientas prácticas: chat para dudas, simplificador de textos, asistente de matemáticas.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Crea el futuro",
    description: "Aplica tus conocimientos para resolver problemas reales y construir oportunidades.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="salvora-container">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Cómo funciona</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
            Un camino claro desde cero hasta dominar la IA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border/50" />
              )}
              
              <div className="p-8 rounded-lg border border-border/50 bg-card/50 hover:border-border transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-3xl font-semibold text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}