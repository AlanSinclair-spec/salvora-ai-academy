import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  School,
  Users,
  Award,
  Building2,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Bot,
  Sparkles,
  Globe,
  BookOpen,
  Server,
  GraduationCap,
  Rocket,
  Lightbulb,
  Clock,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Programa Escolar",
    description: "Implementa educacion en IA en tu centro educativo con nuestro programa completo.",
    icon: School,
    color: "bg-primary",
    features: [
      "Curriculo adaptado al sistema educativo salvadoreno",
      "Capacitacion para docentes en uso de Grok",
      "Materiales didacticos incluidos",
      "Herramientas de IA para el aula",
      "Soporte tecnico continuo",
    ],
    cta: "Solicitar para mi escuela",
  },
  {
    title: "Formacion Docente",
    description: "Programa de certificacion para maestros que quieren ensenar con IA.",
    icon: Users,
    color: "bg-salvora-green",
    features: [
      "40 horas de formacion intensiva",
      "Metodologias de ensenanza con Grok",
      "Recursos pedagogicos digitales",
      "Comunidad de educadores",
      "Certificado oficial",
    ],
    cta: "Inscribirse como docente",
  },
  {
    title: "IA para Estudiantes",
    description: "Programa enfocado en uso responsable de IA para estudiar mejor.",
    icon: BookOpen,
    color: "bg-salvora-purple",
    features: [
      "Tecnicas de estudio con IA",
      "Prevencion de plagio",
      "Pensamiento critico digital",
      "Proyectos practicos",
      "Acceso a herramientas Salvora",
    ],
    cta: "Comenzar ahora",
    link: "/estudiante",
  },
  {
    title: "Programa Empresarial",
    description: "Capacita a tu equipo en las herramientas de IA mas relevantes.",
    icon: Building2,
    color: "bg-salvora-orange",
    features: [
      "Contenido personalizado",
      "Talleres presenciales o virtuales",
      "Casos de uso especificos",
      "Metricas de aprendizaje",
      "Soporte post-programa",
    ],
    cta: "Contactar ventas",
  },
];

const upcomingEvents = [
  {
    title: "Taller: Primeros Pasos con Grok",
    date: "15 de Febrero, 2025",
    location: "Virtual",
    spots: 50,
  },
  {
    title: "Seminario: IA en la Educacion Salvadorena",
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

// 3-Step Journey data
const partnershipSteps = [
  {
    step: 1,
    icon: Server,
    title: "Infraestructura de IA",
    description: "El gobierno de El Salvador, en alianza con xAI, despliega modelos avanzados como Grok en escuelas publicas, democratizando el acceso a tecnologia de vanguardia.",
    color: "bg-primary",
  },
  {
    step: 2,
    icon: GraduationCap,
    title: "Capacitacion y Alfabetizacion",
    description: "Salvora ensena a maestros y estudiantes como usar IA de forma responsable, etica y alineada al curriculo educativo salvadoreno.",
    color: "bg-salvora-green",
  },
  {
    step: 3,
    icon: Rocket,
    title: "Impacto en el Futuro",
    description: "Esta iniciativa posiciona a El Salvador como hub emergente de tecnologia e innovacion educativa en America Latina.",
    color: "bg-salvora-purple",
  },
];

// Integration points
const integrationPoints = [
  {
    icon: FileText,
    title: "Plantillas de Prompts para Grok",
    description: "Prompts pre-disenados y optimizados para uso educativo.",
  },
  {
    icon: BookOpen,
    title: "Cursos 'Como usar IA en clase'",
    description: "Contenido especifico para integrar IA en el aula.",
  },
  {
    icon: Clock,
    title: "Herramientas que Ahorran Tiempo",
    description: "Generadores de planes, quizzes y rubricas automatizados.",
  },
  {
    icon: Lightbulb,
    title: "Enfoque en Aprendizaje",
    description: "Herramientas que guian, no dan respuestas directas.",
  },
];

const Programas = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section - xAI Partnership Story */}
      <div className="py-16 md:py-24">
        <div className="salvora-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Partnership Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Iniciativa Nacional de IA
            </div>

            <h1
              className="text-3xl md:text-5xl font-black text-foreground mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Alianza de{" "}
              <span className="gradient-text">Inteligencia Artificial</span>{" "}
              en El Salvador
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Salvora complementa el despliegue nacional de IA al preparar a maestros
              y estudiantes para usar herramientas como Grok de xAI de forma responsable
              y efectiva en el aula.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/cursos">
                  Comenzar a Aprender
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/maestro">
                  Soy Maestro
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Step Visual Journey */}
      <section className="salvora-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Como Funciona la Alianza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ecosistema completo que conecta infraestructura, educacion e innovacion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Connector line */}
              {index < partnershipSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border z-0" />
              )}

              <div className="relative bg-card rounded-xl border border-border p-6 text-center z-10">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mb-2">
                  PASO {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Salvora Integrates */}
      <section className="bg-card/30 py-16">
        <div className="salvora-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como se Integra Salvora
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Herramientas practicas que hacen la diferencia en el aula.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationPoints.map((point, index) => (
              <div
                key={point.title}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all hover:-translate-y-1 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original xAI Partnership Detail Section */}
      <section className="salvora-container py-16">
        <div className="bg-gradient-to-r from-primary/10 via-salvora-purple/10 to-salvora-green/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                <Bot className="w-4 h-4" />
                Alianza Estrategica
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Salvora + xAI para El Salvador
              </h2>
              <p className="text-muted-foreground mb-6">
                Como parte de la alianza entre xAI y El Salvador, Salvora es la plataforma
                educativa oficial que ensena a estudiantes y maestros a usar Grok de forma
                efectiva y responsable.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Acceso a Grok</p>
                    <p className="text-sm text-muted-foreground">
                      Herramientas de IA de ultima generacion para educacion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-salvora-green mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Contenido Local</p>
                    <p className="text-sm text-muted-foreground">
                      Cursos disenados especificamente para El Salvador
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-salvora-purple mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Certificacion</p>
                    <p className="text-sm text-muted-foreground">
                      Reconocimiento oficial para estudiantes y maestros
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Que es Grok?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Grok es un asistente de IA desarrollado por xAI que puede ayudarte a:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  Responder preguntas complejas
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  Explicar conceptos dificiles
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  Ayudar con tareas de investigacion
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  Generar contenido educativo
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  Resolver problemas matematicos
                </li>
              </ul>
              <Button variant="hero" className="w-full mt-6" asChild>
                <Link to="/cursos">
                  Aprender a usar Grok
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

                <Button
                  variant="hero-outline"
                  className="w-full"
                  asChild={!!program.link}
                >
                  {program.link ? (
                    <Link to={program.link}>
                      {program.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <>
                      {program.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <section className="bg-card/50 rounded-2xl border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Proximos Eventos
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
                  <p>Ubicacion: {event.location}</p>
                  <p>Cupos: {event.spots} disponibles</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled
                  title="Inscripciones próximamente"
                >
                  Inscribirse (Próximamente)
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16 py-12 px-8 bg-primary rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Listo para empezar?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Unete a miles de salvadorenos que ya estan aprendiendo a usar la Inteligencia Artificial de forma efectiva.
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
