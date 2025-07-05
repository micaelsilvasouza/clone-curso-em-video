"use client";

// Lib React
import { useEffect } from "react";

// Componente
import X_fechar from "../X_fechar";
import AnimacaoBook from "../animation/AnimacaoBook";
import TextBook from "../TextBook";

type MenuTextCursosProps = {
  aberto: boolean;
  fechar: () => void;
};

export default function MenuTextCursos({
  aberto,
  fechar,
}: MenuTextCursosProps) {
  // 1️⃣ fecha ao clicar fora
  useEffect(() => {
    if (!aberto) return; // só escuta se estiver aberto

    function handleClick(event: MouseEvent) {
      const el = document.getElementById("info");
      if (el && !el.contains(event.target as Node)) fechar();
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [aberto, fechar]);

  if (!aberto) return null; // nada a renderizar se fechado

  return (
    <section
      id="info"
      className={`absolute left-0 z-10 bg-gray-900 rounded-e-lg
        transition-all duration-1000 ease-in
        md:w-full lg:w-[90%] h-[20%]
        bg-[url('/image/womanStudying.svg')] bg-no-repeat bg-[210%_0%]
        ${
          aberto
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <AnimacaoBook clickBook={aberto} />
      <section className="flex justify-end mt-10">
        <X_fechar fecharMenu={fechar} />
      </section>
      <TextBook clickBook={aberto} />
    </section>
  );
}
