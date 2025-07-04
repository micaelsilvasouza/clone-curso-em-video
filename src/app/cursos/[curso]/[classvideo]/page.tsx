import { notFound, redirect } from "next/navigation";

import IframeVideo from "@/app/components/iframe_video";
// Importação dos componentes
import Navbar from "@/app/components/layout/navbar";
import MenuTextCursos from "@/app/components/cursos/menu_text_cursos";
import AnimacaoCards from "@/app/components/cursos/animation/AnimacaoCards";
import Cards from "@/app/components/cursos/Cards";
import H1Custon from "@/app/components/cursos/h1Custon";

type cardAPI = {
  video: string;
  description: string;
  image: string;
  title: string;
};

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
      {/* Área do vídeo do Curso */}
      <AnimacaoCards />
      <section className="flex justify-center">
        <div className=" w-full max-w-[1300px] md:rounded-2xl flex flex-col items-center justify-center md:mx-1">
          <div className="aspect-video w-full max-w-[1000px] my-5 mx-auto shadow-lg">
            <IframeVideo src={video.video} />
          </div>
        </div>
      </section>
      <article className="flex flex-col mt-10">
        <div>
          <H1Custon title={course.title} />
        </div>
        <MenuTextCursos />

        <section className="flex w-full relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            {/* Timeline do curso ou Linha tempo*/}
            <div className="timeLine absolute md:left-20 max-md:left-8 top-0 bottom-0 w-0.5 bg-gray-950 mt-30"></div>

            {/* Cards das aulas restantes */}
            <section className="md:ml-32 max-md:ml-10 ">
              {/* mapeando array de cursos */}
              {videos.map((card: cardAPI, index: number) => (
                <div key={index}>
                  <Cards cardAPI={card} />
                </div>
              ))}
            </section>
          </div>
        </section>
      </article>
    </main>
  );
}
