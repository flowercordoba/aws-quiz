"use client";

import { useEffect, useState } from "react";
import examsData from "../../shared/data/exams.json";
import AddExamForm from "./AddExamForm";
import EditExamModal from "./EditExamModal";
import ConfirmDeleteModal from "../modales/ConfirmDeleteModal";

interface Exam {
  id: number;
  title: string;
  description: string;
  questionsCount: number;
}

const ExamList = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [editingExam, setEditingExam] = useState<Exam | null>(null);
  const [examToDelete, setExamToDelete] = useState<Exam | null>(null); // 🔥 Estado para el examen a eliminar

  useEffect(() => {
    setExams(examsData);
  }, []);

  const handleAddExam = (newExam: { title: string; description: string; questionsCount: number }) => {
    const newExamWithId: Exam = {
      id: exams.length + 1, 
      ...newExam,
    };
    setExams([...exams, newExamWithId]);
  };

  const handleDeleteExam = () => {
    if (examToDelete) {
      setExams(exams.filter((exam) => exam.id !== examToDelete.id));
      setExamToDelete(null); 
    }
  };

  const handleUpdateExam = (updatedExam: Exam) => {
    setExams(exams.map((exam) => (exam.id === updatedExam.id ? updatedExam : exam)));
    setEditingExam(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Lista de Exámenes</h2>

      <AddExamForm onAddExam={handleAddExam} />

      {editingExam && (
        <EditExamModal
          exam={editingExam}
          isOpen={!!editingExam}
          onClose={() => setEditingExam(null)}
          onUpdateExam={handleUpdateExam}
        />
      )}

      <ConfirmDeleteModal
        isOpen={!!examToDelete}
        onClose={() => setExamToDelete(null)}
        onConfirm={handleDeleteExam}
      />

      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Título</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Preguntas</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id} className="hover:bg-gray-50">
              <td className="border p-2">{exam.title}</td>
              <td className="border p-2">{exam.description}</td>
              <td className="border p-2 text-center">{exam.questionsCount}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md"
                  onClick={() => setEditingExam(exam)}
                >
                  ✏️ Editar
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                  onClick={() => setExamToDelete(exam)} // 🔥 Activamos el modal de confirmación
                >
                  ❌ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamList;
