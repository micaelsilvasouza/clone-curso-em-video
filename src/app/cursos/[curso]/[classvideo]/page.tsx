import { notFound } from "next/navigation";

import IframeVideo from "@/app/components/menu_class_videos/IframeVideo";
import MenuClassVideos from "@/app/components/menu_class_videos/MenuClassVideos";
import Link from "next/link";

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

  let video: { title: string; video: string, slug: string } = { title: "", video: "", slug: "" }; //armazena o video
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

  const videoindex = coursevideos.indexOf(video)
  const preveiw = (videoindex - 1) >= 0 ? `/cursos/${course.slug}/${coursevideos.at(videoindex - 1)?.slug}` : `/cursos/${course.slug}`
  const next = `/cursos/${course.slug}/${coursevideos.at(videoindex + 1)?.slug}` 

  return (
    <main className="relative">
      <h1>{video.title}</h1>
      <MenuClassVideos
        type="leftright"
        videos={coursevideos}
        courseslug={course.slug}
        coursetitle={course.title}
      />
      <section>
        <IframeVideo src={video.video} />
      </section>
      <section>
        <Link href={preveiw}>Anterior</Link>
        <Link href={next}>Próximo</Link>
      </section>
    </main>
  );
}
