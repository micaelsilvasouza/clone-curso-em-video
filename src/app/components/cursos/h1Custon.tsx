// Importação das Fontes
import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"], weight: ["600"] });

export default function H1Custon({ title }: { title: string }) {
  const exp =
    /-\s+@cursoemvideo|@cursoemvideo|-\s+curso em vídeo|-\s+Curso de Algoritmos/i;
  const match = exp.exec(title); //executa busca | null caso não encontre
  const index = match ? match.index : -1; //indice de começo do padrão | -1 caso não possua
  const newtitle = index == -1 ? title : title.slice(0, index).trim(); //novo testo depois da filtragem

  return (
    <h1
      className={`md:text-3xl max-md:text-2xl text-gray-900/80 z-20  pb-10 mx-10 ${asap.className}`}
    >
      {newtitle}
    </h1>
  );
}
