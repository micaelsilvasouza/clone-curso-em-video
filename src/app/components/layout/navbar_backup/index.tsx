"use client";

// componente
import Img_custon from "@/app/components/img_custon";
import BotaoScroll from "./BotaoScroll";
import MenuHamburgue from "./mobile/MenuHamburgue";
import XdoMenuAberto from "./mobile/XdoMenuAberto";
import Links from "./Links";
import { BotaoCuston } from "./BotaoCuston";

// Lib next
import Link from "next/link";
// Lib react
import { useState, useEffect } from "react";

// Tipagem do NavBar
interface ProprNavBar {
  style?: string;
  styleHamburguer?: string;
  logo?: string;
  styleLinks?: string;
  styleBotao_1?: string;
  styleBotao_2?: string;
}

export default function Navbar({
  style = "bg-sky-50 text-black",
  logo = "logoBlue.png",
  styleHamburguer = "bg-black",
  styleLinks = "text-blue-950",
  styleBotao_1,
  styleBotao_2,
}: ProprNavBar) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Vai monitorar ser vai rola a barra de rolagem
    const mudancaDoScroll = () => {
      setIsScrolled(window.scrollY > 0); // o scroll foi ativado?
    };

    window.addEventListener("scroll", mudancaDoScroll);

    // Quando Clicar no Body fechar o Navbar
    const ul = document.getElementById("navbarLinks");

    const handleBodyClick = (event: MouseEvent) => {
      if (isOpen && ul && !ul.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    ul?.addEventListener("click", () => setIsOpen(true));
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      if (ul) {
        ul.removeEventListener("click", handleBodyClick);
      }
      window.removeEventListener("scroll", mudancaDoScroll);
    };
  }, [isOpen]);

  return (
    <nav className="p-5">
      {/* NavBar Desktop */}
      {!isOpen && (
        <div
          className={`${style} p-5 flex items-center justify-between max-md:hidden`}
        >
          {/* Logo */}
          <div>
            <Link href="/">
              <Img_custon
                img={logo}
                alt="Imagem da logo Curso em Vídeo"
                width={150}
              />
            </Link>
          </div>

          <ul className={`flex gap-5 text-sm ${styleLinks}`}>
            <Links isOpen={isOpen} />
          </ul>

          {/* Botão customizado */}
          <BotaoCuston
            styleDiv="flex"
            styleBotao_1={styleBotao_1}
            styleBotao_2={styleBotao_2}
            isOpen={isOpen}
          />
        </div>
      )}

      {/* Navbar Mobile */}
      {isOpen && (
        <ul
          id="navbarLinks"
          className={`opacity-100 w-80 p-4 pt-20 h-dvh items-start flex
      flex-col absolute top-0 left-0 gap-7 z-10
      transition-transform duration-3000 ease-in-out text-base font-base 
      ${styleLinks}
      p-0`}
          style={{ backgroundColor: "var(--bg-header-open)" }}
        >
          <Links isOpen={isOpen} />

          {/* Botão customizado */}
          <BotaoCuston
            styleDiv="flex flex-col"
            isOpen={isOpen}
            styleBotao_1="w-full text-black"
            styleBotao_2={styleBotao_2}
          />
        </ul>
      )}
      {/* Menu Mobile */}
      <MenuHamburgue
        isOpen={isOpen}
        isScrolled={isScrolled}
        setIsOpen={setIsOpen}
        stylesBar={styleHamburguer}
      />
      <XdoMenuAberto
        isOpen={isOpen}
        isScrolled={isScrolled}
        setIsOpen={setIsOpen}
      />
      {/* Botão para direcionar o scrol para cima */}
      <BotaoScroll isScrolled={isScrolled} />
    </nav>
  );
}
