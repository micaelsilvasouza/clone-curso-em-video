"use client";

// componente
import Img_custon from "@/app/components/img_custon";
import BotaoScroll from "./BotaoScroll";
import MenuHamburgue from "./mobile/MenuHamburgue";
import XdoMenuAberto from "./mobile/XdoMenuAberto";
import Links from "./Links";

// Lib next
import Link from "next/link";
// Lib react
import { useState, useEffect } from "react";

// Type NavBar
interface ProprNavBar {
  style?: string;
  styleHamburguer: string;
  logo: string;
  styleLinks: string;
}

export default function Navbar({
  style,
  logo = "logoBlue.png",
  styleHamburguer,
  styleLinks = "text-blue-950",
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

    return () => {
      window.removeEventListener("scroll", mudancaDoScroll);
    };
  }, [isOpen]);

  return (
    <nav className={`${style} p-5 flex items-center justify-between`}>
      {/* Logo */}
      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-100 z-20"
        } md:opacity-100`}
      >
        <Link href="/">
          <Img_custon
            img={logo}
            alt="Imagem da logo Curso em Vídeo"
            width={150}
          />
        </Link>
      </div>

      {/* Links estão responsivo */}
      <ul
        className={`
          md:pointer-events-auto
          md:flex md:relative md:pt-0 md:flex-row
          flex flex-col items-center
          absolute top-0 left-0
          gap-6
          z-10
          md:h-0
          transition-transform duration-3000 ease-in-out
          text-base font-base ${styleLinks}
          p-0
          ${
            isOpen
              ? "opacity-100 w-80 p-4 pt-20 h-dvh items-start"
              : "opacity-0 md:opacity-100"
          }
        `}
        style={{ backgroundColor: "var(--bg-header-open)" }}
      >
        {/* Links */}
        <Links isOpen={isOpen} />
      </ul>

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
