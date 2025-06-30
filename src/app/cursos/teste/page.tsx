"use client";
// Importação dos componentes
import Img_custon from "@/app/components/img_custon";
import Navbar from "@/app/components/layout/navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { MdSmartDisplay } from "react-icons/md";

// Importação das Fontes
import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"], weight: ["600"] });

export default function Curso() {
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRes = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top top+=200",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
      }
    );

    // Anima os cards entrando em fade + slide
    cardRes.current.map((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          delay: index * 0.1,
        }
      );
    });
  }, []);

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
  ];
  return (
    <>
      <Navbar logo="logoBlue.png" styleNavbar="mx-5  md:py-10" />
      {/* Área do vídeo do Curso */}
      <section className="flex justify-center">
        <div className="bg-gray-950/90 h-130 w-full max-w-[1300px] text-white md:rounded-2xl flex flex-col items-center justify-center md:mx-5">
          <h2 className="text-2xl">Vídeo</h2>
          <h1 className="md:text-5xl max-md:text-2xl">Vídeo da aula da vez</h1>
        </div>
      </section>
      <article className="flex flex-col mt-10">
        <div>
          <h1
            className={`md:text-3xl max-md:text-2xl text-gray-900/80  text-center pb-10 mx-10`}
          >
            Curso de <span className={`${asap.className}`}>HTML5</span> &{" "}
            <span className={`${asap.className}`}>CSS3</span>-{" "}
            <span className={`${asap.className}`}>Módulo 1</span>
          </h1>
        </div>

        <section className="flex w-full">
          <div className="max-w-[1200px] mx-auto relative">
            {/* Timeline do curso ou Linha tempo*/}
            <div
              ref={lineRef}
              className="absolute md:left-20 max-md:left-8 top-0 bottom-0 w-0.5 bg-gray-950 mt-30"
            ></div>

            {/* Cards das aulas restantes */}
            <section className="md:ml-32 max-md:ml-10">
              {/* mapeando array de cursos */}
              {array.map((card, index) => (
                <section key={index}>
                  {/* Checkpoint da timeline (exemplo de bolinha) */}
                  <div className="absolute md:left-[73px] max-md:left-6 top-[120px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

                  {/* Card de elemento */}
                  <article
                    className="bg-gray-800 text-white mx-5 flex gap-5 my-3 rounded-xl md:p-5 max-md:pb-10 max-md:pt-3 max-md:px-3 max-md:flex-col"
                    ref={(el) => {
                      cardRes.current[index] = el!;
                    }}
                  >
                    {/* Sessão da image(slug)*/}
                    <div className="flex flex-1 items-center justify-around relative">
                      <MdSmartDisplay size={30} className="cursor-pointer" />
                      <Img_custon
                        img={card.img}
                        alt={card.alt}
                        width={300}
                        className="md:h-40 md:w-100 max-md:w-400 cursor-pointer"
                      />
                      {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
                    </div>

                    {/* Sessão da descrição do card */}
                    <div className="flex flex-1 flex-col items-center justify-center relative">
                      <h2 className="text-xl my-5 w-full">{card.title}</h2>
                      <p className="w-full max-sm:line-clamp-3 text-gray-300 text-sm">
                        {card.description}
                      </p>
                      {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
                    </div>
                  </article>
                </section>
              ))}
            </section>
          </div>
        </section>
      </article>
    </>
  );
}
