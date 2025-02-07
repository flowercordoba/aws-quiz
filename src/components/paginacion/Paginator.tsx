import React from "react";

interface PaginatorProps {
  currentQuestion: number;
  totalQuestions: number;
}

const Paginator: React.FC<PaginatorProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="text-center mb-4 text-sm text-gray-600">
      Pregunta {currentQuestion + 1} de {totalQuestions}
    </div>
  );
};

export default Paginator;
