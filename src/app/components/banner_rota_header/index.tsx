import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from "../layout/navbar";

import { Asap } from "next/font/google";
const asap = Asap({ subsets: ["latin"] });

import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"] });
interface Prop {
  titulo?: string;
  nomeRota?: string;
}

export default function BannerRotaHeader({ titulo, nomeRota }: Prop) {
  return (
    <section className="bg-blue-50 bg-[url(/image/BannerPaginaCima.jpg)] bg-cover bg-no-repeat bg-right md:px-5 md:py-10 px-5 pb-10">
      <Navbar
        logo="logoBlue.png"
        styleLinks="text-black"
        styleHamburguer="bg-black"
      />
      <h1
        className={`md:text-5xl md:mt-16 max-md:text-3xl text-blue text-indigo-950 pt-10 font-bold ${roboto.className}`}
      >
        {titulo || nomeRota}
      </h1>
      <div className="mt-2 mb-7">
        <ul className={`flex gap-1 text-[.9em] items-center ${asap.className}`}>
          <li className="text-indigo-700 cursor-pointer active:opacity-70">
            Início
          </li>
          <MdOutlineKeyboardDoubleArrowRight />
          <li className={`text-gray-600 cursor-pointer active:opacity-70`}>
            {nomeRota}
          </li>
        </ul>
      </div>

      <div className="bg-amber-400"></div>

      <p className={`text-indigo-600 leading-6 text-base ${asap.className}`}>
        Seja um apoiador do <strong>Curso em Vídeo</strong>, remova os anúncios
        do site, tenha créditos para emissão de certificados e outros{" "}
        <strong>benefícios</strong>
      </p>
    </section>
  );
}
