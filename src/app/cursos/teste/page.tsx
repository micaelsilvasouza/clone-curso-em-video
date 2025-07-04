// Importação dos componentes
import Navbar from "@/app/components/layout/navbar";
import MenuTextCursos from "@/app/components/cursos/menu_text_cursos";
import AnimacaoCards from "@/app/components/cursos/animation/AnimacaoCards";
import Cards from "@/app/components/cursos/Cards";

// Importação das Fontes
import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"], weight: ["600"] });

export default function Curso() {
  const array = [
    {
      img: "slag.png",
      alt: "Imagem da slag.png",
      title: "Aula 01 – Introdução",
      description:
        "Neste módulo você verá o que é o curso, estrutura e como começar.",
    },
    {
      img: "slag.png",
      alt: "Imagem da slag.png",
      title: "Aula 02 – Instalações",
      description:
        "Configurando VSCode, Node.js e o ambiente de desenvolvimento.",
    },
    {
      img: "slag.png",
      alt: "Imagem do slag.png",
      title: "Aula 03 – Primeiro Projeto",
      description: "Vamos criar o primeiro projeto com React e Tailwind.",
    },
    {
      img: "slag.png",
      alt: "Imagem de slag.png",
      title: "Nome da aula da vez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis ea repudiandae impedit saepe eius molestias, pariatur voluptate minima dolore quis quisquam delectus, ipsum voluptas nihil quasi laborum iste molestiae?",
    },
    {
      img: "slag.png",
      alt: "Imagem do slag.png",
      title: "Nome da aula da vez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis ea repudiandae impedit saepe eius molestias, pariatur voluptate minima dolore quis quisquam delectus, ipsum voluptas nihil quasi laborum iste molestiae?",
    },
    {
      img: "slag.png",
      alt: "Imagem do slag.png",
      title: "Nome da aula da vez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis ea repudiandae impedit saepe eius molestias, pariatur voluptate minima dolore quis quisquam delectus, ipsum voluptas nihil quasi laborum iste molestiae?",
    },
  ];
  return (
    <article className="relative overflow-x-hidden">
      <Navbar logo="logoBlue.png" styleNavbar="mx-5  md:py-10" />
      <MenuTextCursos />
      {/* Área do vídeo do Curso */}
      <AnimacaoCards />
      <section className="flex justify-center">
        <div className="bg-gray-950/90 h-130 w-full max-w-[1300px] text-white md:rounded-2xl flex flex-col items-center justify-center md:mx-1">
          <h2 className="text-2xl">Vídeo</h2>
          <h1 className="md:text-5xl max-md:text-2xl">Vídeo da aula da vez</h1>
        </div>
      </section>
      <article className="flex flex-col mt-10">
        <div>
          <h1
            className={`md:text-3xl max-md:text-2xl text-gray-900/80  text-center pb-10 mx-10`}
          >
            Curso de{" "}
            <span className={`${asap.className} text-blue-500`}>HTML5</span> &{" "}
            <span className={`${asap.className} text-blue-500`}>CSS3</span>-{" "}
            <span className={`${asap.className} text-blue-500`}>Módulo 1</span>
          </h1>
        </div>

        <section className="flex w-full relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            {/* Timeline do curso ou Linha tempo*/}
            <div className="timeLine absolute md:left-20 max-md:left-8 top-0 bottom-0 w-0.5 bg-gray-950 mt-30"></div>

            {/* Cards das aulas restantes */}
            <section className="md:ml-32 max-md:ml-10 ">
              {/* mapeando array de cursos */}
              {array.map((card, index) => (
                <Cards card={card} key={index} />
              ))}
            </section>
          </div>
        </section>
      </article>
    </article>
  );
}
