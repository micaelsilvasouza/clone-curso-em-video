import ButtonAula from "./ButtonAula";
import Img_custon from "../img_custon";

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
  return (
    <header className="grid grid-cols-4 grid-rows-2 max-md:ml-2 h-30">
      <section className="w-100 h-full grid items-center justify-center bg-blue-500/50">
        <Img_custon
          img="logoBlue.png"
          alt="Logo do Curso em Vídeo"
          width={150}
        />
      </section>
      <section className="w-70 h-full bg-red-800 grid"></section>
      <nav className=" w-full bg-violet-400 grid grid-cols-2 gap-5 row-start-2 row-end-3 col-start-1 col-end-5 pb-10 ">
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
      </nav>
      <section className="bg-amber-500 w-40 h-full grid col-start-4 col-end-5 row-start-1 row-end-3"></section>
    </header>
  );
}
