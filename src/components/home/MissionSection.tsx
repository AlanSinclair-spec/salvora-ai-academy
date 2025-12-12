export function MissionSection() {
  return (
    <section className="py-16 hero-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="orb orb-electric w-[200px] h-[200px] top-0 left-1/4 animate-pulse-glow opacity-20" />
      <div className="orb orb-cyan w-[150px] h-[150px] bottom-0 right-1/3 animate-pulse-glow opacity-20" style={{ animationDelay: "1.5s" }} />

      <div className="salvora-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Flag and badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-white mb-6">
            <span className="text-2xl">🇸🇻</span>
            <span className="font-medium">Hecho por jóvenes para el futuro de El Salvador</span>
          </div>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Salvora nace de la convicción de que El Salvador puede ser un{" "}
            <span className="text-salvora-cyan font-semibold">hub global de tecnología e innovación</span>. 
            Nuestra misión es que ningún estudiante se quede atrás en la era de la IA.
          </p>

          {/* Tagline */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-display text-sm text-white/50 tracking-wider uppercase">
              Educando a una nación, un estudiante a la vez
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
