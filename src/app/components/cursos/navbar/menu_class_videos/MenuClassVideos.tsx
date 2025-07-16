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

  porcent: number | undefined //valor de porcentagem do curso

  courseslug: string;
  coursetitle: string;
  clickHamburguer?: boolean;
}

export default function MenuClassVideos({
  type,
  videos,

  porcent, //valor de porcentagem do curso

  courseslug,
  coursetitle,
  clickHamburguer = false,
}: PropsMenuClassVideos) {
  const [isopening, setIsOpening] = useState(false);
  useEffect(() => {
    if (clickHamburguer) {
      setIsOpening(clickHamburguer);
    }
  }, [isopening, clickHamburguer]);

  const [largura, setLargura] = useState(0);

  useEffect(() => {
    // ser o largura da tela for maior ou igual a 768px vai fechar o navBar
    // if (largura >= 768 && isopening === true) {
    //   setIsOpening(!isopening);
    // }
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
      const navbarLinks = document.getElementById("menu");

      if (
        isopening &&
        navbarLinks &&
        !navbarLinks.contains(event.target as Node)
      ) {
        setIsOpening(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    // Cleanup: remove os listeners
    return () => {
      window.removeEventListener("resize", atualizarLargura);
    };
  }, [largura, isopening]);

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

          porcent={porcent} //valor de porcentagem do curso

          isopening={isopening}
          setIsOpening={setIsOpening}
        <section/>

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

          {videos.map((video: PropsVideoClass, index) => (
            <LinkClassVideo
              key={index}
              title={video.title}
              slug={video.slug}
              video_watched={porcent ? index < (videos.length * porcent) : false}
              liberated={porcent ? index <= (videos.length * porcent) : index == 0}

              course={courseslug}
              isopening={isopening}
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
        id="menu"
        className={`${

          isopening ? "w-300" : "w-0  border-r border-black/10"
        }  relative ease-in transition-all max-w-200`}
      >
        <section
          className={`
              absolute
              duration-800
              h-dvh
              z-10

              bg-white

              ${isopening ? "w-[100%]" : "w-5  border-r border-black/10"}
              ${largura > 768 ? "w-2" : "w-2"}
            `}
        >
          <section className={`flex flex-col`}>
            <HeaderMenuClassVideos
              type={type}
              course={coursetitle}
              quantity={videos.length}
              porcent={porcent}
              isopening={isopening}
              setIsOpening={setIsOpening}
              clickHamburguer={clickHamburguer}
            />
            <section
              className={` ${
                isopening ? " overflow-y-scroll" : "overflow-hidden"
              }  h-dvh`}

            >
              {videos.map((video: PropsVideoClass) => (
                <LinkClassVideo
                  key={video.slug}
                  title={video.title}
                  slug={video.slug}
                  course={courseslug}

            > 
              {videos.map((video: PropsVideoClass, index) => (
                <LinkClassVideo
                  key={index}
                  title={video.title}
                  slug={video.slug}
                  course={courseslug}
                  video_watched={porcent ? index < (videos.length * porcent) : false}
                  liberated={porcent ? index <= (videos.length * porcent) : false}

                  isopening={isopening}
                />
              ))}
            </section>
          </section>
        </section>
      </article>
    )
  );
}
