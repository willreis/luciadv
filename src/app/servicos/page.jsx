"use client";

import { FaBalanceScale, FaGavel, FaShieldAlt, FaUserTie, FaFileContract, FaLandmark, FaUsers, FaBriefcase } from "react-icons/fa";

const servicos = [
  {
    titulo: "Direito Civil",
    descricao: "Atuamos na defesa de direitos civis, abrangendo contratos, indenizações e disputas jurídicas.",
    icone: <FaBalanceScale className="text-blue-600 text-5xl" />,
  },
  {
    titulo: "Direito Trabalhista",
    descricao: "Consultoria e defesa dos direitos dos trabalhadores e empregadores.",
    icone: <FaGavel className="text-green-600 text-5xl" />,
  },
  {
    titulo: "Direito Penal",
    descricao: "Atuação em processos criminais com defesa técnica e estratégica.",
    icone: <FaShieldAlt className="text-red-600 text-5xl" />,
  },
  {
    titulo: "Direito Empresarial",
    descricao: "Assessoria jurídica para empresas, contratos e estrutura societária.",
    icone: <FaUserTie className="text-yellow-600 text-5xl" />,
  },
  {
    titulo: "Direito Contratual",
    descricao: "Elaboração, revisão e análise de contratos para segurança jurídica.",
    icone: <FaFileContract className="text-purple-600 text-5xl" />,
  },
  {
    titulo: "Direito Administrativo",
    descricao: "Atuação em processos administrativos e licitações públicas.",
    icone: <FaLandmark className="text-indigo-600 text-5xl" />,
  },
  {
    titulo: "Direito de Família",
    descricao: "Acompanhamento em processos de divórcio, guarda e sucessões.",
    icone: <FaUsers className="text-pink-600 text-5xl" />,
  },
  {
    titulo: "Direito do Consumidor",
    descricao: "Defesa dos direitos do consumidor em relações de consumo.",
    icone: <FaBriefcase className="text-teal-600 text-5xl" />,
  },
];

export default function Servicos() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Título e introdução */}
      <h1 className="text-4xl font-bold text-gray-800 text-center underline">Nossos Serviços</h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Oferecemos um atendimento personalizado para cada cliente, garantindo assessoria jurídica eficaz e segura.
      </p>

      {/* Lista de Serviços com Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 
                       transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{servico.icone}</div>
            <h3 className="text-xl font-semibold text-gray-800">{servico.titulo}</h3>
            <p className="text-gray-600 mt-2">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
