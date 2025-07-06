// Componentes
import BannerPaginaCima from "../components/banner_rota_header";
import { CursosClientComponent } from "../components/cursos/course_client_component";
import { redirect } from "next/navigation";

export default async function Cursos() {
  const data = await fetch("https://backend-cursoemvideo.onrender.com/courses");

  if (data.status != 200) {
    redirect("/error/fetch-error");
    return;
  }

  const courses = await data.json();

  return (
    <section className="text-black">
      <BannerPaginaCima nomeRota="Cursos" />
      <CursosClientComponent courses={courses} />
    </section>
  );
}
