"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { exam } from "../../../shared/data/exam";
import ResultModal from "../../../components/modales/ResultModal";
import Paginator from "../../../components/paginacion/Paginator";
import ExitQuizButton from "@/shared/ui/ExitQuizButton";
import Timer from "@/components/timer/Timer";
import useQuiz from "@/shared/hooks/useQuiz";
import QuizControls from "@/components/quiz/QuizControls";
import QuizQuestion from "@/components/quiz/QuizQuestion";

// Interfaz corregida para que coincida con la estructura del examen
interface Question {
  id: number;
  question: string; // ✅ Cambiado de "text" a "question" para que coincida con `QuizQuestion.tsx`
  options: string[];
  answers: string[];
  multipleCorrect: boolean;
  explanation: string;
}

interface Exam {
  id: number;
  title: string;
  description: string;
  image: string;
  questions: Question[];
}

const Quiz = () => {
  const router = useRouter();
  const params = useParams();
  const examId = Number(params.id);

  // 📌 Buscar el examen o asignar un valor por defecto con preguntas vacías
  const selectedExamData = exam.find((exam) => exam.id === examId) ?? {
    id: 0,
    title: "",
    description: "",
    image: "",
    questions: [],
  };

  // 📌 Transformar la estructura de las preguntas para asegurar compatibilidad con `useQuiz`
  const selectedExam: Exam = {
    ...selectedExamData,
    questions: selectedExamData.questions.map((q, index) => ({
      id: index + 1, // ✅ Generamos un ID único basado en el índice
      question: q.question, // ✅ Aseguramos que `question` se llame igual que en `QuizQuestion.tsx`
      options: q.options,
      answers: q.answers,
      multipleCorrect: q.multipleCorrect,
      explanation: q.explanation,
    })),
  };

  // ✅ Hook `useQuiz` debe llamarse siempre antes de cualquier return condicional
  const {
    currentQuestion,
    selectedAnswers,
    score,
    showExplanation,
    showModal,
    setTimeUp,
    checkAnswer,
    nextQuestion,
    handleAnswerClick,
  } = useQuiz(selectedExam);

  // 📌 Mostrar mensaje solo después del Hook
  if (!exam.find((exam) => exam.id === examId)) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-xl font-bold text-red-500">❌ Examen no encontrado</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => router.push("/home")}
        >
          Volver a la Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {showModal && (
        <ResultModal
          score={score}
          totalQuestions={selectedExam.questions.length}
          onRestart={() => router.push("/home")}
        />
      )}

      <Paginator currentQuestion={currentQuestion} totalQuestions={selectedExam.questions.length} />
      <Timer initialTime={120} onTimeUp={() => setTimeUp(true)} />

      <QuizQuestion
        questionData={selectedExam.questions[currentQuestion]} // ✅ Ahora `questionData` tiene la estructura correcta
        selectedAnswers={selectedAnswers}
        showExplanation={showExplanation}
        handleAnswerClick={handleAnswerClick}
      />

      <QuizControls
        showExplanation={showExplanation}
        selectedAnswers={selectedAnswers}
        checkAnswer={checkAnswer}
        nextQuestion={nextQuestion}
        currentQuestion={currentQuestion}
        totalQuestions={selectedExam.questions.length}
      />

      <ExitQuizButton />

      <p className="mt-4 text-sm text-gray-600">Puntuación: {score}</p>
    </div>
  );
};

export default Quiz;
