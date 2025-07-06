import { redirect } from "next/navigation";

import IframeVideo from "@/app/components/cursos/IframeVideo";
import NavbarCursos from "@/app/components/cursos/NavbarCursos";
import ButtonAula from "@/app/components/cursos/ButtonAula";
import MenuClassVideos from "@/app/components/cursos/menu_class_videos/MenuClassVideos";
import H1Custon from "@/app/components/cursos/h1Custon";

import { FiBook } from "react-icons/fi";
import VideoDescription from "@/app/components/cursos/VideoDescription";

export const revalidate = 60; //revalidar os dados a cada 60 segundos

export default async function ClassVideo({
  params,
}: {
  params: Promise<{ classvideo: string; curso: string }>;
}) {
  const { classvideo, curso } = await params;

  let video, videos;

  try {
    const resVideo = await fetch(
      `https://backend-cursoemvideo.onrender.com/video/${classvideo}`
    );
    const resVideos = await fetch(
      `https://backend-cursoemvideo.onrender.com/videos/${curso}`
    );
    const resCurso = await fetch(
      `https://backend-cursoemvideo.onrender.com/course/${curso}`
    );

    if (!resVideo.ok || !resVideos.ok || !resCurso.ok) {
      redirect("/error/fetch-error");
    }

    video = await resVideo.json();
    videos = await resVideos.json();

    if (!video || !video.video) {
      redirect("/error/video-not-found");
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    redirect("/error/fetch-error");
  }

  console.log("video aqui", video.title);
  console.log("videos aqui", videos);

  return (
    <main className="relative overflow-x-hidden">
      {/* Navbar dos cursos */}
      <NavbarCursos curso={curso} videos={videos} video={video} />
      <section className="relative">
        <MenuClassVideos
          courseslug={videos.slug}
          coursetitle={videos.title}
          videos={videos}
          type="horizontal"
        />
        <section>
          <H1Custon title={video.title} />
        </section>
        {/* Área do vídeo do Curso */}
        <section className="flex justify-center">
          <div className=" w-full max-w-[1300px] md:rounded-2xl flex flex-col items-center justify-center md:mx-1">
            <div className="aspect-video w-full max-w-[1000px] my-5 mx-auto shadow-lg">
              <IframeVideo src={video.video} />
            </div>
          </div>
        </section>
      </section>
      <section className="flex gap-5">
        <ButtonAula
          text="Aula anterior"
          iconeLeft={"ativa"}
          curso={curso}
          video={video}
          videos={videos}
        />
        <ButtonAula
          text="Clique aqui para marca como concluído"
          iconeRight={"ativa"}
          curso={curso}
          videos={videos}
          video={video}
        />
      </section>
      <section>
        <div>
          <FiBook />
          <h2>Material de apoio</h2>
        </div>
        <div>
          <VideoDescription description={video.description} withLinks={true} />
        </div>
      </section>
    </main>
  );
}
