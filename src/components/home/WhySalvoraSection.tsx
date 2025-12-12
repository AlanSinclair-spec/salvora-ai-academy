import { AlertTriangle, Users, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Brecha de IA",
    description: "Mientras otros países avanzan, millones de estudiantes salvadoreños aún no tienen acceso a educación sobre inteligencia artificial. Esta brecha crece cada día.",
    color: "salvora-orange",
  },
  {
    icon: Users,
    title: "Maestros saturados",
    description: "Los docentes enfrentan aulas de 40+ estudiantes sin herramientas para integrar IA. Necesitan recursos prácticos, no más carga de trabajo.",
    color: "salvora-purple",
  },
  {
    icon: Sparkles,
    title: "Oportunidad histórica",
    description: "El Salvador puede ser el primer país en alfabetizar a toda una generación en IA. El momento es ahora, y Salvora es el vehículo.",
    color: "salvora-cyan",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  "salvora-orange": {
    bg: "bg-salvora-orange/10",
    text: "text-salvora-orange",
    border: "border-salvora-orange/20",
  },
  "salvora-purple": {
    bg: "bg-salvora-purple/10",
    text: "text-salvora-purple",
    border: "border-salvora-purple/20",
  },
  "salvora-cyan": {
    bg: "bg-salvora-cyan/10",
    text: "text-salvora-cyan",
    border: "border-salvora-cyan/20",
  },
};

export function WhySalvoraSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb bg-salvora-orange/15 w-80 h-80 -top-20 -right-20 -z-10" style={{ animation: "float-slow 10s ease-in-out infinite" }} />
      <div className="floating-orb bg-salvora-purple/10 w-64 h-64 bottom-10 -left-20 -z-10" style={{ animation: "float 8s ease-in-out 2s infinite" }} />

      <div className="salvora-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por qué Salvora existe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No es solo una plataforma educativa. Es una respuesta a un momento decisivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const colors = colorClasses[reason.color];
            return (
              <div
                key={reason.title}
                className={`relative p-8 rounded-2xl border ${colors.border} bg-card hover:shadow-xl transition-all duration-300 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.text} mb-6 group-hover:scale-110 transition-transform`}>
                  <reason.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
