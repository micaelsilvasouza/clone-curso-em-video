import { Roboto, Asap } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });

import Img_custon from "../img_custon";

export default function SejaApoiador() {
  return (
    <section className="flex max-md:flex-col  gap-5 my-30">
      <div className={`flex-1 flex  justify-center flex-col `}>
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
  );
}
