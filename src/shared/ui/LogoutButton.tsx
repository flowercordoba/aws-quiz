"use client";

import { useAuth } from "@/shared/hooks/useAuth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter(); 

  const handleLogout = () => {
    logout();
    router.push("/login"); 
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
      onClick={handleLogout}
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
