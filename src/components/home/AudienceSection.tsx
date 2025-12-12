import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, School, ArrowRight, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    id: "teachers",
    icon: School,
    title: "Para Maestros",
    description: "Integra la IA en tu enseñanza sin esfuerzo extra",
    color: "from-salvora-purple to-salvora-blue",
    href: "/maestro",
    cta: "Explorar herramientas",
    benefits: [
      "Planificador de lecciones con IA",
      "Generador de quizzes automático",
      "Plantillas de prompts para el aula",
      "Recursos listos para usar",
      "Funciona offline",
    ],
  },
  {
    id: "students",
    icon: GraduationCap,
    title: "Para Estudiantes",
    description: "Aprende a usar la IA para estudiar mejor, no para copiar",
    color: "from-salvora-electric to-salvora-cyan",
    href: "/estudiante",
    cta: "Empezar a aprender",
    benefits: [
      "Chat seguro para resolver dudas",
      "Simplificador de textos difíciles",
      "Asistente de matemáticas paso a paso",
      "Cursos sobre IA y su uso responsable",
      "Funciona en cualquier celular",
    ],
  },
];

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="salvora-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Para quién es Salvora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas especializadas para cada rol en el proceso educativo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10 rounded-3xl border border-border bg-card hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center shrink-0`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {audience.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-salvora-green shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${audience.color} hover:opacity-90 text-white font-semibold`}
                  size="lg"
                  asChild
                >
                  <Link to={audience.href}>
                    {audience.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
