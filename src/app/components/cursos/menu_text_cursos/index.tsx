"use client";

// Lib React
import { useEffect } from "react";

// Componente
import X_fechar from "../X_fechar";
import AnimacaoBook from "../animation/AnimacaoBook";
import TextBook from "../TextBook";

type PropMenuTextCursos = {
  clickBook: boolean;
  setClickBook: React.Dispatch<React.SetStateAction<boolean>>;
  VideoDescription: cardAPI[];
};

type cardAPI = {
  description: string;
  image: string;
  title: string;
};

export default function MenuTextCursos({
  clickBook,
  setClickBook,
  VideoDescription,
}: PropMenuTextCursos) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const elemento = document.getElementById("info");

      if (clickBook && elemento && !elemento.contains(event.target as Node)) {
        setClickBook(!clickBook);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setClickBook, clickBook]);

  return (
    <section
      id="info"
      className={`absolute left-0 z-10  w-5  bg-[210%_0%]  bg-no-repeat bg-gray-900 rounded-e-lg  transition-all ease-in duration-500 
        ${
          clickBook
            ? "xl:w-6xl md:w-full max-md:w-full bg-[url('/image/womanStudying.svg')]"
            : "w-5"
        } ${window.innerWidth > 500 ? "h-[25%]" : ""}`}
    >
      <AnimacaoBook clickBook={clickBook} />
      <section className="w-full flex justify-end mt-10">
        <X_fechar setAtivo={setClickBook} clickBook={clickBook} />
      </section>
      <TextBook clickBook={clickBook} />
    </section>
  );
}
