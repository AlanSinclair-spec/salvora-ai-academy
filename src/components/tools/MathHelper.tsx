// Math Helper Tool Component
// Solves math problems with step-by-step explanations

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Loader2, Lightbulb, ArrowRight } from "lucide-react";
import { useMathHelper } from "@/hooks/useAITools";
import { isDemoMode, demoMathHelper } from "@/data/demo-presets";

export function MathHelper() {
  const [problem, setProblem] = useState("");

  const { mutate, isPending, data, reset } = useMathHelper();

  // Pre-fill form in demo mode
  useEffect(() => {
    if (isDemoMode()) {
      setProblem(demoMathHelper.problem);
    }
  }, []);

  const handleSolve = () => {
    if (!problem.trim()) return;
    mutate({ problem, showSteps: true });
  };

  const exampleProblems = [
    "2x + 5 = 15",
    "x² - 4 = 0",
    "3/4 + 1/2",
    "Calcula el 15% de 200",
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-salvora-green" />
          Ayudante de Matemáticas
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Escribe un problema de matemáticas y te mostraré cómo resolverlo paso a paso.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tu problema
            </label>
            <input
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Ej: 2x + 5 = 15"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-lg font-mono"
              onKeyDown={(e) => {
                if (e.key === "Enter" && problem.trim()) {
                  handleSolve();
                }
              }}
            />
          </div>

          {/* Example Problems */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Ejemplos:</p>
            <div className="flex flex-wrap gap-2">
              {exampleProblems.map((example) => (
                <button
                  key={example}
                  onClick={() => setProblem(example)}
                  className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80 text-muted-foreground transition-colors font-mono"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="course"
            className="w-full"
            onClick={handleSolve}
            disabled={isPending || !problem.trim()}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Resolviendo...
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4 mr-2" />
                Resolver paso a paso
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Results */}
      {data && (
        <div className="bg-card rounded-xl border border-salvora-green/50 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-foreground">Solución</h4>
            <Button variant="ghost" size="sm" onClick={reset}>
              Nuevo problema
            </Button>
          </div>

          {/* Problem */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Problema:</p>
            <p className="text-xl font-mono font-bold text-foreground">{data.problem}</p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <h5 className="font-semibold text-foreground">Pasos:</h5>
            {data.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-muted-foreground">{step.explanation}</p>
                  <p className="font-mono text-foreground bg-muted/50 px-3 py-1 rounded inline-block">
                    {step.expression}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Answer */}
          <div className="bg-salvora-green/10 rounded-lg p-4 flex items-center gap-3">
            <ArrowRight className="w-5 h-5 text-salvora-green shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Respuesta:</p>
              <p className="text-xl font-mono font-bold text-salvora-green">{data.solution}</p>
            </div>
          </div>

          {/* Visual Hint */}
          {data.visualHint && (
            <div className="bg-salvora-orange/10 rounded-lg p-4 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-salvora-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Tip:</p>
                <p className="text-sm text-muted-foreground">{data.visualHint}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
