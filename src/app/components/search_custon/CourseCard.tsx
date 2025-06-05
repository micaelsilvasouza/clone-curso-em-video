"use client";

import Img_custon from "../img_custon";
import Link from "next/link";

type Props = {
  curso: {
    id: string;
    slug: string;
    image: string;
    title: string;
    description: string;
  };
};

export default function CourseCard({ curso }: Props) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] mb-4"
      key={curso.id}
    >
      <div className="w-full">
        <Link href={`/cursos/${curso.slug}`}>
          <Img_custon img={curso.image} alt={curso.slug} width={500} />
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link href={`/cursos/${curso.slug}`}>
          <h2 className="font-medium text-xl mb-2 text-black">{curso.title}</h2>
        </Link>
        <p className="text-gray-700 text-base">
          {curso.description.slice(0, 101) + "[...]"}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/cursos/${curso.slug}`}>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Veja mais
          </span>
        </Link>
      </div>
    </div>
  );
}
