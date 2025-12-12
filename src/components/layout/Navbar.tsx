import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings, WifiOff, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";
import salvoraLogo from "@/assets/salvora-logo.png";

// Custom hook for scroll progress
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
  const scrollProgress = useScrollProgress();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <nav className="salvora-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={salvoraLogo} alt="Salvora" className="w-10 h-10 object-contain rounded-lg" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
                  "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full animate-scale-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-2">
            {/* Classroom Mode Indicator */}
            {settings.classroomMode && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <School className="w-3 h-3" />
                <span>Modo Aula</span>
              </div>
            )}

            {/* Lite Mode Indicator */}
            {settings.liteMode && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-salvora-orange/10 text-salvora-orange text-xs font-medium">
                <WifiOff className="w-3 h-3" />
                <span>Modo Ligero</span>
              </div>
            )}

            {/* Settings Link */}
            <Link
              to="/configuracion"
              className={cn(
                "p-2 rounded-md transition-colors",
                location.pathname === "/configuracion"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              aria-label="Configuracion"
            >
              <Settings className="w-5 h-5" />
            </Link>

            {/* CTA Button */}
            <Button variant="hero" size="sm" className="transition-transform hover:scale-105 active:scale-95" asChild>
              <Link to="/cursos">Empieza Ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Classroom Mode Indicator (Mobile) */}
            {settings.classroomMode && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <School className="w-4 h-4 text-primary" />
              </div>
            )}
            {/* Lite Mode Indicator (Mobile) */}
            {settings.liteMode && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-salvora-orange/10">
                <WifiOff className="w-4 h-4 text-salvora-orange" />
              </div>
            )}
            <button
              className="p-2 rounded-md hover:bg-muted transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 animate-spin-once" />
              ) : (
                <Menu className="w-6 h-6 transition-transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in-top overflow-hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-all duration-200 opacity-0 animate-slide-up",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-1"
                  )}
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Settings Link (Mobile) */}
              <Link
                to="/configuracion"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-2 opacity-0 animate-slide-up",
                  location.pathname === "/configuracion"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-1"
                )}
                style={{ animationDelay: `${navLinks.length * 50}ms`, animationFillMode: "forwards" }}
              >
                <Settings className="w-5 h-5" />
                Configuracion
              </Link>

              <div
                className="pt-2 mt-2 border-t border-border opacity-0 animate-slide-up"
                style={{ animationDelay: `${(navLinks.length + 1) * 50}ms`, animationFillMode: "forwards" }}
              >
                <Button variant="hero" className="w-full transition-transform hover:scale-[1.02] active:scale-[0.98]" asChild>
                  <Link to="/cursos" onClick={() => setIsOpen(false)}>
                    Empieza Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
