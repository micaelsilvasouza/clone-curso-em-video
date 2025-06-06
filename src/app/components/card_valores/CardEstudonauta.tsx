import { Asap, Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });
const asap = Asap({ subsets: ["latin"] });

import { GiPresent } from "react-icons/gi";

import { IoAddOutline } from "react-icons/io5";

export default function CardEstudonauta() {
  return (
    <section className="w-full flex-1 rounded-2xl bg-rose-750 px-3">
      <div className="py-5">
        <h3
          className={`${asap.className} uppercase text-3xl text-center pt-10 text-white font-medium`}
        >
          estudonauta
        </h3>
        <h4
          className={`${asap.className} uppercase text-2xl text-center pt-10 text-white font-medium`}
        >
          Apoio Anual + BÔNUS
        </h4>
        <h5
          className={`${asap.className} uppercase text-xl text-center pt-3 text-white font-bold`}
        >
          10x de
        </h5>
        <h5
          className={`${poppins.className} text-6xl text-center text-white font-bold`}
        >
          R$ 79,90
        </h5>
        <h5
          className={`${asap.className} uppercase text-sm text-center  text-white font-medium mb-5 mt-2`}
        >
          ou R$ 799 à vista
        </h5>
        <div className="w-16 h-1 bg-rose-950 mx-auto"></div>
      </div>

      <section className="text-white flex items-center justify-center gap-3 py-10 ">
        <IoAddOutline size={40} className="text-4xl text-blue-200" />

        <div>
          <h3 className={`${poppins.className} text-2xl uppercase leading-7`}>
            CERTIFICADOS <br /> ILIMITADOS
          </h3>
        </div>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Cursos exclusivos Estudonauta + cursos de maior sucesso do Curso em
          Video
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Navegação Sem Anúncios: Desfrute de uma experiência de aprendizado sem
          interrupções no nosso site.
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Tutoria através de Fórum e servidor no Discord para dúvidas durante o
          aprendizado
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Perfil público com link personalizado para usar em currículos
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Acesso antecipado a alguns conteúdos que ainda serão lançados no Curso
          em Vídeo
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Avaliações e certificados digitais para todos os módulos já concluídos
        </p>
      </section>

      <section className="text-white flex items-center gap-1 py-3 mt-10">
        <GiPresent size={30} className="text-4xl flex-1 text-blue-400" />
        <p className="flex-10">Jornada IA + 2 e-books</p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <GiPresent size={30} className="text-4xl flex-1 text-blue-400" />
        <p className="flex-10">Gravação Evento Curso em Vídeo Experience</p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <GiPresent size={30} className="text-4xl flex-1 text-blue-400" />
        <p className="flex-10">
          Livro &quot;10 Coisas que Aprendi na Vida&ldquo;
        </p>
      </section>
      <button className="border-2 border-white bg-transparent hover:bg-rose-800 transition ease-in text-white rounded-4xl ml-4 mt-5 mb-10 py-5 px-15 cursor-pointer active:opacity-80">
        Apoiar Agora!
      </button>
    </section>
  );
}
