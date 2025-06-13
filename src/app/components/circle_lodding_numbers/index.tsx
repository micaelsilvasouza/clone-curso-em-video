"use client"

import { useEffect, useRef, useState } from "react"
import CircleLodding from "./CircleLodding"
import LoddingNumber from "./LoddingNumber"

interface PropsCircleLoddingNumber{
    name: string,
    Icon: React.ElementType,
    total?: number,
    increment?: number,
    suffix?: "mil" | "mi" | "bi"
}

export default function ClircleLoddingNumber({name, Icon, total, increment, suffix}:PropsCircleLoddingNumber){
    const [animate_state, setAnimateState] = useState<"paused"| "running">('paused')
    const conteiner = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        //Objeto de observação do elemento na viewport
      if(conteiner.current != null){
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry=>{
                // Verdadeiro quando o elemento está na viewport
                if(entry.isIntersecting){
                    setAnimateState("running")

                    //parando de observar
                    observer.unobserve(entry.target)
                }
            })
        }, {threshold: 1 // Dispara quando está totalment visível})
    
        //adicinando elemento para observação
        observer.observe(conteiner.current)
      }

    }, [])

    return (
        <div className="relative w-fit h-fit" ref={conteiner}>
            <CircleLodding animate={animate_state}/>
            <span className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center items-center">
                <span className="text-2xl">{name}</span>
                <LoddingNumber total={total ?? 10} increment={increment ?? 1} animate={animate_state} suffix={suffix ?? 'mil'}/>
                <Icon className="text-2xl"/>
            </span>
        </div>
    )
}
