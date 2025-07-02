// Componentes
import Image from "next/image";

// Lib react icons
import { MdSmartDisplay } from "react-icons/md";

interface ArrayProp {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface CardProp {
  itemKey: string | number;
  card: ArrayProp;
}

export default function Cards({ card, itemKey }: CardProp) {
  return (
    <section className="relative">
      {/* Checkpoint da timeline (exemplo de bolinha) */}
      <div className="absolute md:-left-[55px] max-md:-left-3 top-25 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>
      {itemKey}
      {/* Card de elemento */}
      <article className="cardCurso will-change-opacity will-change-scroll bg-gray-800 text-white mx-2 flex gap-5 my-3 rounded-xl max-md:pb-10  max-md:flex-col">
        {/* Sessão da image(slug)*/}
        <div className="flex flex-1 items-center justify-around rounded-2xl relative">
          <Image
            src={`${card.image}`}
            alt={card.title}
            width={300}
            height={300}
            className="flex flex-1 cursor-pointer"
          />
          {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        </div>

        {/* Sessão da descrição do card */}
        <div className="flex flex-1 flex-col items-center max-md:pl-5 justify-center relative">
          <h2 className="text-xl my-5 w-full">{card.title}</h2>
          <p className="w-full max-sm:line-clamp-3 text-gray-300 text-sm">
            {card.description}
          </p>
          {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        </div>
        <div className="cursor-pointer flex justify-center items-center md:pr-10  ">
          <MdSmartDisplay size={30} className="cursor-pointer" />
        </div>
      </article>
    </section>
  );
}
