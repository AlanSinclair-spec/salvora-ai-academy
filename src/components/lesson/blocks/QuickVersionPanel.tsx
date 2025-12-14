// Quick Version Panel - "Version rapida (1 minuto)"
// Collapsible panel with 3 bullet takeaways, local example, and safe prompt

import { useState } from "react";
import { Clock, ChevronDown, ChevronUp, Copy, Check, MapPin } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEnhancedLiteMode } from "@/hooks/useLiteMode";
import type { QuickVersion } from "@/types/courses";

interface QuickVersionPanelProps {
  quickVersion: QuickVersion;
}

export function QuickVersionPanel({ quickVersion }: QuickVersionPanelProps) {
  const { defaultToQuickView } = useEnhancedLiteMode();
  const [isOpen, setIsOpen] = useState(defaultToQuickView);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(quickVersion.safePrompt);
      setCopied(true);
      toast({
        title: "Prompt copiado",
        description: "El prompt seguro se ha copiado al portapapeles.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error al copiar",
        description: "No se pudo copiar el prompt. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <div className="bg-gradient-to-r from-primary/10 to-salvora-green/10 rounded-xl border border-primary/20">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-4 hover:bg-transparent"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Version rapida</span>
              <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                1 minuto
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
          <div className="px-4 pb-4 space-y-4">
            {/* 3 Bullet Points */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Puntos clave
              </h4>
              <ul className="space-y-2">
                {quickVersion.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Example */}
            <div className="bg-card/50 rounded-lg p-3 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-salvora-green" />
                <span className="text-sm font-medium text-salvora-green">
                  Ejemplo local
                </span>
              </div>
              <p className="text-foreground text-sm">{quickVersion.localExample}</p>
            </div>

            {/* Safe Prompt */}
            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Prompt seguro para probar
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyPrompt}
                  className="h-8 px-2"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-salvora-green" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-foreground text-sm font-mono bg-muted/50 p-2 rounded">
                {quickVersion.safePrompt}
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
