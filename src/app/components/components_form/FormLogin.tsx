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

//funções de cookie
import {saveToken} from "@/actions/actions_cookies"

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
      fetch("https://backend-cursoemvideo.onrender.com/user/login",{
        method: "post",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.error){
            setMessageType("erro");
          }else{
            setMessageType("sucesso");
            saveToken(data.token)
            router.push("/minha-conta")
          }
          
          setNotification(true);
          setMessage(data.message);
        
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
