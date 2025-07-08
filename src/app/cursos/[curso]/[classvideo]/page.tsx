import { redirect } from "next/navigation";

import IframeVideo from "@/app/components/cursos/IframeVideo";
import NavbarCursos from "@/app/components/cursos/NavbarCursos";
import ButtonAula from "@/app/components/cursos/ButtonAula";
import MenuClassVideos from "@/app/components/cursos/menu_class_videos/MenuClassVideos";
import H1Custon from "@/app/components/cursos/h1Custon";
import { DropDownText } from "@/app/components/cursos/dropDownText";

import { FiBook } from "react-icons/fi";

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
    <main className="relative overflow-x-hidden py-5">
      {/* Navbar dos cursos */}
      <NavbarCursos curso={curso} videos={videos} video={video} />
      <section className="relative">
        <MenuClassVideos
          courseslug={videos.slug}
          coursetitle={videos.title}
          videos={videos}
          type="horizontal"
        />
        <article className="md:p-5 max-md:p-2">
          {/* Área do vídeo do Curso */}
          <section className="flex flex-col justify-center">
            <div className=" w-full mx-auto">
              <H1Custon title={video.title} />
            </div>
            <div>
              <div className=" w-full max-w-[1300px] md:rounded-2xl flex flex-col items-center justify-center md:mx-auto ">
                <div
                  className="aspect-video w-full max-w-[1050px] my-5 
                md:ml-6 md:pl-2 max-md:pl-2 md:pr-6 "
                >
                  <IframeVideo src={video.video} />
                </div>
              </div>
            </div>
          </section>
          <section className=" justify-center items-center justify-cente flex max-md:flex-col-reverse gap-5">
            <ButtonAula
              text="Aula anterior"
              btnPrev={"ativa"}
              curso={curso}
              video={video}
              videos={videos}
              styleButton="bg-blue-1010 text-white"
              styleIcone="text-white"
            />
            <ButtonAula
              text="Voltar para o módulo"
              btnPlaylist={"ativa"}
              curso={curso}
              video={video}
              videos={videos}
              styleButton="bg-blue-1010 text-white"
              styleIcone="text-white"
            />
            <ButtonAula
              text="Clique aqui para marca como concluído"
              btnCheckout={"ativa"}
              curso={curso}
              videos={videos}
              video={video}
              styleButton="bg-blue-1010 text-white"
              styleIcone="text-white"
            />
          </section>
          {/* Área Material de Apoio */}
          <section className="md:mx-6 max-md:ml-2">
            <div className="border border-blue-500 shadow-lg py-5 md:px-10 max-md:px-5  my-10 md:rounded-3xl max-md:rounded-xl lg:max-w-7xl md:max-w-5xl mx-auto ">
              <div className="flex items-center gap-2 py-5">
                <FiBook size={30} className="text-blue-500" />
                <h2 className="md:text-2xl max-md:text-[20px] font-medium">
                  Material de Apoio
                </h2>
              </div>
              {/* Dropdown */}
              <DropDownText video={video} />
            </div>
          </section>
          <Aviso />
        </article>
      </section>
    </main>
  );
}

function Aviso() {
  return (
    <section className="flex flex-col gap-5 max-w-4xl mx-auto">
      <p>
        <span className="text-red-500 font-bold">ATENÇÃO:</span> O botão de
        concluir aula só fica clicável depois que toda a aula é assistida Para
        avançar no andamento dos cursos você precisa sempre:
      </p>
      <p>
        <strong className="font-semibold">
          1&#41; Ver o vídeo até o final
        </strong>
      </p>
      <p>
        2&#41; Clicar no botão de &quot;
        <span className="font-semibold">
          CLIQUE AQUI PARA MARCAR COMO CONCLUÍDO
        </span>
        &quot; das aulas, capitulos, módulos e cursos após ver o vídeo ou antes
        de
        <span className="font-semibold">avançar</span> para{" "}
        <span className="font-semibold">aula seguinte</span>. Assistindo ao
        vídeo até o final e{" "}
        <span className="font-semibold">clicando no botão de concluído</span>{" "}
        ele{" "}
        <span className="font-semibold">
          deve conseguir avançar sem problemas.
        </span>
      </p>
    </section>
  );
}
