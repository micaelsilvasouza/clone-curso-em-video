import Input from "../../layout/input"
import Button from "../../layout/button"
import styles from "../styles.module.css"

export default function FormCadastreSe(){
    return (
        <form className={styles.form} action="">
           <Input name="firstname" title="Nome" type="text"/>
           <Input name="lastname" title="Sobrenome" type="text"/>
           <Input name="email" title="E-mail" type="email"/>
           <Input name="confirm-email" title="Confirme seu e-mail" type="email"/>
           <Input name="passoword" title="Senha" type="password"/>
           <Input name="confirm-password" title="Confirmar sua senha" type="password"/>
           <Button title="Cadastrar-se"/>
        </form>
    )
}