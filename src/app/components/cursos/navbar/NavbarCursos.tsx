"use client";

import ButtonAula from "../ButtonAula";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
// import PorcentCourse from "../porcent_couse";

type NavbarCursosProp = {
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

export default function NavbarCursos({
  curso,
  videos,
  video,
}: NavbarCursosProp) {
  const [openUser, setOpenUser] = useState(false);
  console.log(curso);
  return (
    <header className="grid grid-cols-[1fr_1fr_80px] grid-rows-2 bg-red-700/50">
      {/* Barra de progresso */}
      <section className="grid  row-start-1 row-end-2 col-start-1 col-end-3 bg-amber-900">
        {/* <PorcentCourse steps={videos.length} porcent={}/> */}
      </section>
      <section className="grid grid-cols-2 col-start-1 col-end-3 row-start-2 row-end-3 bg-blue-400">
        <ButtonAula
          text="Aula anterior"
          btnPrev={"ativa"}
          curso={curso}
          video={video}
          videos={videos}
          styleButton="bg-transparent text-blue-1010"
          styleIcone="text-blue-1010"
        />
        <ButtonAula
          text="Marca como concluído"
          btnCheckout={"ativa"}
          curso={curso}
          videos={videos}
          video={video}
          styleButton="bg-transparent text-blue-1010"
          styleIcone="text-blue-1010"
          iconeReverse={true}
        />
      </section>
      {/* Sessão Login */}
      <section
        className=" grid  col-start-3 col-end-4 row-start-1 row-end-3 grid-cols-[1fr_30px] cursor-pointer bg-indigo-700 items-center justify-items-center"
        onClick={() => setOpenUser(!openUser)}
      >
        <div className="w-13 h-13 bg-gradient-to-l from-gray-300 to-black rounded-full items-center flex justify-center"></div>
        <div>
          <IoIosArrowDown
            size={25}
            className={`${!openUser ? "" : "rotate-180"}`}
          />
        </div>
      </section>
    </header>
  );
}
