// Practice Lesson Component
// Interactive exercises with links to AI tools - SAFE rendering (no dangerouslySetInnerHTML)

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Calculator,
  MessageSquare,
  FileText
} from "lucide-react";
import { getLessonContent } from "@/data/lesson-content";
import { parseInstructionContent } from "@/lib/markdown-parser";
import { CompleteButton, CompleteButtonContainer } from "./CompleteButton";
import type { Lesson } from "@/types/courses";

interface PracticeLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

export function PracticeLesson({ lesson, onComplete, isCompleted }: PracticeLessonProps) {
  const [step, setStep] = useState(0);
  const content = getLessonContent(lesson.id);
  const instructions = content?.practiceInstructions || "";

  const toolLinks = [
    {
      id: "homework",
      title: "Ayudante de Tareas",
      description: "Haz preguntas y recibe explicaciones",
      icon: MessageSquare,
      path: "/estudiante",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "math",
      title: "Ayudante de Matematicas",
      description: "Resuelve problemas paso a paso",
      icon: Calculator,
      path: "/estudiante",
      color: "text-salvora-green",
      bgColor: "bg-salvora-green/10",
    },
    {
      id: "simplifier",
      title: "Simplificador de Textos",
      description: "Simplifica textos dificiles",
      icon: FileText,
      path: "/estudiante",
      color: "text-salvora-purple",
      bgColor: "bg-salvora-purple/10",
    },
    {
      id: "planner",
      title: "Planificador de Lecciones",
      description: "Para maestros: crea planes de clase",
      icon: BookOpen,
      path: "/maestro",
      color: "text-salvora-orange",
      bgColor: "bg-salvora-orange/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Practice Header */}
      <div className="bg-salvora-orange/10 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-salvora-orange/20 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-salvora-orange" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Ejercicio Practico</h2>
            <p className="text-sm text-muted-foreground">
              Aplica lo que aprendiste con actividades interactivas
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {instructions && (
        <div className="bg-card rounded-xl border border-border p-6">
          <article className="prose prose-slate max-w-none">
            {parseInstructionContent(instructions)}
          </article>
        </div>
      )}

      {/* Tool Links */}
      <div className="bg-muted/30 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">
          Herramientas disponibles para esta practica:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {toolLinks.map((tool) => (
            <Link
              key={tool.id}
              to={tool.path}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-lg ${tool.bgColor} flex items-center justify-center`}>
                <tool.icon className={`w-5 h-5 ${tool.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{tool.title}</h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {/* Progress Steps (if no specific instructions) */}
      {!instructions && (
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Pasos del ejercicio:</h3>
          <div className="space-y-4">
            {[
              "Lee las instrucciones cuidadosamente",
              "Abre la herramienta correspondiente",
              "Completa la actividad siguiendo los pasos",
              "Reflexiona sobre lo que aprendiste",
            ].map((stepText, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  index <= step ? "bg-salvora-green/10" : "bg-muted/50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    index < step
                      ? "bg-salvora-green text-white"
                      : index === step
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < step ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                <span
                  className={
                    index <= step ? "text-foreground" : "text-muted-foreground"
                  }
                >
                  {stepText}
                </span>
              </div>
            ))}
          </div>

          {step < 3 && (
            <Button
              onClick={() => setStep((s) => Math.min(s + 1, 3))}
              className="mt-6"
              variant="outline"
            >
              Siguiente paso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      )}

      {/* Complete Button */}
      <CompleteButtonContainer>
        <CompleteButton isCompleted={isCompleted} onComplete={onComplete} />
      </CompleteButtonContainer>
    </div>
  );
}