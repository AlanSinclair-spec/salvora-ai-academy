// Enhanced Practice Component
// 3+ questions with feedback and progressive hints

import { useState } from "react";
import { CheckCircle2, XCircle, Lightbulb, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReadiness } from "@/contexts/ReadinessContext";
import type { PracticeQuestionEnhanced } from "@/types/courses";

interface EnhancedPracticeProps {
  questions: PracticeQuestionEnhanced[];
  lessonId: string;
  onComplete?: (score: number) => void;
}

interface QuestionState {
  answered: boolean;
  selectedAnswer: number | null;
  correct: boolean;
  hintsRevealed: number;
}

export function EnhancedPractice({ questions, lessonId, onComplete }: EnhancedPracticeProps) {
  const { recordPracticeResult } = useReadiness();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    questions.map(() => ({
      answered: false,
      selectedAnswer: null,
      correct: false,
      hintsRevealed: 0,
    }))
  );
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];
  const state = questionStates[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (state.answered) return;

    const isCorrect = answerIndex === question.correctAnswer;

    setQuestionStates((prev) => {
      const newStates = [...prev];
      newStates[currentQuestion] = {
        ...newStates[currentQuestion],
        answered: true,
        selectedAnswer: answerIndex,
        correct: isCorrect,
      };
      return newStates;
    });
  };

  const revealHint = () => {
    if (state.hintsRevealed >= question.hints.length) return;

    setQuestionStates((prev) => {
      const newStates = [...prev];
      newStates[currentQuestion] = {
        ...newStates[currentQuestion],
        hintsRevealed: newStates[currentQuestion].hintsRevealed + 1,
      };
      return newStates;
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Complete practice
      const correctCount = questionStates.filter((s) => s.correct).length;
      const totalQuestions = questions.length;
      const score = Math.round((correctCount / totalQuestions) * 100);

      // Record in readiness context
      recordPracticeResult(lessonId, correctCount, totalQuestions);

      setCompleted(true);
      onComplete?.(score);
    }
  };

  const resetPractice = () => {
    setCurrentQuestion(0);
    setQuestionStates(
      questions.map(() => ({
        answered: false,
        selectedAnswer: null,
        correct: false,
        hintsRevealed: 0,
      }))
    );
    setCompleted(false);
  };

  if (completed) {
    const correctCount = questionStates.filter((s) => s.correct).length;
    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= 60;

    return (
      <div className="bg-card rounded-xl border border-border p-6 text-center">
        <div
          className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
            passed ? "bg-salvora-green/20" : "bg-amber-500/20"
          }`}
        >
          {passed ? (
            <CheckCircle2 className="w-8 h-8 text-salvora-green" />
          ) : (
            <RotateCcw className="w-8 h-8 text-amber-500" />
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2">
          {passed ? "Excelente trabajo!" : "Sigue practicando"}
        </h3>

        <p className="text-muted-foreground mb-4">
          Obtuviste {correctCount} de {questions.length} respuestas correctas ({score}%)
        </p>

        {!passed && (
          <Button onClick={resetPractice} variant="outline" className="mt-2">
            <RotateCcw className="w-4 h-4 mr-2" />
            Intentar de nuevo
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Progress */}
      <div className="bg-muted/30 px-4 py-2 border-b border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index < currentQuestion
                    ? questionStates[index].correct
                      ? "bg-salvora-green"
                      : "bg-red-400"
                    : index === currentQuestion
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="p-4">
        <h4 className="text-lg font-medium text-foreground mb-4">
          {question.question}
        </h4>

        {/* Hints */}
        {!state.answered && question.hints.length > 0 && (
          <div className="mb-4">
            {state.hintsRevealed > 0 && (
              <div className="space-y-2 mb-2">
                {question.hints.slice(0, state.hintsRevealed).map((hint, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-amber-500/10 rounded-lg p-2 text-sm"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{hint}</span>
                  </div>
                ))}
              </div>
            )}
            {state.hintsRevealed < question.hints.length && (
              <Button
                variant="ghost"
                size="sm"
                onClick={revealHint}
                className="text-amber-500 hover:text-amber-400"
              >
                <Lightbulb className="w-4 h-4 mr-1" />
                Pista ({state.hintsRevealed}/{question.hints.length})
              </Button>
            )}
          </div>
        )}

        {/* Options */}
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = state.selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showResult = state.answered;

            let optionClass = "bg-muted/30 hover:bg-muted/50 border-transparent";
            if (showResult) {
              if (isCorrect) {
                optionClass = "bg-salvora-green/20 border-salvora-green/50";
              } else if (isSelected && !isCorrect) {
                optionClass = "bg-red-500/20 border-red-500/50";
              }
            } else if (isSelected) {
              optionClass = "bg-primary/20 border-primary/50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={state.answered}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${optionClass} ${
                  state.answered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      showResult && isCorrect
                        ? "bg-salvora-green text-white"
                        : showResult && isSelected && !isCorrect
                        ? "bg-red-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-foreground">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-salvora-green ml-auto" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {state.answered && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              state.correct
                ? "bg-salvora-green/10 border border-salvora-green/20"
                : "bg-amber-500/10 border border-amber-500/20"
            }`}
          >
            <p className="text-sm text-foreground">
              <strong>{state.correct ? "Correcto!" : "Incorrecto."}</strong>{" "}
              {question.feedback || question.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {state.answered && (
          <div className="mt-4 flex justify-end">
            <Button onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? (
                <>
                  Siguiente
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              ) : (
                "Ver resultados"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
