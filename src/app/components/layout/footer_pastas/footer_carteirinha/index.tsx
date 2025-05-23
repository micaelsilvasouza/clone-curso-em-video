// Componentes
import Img_custon from "@/app/components/img_custon";

// Lib NextJS
import Link from "next/link";

export default function Carteirinha() {
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
                bg-black/70
            "
    >
      <Img_custon
        img="https://www.cursoemvideo.com/wp-content/uploads/2023/06/FEC-logo-branco.png"
        alt="FEC-logo-branco"
        width={300}
        height={300}
      />
      <div className="text-center text-white p-5 my-5 border-r border-l border-white">
        <h1 className="text-2xl font-bold mb-2">
          Carteirinha Estudantil Física e Virtual
        </h1>
        <p>
          O documento oferece benefícios como meia entrada em cinemas, teatros,
          shows e estádios. Válido em todo o território nacional.
        </p>
      </div>
      <Link
        href="https://www.souestudante.tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="
                    bg-white
                    text-[#1c0051]
                    font-semibold
                    w-fit
                    p-3
                    rounded-2xl
                    shrink-0
    
                    hover:bg-[#ffffff45]
                "
      >
        Solicitar Agora
      </Link>
    </section>
  );
}
