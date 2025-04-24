import styles from "./styles.module.css";

import img from "/imgs/logoBlue.png";

export default function Header() {
  return (
    <header className={styles.h1}>
      <img src="/imgs/logoBlue.png" alt="Imagem da logo Curso em Vídeo" />
      <nav>
        <ul>
          <li>Curso</li>
          <li>Sobre</li>
          <li>Login</li>
          <li>Cadastre-se</li>
        </ul>
      </nav>
    </header>
  );
}
