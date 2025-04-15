"use client";

import { useState } from "react";
import "./header.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const message = encodeURIComponent(
    "Olá! Acessei o seu site e gostaria de mais informações."
  );

  return (
    <>
      <header className="bg-[#080C37] py-4 md:py-0 lg:py-[20px] relative">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-8 lg:px-8">
          <a className="block text-teal-600 w-[200px]" href="/">
            <span className="sr-only">Home</span>
            <img
              src="/Img/logo-branco.png"
              className="w-[100%]"
              alt="Logo Luciana Oliveira Advogada"
            />
          </a>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* Menu para Desktop */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-white transition " href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white transition " href="/sobre">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a className="text-white transition " href="/servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="text-white transition " href="/contato">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            {/* Botão WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="flex items-center justify-center rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#128C7E]"
                  href={`https://wa.me/5511967252955?text=${message}`}
                  target="_blank"
                >
                  <FaWhatsapp className="mr-2" /> Whatsapp
                </a>
              </div>

              {/* Botão do Menu Mobile */}
              <button
                onClick={toggleMenu}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-700 transition hover:text-gray-300 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay escuro ao abrir o menu */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            menuOpen ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu} // Fecha o menu ao clicar no fundo escuro
        ></div>

        {/* Menu Mobile - Abre ao clicar no botão */}
        <nav
          className={`fixed top-16 left-0 w-full bg-[#080C37] z-50 shadow-lg transition-transform duration-300 md:hidden ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">
            <li>
              <a className="text-white transition" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white transition" href="/sobre">
                Sobre Nós
              </a>
            </li>
            <li>
              <a className="text-white transition" href="/servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="text-white transition" href="/contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
