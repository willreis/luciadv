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
        {/* Primeira Divisão - Logo e Texto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center sm:items-start">
          <img src="/Img/logo-branco.png" alt="Logo" className="w-[70%] pb-[15]" />

            <p className="text-sm text-center sm:text-left text-[white]">
              Nossa missão é fornecer soluções jurídicas inovadoras e eficazes,
              garantindo a proteção dos direitos de nossos clientes.
            </p>
          </div>

          {/* Segunda Divisão - Links do site */}
          <div className="flex justify-center sm:justify-start">
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Links</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Terceira Divisão - Redes Sociais */}
          <div className="justify-center sm:justify-end space-x-6">
            <h4 className="font-bold text-lg mb-[25]">Redes Sociais</h4>
            <div className="flex space-x-4">
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
        </div>       
      </div>
      <div className="mt-8 border-t border-gray-700 py-5 text-center bg-[#05032b] w-full">
          <p className="text-sm">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
    </footer>
  );
}
