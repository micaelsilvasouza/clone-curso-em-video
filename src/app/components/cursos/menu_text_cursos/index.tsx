"use client";

// Lib React
import { useState } from "react";

// Lib React icons
import { GiBookCover } from "react-icons/gi";

// Componente
import X_fechar from "../X_fechar";

export default function MenuTextCursos() {
  const [clickBook, setClickBook] = useState(false);

  return (
    <section
      className={`absolute left-0 z-10 h-full w-5 bg-gray-800 rounded-e-lg  transition-all ease-in duration-1000 ${
        clickBook ? "w-full" : "w-5"
      }`}
    >
      <section className="w-full flex justify-end mt-10">
        <X_fechar setAtivo={setClickBook} clickBook={clickBook} />
      </section>
      <section className="w-15 h-full relative">
        <section className=" right-0 absolute z-0">
          <GiBookCover
            size={30}
            className={`text-blue-500 cursor-pointer ${
              clickBook ? "hidden" : "visited"
            }`}
            onClick={() => setClickBook(!clickBook)}
          />
        </section>
      </section>
    </section>
  );
}
