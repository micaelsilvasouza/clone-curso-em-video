import { notFound, redirect } from "next/navigation";
import BannerCourse from "@/app/components/banner_course";
import MenuClassVideos from "@/app/components/menu_class_videos/MenuClassVideos";

export default async function Page({
  params,
}: {
  params: Promise<{ curso: string }>;
}) {
  //buscando dados do curso
  const { curso } = await params;
  let data = await fetch(
    "https://filipe520.github.io/api-cursoEmVideo/db/courses.json"
  );

  if(data.status != 200){
      redirect("/error/fetch-error")
      return
  }
  
  const cursos = await data.json();

  const course = cursos.filter((element: { slug: string }) => {
    return element.slug == curso;
  })[0];

  //verificando se o curso está cadastrado
  if (course == undefined) {
    notFound();
  }

  //buscando videos relacionados aos cursos
  data = await fetch(
    "https://filipe520.github.io/api-cursoEmVideo/db/videos.json"
  );
  const videos = (await data.json()).filter(
    (element: { course: string }) => element.course == course.id
  );

  //ordenando os videos de acordo com a propriedade order
  videos.sort((a: { order: number }, b: { order: number }) => {
    if (a.order > b.order) {
      return 1;
    }

    if (a.order == b.order) {
      return 0;
    }

    return -1;
  });

  return (
    <main>
      <BannerCourse
        title={course.title}
        image={course.image}
        slug={course.slug}
      />
      <section className="pt-[30px]">
        <p className="p-5 text-xl text-indigo-900 w-8/10 max-w-180 m-auto">
          {course.description}
        </p>
      </section>
      <MenuClassVideos 
        type="vertical" 
        videos={videos} 
        courseslug={course.slug} 
        coursetitle={course.title} 
      />
    </main>
  );
}
