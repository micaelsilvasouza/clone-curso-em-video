import Link from "next/link";
import Button from "../layout/button";
import Input from "../layout/input";

export default function FormLogin(){
    return (
        <form action="">
            <Input name={"email"} title={"Email"} type={"email"}/>
            <Input name={"password"} title={"Senha"} type={"password"}/>
            <Input name={"remid"} title={"Testando"} type={"checkbox"}/>
            <Button title="Entrar"/>
            <Link href="/">Cadastrar</Link>
            |
            <Link href="/">Esqueceu senha?</Link>
        </form>
    )
}