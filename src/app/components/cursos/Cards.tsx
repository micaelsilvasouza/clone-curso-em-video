"use client";

// Lib React
import { useState } from "react";

// Componentes
import Image from "next/image";
import VideoDescription from "@/app/components/video_description";
import MenuTextCursos from "./menu_text_cursos";

// Lib React icons
import { GiBookCover } from "react-icons/gi";
type cardAPI = {
  description: string;
  image: string;
  title: string;
};

type cardProps = {
  cardAPI: cardAPI[];
};

export default function Cards({ cardAPI }: cardProps) {
  // guarda o índice do card aberto (ou null se nenhum)
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  // pega só o trecho antes do primeiro hífen
  const getTitle = (line: string): string => {
    const match = line.match(/^(.*?)\s*-/);
    return match ? match[1].trim() : line.trim(); // se não houver hífen, devolve a linha toda
  };
  return (
    <section>
      {/* Checkpoint da timeline (bolinha lateral) */}
      <div className="absolute md:-left-[55px] max-md:-left-3 top-25 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

      {/* mapeando array de cursos */}
      {cardAPI.map((card, indexCard: number) => (
        <div key={indexCard}>
          {indiceAberto === indexCard && (
            <MenuTextCursos
              aberto={indiceAberto === indexCard}
              fechar={() => setIndiceAberto(null)}
            />
          )}
          {/* cardAPI */}
          <article className="cardAPICurso bg-gray-800 text-white mx-2 flex  gap-5 my-3 rounded-xl max-md:pb-10 max-md:flex-col">
            {/* Imagem */}
            <div className="flex flex-1 items-center justify-around rounded-2xl">
              <Image
                src={card.image}
                alt={card.title}
                width={800}
                height={800}
                className="flex flex-1 cursor-pointer object-cover"
              />
            </div>

            {/* Descrição */}
            <div className="flex flex-1 flex-col items-center max-md:pl-5 justify-center">
              <h2 className="text-xl my-5 w-full">{getTitle(card.title)}</h2>

              <div className="w-full text-gray-300 text-sm max-sm:line-clamp-3 line-clamp-3">
                <VideoDescription description={card.description.slice(0,200)} />
              </div>
            </div>
            <section className="w-30 h-50 flex justify-center items-center">
              <section>
                <GiBookCover
                  size={30}
                  className={`text-blue-500 cursor-pointer ${
                    indiceAberto === indexCard ? "hidden" : "visited"
                  }`}
                  onClick={() =>
                    setIndiceAberto(
                      indiceAberto === indexCard ? null : indexCard
                    )
                  }
                />
              </section>
            </section>
          </article>
        </div>
      ))}
    </section>
  );
}
