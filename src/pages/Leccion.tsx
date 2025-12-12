import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle,
  Play,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample lesson content
const lessonContent = {
  title: "Definición de Inteligencia Artificial",
  videoId: "2ePf9rue1Ao",
  content: `
## ¿Qué es la Inteligencia Artificial?

La **Inteligencia Artificial (IA)** es un campo de la informática que se enfoca en crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.

### Características principales:

- **Aprendizaje**: La capacidad de mejorar con la experiencia
- **Razonamiento**: Resolver problemas de manera lógica
- **Percepción**: Interpretar información del entorno
- **Comprensión del lenguaje**: Entender y generar texto

### Tipos de IA

1. **IA Estrecha (Narrow AI)**: Diseñada para tareas específicas
2. **IA General (AGI)**: Capacidad de realizar cualquier tarea intelectual
3. **Superinteligencia**: IA que supera la inteligencia humana

> "La inteligencia artificial es la nueva electricidad." - Andrew Ng

### Aplicaciones en El Salvador

La IA está transformando diversos sectores en nuestro país:

- **Educación**: Plataformas de aprendizaje personalizado
- **Salud**: Diagnóstico asistido por IA
- **Agricultura**: Monitoreo de cultivos
- **Gobierno**: Servicios digitales más eficientes
  `,
};

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es una característica principal de la IA?",
    options: [
      "Solo puede realizar una tarea",
      "Capacidad de aprender con la experiencia",
      "Necesita conexión a internet siempre",
      "Solo funciona en computadoras grandes",
    ],
    correctAnswer: 1,
  },
  {
    id: "q2",
    question: "¿Qué tipo de IA está diseñada para tareas específicas?",
    options: [
      "IA General",
      "Superinteligencia",
      "IA Estrecha",
      "IA Universal",
    ],
    correctAnswer: 2,
  },
  {
    id: "q3",
    question: "¿En qué sector de El Salvador se puede aplicar IA para monitoreo?",
    options: [
      "Agricultura",
      "Minería espacial",
      "Exploración submarina",
      "Viajes interplanetarios",
    ],
    correctAnswer: 0,
  },
];

function QuizSection() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return correct;
  };

  return (
    <div className="bg-muted/30 rounded-xl p-6 mt-8">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Practica lo aprendido
      </h3>

      <div className="space-y-6">
        {quizQuestions.map((question, qIndex) => (
          <div key={question.id} className="bg-background rounded-lg p-5 border border-border">
            <p className="font-semibold text-foreground mb-4">
              {qIndex + 1}. {question.question}
            </p>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => {
                const isSelected = answers[question.id] === oIndex;
                const isCorrect = question.correctAnswer === oIndex;
                const showResult = submitted;

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswer(question.id, oIndex)}
                    disabled={submitted}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border-2 transition-all",
                      isSelected && !showResult && "border-primary bg-primary/5",
                      !isSelected && !showResult && "border-border hover:border-primary/50",
                      showResult && isCorrect && "border-salvora-green bg-salvora-green/10",
                      showResult && isSelected && !isCorrect && "border-destructive bg-destructive/10"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {showResult ? (
                        isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-salvora-green shrink-0" />
                        ) : isSelected ? (
                          <Circle className="w-5 h-5 text-destructive shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                        )
                      ) : (
                        <Circle className={cn("w-5 h-5 shrink-0", isSelected ? "text-primary" : "text-muted-foreground")} />
                      )}
                      <span className="text-sm">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <Button
          variant="hero"
          className="mt-6"
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quizQuestions.length}
        >
          Enviar respuestas
        </Button>
      ) : (
        <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <p className="font-bold text-foreground">
            Tu puntuación: {getScore()}/{quizQuestions.length}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {getScore() === quizQuestions.length
              ? "¡Excelente! Has dominado este tema."
              : "Revisa las respuestas correctas y vuelve a intentarlo."}
          </p>
        </div>
      )}
    </div>
  );
}

function ProgressIndicator() {
  const steps = [
    { id: 1, title: "Video", completed: true },
    { id: 2, title: "Lectura", completed: true },
    { id: 3, title: "Práctica", completed: false },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
              step.completed
                ? "bg-salvora-green text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {step.completed ? <CheckCircle2 className="w-5 h-5" /> : step.id}
          </div>
          <span className={cn("ml-2 text-sm hidden sm:inline", step.completed ? "text-foreground" : "text-muted-foreground")}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={cn("w-8 sm:w-16 h-1 mx-2 rounded", step.completed ? "bg-salvora-green" : "bg-muted")} />
          )}
        </div>
      ))}
    </div>
  );
}

const Leccion = () => {
  const { cursoId, leccionId } = useParams();

  return (
    <Layout>
      <div className="salvora-container py-8">
        {/* Back button */}
        <Link
          to="/cursos"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Volver a cursos
        </Link>

        {/* Progress */}
        <ProgressIndicator />

        {/* Lesson title */}
        <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
          {lessonContent.title}
        </h1>

        {/* Video embed */}
        <div className="relative aspect-video bg-foreground/5 rounded-xl overflow-hidden mb-8">
          <iframe
            src={`https://www.youtube.com/embed/${lessonContent.videoId}`}
            title={lessonContent.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Text content */}
        <div className="prose prose-slate max-w-none">
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            {lessonContent.content.split("\n").map((line, index) => {
              if (line.startsWith("## ")) {
                return <h2 key={index} className="text-2xl font-bold text-foreground mt-6 mb-4">{line.replace("## ", "")}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={index} className="text-xl font-bold text-foreground mt-5 mb-3">{line.replace("### ", "")}</h3>;
              }
              if (line.startsWith("> ")) {
                return (
                  <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground bg-primary/5 rounded-r-lg">
                    {line.replace("> ", "")}
                  </blockquote>
                );
              }
              if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                if (match) {
                  return (
                    <li key={index} className="ml-4 my-2">
                      <strong className="text-foreground">{match[1]}</strong>: {match[2]}
                    </li>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return <li key={index} className="ml-4 my-2">{line.replace("- ", "")}</li>;
              }
              if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
                const match = line.match(/\d+\. \*\*(.+?)\*\*: (.+)/);
                if (match) {
                  return (
                    <li key={index} className="ml-4 my-2 list-decimal">
                      <strong className="text-foreground">{match[1]}</strong>: {match[2]}
                    </li>
                  );
                }
              }
              if (line.includes("**")) {
                const parts = line.split(/(\*\*[^*]+\*\*)/);
                return (
                  <p key={index} className="my-3 text-muted-foreground leading-relaxed">
                    {parts.map((part, i) =>
                      part.startsWith("**") ? (
                        <strong key={i} className="text-foreground">{part.replace(/\*\*/g, "")}</strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              if (line.trim()) {
                return <p key={index} className="my-3 text-muted-foreground leading-relaxed">{line}</p>;
              }
              return null;
            })}
          </div>
        </div>

        {/* Quiz section */}
        <QuizSection />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link to="/cursos">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Lección anterior
            </Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/cursos">
              Siguiente lección
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Leccion;
