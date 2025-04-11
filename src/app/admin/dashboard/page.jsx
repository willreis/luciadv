"use client";

import { useAuth } from "../../../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Carregando usuário...</div>;
  }

  if (!user) {
    return <div>Redirecionando para login...</div>;
  }

  return (
    <div>
      <h1>Dashboard Admin</h1>
      <p>Logado como: {user.email}</p>
    </div>
  );
}
