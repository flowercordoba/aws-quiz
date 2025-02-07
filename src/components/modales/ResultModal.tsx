import React from "react";

interface ResultModalProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-bold">¡Juego terminado!</h2>
        <p className="mt-4 text-lg">Puntuación: {score}/{totalQuestions}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onRestart}
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
