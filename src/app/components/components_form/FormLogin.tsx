"use client";

// React Icons
import { FaCheck } from "react-icons/fa6";

// Lib React/Next
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Componentes
import Button from "./Button";
import InputForm from "./InputForm";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("Email possuir formato invalido");
      return;
    }

    if (password.length < 8) {
      alert("Senha no formato inválido");
      return;
    }

    router.push("/minha-conta");
  };

  return (
    <form className={``} action="">
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
