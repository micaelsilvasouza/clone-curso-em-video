"use client";

//hooks react
import { useState, useEffect } from "react";

//componentes
import { LinkClassVideo } from "./LinkClassVideo";
import HeaderMenuClassVideos from "./HeaderMenuClassVideos";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
interface PropsVideoClass {
  title: string;
  slug: string;
}

interface PropsMenuClassVideos {
  type: "vertical" | "horizontal";
  videos: PropsVideoClass[];
  courseslug: string;
  coursetitle: string;
  open?: boolean;
}

export default function MenuClassVideos({
  type,
  videos,
  courseslug,
  coursetitle,
  open = false,
}: PropsMenuClassVideos) {
  const [isopening, setIsOpening] = useState(false);
  useEffect(() => {
    if (open) {
      setIsOpening(open);
    }
  }, [open]);

  const [largura, setLargura] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ser o largura da tela for maior ou igual a 768px vai fechar o navBar
    if (largura >= 768 && isOpen === true) {
      setIsOpen(!isOpen);
    }
    // Função que pega a largura atual da tela
    const atualizarLargura = () => {
      setLargura(window.innerWidth);
    };
    // Chamar uma vez ao montar
    atualizarLargura();
    // evento para ficar monitorando a tela
    window.addEventListener("resize", atualizarLargura);

    // Detecta clique fora do menu (navbarLinks)
    const handleBodyClick = (event: MouseEvent) => {
      const navbarLinks = document.getElementById("navbarLinks");

      if (
        isOpen &&
        navbarLinks &&
        !navbarLinks.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    // Cleanup: remove os listeners
    return () => {
      window.removeEventListener("resize", atualizarLargura);
    };
  }, [largura, isOpen]);

  if (type == "vertical") {
    return (
      <section
        className={`
                flex
                flex-col
                bg-white
                duration-800
                w-9/10 max-w-[800px] my-10 mx-auto rounded-xl border-2 border-gray-300`}
      >
        {/* Passando a alteraçaõ de estado para o componente filho */}
        <HeaderMenuClassVideos
          type={type}
          course={coursetitle}
          quantity={videos.length}
          isopening={isopening}
          setIsOpening={setIsOpening}
        />

        <section
          className={`
                    duration-800 px-2 
                    ${
                      //Se o tipo for que abre para baixo, ele aplica o teste de abertura
                      isopening
                        ? "h-125 overflow-y-scroll"
                        : "h-0 overflow-hidden"
                    }`}
        >
          {videos.map((video: PropsVideoClass) => (
            <LinkClassVideo
              key={video.slug}
              title={video.title}
              slug={video.slug}
              course={courseslug}
            />
          ))}
        </section>
        <p
          onClick={() => {
            setIsOpening(!isopening);
          }}
          className="cursor-pointer text-center text-blue-800 text-base p-5"
        >
          {isopening ? (
            <>
              Recolher
              <FaAngleUp className="block m-auto" />
            </>
          ) : (
            <>
              Expandir
              <FaAngleDown className="block m-auto" />
            </>
          )}
        </p>
      </section>
    );
  }

  return (
    type === "horizontal" && (
      <article
        className={`${
          isopening ? "w-300" : "w-10"
        } h-dvh  relative ease-in transition-all bg-amber-900`}
      >
        <section
          className={`
              absolute
              duration-800
              min-h-[100dvh]
              z-10
              ${isopening ? "w-[100%]" : "w-0"}
              ${largura > 768 ? "w-4" : "w-0"}
            `}
        >
          <section
            className={`flex flex-col absolute top-0 right-0 w-[100dvw] md:w-[50dvw] h-full bg-white rounded-xl`}
          >
            <HeaderMenuClassVideos
              type={type}
              course={coursetitle}
              quantity={videos.length}
              isopening={isopening}
              setIsOpening={setIsOpening}
            />
            <section className={`py-10 overflow-y-scroll`}>
              {videos.map((video: PropsVideoClass) => (
                <LinkClassVideo
                  key={video.slug}
                  title={video.title}
                  slug={video.slug}
                  course={courseslug}
                />
              ))}
            </section>
          </section>
        </section>
      </article>
    )
  );
}
