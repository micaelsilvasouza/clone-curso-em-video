import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { LuBook } from "react-icons/lu";

interface PropsHeaderMenuClassVideos {
  type: "vertical" | "horizontal";
  course: string;
  quantity: number;
  isopening: boolean;
  setIsOpening: (value: boolean) => void;
}

export default function HeaderMenuClassVideos({
  type,
  course,
  quantity,
  isopening,
  setIsOpening,
}: PropsHeaderMenuClassVideos) {
  const [largura, setLargura] = useState(0);
  useEffect(() => {
    // Função que pega a largura atual da tela
    const atualizarLargura = () => {
      setLargura(window.innerWidth);
    };

    // Chamar uma vez ao montar
    atualizarLargura();
    // evento para ficar monitorando a tela
    window.addEventListener("resize", atualizarLargura);

    return () => {
      window.removeEventListener("resize", atualizarLargura);
    };
  }, [largura]);

  return (
    <section
      className={`bg-blue-1010 text-white font-bold relative 
            ${
              type == "vertical"
                ? "text-lg p-10 rounded-t-xl"
                : "p-2 text-base rounded-tr-xl"
            }`}
    >
      <p className="px-10 py-2">
        <LuBook className="inline align-middle" /> {course}
      </p>
      <p className="px-10 py-2">0% Completo | 0 / {quantity} steps</p>

      {type == "vertical" && (
        <span
          className="cursor-pointer absolute bottom-1 right-2"
          onClick={() => {
            setIsOpening(!isopening);
          }}
        >
          {isopening ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      )}

      {type == "horizontal" && (
        <span
          className={`cursor-pointer text-white bg-blue-1010 p-2 rounded-full absolute top-10 -right-5 border border-white
             ${isopening ? "" : `opacity-100 pointer-events-auto`}`}
          onClick={() => {
            setIsOpening(!isopening);
          }}
        >
          {isopening ? (
            <FaAngleLeft className="text-xl" />
          ) : (
            <FaAngleRight className="text-xl" />
          )}
        </span>
      )}
    </section>
  );
}
