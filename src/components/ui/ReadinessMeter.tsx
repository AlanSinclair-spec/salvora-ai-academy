// Readiness Meter Component
// Displays AI Readiness Score with 4 pillars

import { useState } from "react";
import { Brain, BookOpen, MessageSquare, Shield, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useReadiness } from "@/contexts/ReadinessContext";
import type { ReadinessPillarId } from "@/types/readiness";

interface ReadinessMeterProps {
  showDetails?: boolean;
  compact?: boolean;
}

const pillarIcons: Record<ReadinessPillarId, typeof Brain> = {
  conceptos: BookOpen,
  prompts: MessageSquare,
  uso_responsable: Shield,
  aplicacion: Lightbulb,
};

const pillarColors: Record<ReadinessPillarId, string> = {
  conceptos: "bg-primary",
  prompts: "bg-salvora-green",
  uso_responsable: "bg-salvora-orange",
  aplicacion: "bg-salvora-purple",
};

export function ReadinessMeter({ showDetails = true, compact = false }: ReadinessMeterProps) {
  const { getReadinessScore, getRecommendation } = useReadiness();
  const [expanded, setExpanded] = useState(false);

  const score = getReadinessScore();
  const recommendation = getRecommendation();

  // Determine score level for color
  const getScoreColor = (value: number): string => {
    if (value >= 80) return "text-salvora-green";
    if (value >= 60) return "text-primary";
    if (value >= 40) return "text-salvora-orange";
    return "text-red-400";
  };

  const getScoreLabel = (value: number): string => {
    if (value >= 80) return "Avanzado";
    if (value >= 60) return "Competente";
    if (value >= 40) return "En desarrollo";
    return "Iniciando";
  };

  if (compact) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 bg-card/50 px-3 py-1.5 rounded-full border border-border cursor-help">
            <Brain className="w-4 h-4 text-primary" />
            <span className={`font-bold ${getScoreColor(score.total)}`}>
              {score.total}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <div className="space-y-2">
            <p className="font-medium">AI Readiness Score: {score.total}/100</p>
            <p className="text-xs text-muted-foreground">{recommendation}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-salvora-purple/10 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                AI Readiness Score
              </h3>
              <p className="text-sm text-muted-foreground">
                {getScoreLabel(score.total)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-black ${getScoreColor(score.total)}`}>
              {score.total}
            </div>
            <div className="text-xs text-muted-foreground">de 100</div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-4">
          <Progress value={score.total} className="h-2" />
        </div>
      </div>

      {/* Pillars */}
      {showDetails && (
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between p-4 hover:bg-transparent border-b border-border"
            >
              <span className="text-sm font-medium text-muted-foreground">
                Ver detalle por pilar
              </span>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="p-4 space-y-4">
              {score.pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.id];
                const colorClass = pillarColors[pillar.id];

                return (
                  <div key={pillar.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full ${colorClass}/20 flex items-center justify-center`}>
                          <Icon className={`w-3 h-3 ${colorClass.replace('bg-', 'text-')}`} />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {pillar.label}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {pillar.progress}%
                      </span>
                    </div>
                    <Progress
                      value={pillar.progress}
                      className="h-1.5"
                    />
                  </div>
                );
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Recommendation */}
      <div className="p-4 bg-muted/30">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Recomendacion:</strong> {recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}
