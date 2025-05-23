import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from "../layout/header_pastas/Navbar";

export default function BannerRotaHeader({ nomeRota }: { nomeRota: string }) {
  return (
    <section className="bg-blue-50 bg-[url(/image/BannerPaginaCima.jpg)] bg-cover bg-no-repeat bg-right p-5 pb-10">
      <Navbar
        logo="logoBlue.png"
        styleLinks="text-black"
        styleHamburguer="bg-black"
      />
      <h1 className="text-[30px]  font-semibold text-blue text-indigo-950 pt-10">
        {nomeRota}
      </h1>
      <div className="mt-2 mb-7">
        <ul className="flex gap-1 text-[.9em] items-center">
          <li className="text-indigo-700 cursor-pointer active:opacity-70">
            Início
          </li>
          <MdOutlineKeyboardDoubleArrowRight />
          <li className="text-gray-600 cursor-pointer active:opacity-70">
            {nomeRota}
          </li>
        </ul>
      </div>

      <div className="bg-amber-400"></div>

      <p className="text-indigo-600 leading-6 text-sm">
        Seja um apoiador do <strong>Curso em Vídeo</strong>, remova os anúncios
        do site, tenha créditos para emissão de certificados e outros{" "}
        <strong>benefícios</strong>
      </p>
    </section>
  );
}
