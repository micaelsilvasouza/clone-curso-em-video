import { redirect } from "next/navigation";

import IframeVideo from "@/app/components/cursos/IframeVideo";
import NavbarCursos from "@/app/components/cursos/NavbarCursos";
import ButtonAula from "@/app/components/cursos/ButtonAula";
import H1Custon from "@/app/components/cursos/h1Custon";
import { DropDownText } from "@/app/components/cursos/dropDownText";
import MenuClassVideos from "@/app/components/cursos/menu_class_videos/MenuClassVideos";

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

  return (
    <main className="  flex flex-col">
      <section>
        {/* Navbar dos cursos */}
        <NavbarCursos curso={curso} videos={videos} video={video} />
      </section>
      <section className="flex">
        <MenuClassVideos
          courseslug={videos[0]?.slug || ""}
          coursetitle={videos[0]?.title || ""}
          videos={videos}
          type="horizontal"
        />
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
            <Aviso />
          </article>
        </section>
      </section>
    </main>
  );
}

function Aviso() {
  return (
    <section className="flex flex-col gap-5">
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
