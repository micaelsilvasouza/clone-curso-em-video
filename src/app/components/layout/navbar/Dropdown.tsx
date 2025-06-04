"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// CSS
import styleModule from "./style.module.css";

// React icons
import { PiCertificate } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOndemandVideo } from "react-icons/md";

interface Prop {
  links?: string;
  style?: string;
  padding?: "px-4 py-2" | "p-10";
  styleBorde?: "border-white" | "border-blue-700" | "border-sky-500";
  hoverText?:
    | "hover:text-blue-100"
    | "hover:text-blue-700"
    | "hover:text-white";
  Mais?: "text-sky-500" | "text-black" | "text-white" | "text-blue-700";
}

export function Dropdown({
  style = "text-black",
  links,
  padding,
  styleBorde,
  hoverText,
  Mais,
}: Prop) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const refDropdown = useRef<HTMLDivElement>(null); // a referência do dropdown vai começar vazio

  useEffect(() => {
    // Ser clicar fora do dropdown ele vai fechar o dropdown
    const handledDropdown = (event: MouseEvent) => {
      if (
        refDropdown.current &&
        !refDropdown.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handledDropdown);

    // Fazendo a limpeza do evento addEventListener
    return () => {
      document.removeEventListener("click", handledDropdown);
    };
  }, []);

  return (
    <div className="z-10" ref={refDropdown}>
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`cursor-pointer bg-white/80 border border-blue-600 w-full  transition ease-in hover:bg-gray-800 hover:border-blue-500 rounded-lg ${hoverText} ${style} ${padding} ${styleBorde}`}
      >
        Veja{" "}
        <span
          className={`${Mais} inline-block transition ease-in ${
            openDropdown ? "transform rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <nav className={`${openDropdown ? "flex" : ""} relative`}>
        <ul
          className={`bg-white/70 absolute border border-sky-500 mt-5 ${padding} w-65 flex flex-col justify-center items-start gap-2 rounded-sm shadow ${
            openDropdown ? styleModule.dropdownOpen : "opacity-0"
          }`}
        >
          {[
            {
              nome: "Validação de Certificado",
              link: "/validacao-de-certificado/",
              icon: <PiCertificate className="text-blue-700" />,
            },
            {
              nome: "Assine",
              link: "/apoie/",
              icon: <FaHandHoldingHeart className="text-blue-700" />,
            },
            {
              nome: "Patrocine",
              link: "/seja-um-patrocinador/",
              icon: <MdOndemandVideo className="text-blue-700" />,
            },
          ].map((navegacao, index) => (
            <Link href={navegacao.link} key={index}>
              <li
                className={`hover:text-blue-700 border-b border-transparent hover:border-blue-600 transition ease-in ${links} flex gap-2 md:text-base`}
              >
                {navegacao.icon}
                {navegacao.nome}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
