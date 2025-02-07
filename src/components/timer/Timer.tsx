"use client";

import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // Tiempo total en segundos
  onTimeUp: () => void; // Acción cuando se acabe el tiempo
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    if (isPaused) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer); // Limpia el timeout al desmontar
  }, [timeLeft, isPaused]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => onTimeUp(), 0); // ⚠️ Se ejecuta después del render para evitar el error
    }
  }, [timeLeft, onTimeUp]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // 🕒 Formatear el tiempo en formato mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-3 rounded-lg">
      <span className="text-lg font-bold text-gray-700">⏳ {formatTime(timeLeft)}</span>
      <button
        className="px-3 py-1 text-white rounded-md transition"
        onClick={togglePause}
        style={{
          backgroundColor: isPaused ? "green" : "red",
        }}
      >
        {isPaused ? "Reanudar" : "Pausar"}
      </button>
    </div>
  );
};

export default Timer;
