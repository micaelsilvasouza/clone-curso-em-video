// Componentes
import Image from "next/image";
import VideoDescription from "@/app/components/video_description";

// Lib React icons
import { MdSmartDisplay } from "react-icons/md";
type cardAPI = {
  description: string;
  image: string;
  title: string;
};

type cardProps = {
  cardAPI: cardAPI;
};

export default function Cards({ cardAPI }: cardProps) {
  return (
    <section className="relative">
      {/* Checkpoint da timeline (bolinha lateral) */}
      <div className="absolute md:-left-[55px] max-md:-left-3 top-25 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

      {/* cardAPI */}
      <article className="cardAPICurso bg-gray-800 text-white mx-2 flex gap-5 my-3 rounded-xl max-md:pb-10 max-md:flex-col">
        {/* Imagem */}
        <div className="flex flex-1 items-center justify-around rounded-2xl relative">
          <Image
            src={cardAPI.image}
            alt={cardAPI.title}
            width={200}
            height={200}
            className="flex flex-1 cursor-pointer object-cover"
          />
        </div>

        {/* Descrição */}
        <div className="flex flex-1 flex-col items-center max-md:pl-5 justify-center relative">
          <h2 className="text-xl my-5 w-full">{cardAPI.title}</h2>

          <p className="w-full text-gray-300 text-sm max-sm:line-clamp-3 line-clamp-3">
            <VideoDescription description={cardAPI.description} />
          </p>
        </div>

        {/* Botão play */}
        <div className="cursor-pointer flex justify-center items-center md:pr-10">
          <MdSmartDisplay size={30} className="cursor-pointer" />
        </div>
      </article>
    </section>
  );
}
