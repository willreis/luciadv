"use client";

import { useState } from "react";
import Swal from "sweetalert2"; // 🔹 Importando SweetAlert2
import "./contato.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔹 Validação rápida
    if (!nome || !email || !telefone || !mensagem) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Todos os campos são obrigatórios!",
      });
      return;
    }

    // 🔹 Enviando os dados para a API
    const response = await fetch("/api/contatos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, mensagem }),
    });

    if (response.ok) {
      // 🔹 Exibir alerta de sucesso
      Swal.fire({
        icon: "success",
        title: "Mensagem enviada!",
        text: "Entraremos em contato em breve.",
      });

      // 🔹 Resetar formulário
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
    } else {
      // 🔹 Exibir alerta de erro
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Houve um problema ao enviar a mensagem.",
      });
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-[#080C37] grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 p-[20] rounded-[10px]">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold py-[15px] underline">Contato</h2>
            <p className="max-w-xl text-lg">
              Entre em contato conosco para obter a assessoria jurídica que
              você precisa. Nossa equipe está pronta para oferecer soluções personalizadas.
            </p>
          </div>
          <div className="border rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 text-black">
            <form onSubmit={handleSubmit} className="space-y-4 text-black">
              <div>
                <input
                  className="w-full rounded-lg border-[#eee] p-3 text-sm"
                  placeholder="Nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Telefone /Whatsapp"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Mensagem"
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-[#080C37] px-5 py-3 font-medium text-white sm:w-auto"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
