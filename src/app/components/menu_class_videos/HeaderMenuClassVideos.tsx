import { FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

interface PropsHeaderMenuClassVideos{
    type: "vertical" | "horizontal"
    course: string,
    quantity: number,
    isopening: boolean,
    setIsOpening: (value: boolean)=>void
}

export default function HeaderMenuClassVideos({type, course, quantity, isopening, setIsOpening }:PropsHeaderMenuClassVideos){
    return (
        <section className="bg-blue-800 text-white text-lg font-bold p-10 rounded-t-xl relative">
            <p className="px-10 py-2"><LuBook className="inline align-middle"/> {course}</p>
            <p className="px-10 py-2">0% Completo | 0 / {quantity} steps</p>
            { type == "vertical" &&
            <span className="absolute bottom-1 right-2" onClick={()=>{setIsOpening(!isopening)}}>
                {
                    isopening ? <FaAngleUp /> : <FaAngleDown />
                }
            </span>
            }

            { type == "horizontal" &&
                <span>
                    {
                        isopening ? <FaAngleLeft/> : <FaAngleRight/>
                    }
                </span>
            }
        </section>
    )
}
