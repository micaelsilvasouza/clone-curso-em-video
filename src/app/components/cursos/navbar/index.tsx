"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import NavbarCursos from "./NavbarCursos";
import MenuClassVideos from "./menu_class_videos/MenuClassVideos";
import { useState } from "react";
import H1Custon from "../h1Custon";
import IframeVideo from "../IframeVideo";
import ButtonAula from "../ButtonAula";
import { FiBook } from "react-icons/fi";
import { DropDownText } from "../dropDownText";
import AvisoText from "../AvisoText";

type AreaCursoProp = {
  curso: string;
  video: VideoApiProp;
  videos: VideosApiProp[];
};

type VideosApiProp = {
  slug: string;
  title: string;
  image: string;
};

type VideoApiProp = {
  description: string;
  title: string;
  video: string;
  order: number;
};

export default function AreaCurso({ curso, video, videos }: AreaCursoProp) {
  const [clickHamburguer, setClickHamburguer] = useState(false);
  return (
    <section className="bg-violet-500 grid grid-rows-[200px_1fr_1fr] grid-cols-[200px_1fr_1fr]">
      {/* Primeira área da DIV - Menu Hamburguer */}
      <div
        onClick={() => setClickHamburguer(!clickHamburguer)}
        className="grid col-start-1 col-end-2 row-start-1 row-end-2 bg-amber-300"
      >
        <RxHamburgerMenu size={25} />
      </div>
      {/* Segunda área da DIV - Botão é Login*/}
      <div className="bg-gray-800 grid col-start-2 col-end-4 row-start-1 row-end-2">
        <NavbarCursos curso={curso} video={video} videos={videos} />
      </div>
      {/* Terceira área da DIV - Menu Aulas*/}
      <div className="bg-red-700/50 col-start-1 col-end-2 row-start-2 row-end-4">
        {/* Menu das aulas */}
        <MenuClassVideos
          courseslug={videos[0]?.slug || ""}
          coursetitle={videos[0]?.title || ""}
          videos={videos}
          type="horizontal"
          clickHamburguer={clickHamburguer}
        />
      </div>
      {/* Quarta área da DIV - VIDEO */}
      <section className="bg-green-600 grid col-start-2 col-end-4 row-start-2 row-end-4">
        <section className="relative max-md:ml-2 max-w-5xl mx-auto">
          <article className="md:p-5 max-md:p-2">
            {/* Área do vídeo do Curso */}
            <section className="flex flex-col justify-center mx-auto">
              <div className=" w-full mx-auto">
                <H1Custon title={video.title} />
              </div>
              <div className=" w-full  md:rounded-2xl flex flex-col items-center justify-center md:mx-auto aspect-video max-w-[1050px] my-5">
                <IframeVideo src={video.video} />
              </div>
            </section>
            <section className=" mx-auto flex  flex-2 items-center justify-center md:gap-10 max-md:gap-3 max-md:flex-col flex-row-reverse md:max-w-4/5">
              <ButtonAula
                text="Marca como concluído"
                btnCheckout={"ativa"}
                curso={curso}
                videos={videos}
                video={video}
                styleButton="bg-blue-1010 text-white max-md:w-[90%]"
                styleIcone="text-white"
              />
              <ButtonAula
                text="Voltar para o módulo"
                btnPlaylist={"ativa"}
                curso={curso}
                video={video}
                videos={videos}
                styleButton="text-blue-500 w-full max-md:w-[90%]"
                styleIcone="text-blue-500"
              />
              <ButtonAula
                text="Aula anterior"
                btnPrev={"ativa"}
                curso={curso}
                video={video}
                videos={videos}
                styleButton="bg-blue-1010 text-white max-md:w-[90%]"
                styleIcone="text-white"
              />
            </section>
            {/* Área Material de Apoio */}
            <section>
              <div className="border border-blue-500 shadow-lg py-5 md:px-10 max-md:px-5  my-10 md:rounded-3xl max-md:rounded-xl lg:max-w-7xl md:max-w-5xl mx-auto ">
                <div className="flex items-center gap-2 py-5">
                  <FiBook size={30} className="text-blue-500" />
                  <h2 className="md:text-2xl max-md:text-[20px] font-medium">
                    Material de Apoio
                  </h2>
                </div>
                {/* Dropdown  */}
                <DropDownText video={video} />
              </div>
            </section>
            <AvisoText />
          </article>
        </section>
      </section>
    </section>
  );
}
