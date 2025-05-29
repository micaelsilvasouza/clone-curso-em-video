"use client";

import { useState, useEffect, useRef } from "react";

export default function TotalAlunos({
  totAlunos,
  ativo,
}: {
  totAlunos: number;
  ativo: boolean;
}) {
  const countRef = useRef(0);
  const [display, setDisplay] = useState(0);

  // Função para abreviar número
  const abreviarNumero = (valor: number) => {
    if (valor >= 1_000_000_000) return valor / 1_000_000_000 + " Bilhão";
    if (valor >= 1_000_000) return (valor / 1_000_000).toFixed(1) + " Milhões";
    if (valor >= 1_000) return valor / 1_000 + " Mil";
    return valor.toString();
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (ativo === true) {
        if (countRef.current >= totAlunos) {
          clearInterval(intervalo);
          return;
        }
      } else {
        return;
      }

      countRef.current += Math.ceil(totAlunos / 100); // incrementa mais rápido
      setDisplay(countRef.current);
    }, 40); // animação suave

    return () => clearInterval(intervalo);
  }, [ativo, totAlunos]);

  return (
    <div className="text-center">
      <p className="text-sky-800 mt-2">+ {abreviarNumero(display)}</p>
    </div>
  );
}
