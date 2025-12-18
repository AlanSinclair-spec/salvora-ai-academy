import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { ReadinessProvider } from "@/contexts/ReadinessContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import Leccion from "./pages/Leccion";
import Maestro from "./pages/Maestro";
import Estudiante from "./pages/Estudiante";
import Programas from "./pages/Programas";
import Configuracion from "./pages/Configuracion";
import PromptsSeguro from "./pages/PromptsSeguro";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <ProgressProvider>
            <ReadinessProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cursos" element={<Cursos />} />
                  <Route path="/leccion/:cursoId/:unidadId/:leccionId" element={<Leccion />} />
                  <Route path="/maestro" element={<Maestro />} />
                  <Route path="/estudiante" element={<Estudiante />} />
                  <Route path="/programas" element={<Programas />} />
                  <Route path="/configuracion" element={<Configuracion />} />
                  <Route path="/prompts-seguros" element={<PromptsSeguro />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Registro />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TooltipProvider>
            </ReadinessProvider>
          </ProgressProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
