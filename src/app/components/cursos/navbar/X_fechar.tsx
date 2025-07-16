"use client";

import { useState } from "react";

import Xfechamento from "./animation/Xfechamento";
import Xfechamento from "../animation/Xfechamento";


interface Props {
  fecharMenu: () => void; // deixa explícito
}

export default function X_fechar({ fecharMenu }: Props) {
  const [ativo, setAtivo] = useState(false); // controla o X animado

  function handleClick() {
    setAtivo((prev) => !prev); // alterna animação do X
    fecharMenu(); // fecha o menu principal
  }

  return (
    <section
      className="w-30 h-22 flex justify-end cursor-pointer"
      onClick={handleClick}
    >
      {/* passa o estado 'ativo' para a animação */}
      <Xfechamento aberto={ativo} />

      <article className="relative container">
        <div className="w-0.5 h-10 bg-blue-500 absolute right-10 transform rotate-45 translate-y-0 bar-01"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-20 transform -rotate-45 translate-y-0 bar-02"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-10 top-10 transform -rotate-45 bar-03"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-20 top-10 transform rotate-45 bar-04"></div>
      </article>
    </section>
  );
}
