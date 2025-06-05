import BannerRotaHeader from "../components/banner_rota_header";
import SejaApoiador from "../components/seja-apoiador";
import Img_custon from "../components/img_custon";

import Link from "next/link";

import { Asap, Catamaran, Poppins } from "next/font/google";
const catamaran = Catamaran({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });
const asap = Asap({ subsets: ["latin"] });

const ArrayCourses = [
  {
    curso: "HTML5",
    rota: "https://clone-curso-em-video.vercel.app/cursos/html5-css3-modulo1",
  },
  {
    curso: "Java",
    rota: "https://clone-curso-em-video.vercel.app/cursos/java-basico",
  },
  {
    curso: "Word",
    rota: "https://clone-curso-em-video.vercel.app/cursos/word",
  },
  {
    curso: "Excel",
    rota: "https://clone-curso-em-video.vercel.app/cursos/excel",
  },
  {
    curso: "Marketing Digital",
    rota: "https://clone-curso-em-video.vercel.app/cursos/marketing-digital",
  },
  {
    curso: "Python",
    rota: "https://clone-curso-em-video.vercel.app/cursos/python-3-mundo-1",
  },
  {
    curso: "Hardware",
    rota: "https://clone-curso-em-video.vercel.app/cursos/hardware",
  },
];

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
          <h2
            className={`text-5xl lg:text-6xl ${catamaran.className} font-bold`}
          >
            E toda semana <br /> teremos{" "}
            <span className="text-blue-700">
              conteúdos <br /> novos
            </span>
            .
          </h2>
          <section className="md:flex gap-5 max-w-[900px] mx-auto">
            <div>
              <p
                className={`${asap.className} leading-8 my-10 text-lg lg:text-xl`}
              >
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
                decidiu transformar algumas de suas aulas em um formato de vídeo
                com o objetivo de ajudar seus alunos em sala de aula. Em poucos
                meses, o formato se mostrou bem popular e começou a chegar em
                outras pessoas pelo mundo.
              </p>
            </div>
            <div>
              <p
                className={`${asap.className} leading-8 my-10 text-lg lg:text-xl`}
              >
                Atualmente, são mais de 13 cursos grátis como Construção de
                Sites com
                {ArrayCourses.map((curso, index) => (
                  <Link
                    href={curso.rota}
                    key={index}
                    className="text-blue-700 cursor-pointer px-1 hover:underline"
                  >
                    {`${curso.curso}, `}
                  </Link>
                ))}
                . E tudo com um único objetivo: democratizar a Informática e
                provar que aprender programação ou qualquer outra disciplina
                técnica não é tão difícil quanto as pessoas pensam.
              </p>
            </div>
          </section>
        </article>
        <section className="xl:w-[1200px] md:w-[800px]">
          <div>
            <Img_custon
              img="estudante.png"
              alt="imagem do aluno curso em vídeo"
              width={500}
              className="mx-auto"
            />
          </div>

          <section className="flex max-md:flex-col gap-3 mb-20 px-5 w-full">
            <div className="w-full h-[500px] rounded-2xl bg-blue-700">
              <div>
                <h3
                  className={`${asap.className} uppercase text-3xl text-white font-bold`}
                >
                  Apoio Mensal
                </h3>
                <h4
                  className={`${poppins.className} text-5xl text-white font-bold`}
                >
                  R$ 29
                </h4>
                <p className="text-yellow-700">Mínimo de 6 meses de adesão.</p>
                <p className="text-yellow-700">
                  Só poderá ser cancelado após término de 6 meses.
                </p>
              </div>

              <div>
                <p>icone</p>
                <h3>1 crédito</h3>
                <h4>mensal para certificados</h4>
              </div>
              <div>
                <p>icone</p>
                <p>
                  Sem anúncios. Navegue no Curso em Video sem anúncios no site
                </p>
                Presença no Hall da Fama <p>Nosso mais sincero agradecimento</p>{" "}
                <p>
                  Acesso à nossa Área de Recompensas, com vídeos no formato vlog
                  exclusivos
                </p>{" "}
                <p>
                  Aulas EXCLUSIVAS criadas apenas para meus alunos presenciais
                  (Portugol Studio e Java)
                </p>{" "}
                <p>NÃO DÁ acesso ao Estudonauta Apoiar Agora!</p>
              </div>
            </div>
            <div className="w-full h-[500px] rounded-2xl bg-red-600"></div>
            <div className="w-full h-[500px] rounded-2xl bg-green-500"></div>
          </section>
        </section>
      </div>
    </div>
  );
}
