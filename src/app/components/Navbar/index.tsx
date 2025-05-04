"use client";

// Styles modulo para algo espercífico
import styles from "./styles.module.css";

// componente
import Img from "../layout/img";
import BotaoScroll from "./mobile/BotaoScrol";
import MenuHamburgue from "./mobile/MenuHamburgue";
import XdoMenuAberto from "./mobile/XdoMenuAberto";

// Lib next
import Link from "next/link";
// Lib react
import { useState, useEffect } from "react";

export default function Navbar() {
  // Estilo da tag ul
  const menuClass = `
          md:flex md:relative md:h-0 md:pt-0 md:flex-row
          flex flex-col
          absolute top-0 left-0
          h-dvh
          p-4 pt-20
          gap-6
          z-10
          transition-transform duration-3000 ease-in-out
          text-base font-semibold text-blue-950
          `;

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
    <nav className={styles.Navbar}>
      {/* Logo */}
      <div
        className={`${styles.logo} ${
          isOpen ? "opacity-0" : "opacity-100 z-20"
        } md:opacity-100`}
      >
        <Link href="/">
          <Img img={"logoBlue.png"} alt="Imagem da logo Curso em Vídeo" />
        </Link>
      </div>

      {/* Links estão responsivo */}
      <ul
        className={` md:pointer-events-auto
          ${menuClass}
          ${isOpen ? "opacity-100 w-80" : "opacity-0 md:opacity-100"}
        `}
        style={{ backgroundColor: "var(--bg-header-open)" }}
      >
        <li
          className={`${
            isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
          }`}
        >
          <Link href="/cursos">Cursos</Link>
        </li>
        <li
          className={`${
            isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
          }`}
        >
          <Link href="/sobre">Sobre</Link>
        </li>
        <li
          className={`${
            isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
          }`}
        >
          <Link href="/login">Login</Link>
        </li>
        <li
          className={`${
            isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
          }`}
        >
          <Link href="/cadastre-se">Cadastre-se</Link>
        </li>
      </ul>

      {/* Menu Mobile */}
      <MenuHamburgue
        isOpen={isOpen}
        isScrolled={isScrolled}
        setIsOpen={setIsOpen}
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
