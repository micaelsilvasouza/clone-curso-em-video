import Link from "next/link";
import Button from "../../layout/button";
import Input from "../../layout/input";
import styles from "../styles.module.css"

export default function FormLogin(){
    return (
        <form className={styles.form} action="">
            <h1>Entrar</h1>
            <Input name={"email"} title={"Email"} type={"email"}/>
            <Input name={"password"} title={"Senha"} type={"password"}/>
            <Button title="Entrar"/>
            <Link href="/">Cadastrar</Link> | <Link href="/">Esqueceu senha?</Link>
        </form>
    )
}