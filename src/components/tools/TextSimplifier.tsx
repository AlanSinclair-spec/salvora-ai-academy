// Text Simplifier Tool Component
// Simplifies text to different reading levels

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Loader2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTextSimplifier } from "@/hooks/useAITools";

export function TextSimplifier() {
  const [text, setText] = useState("");
  const [activeLevel, setActiveLevel] = useState<"easy" | "medium" | "advanced">("easy");
  const [copied, setCopied] = useState(false);

  const { mutate, isPending, data, reset } = useTextSimplifier();

  const handleSimplify = () => {
    if (!text.trim()) return;
    mutate({ text });
  };

  const handleCopy = () => {
    if (!data) return;
    navigator.clipboard.writeText(data.levels[activeLevel]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const levels = [
    { id: "easy" as const, label: "Facil", description: "Para primaria" },
    { id: "medium" as const, label: "Medio", description: "Para secundaria" },
    { id: "advanced" as const, label: "Avanzado", description: "Para bachillerato" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
          <FileText className="w-5 h-5 text-salvora-purple" />
          Simplificador de Textos
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Pega un texto dificil y te lo simplificare a diferentes niveles de lectura.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Texto a simplificar
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Pega aqui el parrafo o texto que quieres simplificar..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button
            variant="hero"
            className="w-full"
            onClick={handleSimplify}
            disabled={isPending || !text.trim()}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Simplificando...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Simplificar texto
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results */}
      {data && (
        <div className="bg-card rounded-xl border border-salvora-purple/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-foreground">Texto Simplificado</h4>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Copiar texto"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-salvora-green" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <Button variant="ghost" size="sm" onClick={reset}>
                Nuevo texto
              </Button>
            </div>
          </div>

          {/* Level Tabs */}
          <div className="flex gap-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={cn(
                  "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                  activeLevel === level.id
                    ? "bg-salvora-purple text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <div>{level.label}</div>
                <div className="text-xs opacity-70">{level.description}</div>
              </button>
            ))}
          </div>

          {/* Simplified Content */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-muted-foreground whitespace-pre-wrap">
              {data.levels[activeLevel]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
