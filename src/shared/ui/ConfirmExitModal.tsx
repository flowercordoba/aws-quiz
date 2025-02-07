"use client";

import { useRouter } from "next/navigation";

interface ConfirmExitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmExitModal: React.FC<ConfirmExitModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null; 

  const handleExit = () => {
    onClose(); 
    router.push("/home"); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <h2 className="text-lg font-bold text-gray-800">¿Salir del Quiz?</h2>
        <p className="text-gray-600 mt-2">Perderás tu progreso si sales. ¿Estás seguro?</p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-red-500 text-black rounded-md hover:bg-red-600 transition"
            onClick={handleExit}
          >
            Sí, salir
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmExitModal;
