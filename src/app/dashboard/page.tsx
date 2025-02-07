"use client";

import ExamList from "@/components/examen/ExamList";
import { useAuth } from "@/shared/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link"; 

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); 
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
      <h2 className="text-xl font-bold">Bienvenido, {user.name}</h2>
      <p className="text-gray-600">Rol: {user.role}</p>

      {user.role === "admin" && <ExamList />}

      {user.role === "user" && (
        <Link href="/user">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            📜 Ver Mi Historial
          </button>
        </Link>
      )}

      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={logout}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;
