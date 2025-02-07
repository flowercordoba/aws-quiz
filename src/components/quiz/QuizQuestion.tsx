"use client";

import React from "react";
import AnswerOption from "./AnswerOption";

interface QuestionProps {
  questionData: {
    question: string;
    options: string[];
    answers: string[];
    multipleCorrect: boolean;
    explanation: string;
  };
  selectedAnswers: string[];
  showExplanation: boolean;
  handleAnswerClick: (option: string) => void;
}

const QuizQuestion: React.FC<QuestionProps> = ({
  questionData,
  selectedAnswers,
  showExplanation,
  handleAnswerClick,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{questionData.question}</h2>

      <div className="mt-4">
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswers.includes(option)}
            isCorrect={
              showExplanation
                ? questionData.answers.includes(option)
                  ? true
                  : selectedAnswers.includes(option)
                  ? false
                  : undefined
                : undefined
            }
            onClick={() => handleAnswerClick(option)}
          />
        ))}
      </div>

      {questionData.multipleCorrect && (
        <p className="mt-2 text-sm text-gray-500">Puedes seleccionar múltiples respuestas</p>
      )}
    </div>
  );
};

export default QuizQuestion;
