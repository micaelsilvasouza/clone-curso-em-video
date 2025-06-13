import BannerRotaHeader from "../components/banner_rota_header";
import BlocoAcesso from "../components/bloco_acesso";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";

import Link from "next/link";

export default function MyAccount() {
  return (
    <main className="bg-[#F2FAFC]">
      <BannerRotaHeader nomeRota="Minha conta" />
      <div
        className="
      grid md:grid-cols-2 lg:grid-cols-3
      max-w-[1240px] mx-auto
      gap-8 mt-4 px-5 my-5"
      >
        {[
          { name: "Meus Cursos", IconOrNumber: FaRegCirclePlay, rota: "#" },
          {
            name: "Comprar Crédito para Certificados",
            IconOrNumber: FaPlus,
            rota: "#",
          },
          {
            name: "Créditos para Certificados Restantes",
            IconOrNumber: 0,
            rota: "#",
          },
          { name: "Ajuda", IconOrNumber: IoHelpCircle, rota: "#" },
          { name: "Meus Perdidos", IconOrNumber: LuShoppingBasket, rota: "#" },
          { name: "Cadastro", IconOrNumber: FaRegAddressCard },
        ].map((card, index) => (
          <Link key={index} href={`${card.rota}`} className=" w-full h-full">
            <BlocoAcesso name={card.name} IconOrNumber={card.IconOrNumber} />
          </Link>
        ))}
      </div>
    </main>
  );
}
