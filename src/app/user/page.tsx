"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../shared/hooks/useAuth";
import { useRouter } from "next/navigation";
import historyData from "../../shared/data/userHistory.json";
import LogoutButton from "@/shared/ui/LogoutButton";

interface ExamHistory {
  userId: number;
  examId: number;
  examTitle: string;
  score: number;
  totalQuestions: number;
}

const UserDashboard = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [userHistory, setUserHistory] = useState<ExamHistory[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // 🔥 Redirigir si no hay usuario autenticado
    }

    if (user) {
      // Filtrar solo los exámenes del usuario autenticado
      const filteredHistory = historyData.filter((exam) => exam.userId === user.id);
      setUserHistory(filteredHistory);
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-xl font-bold text-gray-600">Cargando...</h2>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Hola, {user.name}</h2>
      <p className="text-gray-600">Aquí está tu historial de exámenes:</p>

      {userHistory.length === 0 ? (
        <p className="mt-4 text-gray-600">Aún no has realizado ningún examen.</p>
      ) : (
        <table className="w-full mt-4 border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Examen</th>
              <th className="border p-2">Puntaje</th>
              <th className="border p-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {userHistory.map((exam) => (
              <tr key={exam.examId} className="hover:bg-gray-50">
                <td className="border p-2">{exam.examTitle}</td>
                <td className="border p-2 text-center">
                  {exam.score} / {exam.totalQuestions}
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md"
                    onClick={() => router.push(`/quiz/${exam.examId}`)}
                  >
                    🔄 Repetir Examen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     <LogoutButton /> 
    </div>
  );
};

export default UserDashboard;
