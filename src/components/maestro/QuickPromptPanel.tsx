// Quick Prompt Panel - "Modo Aula" templates for teachers
// Grid of quick-action buttons with variable input

import { useState } from "react";
import {
  MessageSquare,
  HelpCircle,
  Lightbulb,
  ClipboardList,
  BookOpen,
  Users,
  Zap,
  LogOut,
  Copy,
  Check,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  classroomPrompts,
  fillTemplate,
  type ClassroomPrompt,
} from "@/data/classroom-prompts";

// Icon mapping
const iconMap: Record<string, typeof MessageSquare> = {
  MessageSquare,
  HelpCircle,
  Lightbulb,
  ClipboardList,
  BookOpen,
  Users,
  Zap,
  LogOut,
};

// Category colors
const categoryColors: Record<string, string> = {
  explicacion: "bg-primary/10 text-primary border-primary/20",
  evaluacion: "bg-salvora-orange/10 text-salvora-orange border-salvora-orange/20",
  actividad: "bg-salvora-green/10 text-salvora-green border-salvora-green/20",
  diferenciacion: "bg-salvora-purple/10 text-salvora-purple border-salvora-purple/20",
};

interface QuickPromptPanelProps {
  onPromptGenerated?: (prompt: string) => void;
}

export function QuickPromptPanel({ onPromptGenerated }: QuickPromptPanelProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<ClassroomPrompt | null>(null);
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSelectPrompt = (prompt: ClassroomPrompt) => {
    setSelectedPrompt(prompt);
    setVariableValues({});
    setGeneratedPrompt("");
  };

  const handleGeneratePrompt = () => {
    if (!selectedPrompt) return;

    // Check if all variables are filled
    const missingVars = selectedPrompt.variables.filter(
      (v) => !variableValues[v] || variableValues[v].trim() === ""
    );

    if (missingVars.length > 0) {
      toast({
        title: "Campos incompletos",
        description: `Por favor completa: ${missingVars.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    const filled = fillTemplate(selectedPrompt.template, variableValues);
    setGeneratedPrompt(filled);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      toast({
        title: "Copiado",
        description: "Prompt listo para usar.",
      });
      setTimeout(() => setCopied(false), 2000);
      onPromptGenerated?.(generatedPrompt);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setSelectedPrompt(null);
    setVariableValues({});
    setGeneratedPrompt("");
  };

  // Get variable label (human readable)
  const getVariableLabel = (variable: string): string => {
    const labels: Record<string, string> = {
      TEMA: "Tema",
      GRADO: "Grado",
      DURACION: "Duracion (minutos)",
      TIPO_TRABAJO: "Tipo de trabajo",
      TEXTO: "Texto a simplificar",
    };
    return labels[variable] || variable;
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-salvora-purple/10 to-primary/10 px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Zap className="w-4 h-4 text-salvora-purple" />
          Plantillas Modo Aula
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Prompts guiados para uso seguro en el salon de clases
        </p>
      </div>

      {/* Prompt Grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {classroomPrompts.map((prompt) => {
          const Icon = iconMap[prompt.icon] || MessageSquare;
          const colorClass = categoryColors[prompt.category];

          return (
            <button
              key={prompt.id}
              onClick={() => handleSelectPrompt(prompt)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border ${colorClass} hover:scale-105 transition-transform cursor-pointer`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center leading-tight">
                {prompt.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dialog for variable input */}
      <Dialog open={!!selectedPrompt} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedPrompt && (
                <>
                  {(() => {
                    const Icon = iconMap[selectedPrompt.icon] || MessageSquare;
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  {selectedPrompt.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedPrompt?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Variable Inputs */}
            {selectedPrompt?.variables.map((variable) => (
              <div key={variable} className="space-y-2">
                <Label htmlFor={variable}>{getVariableLabel(variable)}</Label>
                {variable === "TEXTO" ? (
                  <Textarea
                    id={variable}
                    placeholder={`Ingresa ${getVariableLabel(variable).toLowerCase()}`}
                    value={variableValues[variable] || ""}
                    onChange={(e) =>
                      setVariableValues((prev) => ({
                        ...prev,
                        [variable]: e.target.value,
                      }))
                    }
                    rows={3}
                  />
                ) : (
                  <Input
                    id={variable}
                    placeholder={
                      variable === "GRADO"
                        ? "Ej: 7mo grado"
                        : variable === "DURACION"
                        ? "Ej: 15"
                        : `Ingresa ${getVariableLabel(variable).toLowerCase()}`
                    }
                    value={variableValues[variable] || ""}
                    onChange={(e) =>
                      setVariableValues((prev) => ({
                        ...prev,
                        [variable]: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
            ))}

            {/* Generate Button */}
            {!generatedPrompt && (
              <Button onClick={handleGeneratePrompt} className="w-full">
                Generar prompt
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}

            {/* Generated Prompt */}
            {generatedPrompt && (
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3 text-sm text-foreground/90 max-h-48 overflow-y-auto">
                  {generatedPrompt}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setGeneratedPrompt("")}
                    className="flex-1"
                  >
                    Editar
                  </Button>
                  <Button onClick={handleCopy} className="flex-1">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2 text-salvora-green" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
