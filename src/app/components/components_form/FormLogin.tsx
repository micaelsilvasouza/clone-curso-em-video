"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"], weight: "600" });

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
import Btn_Google from "./btn-google/Btn_Google";

//funções de cookie
import { saveToken } from "@/actions/actions_cookies";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(false);
  const [islodding, setIslodding] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"sucesso" | "erro" | "aviso">(
    "sucesso"
  );
  const [animationBtn, setAnimationBtn] = useState(true);

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

    if (!notification) {
      setIslodding(true);
      fetch("https://backend-cursoemvideo.onrender.com/user/login", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIslodding(false);
          if (data.error) {
            setMessageType("erro");
          } else {
            // Ativa a ANIMAÇÃO do botão entrar
            setAnimationBtn(true);
            if (data.message) {
              // vai esperar 3 segundo para efetua o LOGIN
              setTimeout(() => {
                setMessageType("sucesso");
                saveToken(data.token);
                router.push("/minha-conta");
              }, 3000);
            } else {
              return;
            }
          }
          setNotification(true);
          setMessage(data.message);
        })
        .catch(() => {
          setIslodding(false);
          setMessage("Falha ao buscar os dados do aluno!");
          setNotification(true);
          setMessageType("erro");
        });
    }
  };

  return (
    <>
      <div
        className={`bg-[#00000035] fixed top-0 left-0 w-full h-full z-100 ${
          islodding ? "flex" : "hidden"
        } items-center justify-center`}
      ></div>
      <form className={``}>
        {
          <NotificacaoFlutuante
            mensagem={message}
            tipo={messageType}
            ativo={notification}
            setAtivo={setNotification}
          />
        }
        <h1
          className={`text-2xl text-gray-700 pt-10 pb-5 ${urbanist.className}`}
        >
          Faça Login
        </h1>
        <section className="flex flex-col gap-5 relative">
          <InputForm
            name={"email"}
            label="E-mail"
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
          <section className=" flex items-center justify-between gap-2">
            <label
              htmlFor="lembrarSenha"
              className="flex gap-2 cursor-pointer text-sm "
            >
              <div className="relative">
                <input
                  type="checkbox"
                  name="lembrarSenha"
                  id="lembrarSenha"
                  className="appearance-none w-5 h-5 bg-white border border-gray-400 rounded-full peer"
                />
                <FaCheck className="absolute w-full mx-auto top-0.5 opacity-0 peer-checked:opacity-100 text-blue-700" />
              </div>
              <p className="text-gray-500 hover:text-gray-900 transition-colors ease-in">
                Lembrar senha
              </p>
            </label>

            <div>
              <Link
                href="minha-conta/senha-perdida/"
                className={`${inter.className} text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors ease-in`}
              >
                Esqueceu senha?
              </Link>
            </div>
          </section>
          <Button
            title="Entrar"
            clickFunction={validation}
            animation={animationBtn}
          />
        </section>
        <div className="flex gap-1 justify-center items-center p-5 ">
          <p className="text-gray-500 text-base">Não tem uma conta?</p>
          <Link
            href="/cadastre-se"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors ease-in"
          >
            Cadastre-se
          </Link>
        </div>
        <section>
          <div className="flex items-center justify-center my-6">
            <div className="h-px flex-1 bg-gradient-to-r from-black to-white/50" />
            <span className="px-3 text-sm font-semibold text-gray-500">ou</span>
            <div className="h-px flex-1 bg-gradient-to-l from-black to-white/50" />
          </div>
          <div className="pb-5 w-fit m-auto">
            <GoogleOAuthProvider 
              clientId="593215396622-f6615g28imqq6m9c4943rvg5e11nmv6q.apps.googleusercontent.com"
            >
              <Btn_Google 
                //textBTN="Entrar com o Google" 
                setMessage={setMessage}  
                setNotification={setNotification}
                setMessageType={setMessageType}
              />
            </GoogleOAuthProvider>
          </div>
        </section>
      </form>
    </>
  );
}
