import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings, WifiOff, School, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";
import { useAuth } from "@/contexts/AuthContext";
import salvoraLogo from "@/assets/salvora-logo.png";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/maestro", label: "Maestro" },
  { href: "/estudiante", label: "Estudiante" },
  { href: "/programas", label: "Programas" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSettings();
  const { user, signOut } = useAuth();
  const scrollProgress = useScrollProgress();

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      
      <nav className="salvora-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={salvoraLogo} alt="Salvora" className="w-8 h-8 object-contain rounded-md" />
            <span className="font-display text-lg font-semibold text-foreground tracking-tight">
              Salvora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors duration-200",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {settings.classroomMode && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/20 text-primary text-xs font-medium">
                <School className="w-3 h-3" />
                <span>Modo Aula</span>
              </div>
            )}

            {settings.liteMode && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-salvora-orange/20 text-salvora-orange text-xs font-medium">
                <WifiOff className="w-3 h-3" />
                <span>Modo Ligero</span>
              </div>
            )}

            <Link
              to="/configuracion"
              className={cn(
                "p-2 rounded-md transition-colors",
                location.pathname === "/configuracion"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Configuración"
            >
              <Settings className="w-4 h-4" />
            </Link>

            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50">
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-sm text-foreground max-w-[100px] truncate">
                    {user.user_metadata?.full_name || user.email?.split("@")[0]}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Cerrar sesión"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                  <Link to="/login">Iniciar Sesión</Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/registro">Registrarse</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {settings.classroomMode && (
              <div className="w-7 h-7 flex items-center justify-center rounded-full border border-primary/20">
                <School className="w-3.5 h-3.5 text-primary" />
              </div>
            )}
            {settings.liteMode && (
              <div className="w-7 h-7 flex items-center justify-center rounded-full border border-salvora-orange/20">
                <WifiOff className="w-3.5 h-3.5 text-salvora-orange" />
              </div>
            )}
            <button
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors opacity-0 animate-slide-up",
                    location.pathname === link.href
                      ? "text-foreground bg-secondary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                  )}
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/configuracion"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-colors flex items-center gap-2 opacity-0 animate-slide-up",
                  location.pathname === "/configuracion"
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                )}
                style={{ animationDelay: `${navLinks.length * 50}ms`, animationFillMode: "forwards" }}
              >
                <Settings className="w-4 h-4" />
                Configuración
              </Link>

              <div
                className="pt-3 mt-3 border-t border-border/30 opacity-0 animate-slide-up"
                style={{ animationDelay: `${(navLinks.length + 1) * 50}ms`, animationFillMode: "forwards" }}
              >
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/50">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground truncate">
                        {user.user_metadata?.full_name || user.email?.split("@")[0]}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Iniciar Sesión
                      </Link>
                    </Button>
                    <Button variant="default" className="w-full" asChild>
                      <Link to="/registro" onClick={() => setIsOpen(false)}>
                        Registrarse
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}