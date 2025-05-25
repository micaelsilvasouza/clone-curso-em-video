// Componentes
import Img_custon from "@/app/components/img_custon";

// Lib NextJS
import Link from "next/link";

export default function ApoioInstitucional() {
  return (
    <section
      className="
            flex
            flex-col
            py-10 px-5
        "
    >
      {/* Institutos */}
      <section className="mt-5">
        <h1 className="text-gray-500 max-md:text-center font-semibold pl-5 py-5">
          APOIO INSTITUCIONAL
        </h1>
        <section className="flex max-md:flex-col justify-center items-center gap-5">
          <Link
            href="https://www.hostnet.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/apoiador-hostnet.png"
              alt="logo-hostnet"
              width={200}
            />
          </Link>
          <Link
            href="https://www.estudonauta.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/apoiador-estudonauta.png"
              alt="logo-estudonauta"
              width={200}
            />
          </Link>
          <Link
            href="https://recode.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/apoiador-recode.png"
              alt="logo-recode"
              width={200}
            />
          </Link>
          <Link
            href="https://www.lojaasus.com.br/notebooks.html?utm_source=cursoemvideo&utm_medium=partner&utm_id=influencer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/Asus.png"
              alt="logo-asus"
              width={150}
            />
          </Link>
          <Link
            href="https://www.souestudante.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/footer/FEC-logo.png"
              alt="logo-fec"
              width={150}
            />
          </Link>
        </section>
      </section>
      <section className="w-full flex items-center  md:justify-end justify-center mt-20 md:mt-5">
        <button className="text-black/70 border border-black/70 text-sm p-2 rounded-sm uppercase cursor-pointer hover:text-black hover:bg-black/10 transition ease-in">
          seja um apoiador institucional
        </button>
      </section>
    </section>
  );
}
