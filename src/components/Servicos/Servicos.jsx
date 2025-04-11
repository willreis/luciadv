"use client";
import { useState } from "react";
import { FaBalanceScale, FaGavel, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const servicos = [
  {
    id: 1,
    titulo: "Direito Civil",
    descricao: "Atuamos em contratos, indenizações, direitos do consumidor e litígios civis.",
    icone: <FaBalanceScale className="text-blue-600 text-3xl" />,
  },
  {
    id: 2,
    titulo: "Direito Trabalhista",
    descricao: "Defendemos os direitos dos trabalhadores e oferecemos consultoria para empresas.",
    icone: <FaGavel className="text-green-600 text-3xl" />,
  },
  {
    id: 3,
    titulo: "Direito Empresarial",
    descricao: "Assessoria para empresas, contratos, estrutura societária e questões tributárias.",
    icone: <FaUserTie className="text-red-600 text-3xl" />,
  },
  {
    id: 4,
    titulo: "Direito Penal",
    descricao: "Defesa criminal e acompanhamento em processos penais com ética e responsabilidade.",
    icone: <FaShieldAlt className="text-yellow-600 text-3xl" />,
  },
];

export default function Servicos() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Título da Página */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">Nossos Serviços</h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Oferecemos serviços jurídicos especializados para atender às suas necessidades com excelência.
      </p>

      {/* Accordion de Serviços */}
      <div className="mt-10 max-w-3xl mx-auto">
        {servicos.map((servico) => (
          <Disclosure key={servico.id}>
            {({ open }) => (
              <div className="mb-4 border border-gray-300 rounded-lg">
                <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none">
                  <div className="flex items-center">
                    {servico.icone}
                    <span className="ml-3 text-xl font-semibold text-gray-800">{servico.titulo}</span>
                  </div>
                  <ChevronUpIcon className={`w-6 h-6 text-gray-600 transform ${open ? "rotate-180" : ""}`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py-3 text-gray-600">
                  {servico.descricao}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
