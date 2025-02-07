"use client";

import { useState } from "react";

interface AddExamFormProps {
  onAddExam: (newExam: { title: string; description: string; questionsCount: number }) => void;
}

const AddExamForm: React.FC<AddExamFormProps> = ({ onAddExam }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questionsCount, setQuestionsCount] = useState(5);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || questionsCount <= 0) {
      setError("Todos los campos son obligatorios y deben ser válidos.");
      return;
    }

    onAddExam({ title, description, questionsCount });
    setTitle("");
    setDescription("");
    setQuestionsCount(5);
    setError("");
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md mt-6">
      <h3 className="text-lg font-bold">Agregar Nuevo Examen</h3>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Título del examen"
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

        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
          Agregar Examen
        </button>
      </form>
    </div>
  );
};

export default AddExamForm;
