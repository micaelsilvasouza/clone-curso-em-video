"use client"

//hooks react
import { useState } from "react"

//componentes
import { LinkClassVideo } from "./LinkClassVideo"
import HeaderMenuClassVideos from "./HeaderMenuClassVideos"

interface PropsVideoClass {title: string, slug: string}

interface PropsMenuClassVideos{
    videos: PropsVideoClass[],
    course: string
}

export default function MenuClassVideos({videos, course}: PropsMenuClassVideos){
    const [isopening, setIsOpening] = useState(true)

    return (
        <section className="my-10 mx-auto w-9/10 max-w-[800px] border-2 border-gray-300 rounded-xl">
            {/* Passando a alteraçaõ de estado para o componente filho */}
            <HeaderMenuClassVideos quantity={videos.length} isopening={isopening} setIsOpening={setIsOpening}/>
           
            {
            /*
                Tentei fazer a transição de altura, mas não funcionou

                tentei fazer usando o tailwind assim como está agora

                tentei fazer com css normal passando dentro do style 
                    [ style={{transitionDuration: ".3s"}} ]

                tentei fazer também a alteração da altura dentro do style dentro do style
                    [ style={{transitionDuration: ".3s"}, hieght: isopening ? "fit-content" : "0px"} } ]
                
                Em todos os caso a alterção de altura ocorre corretamente, mas a transição não acontece

                pode ser bug no meu pc também
            */
            }

            <section className={`duration-1000 px-10 overflow-hidden ${isopening ? "h-fit" : "h-0"}`} >
                {videos.map((video: PropsVideoClass)=>(
                    <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={course}/>
                ))}
            </section>
        </section>
    )
}