import { Link } from "react-router-dom";
import salvoraLogo from "@/assets/salvora-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/50">
      <div className="salvora-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={salvoraLogo} alt="Salvora" className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-xl font-bold text-foreground">Salvora</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Plataforma nacional de educación en Inteligencia Artificial para El Salvador. 
              Cursos gratuitos para estudiantes y maestros.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cursos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/maestro" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Herramientas para Maestros
                </Link>
              </li>
              <li>
                <Link to="/estudiante" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Herramientas para Estudiantes
                </Link>
              </li>
              <li>
                <Link to="/programas" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Programas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>El Salvador</li>
              <li>info@salvora.edu.sv</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Salvora. Educación en IA para todos.</p>
        </div>
      </div>
    </footer>
  );
}
