"use client";

import { useEffect, useRef, useState } from "react";

export default function CliqueForaExemplo() {
  const [aberto, setAberto] = useState(false);
  const caixaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickFora = (evento: MouseEvent) => {
      if (
        caixaRef.current &&
        !caixaRef.current.contains(evento.target as Node)
      ) {
        setAberto(false); // se clicar fora da caixa, fecha
      }
    };

    document.addEventListener("click", handleClickFora);
    return () => {
      document.removeEventListener("click", handleClickFora);
    };
  }, []);

  return (
    <div className="p-10 min-h-screen bg-slate-100">
      <button
        onClick={() => setAberto(!aberto)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Abrir Caixa
      </button>

      {aberto && (
        <div
          ref={caixaRef}
          className="mt-4 w-64 p-4 bg-white border border-gray-400 rounded shadow"
        >
          <p>Sou a caixa! Clique fora de mim para me fechar.</p>
        </div>
      )}
    </div>
  );
}
