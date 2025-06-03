import Link from "next/link";

// Icons
import { LuBook } from "react-icons/lu";
import { ImInfo } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";

export default function Links({
  isOpen,
  corIcone,
}: {
  isOpen: boolean;
  corIcone?: string;
}) {
  return (
    <>
      {[
        {
          nome: "Início",
          rota: "/",
          icone: <IoHomeOutline className={`${corIcone}`} />,
        },
        {
          nome: "Cursos",
          rota: "/cursos",
          icone: <LuBook className={`${corIcone}`} />,
        },
        {
          nome: "Sobre nós",
          rota: "/sobre",
          icone: <ImInfo className={`${corIcone}`} />,
        },
      ].map((navegacao, index) => (
        <li
          key={index}
          className={`${
            isOpen
              ? "pointer-events-auto text-blue-950"
              : "md:[500px]:pointer-events-none"
          } flex gap-1`}
        >
          <Link
            href={navegacao.rota}
            className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in active:opacity-50"
          >
            {navegacao.icone}
            {navegacao.nome}
          </Link>
        </li>
      ))}
    </>
  );
}
