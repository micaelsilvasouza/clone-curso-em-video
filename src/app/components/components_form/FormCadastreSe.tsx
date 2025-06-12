"use client";

// Lib React/Next
import { useState } from "react";
import { useRouter } from "next/navigation";

// Componentes
import InputForm from "./InputForm";
import Button from "./ButtonForm";
import NotificacaoFlutuante from "../notification/NotificacaoFlutuante";

export default function FormCadastreSe({ stylesForm }: { stylesForm: string }) {
  const [name, setNome] = useState("");
  const [lastname, setLastNome] = useState("");
  const [email, setEmail] = useState("");
  const [cemail, setCEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"sucesso" | "erro" | "aviso">(
    "sucesso"
  );
  const router = useRouter();

  const validate = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name == "") {
      setNotification(true);
      setMessage("Nome não informado");
      setMessageType("aviso");
      return;
    }

    if (lastname == "") {
      setNotification(true);
      setMessage("Sobrenome não informado");
      setMessageType("aviso");
      return;
    }

    if (email == "" || !regexEmail.test(email) || email != cemail) {
      setNotification(true);
      setMessage("Email invalido ou não correspondentes");
      setMessageType("aviso");
      return;
    }

    if (password.length < 8 || password != cpassword) {
      setNotification(true);
      setMessage("Senha fraca ou não correspondentes");
      setMessageType("aviso");
      return;
    }

    if (notification === false) {
      fetch("https://filipe520.github.io/api-cursoEmVideo/db/students.json")
        .then((res) => res.json())
        .then((data) => {
          const search: { email: string }[] = data.filter(
            (aluno: { email: string }) => aluno.email === email
          );
          if (search.length <= 0) {
            setNotification(true);
            setMessage("Aluno cadastrado com SUCESSO!");
            setMessageType("sucesso");

            router.push("/login");
          } else {
            setNotification(true);
            setMessage("E-mail de Aluno já cadastrado");
            setMessageType("aviso");
          }
        })
        .catch(() => {
          setNotification(true);
          setMessage("Ocorreu um erro ao buscar os aluno");
          setMessageType("erro");
        });
    }
  };

  return (
    <form className={stylesForm}>
      <NotificacaoFlutuante
        mensagem={message}
        tipo={messageType}
        ativo={notification}
        setAtivo={setNotification}
      />
      <InputForm
        name="firstname"
        label="Nome *"
        placeholder="Digite o nome que usará no certificado"
        type="text"
        changeFunction={setNome}
      />
      <InputForm
        name="lastname"
        label="Sobrenome *"
        placeholder="Digite o sobrenome que usará no certificado"
        type="text"
        changeFunction={setLastNome}
      />
      <InputForm
        name="email"
        label="E-mail *"
        placeholder="Digite seu melhor e-mail..."
        type="email"
        changeFunction={setEmail}
      />
      <InputForm
        name="confirm-email"
        label="Confirme seu e-mail *"
        placeholder="Confirme seu e-mail..."
        type="email"
        changeFunction={setCEmail}
      />
      <InputForm
        name="passoword"
        label="Senha *"
        placeholder="Digite a senha."
        type="password"
        changeFunction={setPassword}
      />
      <InputForm
        name="confirm-password"
        label="Confirme a senha. *"
        placeholder="Digite novamente sua senha."
        type="password"
        changeFunction={setCPassword}
      />
      <Button
        title="Registrar Gratuitamente"
        styles="bg-blue-800 text-white py-4 mt-3"
        clickFunction={validate}
      />
    </form>
  );
}
