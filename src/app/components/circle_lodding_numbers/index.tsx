"use client"

import { useEffect, useRef, useState } from "react"
import CircleLodding from "./CircleLodding"

function useIntersecting(conteiner: React.RefObject<HTMLElement>, setAnimateState: (value: string)=>void){
  useEffect(()=>{
        //Objeto de observação do elemento na viewport
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry=>{
                // Verdadeiro quando o elemento está na viewport
                if(entry.isIntersecting){
                    setAnimateState("running")

                    //parando de observar
                    observer.unobserve(entry.target)
                }
            })
        })
    
        //adicinando elemento para observação
        observer.observe(conteiner)

    }, [])
    
}


export default function ClircleLoddingNumber(){
    const [animate_state, setAnimateState] = useState<"paused"| "running">('paused')
    const conteiner = useRef<HTMLDivElement>(null)

    useIntersecting(conteiner, setAnimateState)

    return (
        <div id="conteiner" ref={conteiner}>
            <CircleLodding animate={animate_state}/>
        </div>
    )
}
