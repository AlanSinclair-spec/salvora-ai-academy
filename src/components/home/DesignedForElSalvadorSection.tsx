import { MapPin, Wifi, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Contenido local",
    description: "Ejemplos salvadoreños, contexto de nuestra realidad",
  },
  {
    icon: Wifi,
    title: "Baja conectividad",
    description: "Funciona con 3G, carga rápido, ahorra datos",
  },
  {
    icon: Users,
    title: "Aulas grandes",
    description: "Diseñado para 40+ estudiantes por salón",
  },
];

export function DesignedForElSalvadorSection() {
  return (
    <section className="relative overflow-hidden py-16 hero-dark">
      {/* Decorative orbs */}
      <div className="orb orb-electric w-[400px] h-[400px] -top-40 right-0 animate-pulse-glow opacity-20" />
      <div className="orb orb-cyan w-[300px] h-[300px] -bottom-20 -left-20 animate-pulse-glow opacity-20" style={{ animationDelay: "1s" }} />

      <div className="salvora-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Diseñado para El Salvador,{" "}
            <span className="text-gradient">no para Silicon Valley</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Cada decisión de diseño considera las realidades de las escuelas salvadoreñas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 glass-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-salvora-cyan/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-salvora-cyan" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
