import BannerRotaHeader from "../components/banner_rota_header";
import SejaApoiador from "../components/seja-apoiador";
import CardMensal from "../components/card_valores/CardMensal";
import CardAnual from "../components/card_valores/CardAnual";
import CardEstudonauta from "../components/card_valores/CardEstudonauta";

import { FaQuestion } from "react-icons/fa6";

import Link from "next/link";

import { Asap, Catamaran, Roboto } from "next/font/google";
const catamaran = Catamaran({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });

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
      <div className="flex flex-col items-center justify-center">
        <div className="mx-5">
          <SejaApoiador />
        </div>
        <section className="mb-10 md:px-5 max-h-[500px] w-full px-1">
          <iframe
            src="https://www.youtube.com/embed/nxL2w9eRun4?si=iF3QrX-4OBeriEO_"
            title="YouTube video player"
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
        <section className="xl:w-[1200px]  md:mx-3">
          <div>
            {/* <Img_custon
              img="estudante.png"
              alt="imagem do aluno curso em vídeo"
              width={500}
              className="mx-auto"
            /> */}
          </div>
          <section className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-3 mb-5 w-full items-center bg-[url(/image/estudante.png)] bg-no-repeat xl:bg-[50%_-0%] md:bg-[0%_-0%] md:pt-100 max-md:bg-[20%_-0%] max-md:pt-150">
            {/* Card Mensal */}
            <CardMensal />
            {/* Card Anual */}
            <CardAnual />
            {/* Card Estudonauta */}
            <CardEstudonauta />
          </section>
        </section>

        <section className="py-10">
          <p>
            Tem uma empresa? Seja um{" "}
            <Link
              href={"http://localhost:3000/seja-um-patrocinador"}
              className="text-blue-700 font-medium"
              target="_parent"
              rel="internal"
            >
              Apoiador Institucional.
            </Link>
          </p>
        </section>

        <section>
          <h2
            className={`${roboto.className} text-3xl text-black/90 py-10 text-center`}
          >
            Perguntas frequentes
          </h2>

          <section className="flex flex-col py-5">
            {[
              {
                title: "É seguro colocar meus dados aqui?",
                paragraph:
                  "Sim! Nossa cobrança é feita através do PagSeguro ou PayPal, você escolhe em qual plataforma deseja pagar. Todos dados que trafegam do seu computador até os servidores estão criptografados pelo protocolo SSL (Secure Socket Layer) que funciona como camada de segurança para o HTTPS. Ficou confuso? Note que ao lado do endereço do site existe um pequeno cadeado que mostra que o site está seguro, pois possui certificado SSL válido, ativo e atualizado.",
                paragraphTwo:
                  "Sendo assim, dados como o seu CPF e o número do cartão de crédito não ficam sequer guardados no banco de dados do site. Eles apenas são requeridos pelas instituições financeiras para identificar cada pessoa.",
              },
              {
                title: "Posso cancelar a qualquer momento?",
                paragraph:
                  "Sim! Nós não estamos aqui para tirar o seu dinheiro. Enquanto você puder ser nosso colaborador, seremos muito gratos. Mas se por acaso você quiser suspender suas contribuições, tudo será feito de maneira simples e rápida.",
              },
              {
                title:
                  "A ajuda agora é mensal, posso cancelar a qualquer momento?",
                paragraph:
                  "Sim! Nós não estamos aqui para tirar o seu dinheiro. Enquanto você puder ser nosso colaborador, seremos muito gratos. Mas se por acaso você quiser suspender suas contribuições, tudo será feito de maneira simples e rápida. Esse é mais um motivo por termos escolhido a plataforma do Apoie.me para gerenciar nossa campanha de apoiadores.",
              },
              {
                title:
                  "E agora com os cursos pagos, os cursos grátis vão parar?",
                paragraph:
                  "Não! O foco do Estudonauta é continuar ensinando tecnologia além do básico e abordar outras linguagens e tecnologias. É uma outra plataforma que será desenvolvida do zero e será construída com a ajuda dos nossos alunos testadores. Em breve, esperamos que todos possam experimentar algumas de nossas aulas e comprovar que a qualidade do CursoemVideo pode virar um negócio de sucesso no ramo da Educação. Se você se interessar, não deixe de participar da faixa de Beta Tester para já receber seu acesso e ver como estamos caprichando nas aulas.",
              },
            ].map((comentario, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <FaQuestion className="text-blue-600" />
                  <h2>{comentario.title}</h2>
                </div>
                <p>{comentario.paragraph}</p>
                {comentario.paragraphTwo && <p>{comentario.paragraphTwo}</p>}
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}
