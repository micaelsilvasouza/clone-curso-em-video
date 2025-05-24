import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

interface PropsHeaderMenuClassVideos{
    quantity: number
}

export default function HeaderMenuClassVideos({ quantity }:PropsHeaderMenuClassVideos){
    return (
        <section className="flex flex-wrap gap-5 justify-between bg-blue-800 text-white text-lg font-bold p-10 rounded-t-xl relative">
            <p className="px-5"><LuBook className="inline align-middle"/> Conteudo</p>
            <p className="px-5">0% Completo | 0 / {quantity} steps</p>
            <span className="absolute bottom-1 right-2">
                <FaAngleDown /> <FaAngleUp />
            </span>
        </section>
    )
}