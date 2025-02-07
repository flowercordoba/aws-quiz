"use client";

import { useState, useEffect } from "react";

interface EditExamModalProps {
  exam: { id: number; title: string; description: string; questionsCount: number };
  isOpen: boolean;
  onClose: () => void;
  onUpdateExam: (updatedExam: { id: number; title: string; description: string; questionsCount: number }) => void;
}

const EditExamModal: React.FC<EditExamModalProps> = ({ exam, isOpen, onClose, onUpdateExam }) => {
  const [title, setTitle] = useState(exam.title);
  const [description, setDescription] = useState(exam.description);
  const [questionsCount, setQuestionsCount] = useState(exam.questionsCount);

  useEffect(() => {
    setTitle(exam.title);
    setDescription(exam.description);
    setQuestionsCount(exam.questionsCount);
  }, [exam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateExam({ id: exam.id, title, description, questionsCount });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold">Editar Examen</h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Título"
            className="w-full p-2 border rounded-md mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            className="w-full p-2 border rounded-md mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Número de preguntas"
            className="w-full p-2 border rounded-md mb-2"
            value={questionsCount}
            onChange={(e) => setQuestionsCount(Number(e.target.value))}
            min={1}
            required
          />

          <div className="flex justify-between mt-4">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Guardar Cambios
            </button>
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExamModal;
