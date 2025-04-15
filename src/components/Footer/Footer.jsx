import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080C37] text-white pt-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Primeira linha - Logo e Texto */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 w-full">
          {/* Logo */}
          <div className="w-auto max-w-screen-xl mx-auto mb-[20px] sm:mb-[20px]">
            <img
              src="/Img/logo-branco.png"
              alt="Logo"
              className="w-40 sm:w-52 "
            />
            <h2 className="mt-5">OAB/SP n° 475.357</h2>
          </div>

          {/* Texto centralizado ocupando 100% da tela */}
          <div className="flex-grow text-center sm:text-left">
            <p className="text-sm sm:text-base text-white mx-auto max-w-2xl">
              Nossa missão é fornecer soluções jurídicas inovadoras e eficazes,
              garantindo a proteção dos direitos de nossos clientes.
            </p>
          </div>
        </div>

        {/* Segunda linha - Links do site */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-rose-500">
            Home
          </a>
          <a href="#" className="hover:text-rose-500">
            Sobre
          </a>
          <a href="#" className="hover:text-rose-500">
            Serviços
          </a>
          <a href="#" className="hover:text-rose-500">
            Contato
          </a>
        </div>
      </div>
      {/* Terceira linha - Copyright e Redes Sociais */}
      <div className="flex flex-col sm:flex-row justify-around items-center border-t border-gray-700 py-5 bg-[#05032b]">
        {/* Copyright */}
        <p className="text-sm text-center sm:text-left">
          © {currentYear} Todos os direitos reservados.
        </p>

        {/* Redes Sociais */}
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaYoutube />
          </a>
          <a href="#" className="text-2xl hover:text-rose-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
