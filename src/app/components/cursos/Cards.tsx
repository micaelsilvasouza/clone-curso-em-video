// Componentes
import Img_custon from "../img_custon";

// Lib react icons
import { MdSmartDisplay } from "react-icons/md";

interface ArrayProp {
  img: string;
  alt: string;
  title: string;
  description: string;
}

interface CardProp {
  key: number | string;
  card: ArrayProp;
}

export default function Cards({ card, key }: CardProp) {
  return (
    <section key={key}>
      {/* Checkpoint da timeline (exemplo de bolinha) */}
      <div className="absolute md:left-[73px] max-md:left-6 top-[120px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

      {/* Card de elemento */}
      <article className="cardCurso will-change-opacity will-change-scroll bg-gray-800 text-white mx-5 flex gap-5 my-3 rounded-xl md:p-5 max-md:pb-10 max-md:pt-3 max-md:px-3 max-md:flex-col">
        {/* Sessão da image(slug)*/}
        <div className="flex flex-1 items-center justify-around relative">
          <MdSmartDisplay size={30} className="cursor-pointer" />
          <Img_custon
            img={card.img}
            alt={card.alt}
            width={300}
            className="md:h-40 md:w-100 max-md:w-400 cursor-pointer"
          />
          {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        </div>

        {/* Sessão da descrição do card */}
        <div className="flex flex-1 flex-col items-center justify-center relative">
          <h2 className="text-xl my-5 w-full">{card.title}</h2>
          <p className="w-full max-sm:line-clamp-3 text-gray-300 text-sm">
            {card.description}
          </p>
          {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        </div>
      </article>
    </section>
  );
}
