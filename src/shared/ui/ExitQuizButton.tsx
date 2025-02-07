"use client";

import { useState } from "react";
import ConfirmExitModal from "./ConfirmExitModal";

const ExitQuizButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-black rounded-md w-full hover:bg-red-600 transition"
        onClick={() => setIsModalOpen(true)}
      >
        Salir del Quiz
      </button>

      {/* Modal de confirmación */}
      <ConfirmExitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ExitQuizButton;
