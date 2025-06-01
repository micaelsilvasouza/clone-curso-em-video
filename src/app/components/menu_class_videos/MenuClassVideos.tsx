"use client"

//hooks react
import { useState } from "react"

//componentes
import { LinkClassVideo } from "./LinkClassVideo"
import HeaderMenuClassVideos from "./HeaderMenuClassVideos"

import { FaAngleDown, FaAngleUp } from "react-icons/fa"

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
        console.log("vertical")
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
                <p onClick={()=>{setIsOpening(!isopening)}} className="cursor-pointer text-center text-blue-800 text-base p-5">{
                    isopening ? 
                    <>
                        Recolher
                        <FaAngleUp className="block m-auto"/>
                    </>
                    : 
                    <>
                        Expandir
                        <FaAngleDown className="block m-auto"/>
                    </>
                }</p>
            </section>
        )
    }
    
    if(type == "horizontal"){
        console.log("horizontal")
        return (
            <section className={`
              absolute
              sm:relative
              duration-800
              min-h-[100dvh]
              ${ isopening ? "w-[50dvw]" : "w-0"}
            `}>
              <section className={`flex flex-col absolute top-0 right-0 w-[30dvw] h-full bg-white`}>
                <HeaderMenuClassVideos type={type} course={coursetitle} quantity={videos.length} isopening={isopening} setIsOpening={setIsOpening}/>
                <section className={`py-10 overflow-y-scroll`}>
                    {videos.map((video: PropsVideoClass)=>(
                        <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={courseslug}/>
                    ))}
                </section>
              </section>
            </section>
        )
    }  
}
