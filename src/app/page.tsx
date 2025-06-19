"use client";

// Componentes
import Navbar from "./components/layout/navbar";
import Img_custon from "./components/img_custon";
import ComentarioAlunos from "./components/carrosel/ComentarioAlunos";
import SejaApoiador from "./components/seja-apoiador";

// Importação da Lib GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lib Fonte do next
import { Catamaran } from "next/font/google";
import { Roboto } from "next/font/google";
import { Asap } from "next/font/google";

const catamaran = Catamaran({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });

export default function App() {
  // Começando a animação
  useGSAP(() => {
    // Animação do primeiro Título
    gsap.to("#titleOne", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    // Animação do primeiro Paragrafo
    gsap.fromTo(
      "#paragraphOne",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.1, stagger: 0.1 }
    );
  }, []);

  return (
    <main>
      <section className="flex flex-col h-full bg-[url('https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/fundo08.jpg')] bg-[80%_0%] bg-cover bg-no-repeat bg-fixed px-6 pt-10">
        <Navbar
          logo="logoWhite.png"
          styleHamburguer="bg-white"
          styleLinks="text-white"
          styleBotao_1="bg-white"
          corIcone="text-white"
        />
        <div className="flex max-md:w-full h-full lg:w-[1300px] mx-auto max-md:flex-col">
          <div className="w-full  flex-1 flex flex-col md:justify-end md:mb-10 h-[662px]">
            <div className="w-full">
              <h1
                id="titleOne"
                className={`max-md:mt-7 pb-5
              text-6xl md:text-8xl lg:text-[110px] 
              text-cyan-400 font-[600] 
              lg:mb-5 w-full opacity-0 ${roboto.className}`}
              >
                Paixão por <br />{" "}
                <span className="text-6xl md:text-8xl lg:text-[120px] text-white font-[600]">
                  ensinar.
                </span>
              </h1>
            </div>
            <p
              id="paragraphOne"
              className={`${asap.className} text-white 
            max-w-100 lg:w-150  
            md:text-xl lg:text-2xl max-md:text-lg md:font-[400] 
            md:mb-20 opacity-0`}
            >
              Estude gratuitamente e aprenda <br></br> com conteúdo e
              professores de qualidade.
            </p>
          </div>
          <div className="relative flex flex-1 justify-end items-end">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/guana6.png"
              alt="imagem do Gustavo Guanabara"
              width={500}
              className="
              md:w-170 max-md:w-100"
            />
          </div>
        </div>
      </section>
      <article className="py-5 px-10 max-w-[1500px] mx-auto">
        <section className="flex max-md:flex-col-reverse gap-5">
          <div className="flex-2 flex items-center">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/Ativo-12-768x621.png"
              alt="Imagem dos cursos da plataforma"
              width={700}
            />
          </div>

          <div className="flex-1 flex flex-col py-10 pl-10" id="titleTwo">
            <h2
              className={`text-5xl  font-bold text-blue-950 leading-14 ${catamaran.className}`}
            >
              Cursos de <br /> Tecnologia <br />
              <span className="text-blue-600">gratuitos</span> e de <br />{" "}
              qualidade.
            </h2>

            <button className="my-15 w-40 shadow bg-blue-600 py-3 px-10 rounded-3xl text-white active:opacity-80">
              Conhece
            </button>
          </div>
        </section>
        {/* Seja um apoiador */}
        <SejaApoiador />
        <section
          className={`flex justify-center items-center max-sm:flex-col gap-2 mb-20`}
        >
          <div className="w-full h-full">
            <h4
              className={`${catamaran.className} text-[43px]  font-bold text-blue-950 leading-13 mt-20 max-w-100 mx-auto`}
            >
              Mensagens que tornam o nosso dia mais feliz{" "}
              <span className="text-blue-700">♥</span>
            </h4>
          </div>
          <ComentarioAlunos />
        </section>
      </article>
    </main>
  );
}
