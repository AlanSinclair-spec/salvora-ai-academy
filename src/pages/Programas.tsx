import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  School, 
  Users, 
  Award, 
  Building2,
  ArrowRight,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Programa Escolar",
    description: "Implementa educación en IA en tu centro educativo con nuestro programa completo.",
    icon: School,
    color: "bg-primary",
    features: [
      "Currículo adaptado al sistema educativo salvadoreño",
      "Capacitación para docentes",
      "Materiales didácticos incluidos",
      "Certificación para estudiantes",
      "Soporte técnico continuo",
    ],
    cta: "Solicitar para mi escuela",
  },
  {
    title: "Formación Docente",
    description: "Programa de certificación para maestros que quieren enseñar IA.",
    icon: Users,
    color: "bg-salvora-green",
    features: [
      "40 horas de formación intensiva",
      "Metodologías de enseñanza en IA",
      "Recursos pedagógicos",
      "Comunidad de educadores",
      "Certificado oficial",
    ],
    cta: "Inscribirse como docente",
  },
  {
    title: "Certificación Profesional",
    description: "Obtén una certificación reconocida en fundamentos de IA.",
    icon: Award,
    color: "bg-salvora-purple",
    features: [
      "Programa de 60 horas",
      "Proyecto práctico final",
      "Mentoría personalizada",
      "Certificado verificable",
      "Acceso a red de profesionales",
    ],
    cta: "Ver requisitos",
  },
  {
    title: "Programa Empresarial",
    description: "Capacita a tu equipo en las herramientas de IA más relevantes.",
    icon: Building2,
    color: "bg-salvora-orange",
    features: [
      "Contenido personalizado",
      "Talleres presenciales o virtuales",
      "Casos de uso específicos",
      "Métricas de aprendizaje",
      "Soporte post-programa",
    ],
    cta: "Contactar ventas",
  },
];

const upcomingEvents = [
  {
    title: "Taller: Primeros Pasos con ChatGPT",
    date: "15 de Febrero, 2025",
    location: "Virtual",
    spots: 50,
  },
  {
    title: "Seminario: IA en la Educación Salvadoreña",
    date: "22 de Febrero, 2025",
    location: "San Salvador",
    spots: 100,
  },
  {
    title: "Hackathon: Soluciones IA para El Salvador",
    date: "8-9 de Marzo, 2025",
    location: "Santa Ana",
    spots: 200,
  },
];

const Programas = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-salvora-blue-light to-background py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Programas Educativos
            </h1>
            <p className="text-lg text-muted-foreground">
              Iniciativas diseñadas para llevar la educación en IA a todos los rincones de El Salvador.
            </p>
          </div>
        </div>
      </div>

      <div className="salvora-container py-12">
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${program.color} p-6`}>
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {program.description}
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-salvora-green mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero-outline" className="w-full">
                  {program.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <section className="bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Próximos Eventos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-background rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-foreground mb-3">{event.title}</h4>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </p>
                  <p>📍 {event.location}</p>
                  <p>👥 {event.spots} cupos disponibles</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Inscribirse
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16 py-12 px-8 bg-primary rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Únete a miles de salvadoreños que ya están aprendiendo sobre Inteligencia Artificial.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link to="/cursos">
              Explorar Cursos Gratuitos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Programas;
