import Xfechamento from "./animation/Xfechamento";

import { Dispatch, SetStateAction } from "react";
interface Props {
  setAtivo: Dispatch<SetStateAction<boolean>>;
  clickBook: boolean;
}

export default function X_fechar({ setAtivo, clickBook }: Props) {
  return (
    <section
      className="w-30 h-22 flex justify-end cursor-pointer"
      onClick={() => setAtivo(!setAtivo)}
    >
      <Xfechamento clickBook={clickBook} />
      <article className="relative container">
        <div className="w-0.5 h-10 bg-blue-500 absolute right-10 transform rotate-45 translate-y-0 bar-01"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-20 transform -rotate-45 trnaslate-y-0 bar-02"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-10 top-10 transform -rotate-45 bar-03"></div>
        <div className="w-0.5 h-10 bg-blue-500 absolute right-20 top-10 transform rotate-45 bar-04"></div>
      </article>
    </section>
  );
}
