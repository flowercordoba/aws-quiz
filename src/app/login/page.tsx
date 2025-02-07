"use client";

import { Suspense, useState } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { useSearchParams, useRouter } from "next/navigation";

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LoginContent />
    </Suspense>
  );
};

const LoginContent = () => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard"; // 🔥 Si no hay `redirect`, redirige al Dashboard

  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("user123");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      router.push(redirectUrl); // 🔥 Redirige al usuario después del login
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center">Iniciar Sesión</h2>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <form onSubmit={handleLogin} className="mt-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded-md mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded-md mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
