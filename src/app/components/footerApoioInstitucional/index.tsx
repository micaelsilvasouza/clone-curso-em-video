// Componentes
import Img from "../layout/img";

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
            <Img
              img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-hostnet.png"
              alt="logo-hostnet"
              width={300}
              height={300}
            />
          </Link>
          <Link
            href="https://www.estudonauta.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-estudonauta.png"
              alt="logo-estudonauta"
              width={300}
              height={300}
            />
          </Link>
          <Link
            href="https://recode.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-recode.png"
              alt="logo-recode"
              width={300}
              height={300}
            />
          </Link>
          <Link
            href="https://www.lojaasus.com.br/notebooks.html?utm_source=cursoemvideo&utm_medium=partner&utm_id=influencer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/Asus.png"
              alt="logo-asus"
              width={300}
              height={300}
            />
          </Link>
          <Link
            href="https://www.souestudante.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/FEC-logo.png"
              alt="logo-fec"
              width={300}
              height={300}
            />
          </Link>
        </section>
      </section>
      <section className="w-full flex items-center md:justify-end justify-center mt-20 md:mt-5">
        <button className="text-black/70 border border-black/70 text-sm p-2 rounded-sm uppercase cursor-pointer hover:text-black hover:bg-black/10 transition ease-in">
          seja um apoiador institucional
        </button>
      </section>
    </section>
  );
}
