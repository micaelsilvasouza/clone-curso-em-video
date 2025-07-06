import { notFound, redirect } from "next/navigation";

import IframeVideo from "@/app/components/cursos/IframeVideo";
// Importação dos componentes
import AnimacaoCards from "@/app/components/cursos/animation/AnimacaoCards";

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
      {/* Área do vídeo do Curso */}
      <AnimacaoCards />
      <section className="flex justify-center">
        <div className=" w-full max-w-[1300px] md:rounded-2xl flex flex-col items-center justify-center md:mx-1">
          <div className="aspect-video w-full max-w-[1000px] my-5 mx-auto shadow-lg">
            <IframeVideo src={video.video} />
          </div>
        </div>
      </section>
    </main>
  );
}
