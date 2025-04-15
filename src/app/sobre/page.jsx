import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaShieldAlt,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import "./sobre.css";

export default function SobreNos() {
  const message = encodeURIComponent(
    "Olá! Acessei o seu site e gostaria de mais informações."
  );

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Seção Principal */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <h1 className="text-center lg:hidden text-3xl font-bold text-gray-800 underline">
          Drª. Luciana Oliveira <br/>
          (OAB/SP n° 475.357)
        </h1>

        {/* Imagem */}
        <div className="w-full lg:w-1/3">
          <img
            src="/Img/luadv2.jpg"
            alt="Escritório de Advocacia"
            className="rounded-lg imagemBox lg:w-[70%] m-[auto]"
          />
        </div>

        {/* Texto sobre o escritório */}
        <div className="w-full lg:w-1/2 lg:pr-[50px]">
          <div className="w-full sm:flex sm:justify-center">
            <h1 className="text-4xl font-bold text-gray-800 underline text-left sm:text-center titulo">
              Sobre Nós
            </h1>
          </div>

          <p className="mt-4 text-lg text-gray-600">
            Nosso compromisso é oferecer assessoria jurídica de excelência,
            buscando sempre a melhor solução para nossos clientes. Contamos com
            uma equipe altamente qualificada e dedicada a defender seus direitos
            com ética, transparência e profissionalismo.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Atuamos em diversas áreas do Direito, proporcionando atendimento
            personalizado para cada necessidade. Seja em casos empresariais,
            familiares ou trabalhistas, estamos prontos para representar você
            com a máxima competência.
          </p>

          <div className="w-full">
            <h2 className="mt-[30px] mb-[15px] text-2xl font-bold text-gray-800 underline text-left titulo">
              Fale conosco
            </h2>
            <div className="sm:flex sm:gap-4">
              <a
                className="flex items-center justify-center rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#128C7E]"
                href={`https://wa.me/5511986033206?text=${message}`}
                target="_blank"
              >
                <FaWhatsapp className="mr-2" /> {/* Ícone do WhatsApp */}
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Especialidades */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center underline">
          Nossas Especialidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Direito Civil */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
            <FaBalanceScale className="text-4xl text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-700">
              Direito Civil
            </h3>
            <p className="text-gray-600 mt-2">
              Assessoria em contratos, indenizações, direitos do consumidor e
              litígios.
            </p>
          </div>

          {/* Direito Trabalhista */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
            <FaGavel className="text-4xl text-green-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-700">
              Direito Trabalhista
            </h3>
            <p className="text-gray-600 mt-2">
              Defesa dos direitos do trabalhador e assessoria para empresas.
            </p>
          </div>

          {/* Direito Empresarial */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
            <FaUserTie className="text-4xl text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-700">
              Direito Empresarial
            </h3>
            <p className="text-gray-600 mt-2">
              Consultoria jurídica para empresas, contratos e estrutura
              societária.
            </p>
          </div>

          {/* Direito Penal */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
            <FaShieldAlt className="text-4xl text-yellow-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-700">
              Direito Penal
            </h3>
            <p className="text-gray-600 mt-2">
              Defesa criminal e acompanhamento em processos penais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
