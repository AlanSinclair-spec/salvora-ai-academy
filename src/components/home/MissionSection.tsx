export function MissionSection() {
  return (
    <section className="py-20 md:py-24 border-y border-border/30 bg-card/30">
      <div className="salvora-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/50 mb-8">
            <span className="text-xl">🇸🇻</span>
            <span className="text-sm text-muted-foreground">Hecho por jóvenes para el futuro de El Salvador</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Salvora nace de la convicción de que El Salvador puede ser un{" "}
            <span className="text-primary font-medium">hub global de tecnología e innovación</span>. 
            Nuestra misión es que ningún estudiante se quede atrás en la era de la IA.
          </p>

          <div className="mt-10 pt-10 border-t border-border/30">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Educando a una nación, un estudiante a la vez
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}