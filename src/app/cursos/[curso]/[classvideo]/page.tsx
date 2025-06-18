import { notFound, redirect } from "next/navigation";

import IframeVideo from "@/app/components/iframe_video";
import MenuClassVideos from "@/app/components/menu_class_videos/MenuClassVideos";
import Navbar from "@/app/components/layout/navbar";
import Link from "next/link";

//export const revalidate = 60 //revalidar os dados a cada 60 segundos

export default async function ClassVideo({
  params,
}: {
  params: Promise<{ classvideo: string; curso: string }>;
}) {
  const { classvideo, curso } = await params;

  const datavideo = await fetch(
    //buscando video
    `https://backend-cursoemvideo.onrender.com/video/${classvideo}`
  );

  const datavideos = await fetch(
    //buscando videos do curso
    `https://backend-cursoemvideo.onrender.com/videos/${curso}`
  );

  const datacurso = await fetch(
    //buscando curso
    `https://backend-cursoemvideo.onrender.com/course/${curso}`
  );

  if(datavideo.status != 200 || datavideos.status != 200 || datacurso.status != 200){
    redirect("/error/fetch-error")
    return
  }

  const videos = await datavideos.json(); //videos do curso
  const video = await datavideo.json(); //video
  const course = await datacurso.json(); //video

  if (videos == undefined || videos == null || videos.length == 0 || video == null || video == undefined || curso == undefined || curso == null) {
    notFound();
  }

  const videoindex = video.order
  const preveiw = (videoindex - 1) >= 0 ? `/cursos/${curso}/${videos.at(videoindex - 1).slug}` : `/cursos/${curso}`
  const next = `/cursos/${curso}/${videos.at(videoindex + 1)?.slug}` 

  return (
    <main className="bg-sky-100 ">
      <div className="p-5">
        <Navbar
          logo="logoBlue.png"
          styleLinks="text-black"
          styleHamburguer="bg-black"
        />
      </div>

      <hr/>
      
      <div className="min-h-[100dvh] relative flex items-center">
          <MenuClassVideos
            type="horizontal"
            videos={videos}
            courseslug={course.slug}
            coursetitle={course.title}
          />
        <section className={`grow flex justify-center items-center`}>
         <section className="w-full h-fit py-5">
          <h1 className="text-center w-full text-3xl font-bold">{video.title}</h1>
  
          <div className="py-1 w-full text-center">
            <Link 
              href={`/cursos/${course.slug}`} 
              className="text-blue-800 underline"
            >
              {course.title}
            </Link>
          </div>
  
          <div 
            className="aspect-video w-full max-w-[800px] my-5 mx-auto shadow-lg"
          >
            <IframeVideo src={video.video} />
          </div>
  
  
          <div className="flex justify-center gap-5">
            <Link href={preveiw} className="bg-blue-800 text-white text-bold p-2 rounded-xl">Anterior</Link>
            <Link href={next} className="bg-blue-800 text-white text-bold p-2 rounded-xl">Próximo</Link>
          </div>
         </section>
        </section>
      </div>
    </main>
  );
}
