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
    title: "Usa IA en clases y tareas",
    description: "Herramientas prácticas: chat para dudas, simplificador de textos, asistente de matemáticas.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Crea el futuro de El Salvador",
    description: "Aplica tus conocimientos para resolver problemas reales y construir oportunidades.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="salvora-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo funciona Salvora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un camino claro desde cero hasta dominar la IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-display font-bold text-lg mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-salvora-cyan/20 mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
