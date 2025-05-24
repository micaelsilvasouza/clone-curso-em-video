"use client";

// Lib React/Next
import { useState } from "react";
import { useRouter } from "next/navigation";

// Componentes
import InputForm from "./InputForm";
import Button from "./Button";

export default function FormCadastreSe() {
  const [name, setNome] = useState("");
  const [lastname, setLastNome] = useState("");
  const [email, setEmail] = useState("");
  const [cemail, setCEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const router = useRouter();

  const validate = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name == "") {
      alert("Nome não informado");
      return;
    }

    if (lastname == "") {
      alert("Sobrenome não informado");
      return;
    }

    if (email == "" || !regexEmail.test(email) || email != cemail) {
      alert("Email invalido ou não correspondentes");
      return;
    }

    if (password.length < 8 || password != cpassword) {
      alert("Senha fraca ou não correspondentes");
      return;
    }

    router.push("/login");
  };

  return (
    <form className={``} action="">
      <InputForm
        name="firstname"
        label="Nome"
        placeholder="Digite seu primeiro nome..."
        type="text"
        changeFunction={setNome}
      />
      <InputForm
        name="lastname"
        label="Sobrenome"
        placeholder="Digite seu sobre nome..."
        type="text"
        changeFunction={setLastNome}
      />
      <InputForm
        name="email"
        label="E-mail"
        placeholder="Digite seu melhor e-mail..."
        type="email"
        changeFunction={setEmail}
      />
      <InputForm
        name="confirm-email"
        label="Confirme seu e-mail"
        placeholder="Confirme seu e-mail..."
        type="email"
        changeFunction={setCEmail}
      />
      <InputForm
        name="passoword"
        label="Senha"
        placeholder="Digite sua senha."
        type="password"
        changeFunction={setPassword}
      />
      <InputForm
        name="confirm-password"
        label="Confirmar sua senha."
        placeholder="Digite novamente sua senha."
        type="password"
        changeFunction={setCPassword}
      />
      <Button title="Cadastrar-se" clickFunction={validate} />
    </form>
  );
}
