import Img_custon from "../img_custon";
import ButtonAula from "./ButtonAula";

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
  if (!video || !videos || videos.length === 0 || !curso) {
    return <div>Carregando informações do curso...</div>;
  }
  return (
    <header className="flex items-center justify-around">
      <Img_custon img="logoBlue.png" alt="Logo do Curso em Vídeo" width={150} />
      <nav>
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
      </nav>
    </header>
  );
}
