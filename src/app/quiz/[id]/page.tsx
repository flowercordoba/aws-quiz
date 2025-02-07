"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { exam } from "../../../shared/data/exam";
import ResultModal from "../../../components/modales/ResultModal";
import Paginator from "../../../components/paginacion/Paginator";
import ExitQuizButton from "@/shared/ui/ExitQuizButton";
//import Timer from "@/components/timer/Timer";
import useQuiz from "@/shared/hooks/useQuiz";
import QuizControls from "@/components/quiz/QuizControls";
import QuizQuestion from "@/components/quiz/QuizQuestion";

const Quiz = () => {
  const router = useRouter();
  const params = useParams();
  const examId = Number(params.id); 
  const selectedExam = exam.find((exam) => exam.id === examId);
  if (!selectedExam) {
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
    {/**   <Timer initialTime={120} onTimeUp={() => setTimeUp(true)} />*/}

      <QuizQuestion
        questionData={selectedExam.questions[currentQuestion]}
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
