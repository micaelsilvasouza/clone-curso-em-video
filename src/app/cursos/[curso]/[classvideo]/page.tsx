import { redirect } from "next/navigation";
import AreaCurso from "@/app/components/cursos/navbar";

import { getDataWidhToken } from "@/actions/actions_cookies"


export const revalidate = 60; //revalidar os dados a cada 60 segundos

export default async function ClassVideo({
  params,
}: {
  params: Promise<{ classvideo: string; curso: string }>;
}) {
  const { classvideo, curso } = await params;
 
  let video, videos, course, userCourse;

  try {
    const user = await getDataWidhToken() //pegando dados do usuario

    if(!user){                      //usuário invalido
      redirect("/login")
    }

    const resVideo = await fetch(
      `https://backend-cursoemvideo.onrender.com/video/${classvideo}`
    );
    const resVideos = await fetch(
      `https://backend-cursoemvideo.onrender.com/videos/${curso}`
    );
    const resCurso = await fetch(
      `https://backend-cursoemvideo.onrender.com/course/${curso}`
    );

    
    if (!resVideo.ok || !resVideos.ok || !resCurso.ok) {
      redirect("/error/fetch-error");
    }
    
    video = await resVideo.json();
    videos = await resVideos.json();
    course = await resCurso.json()
    
    //obtendo dados do curso do usuario
    const resUserCurso = await fetch(
      "https://backend-cursoemvideo.onrender.com/user/course",{
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({userid: user.id, courseid: course.id})
    })

    if (!resUserCurso.ok) {
      redirect("/error/fetch-error");
    }

    userCourse = (await resUserCurso.json()).courses
    console.log(userCourse)

    if (!video || !video.video) {
      redirect("/error/video-not-found");
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    redirect("/error/fetch-error");
  }

  return (
    <main className="">
      <AreaCurso curso={curso} video={video} videos={videos} />
    </main>
  );
}
