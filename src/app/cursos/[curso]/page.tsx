import { notFound } from "next/navigation"
import Img from "../../components/layout/img"

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
    <div className="text-black">
      <h1>{dados.title}</h1>
      <Img img={dados.image} alt={dados.slug}/>
      <p>{dados.description}</p>
    </div>
  )
}
