import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

interface PropsHeaderMenuClassVideos{
    quantity: number,
    isopening: boolean,
    setIsOpening: (value: boolean)=>void
}

export default function HeaderMenuClassVideos({ quantity, isopening, setIsOpening }:PropsHeaderMenuClassVideos){
    return (
        <section className="flex flex-wrap gap-5 justify-between bg-blue-800 text-white text-lg font-bold p-10 rounded-t-xl relative">
            <p className="px-5"><LuBook className="inline align-middle"/> Conteudo</p>
            <p className="px-5">0% Completo | 0 / {quantity} steps</p>

            {/* Alterando o estado do componente pai */}
            <span className="absolute bottom-1 right-2" onClick={()=>{setIsOpening(!isopening)}}>
                {
                    isopening ? <FaAngleUp /> : <FaAngleDown />
                }
            </span>
        </section>
    )
}