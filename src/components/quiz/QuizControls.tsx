import React from "react";

interface ControlsProps {
  showExplanation: boolean;
  selectedAnswers: string[];
  checkAnswer: () => void;
  nextQuestion: () => void;
  currentQuestion: number;
  totalQuestions: number;
}

const QuizControls: React.FC<ControlsProps> = ({
  showExplanation,
  selectedAnswers,
  checkAnswer,
  nextQuestion,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="mt-4">
      {showExplanation ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={nextQuestion}
        >
          {currentQuestion < totalQuestions - 1 ? "Siguiente Pregunta" : "Finalizar"}
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={checkAnswer}
          disabled={selectedAnswers.length === 0}
        >
          Confirmar Respuesta
        </button>
      )}
    </div>
  );
};

export default QuizControls;
