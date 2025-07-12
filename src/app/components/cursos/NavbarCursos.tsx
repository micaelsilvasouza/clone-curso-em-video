import ButtonAula from "./ButtonAula";
import MenuClassVideos from "./menu_class_videos/MenuClassVideos";

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
    <header className="flex pb-5 gap-2 max-md:ml-2 max-w-5xl mx-auto">
      <nav className="flex flex-col w-full">
        <section className=" bg-blue-950 h-20">
          <MenuClassVideos
            courseslug={videos[0]?.slug || ""}
            coursetitle={videos[0]?.title || ""}
            videos={videos}
            type="horizontal"
          />
        </section>
        <section className="flex gap-2 max-md:px-2 mx-auto w-full">
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
      </nav>
    </header>
  );
}
