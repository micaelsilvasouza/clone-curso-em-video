// Componentes
import Navbar from "./components/layout/navbar_backup";
import Img_custon from "./components/img_custon";
import ComentarioAlunos from "./components/carrosel/ComentarioAlunos";

// Lib Fonte do next
import { Catamaran } from "next/font/google";
import { Roboto } from "next/font/google";
import { Asap } from "next/font/google";

const catamaran = Catamaran({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-full bg-[url('https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/fundo08.jpg')] bg-cover bg-no-repeat bg-center ">
        <Navbar
          style="bg-transparent"
          logo="logoWhite.png"
          styleHamburguer="bg-white"
          styleLinks="text-white"
          styleBotao_1="bg-white"
        />
        <div className="flex max-md:w-full h-full lg:w-[1300px] mx-auto max-md:flex-col">
          <div className="w-full pl-6 flex-1 flex flex-col md:justify-end md:mb-10 h-[662px]">
            <div className="w-full">
              <h1
                className={`max-md:mt-7
              text-6xl md:text-8xl lg:text-[110px] 
              text-cyan-400 font-[600] 
              max-sm:leading-12 lg:leading-24 min-md:leading-20 max-md:leading-5
              lg:mb-5 w-full ${roboto.className}`}
              >
                Paixão por
              </h1>
              <h2
                className={`${roboto.className} text-6xl md:text-8xl lg:text-[120px] text-white font-[600]
              lg:mb-13 max-md:mb-0 
              max-sm:leading-12 lg:leading-13 min-md:leading-20 max-md:leading-24 max-sm:mb-5`}
              >
                ensinar.
              </h2>
            </div>
            <p
              className={`${asap.className} text-white 
            max-w-100 lg:w-150  
            md:text-xl lg:text-2xl max-md:text-lg md:font-[400] 
            md:mb-20`}
            >
              Estude gratuitamente e aprenda <br></br> com conteúdo e
              professores de qualidade.
            </p>
          </div>
          <div className="relative flex flex-1 justify-end items-end">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/guana6.png"
              alt="imagem do Gustavo Guanabara"
              width={500}
              className="
              md:w-170 max-md:w-100"
            />
          </div>
        </div>
      </section>
      <article className="py-5 px-10 max-w-[1500px] mx-auto">
        <section className="flex max-md:flex-col-reverse gap-5">
          <div className="flex-2 flex items-center">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/Ativo-12-768x621.png"
              alt="Imagem dos cursos da plataforma"
              width={700}
            />
          </div>

          <div className="flex-1 flex flex-col py-10 pl-10">
            <h2
              className={`text-5xl  font-bold text-blue-950 leading-14 ${catamaran.className}`}
            >
              Cursos de <br /> Tecnologia <br />
              <span className="text-blue-600">gratuitos</span> e de <br />{" "}
              qualidade.
            </h2>

            <button className="my-15 w-40 shadow bg-blue-600 py-3 px-10 rounded-3xl text-white active:opacity-80">
              Conhece
            </button>
          </div>
        </section>
        <section className="flex max-md:flex-col gap-5 my-30">
          <div className="flex-1 flex items-center justify-center flex-col ">
            <div>
              <h3
                className={`text-[40px] font-bold text-blue-950 leading-10 mb-5 ${roboto.className}`}
              >
                Seja um Gafanhoto apoiador
              </h3>
              <p className={`${asap.className} text-lg`}>
                Ajude o Curso em Vídeo a continuar produzindo ainda mais!
              </p>
            </div>
            <button
              className={`my-15 w-80 bg-white py-3 px-10 rounded-3xl text-blue-700 font-bold border border-blue-700 shadow  ${asap.className}
                 hover:bg-blue-700 hover:text-white hover:border-sky-600
                 focus:bg-blue-700 focus:text-white
                  active:opacity-50
                  transition ease-in`}
            >
              Quero ser um Apoiador!
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/Ativo-11.png"
              alt="Imagem dos cursos da plataforma"
              width={400}
            />
          </div>
        </section>
        <section
          className={`flex justify-center items-center max-sm:flex-col gap-2 mb-20`}
        >
          <div className="w-full h-full">
            <h4
              className={`${catamaran.className} text-[43px]  font-bold text-blue-950 leading-13 mt-20 max-w-100 mx-auto`}
            >
              Mensagens que tornam o nosso dia mais feliz{" "}
              <span className="text-blue-700">♥</span>
            </h4>
          </div>
          <ComentarioAlunos />
        </section>
      </article>
    </main>
  );
}
