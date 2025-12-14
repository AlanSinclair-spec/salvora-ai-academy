// AI Error Block - "Si la IA se equivoca"
// Collapsed by default, teaches critical AI literacy

import { useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, Search, MessageSquare, Scale, BookOpen } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

interface AIErrorBlockProps {
  tips?: string[];
}

// Default tips if none provided
const defaultTips = [
  "Verificar la informacion con fuentes confiables",
  "Pedir a la IA que aclare o explique su respuesta",
  "Comparar respuestas pidiendo explicaciones alternativas",
  "Consultar con tu maestro o fuentes oficiales",
];

// Icons for each tip action
const tipIcons = [
  Search,
  MessageSquare,
  Scale,
  BookOpen,
];

export function AIErrorBlock({ tips = defaultTips }: AIErrorBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <div className="bg-amber-500/5 rounded-xl border border-amber-500/20">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-4 hover:bg-transparent"
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="font-medium text-foreground">
                Si la IA se equivoca
              </span>
              <span className="text-xs text-muted-foreground">
                (alfabetizacion critica)
              </span>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-4 pb-4">
            <p className="text-sm text-muted-foreground mb-4">
              La IA puede cometer errores. Aqui tienes estrategias para manejarlos:
            </p>

            <div className="space-y-3">
              {tips.map((tip, index) => {
                const Icon = tipIcons[index % tipIcons.length];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card/50 rounded-lg p-3 border border-border/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{tip}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-card rounded-lg border border-border">
              <p className="text-xs text-muted-foreground text-center">
                <strong className="text-foreground">Recuerda:</strong> La IA es una herramienta,
                no una fuente de verdad absoluta. Tu pensamiento critico es esencial.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
