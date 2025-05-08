import { notFound } from "next/navigation"
import BannerCourse from "@/app/components/BannerCourse"

export default async function Page({
  params,
}: {
  params: Promise<{ curso: string }>
}) {
  const { curso } = await params
  const data = await fetch("https://micaelsilvasouza.github.io/clone-curso-em-video/db/courses.json")
  const cursos = await data.json()

  const dados = cursos.filter((element: {slug: string}) => {
    return element.slug == curso
  })[0]

  if(dados == undefined){
    notFound()
  }

  return (
    <main>
      <BannerCourse title={dados.title} image={dados.image} slug={dados.slug}/>
      <section className="pt-[30px]">
        <p className="p-5 text-xl text-indigo-900 w-8/10 max-w-180 m-auto">{dados.description}</p>
      </section>
    </main>
  )
}
