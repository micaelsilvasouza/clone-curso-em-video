// Componentes
import Img_custon from "@/app/components/img_custon";

// Lib NextJS
import Link from "next/link";

export default function Estudonauta() {
  return (
    <section
      className="
    flex
    items-center
    flex-col
    py-10
    px-8
    rounded-2xl
    md:w-2xl
    my-5

    bg-black/70
"
    >
      <Img_custon
        img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/logo-01.png"
        alt="Estudounauta-logo-branco"
        width={300}
      />
      <div className="text-center text-white p-5 my-5">
        <p className="text-sm bg-[#ffffff45] p-2 rounded-sm">
          VAGAS ABERTAS POR TEMPO LIMITADO
        </p>
        <p>
          Não encontrou o curso que procura? Amplie ainda mais seus
          conhecimentos com o Estudonauta!
        </p>
      </div>
      <button
        className=" bg-white
                      text-[#1c0051] hover:text-indigo-400
                      font-semibold
                      w-fit
                      p-3
                      rounded-xl
                      shrink-0
                      transition ease-in
                      border hover:border-white
                      hover:bg-[#ffffff45]"
      >
        <Link
          href="https://www.estudonauta.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conhecer
        </Link>
      </button>
    </section>
  );
}
