"use client";

import { useState } from "react";
import { FaBalanceScale, FaGavel, FaFileContract, FaMoneyBillAlt, FaUserShield, FaPeopleArrows } from "react-icons/fa";

export default function AreasDeAtuacao() {
  const areas = [
    {
      icon: <FaBalanceScale className="w-12 h-12 text-white" />,
      title: "Direito Civil",
      description: "Atuamos em litígios envolvendo contratos, responsabilidade civil e questões familiares.",
    },
    {
      icon: <FaGavel className="w-12 h-12 text-white" />,
      title: "Direito Trabalhista",
      description: "Oferecemos assessoria e contencioso em questões trabalhistas, tanto para empresas quanto para empregados.",
    },
    {
      icon: <FaFileContract className="w-12 h-12 text-white" />,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas, incluindo fusões, aquisições, contratos e governança corporativa.",
    },
    {
      icon: <FaMoneyBillAlt className="w-12 h-12 text-white" />,
      title: "Direito Tributário",
      description: "Consultoria fiscal e tributária, com ênfase em planejamento tributário e defesa de tributos.",
    },
    {
      icon: <FaUserShield className="w-12 h-12 text-white" />,
      title: "Direito Penal",
      description: "Defesa em processos criminais, com atuação em todas as fases do processo penal.",
    },
    {
      icon: <FaPeopleArrows className="w-12 h-12 text-white" />,
      title: "Direito de Família",
      description: "Consultoria em questões de guarda, pensão alimentícia, divórcio, heranças e testamentos.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMobileInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="box-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12 w-[100%]">
      {areas.map((area, index) => (
        <div
          key={index}
          className="group relative block h-64 sm:h-80 lg:h-96 cursor-pointer"
          onClick={() => toggleMobileInfo(index)}
          role="button"
          tabIndex={0}
        >
          {/* Borda externa */}
          <span className="absolute inset-0 border-2 border-dashed border-black rounded-[10px] bg-transparent"></span>

          {/* Card principal */}
          <div className={`relative flex h-full w-full items-end border-2 border-black bg-[#080C37] transition-transform rounded-[10px] overflow-hidden
            sm:group-hover:scale-105 sm:group-hover:shadow-lg
            ${activeIndex === index ? "scale-105 shadow-lg" : ""}`}>

            {/* Ícone e título */}
            <div className={`p-4 transition-opacity sm:p-6 lg:p-8 text-white w-full
              sm:group-hover:absolute sm:group-hover:opacity-0
              ${activeIndex === index ? "absolute opacity-0" : "relative opacity-100"}`}>
              {area.icon}
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">{area.title}</h2>
            </div>

            {/* Descrição */}
            <div className={`absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity sm:p-6 lg:p-8 text-white bg-[#080C37]
              sm:group-hover:opacity-100
              ${activeIndex === index ? "opacity-100" : "opacity-0"}`}>
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">{area.title}</h3>
              <p className="mt-4 text-sm sm:text-base">{area.description}</p>
              <p className="mt-8 font-bold">Saiba mais</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
