import { Asap, Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });
const asap = Asap({ subsets: ["latin"] });

import { IoAddOutline } from "react-icons/io5";

export default function CardAnual() {
  return (
    <section className="w-full flex-1 rounded-2xl bg-blue-1000 px-3">
      <div className="py-5">
        <h3
          className={`${asap.className} uppercase text-3xl text-center pt-10 text-white font-medium`}
        >
          Apoio Anual
        </h3>
        <h5
          className={`${asap.className} uppercase text-xl text-center pt-3 text-white font-bold`}
        >
          10x de
        </h5>
        <h5
          className={`${poppins.className} text-6xl text-center text-white font-bold`}
        >
          R$ 29,90
        </h5>
        <h6
          className={`${asap.className} uppercase text-sm text-center pb-5 pt-3 text-white font-medium`}
        >
          ou R$ 299 à vista
        </h6>
        <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
      </div>

      <section className="text-white flex items-center justify-center gap-3 py-10 ">
        <IoAddOutline size={40} className="text-4xl text-blue-200" />

        <div className="pt-10">
          <h3 className={`${poppins.className} text-3xl uppercase leading-7`}>
            12 créditos
          </h3>
          <p>para certificados IMEDIATAMENTE</p>
        </div>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Acesso Exclusivo a Conteúdos e Aulas: Desbloqueie materiais valiosos
          que não estão disponíveis para outros alunos.
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
          Presença no Hall da Fama: Tenha seu nome reconhecido e celebrado por
          sua contribuição!
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Acesso à nossa Área de Recompensas: assista a vídeos no formato vlog
          exclusivos.
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Aulas EXCLUSIVAS criadas apenas para meus alunos presenciais (Portugol
          Studio e Java)
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">NÃO DÁ acesso ao Estudonauta</p>
      </section>

      <button className="border-2 border-white bg-transparent hover:bg-blue-950 transition ease-in text-white rounded-4xl ml-4 mt-5 mb-10 py-5 px-15 cursor-pointer active:opacity-80">
        Apoiar Agora!
      </button>
    </section>
  );
}
