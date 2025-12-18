import { AlertTriangle, Users, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Brecha de IA",
    description: "Mientras otros países avanzan, millones de estudiantes salvadoreños aún no tienen acceso a educación sobre inteligencia artificial.",
  },
  {
    icon: Users,
    title: "Maestros saturados",
    description: "Los docentes enfrentan aulas de 40+ estudiantes sin herramientas para integrar IA. Necesitan recursos prácticos.",
  },
  {
    icon: Sparkles,
    title: "Oportunidad histórica",
    description: "El Salvador puede ser el primer país en alfabetizar a toda una generación en IA. El momento es ahora.",
  },
];

export function WhySalvoraSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="salvora-container">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Por qué existimos</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
            Una respuesta a un momento decisivo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 rounded-lg overflow-hidden">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-background p-8 md:p-10 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-muted-foreground font-medium tabular-nums">
                  0{index + 1}
                </span>
                <div className="w-8 h-px bg-border/50" />
              </div>
              
              <div className="mb-6">
                <reason.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}