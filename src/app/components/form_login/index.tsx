import Link from "next/link";
import Button from "../layout/button";
import Input from "../layout/input";
import styles from "./style.module.css";

export default function FormLogin() {
  return (
    <form className={styles.form} action="">
      <h1>Entrar</h1>
      <Input name={"email"} title={"Email"} type={"email"} />
      <Input name={"password"} title={"Senha"} type={"password"} />
      <Button title="Entrar" />
      <Link href="/matricula-gratis">Cadastrar</Link> |{" "}
      <Link href="minha-conta/senha-perdida/">Esqueceu senha?</Link>
    </form>
  );
}
