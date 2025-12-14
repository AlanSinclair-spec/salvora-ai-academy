// Classroom Pack Modal
// Shows printable/exportable classroom resources

import { useState } from "react";
import { Printer, Copy, Check, X, Target, MessageSquare, HelpCircle, Key, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import type { ClassroomPack, QuizQuestion } from "@/types/courses";

interface ClassroomPackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pack: ClassroomPack;
  lessonTitle: string;
}

export function ClassroomPackModal({
  open,
  onOpenChange,
  pack,
  lessonTitle,
}: ClassroomPackModalProps) {
  const [copied, setCopied] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const { toast } = useToast();

  const generatePlainText = (): string => {
    let text = `PAQUETE DE AULA: ${lessonTitle}\n`;
    text += "=".repeat(50) + "\n\n";

    text += "OBJETIVO DE APRENDIZAJE:\n";
    text += pack.objective + "\n\n";

    text += "PROMPTS PARA DISCUSION:\n";
    pack.prompts.forEach((prompt, i) => {
      text += `${i + 1}. ${prompt}\n`;
    });
    text += "\n";

    text += "CUESTIONARIO DE EVALUACION:\n";
    pack.quiz.forEach((q, i) => {
      text += `\n${i + 1}. ${q.question}\n`;
      q.options.forEach((opt, j) => {
        text += `   ${String.fromCharCode(65 + j)}) ${opt}\n`;
      });
    });
    text += "\n";

    text += "CLAVE DE RESPUESTAS:\n";
    pack.answerKey.forEach((answer, i) => {
      text += `${i + 1}. ${answer}  `;
    });
    text += "\n\n";

    if (pack.rubric) {
      text += "RUBRICA:\n";
      text += pack.rubric + "\n\n";
    }

    text += "---\nGenerado con Salvora - Plataforma Nacional de Alfabetizacion en IA";

    return text;
  };

  const handleCopyAll = async () => {
    try {
      const text = generatePlainText();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copiado",
        description: "Paquete de aula copiado al portapapeles.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto print:max-w-none print:w-full">
        <SheetHeader className="no-print">
          <SheetTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-salvora-purple" />
            Paquete de aula
          </SheetTitle>
          <SheetDescription>
            Recursos listos para usar en tu clase.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Lesson Title */}
          <div className="print-header">
            <h2 className="text-lg font-bold text-foreground">{lessonTitle}</h2>
          </div>

          {/* Objective */}
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">
                Objetivo de aprendizaje
              </h3>
            </div>
            <p className="text-sm text-foreground/90">{pack.objective}</p>
          </div>

          {/* Discussion Prompts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-salvora-green" />
              <h3 className="font-semibold text-foreground text-sm">
                Prompts para discusion
              </h3>
            </div>
            <ol className="space-y-2">
              {pack.prompts.map((prompt, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-salvora-green/20 text-salvora-green text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Quiz */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-salvora-orange" />
              <h3 className="font-semibold text-foreground text-sm">
                Cuestionario de evaluacion
              </h3>
            </div>
            <div className="space-y-4">
              {pack.quiz.map((question, qIndex) => (
                <div key={question.id || qIndex} className="bg-card rounded-lg p-3 border border-border">
                  <p className="text-sm font-medium text-foreground mb-2">
                    {qIndex + 1}. {question.question}
                  </p>
                  <div className="space-y-1 pl-4">
                    {question.options.map((option, oIndex) => (
                      <p
                        key={oIndex}
                        className={`text-sm ${
                          showAnswers && oIndex === question.correctAnswer
                            ? "text-salvora-green font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + oIndex)}) {option}
                        {showAnswers && oIndex === question.correctAnswer && " ✓"}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Answer Key */}
          <Collapsible open={showAnswers} onOpenChange={setShowAnswers}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <Key className="w-4 h-4 mr-2" />
                {showAnswers ? "Ocultar respuestas" : "Mostrar clave de respuestas"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-3 bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Respuestas:</strong>{" "}
                  {pack.answerKey.map((answer, index) => (
                    <span key={index}>
                      {index + 1}.{answer}
                      {index < pack.answerKey.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Rubric */}
          {pack.rubric && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-salvora-purple" />
                <h3 className="font-semibold text-foreground text-sm">
                  Rubrica de evaluacion
                </h3>
              </div>
              <div className="bg-muted/30 rounded-lg p-3 text-sm text-foreground/90 whitespace-pre-wrap">
                {pack.rubric}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-4 border-t border-border no-print">
            <Button
              variant="outline"
              onClick={handleCopyAll}
              className="flex-1"
            >
              {copied ? (
                <Check className="w-4 h-4 mr-2 text-salvora-green" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copied ? "Copiado" : "Copiar todo"}
            </Button>
            <Button onClick={handlePrint} className="flex-1">
              <Printer className="w-4 h-4 mr-2" />
              Imprimir
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
