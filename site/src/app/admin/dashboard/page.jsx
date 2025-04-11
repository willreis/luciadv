"use client";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black">Dashboard Admin</h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
}
