import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import Leccion from "./pages/Leccion";
import Maestro from "./pages/Maestro";
import Estudiante from "./pages/Estudiante";
import Programas from "./pages/Programas";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <ProgressProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/leccion/:cursoId/:unidadId/:leccionId" element={<Leccion />} />
              <Route path="/maestro" element={<Maestro />} />
              <Route path="/estudiante" element={<Estudiante />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/configuracion" element={<Configuracion />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ProgressProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;
