import { useState, useEffect } from "react";

interface Question {
  id: number;
  text?: string;
  options: string[];
  answers: string[];
  multipleCorrect?: boolean;
}

interface Exam {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

const useQuiz = (selectedExam: Exam) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const questions = selectedExam.questions;

  useEffect(() => {
    if (timeUp) {
      setSelectedAnswers([]);
      setShowExplanation(false);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowModal(true);
      }

      setTimeUp(false);
    }
  }, [timeUp, currentQuestion, questions.length]);

  const handleAnswerClick = (option: string) => {
    const currentQ = questions[currentQuestion];

    if (currentQ.multipleCorrect) {
      setSelectedAnswers((prev) =>
        prev.includes(option) ? prev.filter((ans) => ans !== option) : [...prev, option]
      );
    } else {
      setSelectedAnswers([option]);
    }
  };

  const checkAnswer = () => {
    const currentQ = questions[currentQuestion];
    const isCorrect =
      currentQ.multipleCorrect
        ? selectedAnswers.sort().join() === currentQ.answers.sort().join()
        : selectedAnswers[0] === currentQ.answers[0];

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelectedAnswers([]);
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else setShowModal(true);
  };

  return { 
    currentQuestion, 
    selectedAnswers, 
    score, 
    showExplanation, 
    showModal, 
    timeUp, 
    setTimeUp, 
    checkAnswer, 
    nextQuestion, 
    handleAnswerClick 
  };
};

export default useQuiz;
