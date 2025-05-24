// Componentes
import BannerPaginaCima from "../components/banner_rota_header";
import Img_custon from "../components/img_custon";

// Lib Next
import Link from "next/link";

export default async function Cursos() {
  const data = await fetch(
    "https://micaelsilvasouza.github.io/clone-curso-em-video/db/courses.json"
  );
  const courses = await data.json();

  return (
    <section className="text-black">
      <BannerPaginaCima nomeRota="Cursos" />
      <article className="">
        <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center">
          {courses.map(
            (json: {
              id: string;
              slug: string;
              image: string;
              title: string;
              description: string;
            }) => (
              <div
                key={json.id}
                className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] mb-4"
              >
                <div className="w-full">
                  <Link href={`/cursos/${json.slug}`}>
                    <Img_custon img={json.image} alt={json.slug} width={500} />
                  </Link>
                </div>
                <div className="px-6 py-4">
                  <Link href={`/cursos/${json.slug}`}>
                    <h2 className="font-medium text-xl mb-2 text-black">
                      {json.title}
                    </h2>
                  </Link>
                  <p className="text-gray-700 text-base">
                    {json.description.slice(0, 101) + "[...]"}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <Link href={`/cursos/${json.slug}`}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Veja mais
                    </span>
                  </Link>
                </div>
              </div>
            )
          )}
        </section>
      </article>
    </section>
  );
}
