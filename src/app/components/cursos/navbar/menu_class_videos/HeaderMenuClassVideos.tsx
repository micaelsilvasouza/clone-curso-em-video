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
  porcent: number | undefined;
  isopening: boolean;
  clickHamburguer?: boolean;
  setIsOpening: (value: boolean) => void;
}

export default function HeaderMenuClassVideos({
  type,
  course,
  quantity,
  porcent,
  isopening,
  clickHamburguer,
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

  const porcentformat = porcent ? Math.floor(porcent * 100)+"%" : "0%"
  const competeSteps = porcent ? quantity * porcent : 0

  return (
    <section
      className={`bg-blue-1010 text-white font-bold relative  h-50
            ${type == "vertical" ? "text-lg p-10" : "p-2 text-base"}`}
    >
      <div
        className={`${
          isopening
            ? "opacity-100 duration-1000"
            : `${type == "horizontal" ? "opacity-0" : ""}`
        } transition-all ease-in`}
      >
        <p className="px-10 py-2">
          <LuBook className="inline align-middle" /> {course}
        </p>

        <p className="px-10 py-2">0% Completo | 0 / {quantity} steps</p>

        <p className="px-10 py-2">{porcentformat} Completo | {competeSteps} / {quantity} steps</p>
      </div>

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
            `${clickHamburguer ? "" : <FaAngleLeft className="text-xl" />}`
          ) : (
            <FaAngleRight className="text-xl" />
          )}
        </span>
      )}
    </section>
  );
}
