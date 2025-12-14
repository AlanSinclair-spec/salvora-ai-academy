// Safe Prompt Block - "Pruebalo con IA"
// Shows copyable prompt templates with good/bad examples

import { useState } from "react";
import { Sparkles, Copy, Check, CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import type { SafePromptExample } from "@/types/courses";

interface SafePromptBlockProps {
  safePrompts: SafePromptExample[];
  toolLink?: string; // e.g., "/estudiante" or "/maestro"
}

export function SafePromptBlock({ safePrompts, toolLink = "/estudiante" }: SafePromptBlockProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCopy = async (prompt: string, index: number) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedIndex(index);
      toast({
        title: "Prompt copiado",
        description: "Listo para usar con la IA.",
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      toast({
        title: "Error al copiar",
        description: "Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  if (!safePrompts || safePrompts.length === 0) return null;

  return (
    <div className="mb-6 bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-salvora-purple/10 px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-foreground">Pruebalo con IA</h4>
          </div>
          <span className="text-xs text-muted-foreground italic">
            aprende, no copies
          </span>
        </div>
      </div>

      {/* Prompts */}
      <div className="p-4 space-y-4">
        {safePrompts.map((promptExample, index) => (
          <div key={index} className="space-y-3">
            {/* Template */}
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Plantilla de prompt
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(promptExample.template, index)}
                  className="h-7 px-2 text-xs"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3 h-3 mr-1 text-salvora-green" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copiar
                    </>
                  )}
                </Button>
              </div>
              <p className="text-foreground font-mono text-sm">
                {promptExample.template}
              </p>
            </div>

            {/* Good/Bad Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Good Example */}
              <div className="bg-salvora-green/10 rounded-lg p-3 border border-salvora-green/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-salvora-green" />
                  <span className="text-xs font-medium text-salvora-green">
                    Buen prompt
                  </span>
                </div>
                <p className="text-sm text-foreground/90">
                  {promptExample.goodExample}
                </p>
              </div>

              {/* Bad Example */}
              <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-medium text-red-400">
                    Mal prompt
                  </span>
                </div>
                <p className="text-sm text-foreground/90">
                  {promptExample.badExample}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Action Button */}
        <div className="pt-2">
          <Link to={toolLink}>
            <Button variant="outline" className="w-full group">
              <Sparkles className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
              Usar este prompt
              <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
