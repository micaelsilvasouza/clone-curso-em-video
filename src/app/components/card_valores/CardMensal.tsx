import { Asap, Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });
const asap = Asap({ subsets: ["latin"] });

import { IoAddOutline } from "react-icons/io5";

export default function CardMensal() {
  return (
    <section className="w-full flex-1 rounded-2xl bg-blue-990 px-3">
      <div className="py-5">
        <h3
          className={`${asap.className} uppercase text-3xl text-center p3-5 pt-10 text-white font-medium`}
        >
          Apoio Mensal
        </h3>
        <h4
          className={`${poppins.className} text-5xl text-center pb-5 text-white font-bold`}
        >
          R$ 29
        </h4>
        <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
        <section
          className={`flex flex-col items-center justify-center py-5 ${asap.className}`}
        >
          <p className="text-amber-500 text-lg">Mínimo de 6 meses de adesão.</p>
          <p className="text-amber-500 text-xs text-center">
            Só poderá ser cancelado após término de 6 meses.
          </p>
        </section>
      </div>

      <section className="text-white flex items-center justify-center gap-3 py-10 ">
        <IoAddOutline size={30} className="text-4xl text-blue-200" />

        <div>
          <h3 className={`${poppins.className} text-3xl uppercase`}>
            1 crédito
          </h3>
          <h4>mensal para certificados</h4>
        </div>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Sem anúncios. Navegue no Curso em Video sem anúncios no site
        </p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">Presença no Hall da Fama</p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">Nosso mais sincero agradecimento</p>
      </section>
      <section className="text-white flex items-center gap-1 py-3 ">
        <IoAddOutline size={30} className="text-4xl flex-1 text-blue-200" />
        <p className="flex-10">
          Acesso à nossa Área de Recompensas, com vídeos no formato vlog
          exclusivos
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
        <p className="flex-10">NÃO DÁ acesso ao Estudonauta Apoiar Agora!</p>
      </section>
      <button className="border border-white bg-blue-600 hover:bg-blue-800 transition ease-in text-white rounded-4xl ml-4 mt-5 mb-10 py-5 px-15 cursor-pointer active:opacity-80">
        Apoiar Agora!
      </button>
    </section>
  );
}
