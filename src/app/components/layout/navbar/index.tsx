"use client";

// componente
import Img_custon from "@/app/components/img_custon";
import BotaoScroll from "./BotaoScroll";
import MenuHamburgue from "./mobile/MenuHamburgue";
import XdoMenuAberto from "./mobile/XdoMenuAberto";
import Links from "./Links";
import { BotaoCuston } from "./BotaoCuston";
import { Dropdown } from "./Dropdown";

// Lib next
import Link from "next/link";
// Lib react
import { useState, useEffect } from "react";

// Tipagem do NavBar
interface ProprNavBar {
  style?: string;
  styleHamburguer?: string;
  logo?: "logoBlue.png" | "logoWhite.png";
  styleLinks?: string;
  styleBotao_1?: string;
  styleBotao_2?: string;
  corIcone?: string;
}

export default function Navbar({
  style = "bg-sky-50 text-black",
  logo,
  styleHamburguer = "bg-black",
  styleLinks = "text-blue-950",
  styleBotao_1,
  styleBotao_2,
  corIcone = "text-blue-700",
}: ProprNavBar) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Impede rolagem do body quando o menu estiver aberto
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Atualiza o estado de scroll
    const mudancaDoScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", mudancaDoScroll);

    // Detecta clique fora do menu (navbarLinks)
    const handleBodyClick = (event: MouseEvent) => {
      const navbarLinks = document.getElementById("navbarLinks");

      if (
        isOpen &&
        navbarLinks &&
        !navbarLinks.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    // Cleanup: remove os listeners
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      window.removeEventListener("scroll", mudancaDoScroll);
    };
  }, [isOpen]);

  return (
    <nav>
      {/* NavBar Desktop */}
      {!isOpen && (
        <div className={` flex items-center justify-between max-md:hidden `}>
          {/* Logo */}
          <div>
            <Link href="/">
              <Img_custon
                img={`${logo}`}
                alt="Imagem da logo Curso em Vídeo"
                width={150}
              />
            </Link>
          </div>

          <ul className={`flex gap-5 mx-5 text-sm ${styleLinks}`}>
            <Links isOpen={isOpen} corIcone={corIcone} />

            {/* Dropdown */}
            <Dropdown
              style={style}
              padding="px-4 py-2"
              links="text-black"
              styleBorde="border-blue-700"
              hoverText="hover:text-blue-700"
              Mais="text-blue-700"
            />
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
      <div className="md:hidden h-30 flex items-center">
        <Link href="/">
          <Img_custon
            img="logoBlue.png"
            alt="Imagem da logo do Curso em Vídeo"
            width={150}
          />
        </Link>
        {isOpen && (
          <div
            id="navbarLinks"
            className={`opacity-100 p-4 w-80 h-dvh items-start flex
              flex-col justify-around absolute top-0 left-0 gap-7 z-10
              transition-transform duration-3000 ease-in-out text-base font-base 
              ${styleLinks}`}
            style={{ backgroundColor: "var(--bg-header-open)" }}
          >
            <Link href="/">
              <Img_custon
                img="logoBlue.png"
                alt="Imagem da logo do Curso em Vídeo"
                width={150}
              />
            </Link>
            <ul className="flex flex-col gap-5">
              <Links isOpen={isOpen} />
              <Dropdown
                padding="px-4 py-2"
                style={"text-black/80"}
                styleBorde="border-blue-700"
                links="text-black"
                hoverText="hover:text-blue-700"
                Mais="text-sky-500"
              />
            </ul>
            {/* Botão customizado */}
            <BotaoCuston
              styleDiv="flex flex-col"
              isOpen={isOpen}
              styleBotao_1="w-full text-black"
              styleBotao_2={styleBotao_2}
            />
          </div>
        )}
        {/* Menu Mobile */}
        <MenuHamburgue
          isOpen={isOpen}
          isScrolled={isScrolled}
          setIsOpen={setIsOpen}
          stylesBar={styleHamburguer}
        />
        <XdoMenuAberto isScrolled={isScrolled} isOpen={isOpen} />
      </div>
      {/* Botão para direcionar o scrol para cima */}
      <BotaoScroll isScrolled={isScrolled} />
    </nav>
  );
}
