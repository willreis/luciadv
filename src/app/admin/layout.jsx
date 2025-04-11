"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Permite acessar a tela de login sem redirecionamento
    if (!user && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [user, pathname]);

  return <>{children}</>; // Renderiza as páginas corretamente
}
