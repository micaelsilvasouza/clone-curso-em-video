import BannerPaginaCima from "../components/BannerPaginaCima";
import Img from "../components/layout/img";
import Link from "next/link";

export default async function Cursos() {
  const data = await fetch(
    "https://micaelsilvasouza.github.io/clone-curso-em-video/db/courses.json"
  );
  const courses = await data.json();

  return (
    <section className="text-black bg-white ml-5 mr-5 max-w-7xl">
      <BannerPaginaCima dirname="Cursos"/>
      <section className="cards py-5">
        {
          courses.map((json:{id: string, slug: string,image: string, title: string, description: string}) => (
            <div
              key={json.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50 w-[350px] mb-4"
            >
              <div className="w-full">
                <Link href={`/cursos/${json.slug}`}>
                  <Img
                    img={json.image}
                    alt={json.slug}
                  />
                </Link>
              </div>
              <div className="px-6 py-4">
                <Link href={`/cursos/${json.slug}`}>
                  <h2 className="font-bold text-xl mb-2 text-black">
                    {json.title}
                  </h2>
                </Link>
                <p className="text-gray-700 text-base">{json.description.slice(0, 101) + "[...]"}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link href={`/cursos/${json.slug}`}>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Veja mais
                  </span>
                </Link>
              </div>
            </div>
          ))
        }
      </section>
    </section>
  );
}
