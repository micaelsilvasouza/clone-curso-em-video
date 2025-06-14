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
    //buscando videos
    "https://filipe520.github.io/api-cursoEmVideo/db/videos.json"
  );

  const datacurso = await fetch(
    //buscando cursos
    "https://filipe520.github.io/api-cursoEmVideo/db/courses.json"
  );

  if(datavideo.status != 200 || datacurso.status != 200){
    redirect("/error/fetch-error")
    return
  }

  const cursos = await datacurso.json(); //cursos

  const course = cursos.filter((element: { slug: string }) => {
    //filtrando para encotrar o curso referente ao video
    return element.slug == curso;
  })[0];

  const class_videos = await datavideo.json(); //videos

  let video: { title: string; video: string, slug: string } = { title: "zafenate paneia", video: "", slug: "" }; //armazena o video
  const coursevideos: { slug: string; title: string }[] = []; //armazena os videos do mesmo curso

  //filtrando videos que pertençam ao mesmo curso e encontrando dados do video
  class_videos.forEach(
    (element: {
      slug: string;
      title: string;
      video: string;
      course: string;
    }) => {
      if (element.slug == classvideo) {
        video = element;
      }

      if (element.course == course.id) {
        coursevideos.push(element);
      }
    }
  );

   console.log(video, class_videos)

  if (coursevideos.length == 0 || video.title == "" || video.video == "") {
    notFound();
  }

  const videoindex = coursevideos.indexOf(video)
  const preveiw = (videoindex - 1) >= 0 ? `/cursos/${course.slug}/${coursevideos.at(videoindex - 1)?.slug}` : `/cursos/${course.slug}`
  const next = `/cursos/${course.slug}/${coursevideos.at(videoindex + 1)?.slug}` 

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
            videos={coursevideos}
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
