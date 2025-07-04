import { notFound, redirect } from "next/navigation";

import IframeVideo from "@/app/components/iframe_video";
// Importação dos componentes
import Navbar from "@/app/components/layout/navbar";
import MenuTextCursos from "@/app/components/cursos/menu_text_cursos";
import AnimacaoCards from "@/app/components/cursos/animation/AnimacaoCards";
import Cards from "@/app/components/cursos/Cards";

// Importação das Fontes
import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"], weight: ["600"] });

export const revalidate = 60; //revalidar os dados a cada 60 segundos

export default async function ClassVideo({
  params,
}: {
  params: Promise<{ classvideo: string; curso: string }>;
}) {
  const { classvideo, curso } = await params;

  const datavideo = await fetch(
    //buscando video
    `https://backend-cursoemvideo.onrender.com/video/${classvideo}`
  );

  const datavideos = await fetch(
    //buscando videos do curso
    `https://backend-cursoemvideo.onrender.com/videos/${curso}`
  );

  const datacurso = await fetch(
    //buscando curso
    `https://backend-cursoemvideo.onrender.com/course/${curso}`
  );

  if (
    datavideo.status != 200 ||
    datavideos.status != 200 ||
    datacurso.status != 200
  ) {
    redirect("/error/fetch-error");
    return;
  }

  const videos = await datavideos.json(); //videos do curso

  const video = await datavideo.json(); //video

  const course = await datacurso.json(); //video

  // 1) regex só para URLs http(s)
  const urlRegex = /https?:\/\/[^\s"']+/gi;

  // 2) regex que remove URLs http(s) e mantém o texto entre elas
  const tagLinkRegex = /https?:\/\/[^\s"']+/gi;

  const urls = [];
  const textoLimpo = [];

  videos.map((v) => {
    urls.push([...v.description.matchAll(urlRegex)].map((m) => m[0])); // pega só o https://…
    textoLimpo.push(
      v.description
        .replace(tagLinkRegex, "$1") // tira URLs http(s), deixa só o miolo
        .replace(/\s+/g, " ")
        .trim()
    );
  });

  if (
    videos == undefined ||
    videos == null ||
    videos.length == 0 ||
    video == null ||
    video == undefined ||
    curso == undefined ||
    curso == null
  ) {
    notFound();
  }

  return (
    <main className="relative overflow-x-hidden">
      <Navbar logo="logoBlue.png" styleNavbar="mx-5  md:py-10" />
      <MenuTextCursos />
      {/* Área do vídeo do Curso */}
      <AnimacaoCards />
      <section className="flex justify-center">
        <div className="bg-gray-950/90 h-130 w-full max-w-[1300px] text-white md:rounded-2xl flex flex-col items-center justify-center md:mx-1">
          <div className="aspect-video w-full max-w-[800px] my-5 mx-auto shadow-lg">
            <IframeVideo src={video.video} />
          </div>
        </div>
      </section>
      <article className="flex flex-col mt-10">
        <div>
          <h1
            className={`md:text-3xl max-md:text-2xl text-gray-900/80  text-center pb-10 mx-10`}
          >
            {course.title}
            {video.title}
            Curso de{" "}
            <span className={`${asap.className} text-blue-500`}>
              HTML5
            </span> &{" "}
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
              {videos.map((video, index) => (
                <div key={index}>
                  <Cards card={video} itemKey={video.id ?? index} />
                </div>
              ))}
            </section>
          </div>
        </section>
      </article>
    </main>
  );
}
