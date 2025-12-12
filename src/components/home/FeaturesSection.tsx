import { BookOpen, Users, Award, Smartphone } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Contenido Estructurado",
    description: "Lecciones organizadas en unidades progresivas, con videos, lecturas y ejercicios prácticos.",
  },
  {
    icon: Users,
    title: "Para Todos",
    description: "Recursos para estudiantes de todos los niveles y herramientas especiales para maestros.",
  },
  {
    icon: Award,
    title: "Certificados",
    description: "Obtén certificados al completar cursos para demostrar tus conocimientos.",
  },
  {
    icon: Smartphone,
    title: "Móvil Primero",
    description: "Diseñado para funcionar perfectamente en celulares, incluso con conexiones lentas.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="salvora-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            ¿Por qué Salvora?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una plataforma diseñada específicamente para las necesidades educativas de El Salvador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
