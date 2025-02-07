"use client";

import React from "react";

interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  isCorrect?: boolean | null;
  onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, isSelected, isCorrect, onClick }) => {
  return (
    <button
      className={`w-full py-2 px-4 mt-2 text-left border rounded-md flex justify-between items-center transition-all
        ${
          isCorrect === true
            ? "bg-green-200 border-green-500" // ✅ Respuesta correcta
            : isCorrect === false
            ? "bg-red-200 border-red-500" // ❌ Respuesta incorrecta
            : isSelected
            ? "bg-blue-200"
            : "hover:bg-gray-100"
        }`}
      onClick={onClick}
    >
      <span>{option}</span>
      {isCorrect !== undefined && (
        <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
      )}
    </button>
  );
};

export default AnswerOption;
