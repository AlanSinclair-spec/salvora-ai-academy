// Settings Page (Configuracion)
// App-wide settings for lite mode, offline storage, and more

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Wifi,
  WifiOff,
  Video,
  VideoOff,
  Download,
  Trash2,
  AlertCircle,
  CheckCircle,
  Globe,
  School,
  Moon,
  Sun,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useState } from "react";
import { ReadinessMeter } from "@/components/ui/ReadinessMeter";

interface SettingToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  icon: React.ReactNode;
  iconEnabled?: React.ReactNode;
}

function SettingToggle({ title, description, enabled, onChange, icon, iconEnabled }: SettingToggleProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
        enabled ? "bg-salvora-green/10 text-salvora-green" : "bg-muted text-muted-foreground"
      )}>
        {enabled && iconEnabled ? iconEnabled : icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        role="switch"
        aria-checked={enabled}
        aria-label={`${title}: ${enabled ? 'activado' : 'desactivado'}`}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          enabled ? "bg-salvora-green" : "bg-muted"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
            enabled ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}

function DangerZone() {
  const { clearProgress, getOverallProgress } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);
  const [cleared, setCleared] = useState(false);

  const completedCount = getOverallProgress().completed;

  const handleClear = () => {
    clearProgress();
    setCleared(true);
    setShowConfirm(false);
    setTimeout(() => setCleared(false), 3000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-destructive" />
        Zona de Peligro
      </h3>

      <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
            <Trash2 className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground">Borrar Progreso</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Elimina todo tu progreso guardado. Esta acción no se puede deshacer.
              {completedCount > 0 && (
                <span className="block mt-1 text-foreground">
                  Tienes {completedCount} {completedCount === 1 ? 'lección completada' : 'lecciones completadas'}.
                </span>
              )}
            </p>

            {cleared ? (
              <div className="flex items-center gap-2 text-salvora-green">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Progreso eliminado</span>
              </div>
            ) : showConfirm ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleClear}
                >
                  Sí, borrar todo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancelar
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="border-destructive/50 text-destructive hover:bg-destructive/10"
                onClick={() => setShowConfirm(true)}
                disabled={completedCount === 0}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Borrar progreso
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Configuracion = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <Layout>
      <div className="py-12">
        <div className="salvora-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Settings className="w-4 h-4" />
              <span>Preferencias</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Configuración
            </h1>
            <p className="text-lg text-muted-foreground">
              Personaliza tu experiencia en Salvora. Activa el modo ligero si tienes
              conexión lenta o un dispositivo de bajo rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div className="salvora-container py-12">
        <div className="max-w-2xl space-y-8">
          {/* Data Saving */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              Ahorro de Datos
            </h3>

            <SettingToggle
              title="Modo Ligero"
              description="Reduce el uso de datos mostrando transcripciones en lugar de videos. Ideal para conexiones lentas, limitadas o dispositivos de bajo rendimiento."
              enabled={settings.liteMode}
              onChange={(enabled) => updateSettings({ liteMode: enabled })}
              icon={<Wifi className="w-5 h-5" />}
              iconEnabled={<WifiOff className="w-5 h-5" />}
            />

            <SettingToggle
              title="Desactivar Videos"
              description="No cargar videos automáticamente. Útil si prefieres leer el contenido."
              enabled={settings.disableVideos}
              onChange={(enabled) => updateSettings({ disableVideos: enabled })}
              icon={<Video className="w-5 h-5" />}
              iconEnabled={<VideoOff className="w-5 h-5" />}
            />

            <SettingToggle
              title="Guardado Sin Conexión"
              description="Guarda el contenido de las lecciones para verlo sin internet (próximamente)."
              enabled={settings.offlineSaving}
              onChange={(enabled) => updateSettings({ offlineSaving: enabled })}
              icon={<Download className="w-5 h-5" />}
            />
          </div>

          {/* Classroom */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <School className="w-5 h-5 text-salvora-green" />
              Modo Aula
            </h3>

            <SettingToggle
              title="Modo Salón de Clases"
              description="Activa filtros más estrictos en las herramientas de IA para evitar que los estudiantes copien respuestas directamente. Las herramientas guiarán el aprendizaje en lugar de dar soluciones. Recomendado para uso escolar."
              enabled={settings.classroomMode}
              onChange={(enabled) => updateSettings({ classroomMode: enabled })}
              icon={<School className="w-5 h-5" />}
            />
          </div>

          {/* Language (locked) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-salvora-blue" />
              Idioma
            </h3>

            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-salvora-blue/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-salvora-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">Español</h4>
                  <p className="text-sm text-muted-foreground">
                    Salvora está diseñado para El Salvador y toda su interfaz está en español.
                  </p>
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  Único idioma
                </span>
              </div>
            </div>
          </div>

          {/* Theme */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              {settings.darkMode ? (
                <Moon className="w-5 h-5 text-salvora-purple" />
              ) : (
                <Sun className="w-5 h-5 text-salvora-orange" />
              )}
              Apariencia
            </h3>

            <SettingToggle
              title={settings.darkMode ? "Modo Oscuro" : "Modo Claro"}
              description="Cambia entre tema claro y oscuro según tu preferencia. El modo oscuro es más cómodo para los ojos en ambientes con poca luz."
              enabled={settings.darkMode}
              onChange={(enabled) => updateSettings({ darkMode: enabled })}
              icon={<Sun className="w-5 h-5" />}
              iconEnabled={<Moon className="w-5 h-5" />}
            />
          </div>

          {/* AI Readiness Score */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-salvora-purple" />
              Tu Preparación en IA
            </h3>

            <div className="p-4 bg-card rounded-xl border border-border">
              <ReadinessMeter showDetails />
              <p className="text-sm text-muted-foreground mt-4">
                Tu puntuación de preparación se calcula basándose en tu progreso en los cursos,
                precisión en las prácticas, y la completación de puntos clave de aprendizaje.
                Mientras más lecciones completes y mejor te vaya en las prácticas, más alta será tu puntuación.
              </p>
            </div>
          </div>

          {/* Danger Zone */}
          <DangerZone />

          {/* Version Info */}
          <div className="pt-8 border-t border-border">
            <div className="text-center text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Salvora v1.0.0</p>
              <p>Plataforma Nacional de Alfabetización en IA</p>
              <p className="mt-2">
                Desarrollado para El Salvador 🇸🇻
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Configuracion;
