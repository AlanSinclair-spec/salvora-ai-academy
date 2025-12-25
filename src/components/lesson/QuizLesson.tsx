// Quiz Lesson Component
// Interactive quiz with immediate feedback

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  RefreshCw,
  Trophy,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getLessonContent } from "@/data/lesson-content";
import { Confetti, useConfetti } from "@/components/ui/Confetti";
import type { Lesson, QuizQuestion } from "@/types/courses";

interface QuizLessonProps {
  lesson: Lesson;
  onComplete: (score: number) => void;
  isCompleted: boolean;
}

interface QuestionState {
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  showExplanation: boolean;
}

export function QuizLesson({ lesson, onComplete, isCompleted }: QuizLessonProps) {
  const content = getLessonContent(lesson.id);
  const questions = content?.practiceQuestions || lesson.practiceQuestions || [];

  const [questionStates, setQuestionStates] = useState<Record<string, QuestionState>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const confetti = useConfetti();

  const getQuestionState = (questionId: string): QuestionState => {
    return questionStates[questionId] || {
      selectedAnswer: null,
      isCorrect: null,
      showExplanation: false,
    };
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    if (quizSubmitted) return;

    setQuestionStates((prev) => ({
      ...prev,
      [questionId]: {
        ...getQuestionState(questionId),
        selectedAnswer: answerIndex,
      },
    }));
  };

  const handleCheckAnswer = (question: QuizQuestion) => {
    const state = getQuestionState(question.id);
    if (state.selectedAnswer === null) return;

    const isCorrect = state.selectedAnswer === question.correctAnswer;
    setQuestionStates((prev) => ({
      ...prev,
      [question.id]: {
        ...state,
        isCorrect,
        showExplanation: true,
      },
    }));
  };

  const handleSubmitQuiz = () => {
    // Check all answers
    questions.forEach((question) => {
      const state = getQuestionState(question.id);
      if (state.selectedAnswer !== null && state.isCorrect === null) {
        handleCheckAnswer(question);
      }
    });

    setQuizSubmitted(true);

    // Calculate score
    const correctCount = questions.filter(
      (q) => getQuestionState(q.id).isCorrect === true
    ).length;
    const score = Math.round((correctCount / questions.length) * 100);

    // Mark as complete if score is 60% or higher
    if (score >= 60) {
      confetti.trigger();
      onComplete(score);
    }
  };

  const handleRetry = () => {
    setQuestionStates({});
    setQuizSubmitted(false);
  };

  // Calculate current score
  const answeredQuestions = questions.filter(
    (q) => getQuestionState(q.id).isCorrect !== null
  );
  const correctAnswers = answeredQuestions.filter(
    (q) => getQuestionState(q.id).isCorrect === true
  ).length;
  const currentScore = answeredQuestions.length > 0
    ? Math.round((correctAnswers / questions.length) * 100)
    : 0;

  if (questions.length === 0) {
    return (
      <div className="bg-muted/50 rounded-xl p-8 text-center">
        <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Cuestionario en desarrollo</h3>
        <p className="text-muted-foreground">
          Las preguntas para esta lección estarán disponibles pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Confetti celebration */}
      <Confetti isActive={confetti.isActive} onComplete={confetti.reset} />

      {/* Quiz Header */}
      <div className="bg-salvora-purple/10 rounded-xl p-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Cuestionario</h2>
            <p className="text-sm text-muted-foreground">
              {questions.length} preguntas • Necesitas 60% para aprobar
            </p>
          </div>
          {quizSubmitted && (
            <div className={cn(
              "text-2xl font-bold animate-scale-in",
              currentScore >= 60 ? "text-salvora-green" : "text-destructive"
            )}>
              {currentScore}%
            </div>
          )}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((question, questionIndex) => {
          const state = getQuestionState(question.id);

          return (
            <div
              key={question.id}
              className={cn(
                "bg-card rounded-xl border p-6 transition-all duration-300",
                state.isCorrect === true && "border-salvora-green/50 bg-salvora-green/5 quiz-option-correct",
                state.isCorrect === false && "border-destructive/50 bg-destructive/5 quiz-option-incorrect",
                state.isCorrect === null && "border-border"
              )}
              style={{ animationDelay: `${questionIndex * 100}ms` }}
            >
              {/* Question */}
              <div className="flex items-start gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
                  {questionIndex + 1}
                </span>
                <p className="text-foreground font-medium pt-1">{question.question}</p>
              </div>

              {/* Options */}
              <div className="space-y-2 ml-11">
                {question.options.map((option, optionIndex) => {
                  const isSelected = state.selectedAnswer === optionIndex;
                  const isCorrectOption = optionIndex === question.correctAnswer;
                  const showResult = state.isCorrect !== null;

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(question.id, optionIndex)}
                      disabled={quizSubmitted || state.isCorrect !== null}
                      className={cn(
                        "w-full text-left p-3 rounded-lg border transition-all duration-200 quiz-option",
                        "hover:bg-muted/50 hover:scale-[1.01]",
                        isSelected && !showResult && "border-primary bg-primary/5 quiz-option-selected",
                        showResult && isCorrectOption && "border-salvora-green bg-salvora-green/10 animate-pulse-subtle",
                        showResult && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                        !isSelected && !showResult && "border-border",
                        (quizSubmitted || state.isCorrect !== null) && "cursor-default"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium",
                          isSelected && !showResult && "border-primary text-primary",
                          showResult && isCorrectOption && "border-salvora-green text-salvora-green bg-salvora-green/20",
                          showResult && isSelected && !isCorrectOption && "border-destructive text-destructive bg-destructive/20",
                          !isSelected && !showResult && "border-muted-foreground text-muted-foreground"
                        )}>
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span className={cn(
                          "flex-1",
                          showResult && isCorrectOption && "text-salvora-green font-medium",
                          showResult && isSelected && !isCorrectOption && "text-destructive"
                        )}>
                          {option}
                        </span>
                        {showResult && isCorrectOption && (
                          <CheckCircle className="w-5 h-5 text-salvora-green animate-scale-in" />
                        )}
                        {showResult && isSelected && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-destructive animate-shake" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Check Answer Button (per question) */}
              {!quizSubmitted && state.selectedAnswer !== null && state.isCorrect === null && (
                <div className="ml-11 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCheckAnswer(question)}
                  >
                    Verificar respuesta
                  </Button>
                </div>
              )}

              {/* Explanation */}
              {state.showExplanation && question.explanation && (
                <div className="ml-11 mt-4 p-4 bg-muted/50 rounded-lg animate-slide-up">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Explicación: </span>
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Results Section */}
      <div className="bg-card rounded-xl border border-border p-6">
        {!quizSubmitted ? (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {Object.values(questionStates).filter((s) => s.selectedAnswer !== null).length} de{" "}
              {questions.length} preguntas respondidas
            </div>
            <Button
              onClick={handleSubmitQuiz}
              disabled={Object.values(questionStates).filter((s) => s.selectedAnswer !== null).length < questions.length}
              variant="hero"
            >
              Enviar cuestionario
            </Button>
          </div>
        ) : (
          <div className="text-center">
            {currentScore >= 60 ? (
              <>
                <div className="checkmark-circle mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-salvora-green animate-bounce-small" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Felicidades! Aprobaste con {currentScore}%
                </h3>
                <p className="text-muted-foreground mb-4">
                  Has demostrado un buen entendimiento del material.
                </p>
                {!isCompleted && (
                  <Button onClick={() => onComplete(currentScore)} variant="hero">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Continuar al siguiente tema
                  </Button>
                )}
              </>
            ) : (
              <>
                <AlertCircle className="w-12 h-12 text-salvora-orange mx-auto mb-4 animate-shake" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Obtuviste {currentScore}%
                </h3>
                <p className="text-muted-foreground mb-4">
                  Necesitas 60% para aprobar. Revisa las explicaciones e inténtalo de nuevo.
                </p>
                <Button onClick={handleRetry} variant="outline" className="animate-bounce-small">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Intentar de nuevo
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
