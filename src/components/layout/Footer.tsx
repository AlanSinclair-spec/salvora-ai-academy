import { Link } from "react-router-dom";
import salvoraLogo from "@/assets/salvora-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="salvora-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={salvoraLogo} alt="Salvora" className="w-8 h-8 object-contain rounded-md" />
              <span className="font-display text-lg font-semibold text-foreground tracking-tight">
                Salvora
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Plataforma nacional de educación en Inteligencia Artificial para El Salvador.
              Cursos gratuitos para estudiantes y maestros.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/cursos", label: "Cursos" },
                { to: "/maestro", label: "Herramientas para Maestros" },
                { to: "/estudiante", label: "Herramientas para Estudiantes" },
                { to: "/programas", label: "Programas" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>El Salvador</li>
              <li>
                <a href="mailto:info@salvora.edu.sv" className="hover:text-foreground transition-colors">
                  info@salvora.edu.sv
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Salvora. Educación en IA para todos.
          </p>
        </div>
      </div>
    </footer>
  );
}