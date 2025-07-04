// Importação das Fontes
import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"], weight: ["600"] });

export default function H1Custon({ title }: { title: string }) {
  const partes: string[] = [];

  // 1. Pegar primeira parte - (Segurança da informação)
  const matchTitulo = title.match(/^(.*?):/);
  if (matchTitulo) {
    partes.push(matchTitulo[0]); // já inclui os dois pontos
    title = title.replace(matchTitulo[0], "").trim(); // Vai limpar Segurança da informação de title
    partes.push(title);
  }

  return (
    <h1
      className={`md:text-3xl max-md:text-2xl text-gray-900/80  text-center pb-10 mx-10`}
    >
      {partes.map((partes, index: number) => (
        <span
          key={index}
          className={`${asap.className} ${index === 0 ? "text-blue-500" : ""}`}
        >
          {partes}{" "}
        </span>
      ))}
    </h1>
  );
}
