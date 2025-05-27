"use client"

//hooks react
import { useState } from "react"

//componentes
import { LinkClassVideo } from "./LinkClassVideo"
import HeaderMenuClassVideos from "./HeaderMenuClassVideos"

interface PropsVideoClass {title: string, slug: string}

interface PropsMenuClassVideos{
    videos: PropsVideoClass[],
    courseslug: string,
    coursetitle: string
}

export default function MenuClassVideos({videos, courseslug, coursetitle}: PropsMenuClassVideos){
    const [isopening, setIsOpening] = useState(true)

    return (
        <section className="my-10 mx-auto w-9/10 max-w-[800px] border-2 border-gray-300 rounded-xl">
            {/* Passando a alteraçaõ de estado para o componente filho */}
            <HeaderMenuClassVideos course={coursetitle} quantity={videos.length} isopening={isopening} setIsOpening={setIsOpening}/>
           
            
            <section className={`duration-800 px-10  ${isopening ? "h-125 overflow-y-scroll" : "h-0 overflow-hidden"}`} >
                {videos.map((video: PropsVideoClass)=>(
                    <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={courseslug}/>
                ))}
            </section>
        </section>
    )
}