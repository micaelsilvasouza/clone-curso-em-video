"use client"

//hooks react
import { useState } from "react"

//componentes
import { LinkClassVideo } from "./LinkClassVideo"
import HeaderMenuClassVideos from "./HeaderMenuClassVideos"

interface PropsVideoClass {title: string, slug: string}

interface PropsMenuClassVideos{
    type: "vertical" | "horizontal"
    videos: PropsVideoClass[],
    courseslug: string,
    coursetitle: string
}

export default function MenuClassVideos({type, videos, courseslug, coursetitle}: PropsMenuClassVideos){
    const [isopening, setIsOpening] = useState(true)
    if(type == "vertical"){
      return (
        <section className={`
            flex
            flex-col
            bg-white
            duration-800
            w-9/10 max-w-[800px] my-10 mx-auto rounded-xl border-2 border-gray-300`}>

            {/* Passando a alteraçaõ de estado para o componente filho */}
            <HeaderMenuClassVideos type={type} course={coursetitle} quantity={videos.length} isopening={isopening} setIsOpening={setIsOpening}/>
           
            
            <section className={`
                duration-800 px-10  
                ${ //Se o tipo for que abre para baixo, ele aplica o teste de abertura
                    isopening ? "h-125 overflow-y-scroll" : "h-0 overflow-hidden"
                }`} 
            >
                {videos.map((video: PropsVideoClass)=>(
                    <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={courseslug}/>
                ))}
            </section>
        </section>
      )
    }
    
    if(type == "horizontal"){
        return (
            <section className={`
              relative 
              duration-800
              ${isopening ? "w-[30dvw]" : "w-0"}
            `}>
              <section className={`absolute top-0 right-0 bg-white`}>
                <HeaderMenuClassVideos type={type} course={coursetitle} quantity={videos.length} isopening={isopening} setIsOpening={setIsOpening}/>
                <section>
                    {videos.map((video: PropsVideoClass)=>(
                        <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={courseslug}/>
                    ))}
                </section>
              </section>
            </section>
        )
    }  
}
