import { useEffect, useRef, useState } from "react"


interface PropsLoddingNumber{
    total: number,
    increment: number,
    animate: "paused" | "running",
    suffix: "mil" | "mi" | "bi"
}

export default function LoddingNumber({total, increment, animate, suffix}:PropsLoddingNumber){
    const counter = useRef(0)
    const [display, setDisplay] = useState("")
    
    useEffect(()=>{
        //impede de executar após a renderização
        if(animate != "running"){
            return
        }
        const interval = setInterval(()=>{
            counter.current += increment
            setDisplay(counter.current.toFixed(1))

            if(counter.current >= total){
                clearInterval(interval)
            }
        }, 2000 / total)
    }, [animate])


    return (
        <span className="text-4xl font-bold">
            + {display} {suffix}
        </span>
    )
}