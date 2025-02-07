"use client";

import { useState, useEffect } from "react";
import usersData from "../data/users.json"; // 🔥 Importamos los datos falsos de usuarios

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user"; // 🔥 Asegurar que `role` solo pueda ser `"admin"` o `"user"`
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        if (parsedUser.role === "admin" || parsedUser.role === "user") {
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const foundUser = usersData.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      // 🔥 Asegurar que `role` sea del tipo correcto antes de asignarlo
      const userWithoutPassword: User = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role as "admin" | "user", // ✅ CAST para evitar errores de TypeScript
      };

      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout, loading };
};
