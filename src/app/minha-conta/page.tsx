import BannerRotaHeader from "../components/banner_rota_header";
import BlocoAcesso from "../components/bloco_acesso";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";

import Link from "next/link";
import {getDataWidhToken, deleteToken} from "@/actions/actions_cookies"

export default async function MyAccount() {
  const data = await getDataWidhToken()
  const name = data.name

  return (
    <main className="bg-[#F2FAFC]">
      <BannerRotaHeader nomeRota="Minha conta" />
      <div className="p-10 text-center text-xl">
        <p>Olá <strong>{name}</strong>, seja bem vindo à pagina principal da sua conta.</p>
        <Link href={"/login"} onClick={deleteToken}>Logout</Link>
      </div>
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
            rota: "/apoie",
          },
          {
            name: "Créditos para Certificados Restantes",
            IconOrNumber: 0,
            rota: "#",
          },
          { name: "Ajuda", IconOrNumber: IoHelpCircle, rota: "#" },
          { name: "Meus Perdidos", IconOrNumber: LuShoppingBasket, rota: "#" },
          {
            name: "Cadastro",
            IconOrNumber: FaRegAddressCard,
            rota: "minha-conta/edit-account",
          },
        ].map((card, index) => (
          <Link key={index} href={`${card.rota}`} className=" w-full h-full">
            <BlocoAcesso name={card.name} IconOrNumber={card.IconOrNumber} />
          </Link>
        ))}
      </div>
    </main>
  );
}
