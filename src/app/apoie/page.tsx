import BannerRotaHeader from "../components/banner_rota_header";
import SejaApoiador from "../components/seja-apoiador";

import Link from "next/link";
//Roboto amanhã colocar aqui
import { Asap, Catamaran } from "next/font/google";
const catamaran = Catamaran({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });

export default function Apoie() {
  return (
    <div>
      <BannerRotaHeader nomeRota="Assine" titulo="Assine" />
      <div className="flex flex-col items-center justify-center px-1">
        <div className="mx-5">
          <SejaApoiador />
        </div>
        <section className="mb-10 md:px-5 px-3 max-h-[500px] w-full">
          <iframe
            src="https://www.youtube.com/embed/nxL2w9eRun4?si=iF3QrX-4OBeriEO_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl mx-auto aspect-video w-full max-w-[900px] "
          ></iframe>
        </section>
        <article className="md:px-5 px-3">
          <h2 className={`text-5xl ${catamaran.className} font-bold`}>
            E toda semana teremos{" "}
            <span className="text-blue-700">conteúdos novos</span>.
          </h2>
          <p className={`${asap.className} leading-8 mt-20`}>
            O{" "}
            <Link
              href="https://clone-curso-em-video.vercel.app/"
              rel="internal"
              className="text-blue-700 cursor-pointer px-1 hover:underline"
            >
              CursoemVideo
            </Link>
            surgiu em 2012 quando o professor{" "}
            <Link
              href={`https://www.instagram.com/gustavoguanabara/`}
              target="_blank"
              rel="external"
              className="text-blue-700 cursor-pointer px-1 hover:underline"
            >
              Gustavo Guanabara
            </Link>{" "}
            decidiu transformar algumas de suas aulas em um formato de vídeo com
            o objetivo de ajudar seus alunos em sala de aula. Em poucos meses, o
            formato se mostrou bem popular e começou a chegar em outras pessoas
            pelo mundo.
          </p>
          <p className={`${asap.className} leading-8 my-10`}>
            Atualmente, são mais de 13 cursos grátis como Construção de Sites
            com{" "}
            <Link
              href={`https://clone-curso-em-video.vercel.app/cursos/html5-css3-modulo1`}
              target="_parent"
              rel="internal"
              className="text-blue-700 cursor-pointer px-1 hover:underline"
            >
              HTML5
            </Link>
            , Lógica de Programação, PHP, Java, Banco de Dados, Programação
            Orientada a Objetos, Word, Excel, Marketing Digital, Python e
            Hardware. E tudo com um único objetivo: democratizar a Informática e
            provar que aprender programação ou qualquer outra disciplina técnica
            não é tão difícil quanto as pessoas pensam.
          </p>
        </article>
      </div>
    </div>
  );
}
