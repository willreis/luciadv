import Banner from "../components/Home/Banner/Banner.jsx";
import Card from "../components/Home/Card/Card.jsx";
import "./home.css";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen w-[100%] mb-[50px]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[100%]">
        <Banner />
        <section className="-mt-[80px] z-[10] w-[100%]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="min-h-[8rem] sm:min-h-[20rem] lg:min-h-[610px] rounded-lg bg-gray-200 p-5 textosEscritorio escritorioBox">
              <h2 className="text-center text-[32px] font-bold leading-[1.6] text-black">
                Sobre o escritório
              </h2>
              <p>
                O escritório de advocacia Drª Luciana Oliveira é um espaço
                dedicado à busca incessante pela justiça e pela defesa dos
                direitos de nossos clientes. Com uma equipe altamente
                qualificada e especializada nas mais diversas áreas do Direito,
                nosso compromisso é fornecer serviços jurídicos personalizados e
                de alta qualidade, com foco em resultados eficazes.
              </p>
              <p>
                Nosso escritório se destaca pela competência técnica, ética e
                pela capacidade de adaptar soluções jurídicas às necessidades
                específicas de cada cliente. Atuamos em áreas como Direito Contratual; Regularização de Imóvel, entre outras, sempre com uma
                abordagem estratégica que busca proteger os interesses de nossos
                clientes e resolver conflitos de forma ágil e eficiente.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 bg-[url('/Img/luadv2.jpg')] bg-cover bg-center bg-no-repeat w-full h-[610px] escritorioBox"></div>
          </div>

          <div>
            <span className="flex items-center my-[50px] lg:px-[100px]">
              <span className="h-px flex-1 bg-black"></span>
              <span className="shrink-0 px-6 text-[30px] text-black">
                Áreas de Atuação
              </span>
              <span className="h-px flex-1 bg-black"></span>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[100%]">
          <Card />
        </section>
      </main>
    </div>
  );
}
