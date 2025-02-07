"use client";

import { useAuth } from "@/shared/hooks/useAuth";
import { useRouter } from "next/navigation";
import { exam } from "../../shared/data/exam"; 

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleStartExam = (examId: number) => {
    if (!user) {
      router.push(`/login?redirect=/quiz/${examId}`); 
    } else {
      router.push(`/quiz/${examId}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center">📚 Exámenes Disponibles</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {exam.map((exam) => ( 
          <div key={exam.id} className="border rounded-lg overflow-hidden shadow-md">
         
            <img src={exam.image} alt={exam.title} className="w-full h-40 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{exam.title}</h3>
              <p className="text-gray-600">{exam.description}</p>

              <button
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
                onClick={() => handleStartExam(exam.id)}
              >
                🎯 Iniciar Examen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
