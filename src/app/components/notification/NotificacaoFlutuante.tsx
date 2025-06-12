"use client";
// Lib ReactIcons
import { IoCloseOutline } from "react-icons/io5";

// Componentes
import { IconeSucesso } from "./avisos/iconeSucesso";
import { IconeErro } from "./avisos/iconeErro";
import { IconeAviso } from "./avisos/iconeAviso";

// Lib React
import React from "react";
import { useEffect } from "react";

// styles css
import styles from "./styles.module.css";

interface NotificacaoFlutuanteProps {
  mensagem: string;
  mensagemDetalhada?: string;
  tipo: "sucesso" | "erro" | "aviso";
  iconNotification?: React.ReactNode;
  icone?: React.ReactNode;
  ativo?: boolean;
  setAtivo: (value: boolean)=>void
}

export default function NotificacaoFlutuante({
  mensagem,
  mensagemDetalhada,
  tipo,
  ativo,
  setAtivo
}: NotificacaoFlutuanteProps) {

  useEffect(() => {
    if (ativo) {
      const timer = setTimeout(() => {
        setAtivo(false); //altera 
      }, 3000); // Duração de 3 segundos

      return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }
  }, [ativo]);

  return (
    // Verifica se a notificação está visível
    ativo && (
      <section
        className={`bg-white
     border border-gray-700/10 p-4 rounded-lg shadow-lg 
     fixed top-5 right-4 z-50 min-w-75 max-w-80 flex gap-2 ${styles.mensagem} `}
      >
        <div className="flex-1 relative mr-4">
          {/* Vai colocar o icone conforme o tipo */}
          {tipo === "sucesso" && <IconeSucesso tipo={tipo} />}
          {tipo === "erro" && <IconeErro tipo={tipo} />}
          {tipo === "aviso" && <IconeAviso tipo={tipo} />}
        </div>
        <div className="flex flex-col flex-10 gap-2">
          <h2 className="text-sm font-semibold">{mensagem}</h2>
          <p className="text-black/80 text-sm">{mensagemDetalhada}</p>
        </div>
        <div className="flex flex-1 relative justify-center">
          <IoCloseOutline
            size={25}
            className="text-black/50 absolute -top-2 -right-2 cursor-pointer"
          />
        </div>
      </section>
    )
  );
}
