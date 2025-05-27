import { notFound } from "next/navigation";
import IframeVideo from "@/app/components/menu_class_videos/IframeVideo";
import MenuClassVideos from "@/app/components/menu_class_videos/MenuClassVideos";

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

  const cursos = await datacurso.json(); //cursos

  const course = cursos.filter((element: { slug: string }) => {
    //filtrando para encotrar o curso referente ao video
    return element.slug == curso;
  })[0];

  const class_videos = await datavideo.json(); //videos

  let video: { title: string; video: string } = { title: "", video: "" }; //armazena o video
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

  if (coursevideos.length == 0 || video.title == "" || video.video == "") {
    notFound();
  }

  return (
    <main>
      <h1>{video.title}</h1>
      <MenuClassVideos
        videos={coursevideos}
        courseslug={course.slug}
        coursetitle={course.title}
      />
      <div>
        <IframeVideo src={video.video} />
      </div>
    </main>
  );
}
