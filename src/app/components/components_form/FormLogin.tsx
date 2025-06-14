"use client";

// React Icons
import { FaCheck } from "react-icons/fa6";

// Lib React/Next
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Componentes
import Button from "./ButtonForm";
import InputForm from "./InputForm";
import NotificacaoFlutuante from "../notification/NotificacaoFlutuante";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"sucesso" | "erro" | "aviso">(
    "sucesso"
  );
  const router = useRouter();

  const validation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setMessage("Email possui formato inválido");
      setNotification(true);
      setMessageType("aviso");
      return;
    }

    if (password.length < 3) {
      setMessage("Senha no formato inválido");
      setNotification(true);
      setMessageType("aviso");
      return;
    }

    if(!notification){
      fetch("https://filipe520.github.io/api-cursoEmVideo/db/students.json")
      .then(res=>res.json())
      .then(data=>{
        const search: {email: string, senha: string}[] = data.filter((aluno: {email: string}) =>aluno.email == email)

        if(search.length == 1){
          //encaminha para minha conta
          const aluno = search[0]
          if(aluno.senha == password){
            router.push("/minha-conta");
          }else{
            setMessage("Senha inválida");
            setNotification(true);
            setMessageType("aviso");  
          }
        }else{
          setMessage("Usuário não cadastrado");
          setNotification(true);
          setMessageType("aviso");
        }
      })
      .catch(()=>{
        setMessage("Falha ao buscar os dados do aluno!");
        setNotification(true);
        setMessageType("erro");
      })
    }

  };

  return (
    <form className={``}>
      {<NotificacaoFlutuante
        mensagem={message}
        tipo={messageType}
        ativo={notification}
        setAtivo={setNotification}

      />}
      <h1 className="text-3xl text-indigo-900 font-semibold py-5">Entrar</h1>
      <section className="flex flex-col gap-5">
        <InputForm
          name={"email"}
          label="Email"
          placeholder={"Digite seu melhor e-mail..."}
          type={"email"}
          changeFunction={setEmail}
        />
        <InputForm
          name={"password"}
          label="Senha"
          placeholder={"Digite sua senha..."}
          type={"password"}
          changeFunction={setPassword}
          pattern="\d{8}"
        />
        <section className=" flex items-center gap-2">
          <label
            htmlFor="lembrarSenha"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="lembrarSenha"
                id="lembrarSenha"
                className="appearance-none w-5 h-5 bg-white border border-gray-400 rounded-full peer"
              />
              <FaCheck className="absolute left-0.5 top-0.5 opacity-0 peer-checked:opacity-100" />
            </div>
            Lembrar senha
          </label>
        </section>
        <Button title="Entrar" clickFunction={validation} />
      </section>
      <Link href="/cadastre-se" className="text-sm font-light text-indigo-700">
        Cadastrar
      </Link>{" "}
      |{" "}
      <Link
        href="minha-conta/senha-perdida/"
        className="text-sm font-light text-indigo-700"
      >
        Esqueceu senha?
      </Link>
    </form>
  );
}
