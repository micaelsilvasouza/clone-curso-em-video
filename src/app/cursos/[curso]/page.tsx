import { notFound, redirect } from "next/navigation";
import { getDataWidhToken } from "@/actions/actions_cookies";
import BannerCourse from "@/app/components/banner_course";
import MenuClassVideos from "@/app/components/cursos/menu_class_videos/MenuClassVideos";
import PorcentCourse from "@/app/components/porcent_couse";
import UserCouserPainel from "@/app/components/cursos/UserCoursePainel"

export default async function Page({
  params,
}: {
  params: Promise<{ curso: string }>;
}) {
  //buscando dados do curso
  const { curso } = await params;
  let data = await fetch(
    `https://backend-cursoemvideo.onrender.com/course/${curso}`
  );

  //Validando busca
  if (data.status != 200) {
    redirect("/error/fetch-error");
    return;
  }

  const course = await data.json();

  //verificando se o curso está cadastrado
  if (course == undefined || course == null) {
    notFound();
  }

  //buscando videos relacionados aos cursos
  data = await fetch(
    `https://backend-cursoemvideo.onrender.com/videos/${curso}`
  );

  //Validando busca
  if (data.status != 200) {
    redirect("/error/fetch-error");
    return;
  }

  const videos = await data.json();

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

  //busando o usuário
  const user = await getDataWidhToken()

  //verificando se usuário possui o curso
  let userCourse: {porcent: number, id: string | undefined} | undefined
  if(user){
    const data = await fetch("https://backend-cursoemvideo.onrender.com/user/course",{
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({userid: user.id, courseid: course.id})
    })

    userCourse = (await data.json()).courses
  }

  return (
    <main>
      <BannerCourse
        title={course.title}
        image={course.image}
        slug={course.slug}
      />

      
        { user && userCourse ? 
        <section>
          <PorcentCourse porcent={userCourse.porcent}/>
        </section> 
        :
        <UserCouserPainel userid={user.id} courseid={course.id}/>
      }
      
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
