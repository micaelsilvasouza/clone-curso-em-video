import { FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

interface PropsHeaderMenuClassVideos{
    type: "topbottom" | "leftright",
    course: string,
    quantity: number,
    isopening: boolean,
    setIsOpening: (value: boolean)=>void
}

export default function HeaderMenuClassVideos({ type, course, quantity, isopening, setIsOpening }:PropsHeaderMenuClassVideos){
    return (
        <section className="bg-blue-800 text-white text-lg font-bold p-10 rounded-t-xl relative">
            <p className="px-10 py-2"><LuBook className="inline align-middle"/> {course}</p>
            <p className="px-10 py-2">0% Completo | 0 / {quantity} steps</p>

            { 
                (type == "topbottom") && //Menu que sobe e desce
                <span className="absolute bottom-1 right-2" onClick={()=>{setIsOpening(!isopening)}}>
                    {
                        isopening ? <FaAngleUp /> : <FaAngleDown />
                    }
                </span>
            }

            {
                (type == "leftright") && //Menu que vai da esquerda para a direita
                <span className="absolute button-1 -right-5 text-blue-800" onClick={()=>{setIsOpening(!isopening)}}>
                    {
                        isopening ? <FaAngleLeft/> : <FaAngleRight/>
                    }
                </span>
            }
        </section>
    )
}