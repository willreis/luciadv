"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Carrega usuário do localStorage ao iniciar
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  // Função de Login
  const login = (email, password) => {
    if (email === "admin@site.com" && password === "123456") {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/admin/dashboard"); // Redireciona após login
    } else {
      alert("Credenciais inválidas!");
    }
  };

  // Função de Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
