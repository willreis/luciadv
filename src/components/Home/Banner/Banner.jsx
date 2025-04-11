"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Banner() {
  const images = [
    {
      url: "/Img/banner/bg-escritorio-janela.jpg",
      title: "Consultoria Jurídica Especializada",
      description:
        "Oferecemos assessoria em diversas áreas do direito para proteger seus direitos e interesses.",
      buttonText: "Saiba Mais",
      link: "/servicos",
    },
    {
      url: "/Img/banner/bg-escritorio-balanca.jpg",
      title: "Defesa no Direito Penal",
      description:
        "Defesa de qualidade em processos criminais, garantindo a sua defesa em todas as fases.",
      buttonText: "Entenda Mais",
      link: "/servicos",
    },
    {
      url: "/Img/banner/bg-familia.jpg",
      title: "Direito de Família e Sucessões",
      description:
        "Atuação em questões familiares, como divórcios, guarda e heranças.",
      buttonText: "Veja Nossos Serviços",
      link: "/servicos",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);

  // Inicia o carrossel automático
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        nextImage();
      }, 10000);
      setIntervalId(interval);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Função para avançar a imagem
  const nextImage = () => {
    clearInterval(intervalId);
    setCurrentImage((prev) => (prev + 1) % images.length);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  // Função para voltar a imagem
  const prevImage = () => {
    clearInterval(intervalId);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  // Captura o início do toque no mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Captura o fim do toque e verifica a direção
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) {
      nextImage(); // Deslizou para a esquerda → Avança imagem
    } else if (deltaX < -50) {
      prevImage(); // Deslizou para a direita → Volta imagem
    }
  };

  return (
    <section
      className="relative bg-cover bg-center w-full transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage].url})`,
        transition: "background-image 1s ease-in-out",
      }}
      onTouchStart={handleTouchStart} // Início do toque
      onTouchEnd={handleTouchEnd} // Fim do toque
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {images[currentImage].title}
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Perfeita para Você.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            {images[currentImage].description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href={images[currentImage].link}
              className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              {images[currentImage].buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Botões de navegação (oculta o direito no mobile) */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="p-3 bg-black text-white rounded-full hover:bg-gray-700 hidden transition duration-200 sm:block"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden sm:block">
        <button
          onClick={nextImage}
          className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
