import Link from "next/link";

import { FaCheck } from "react-icons/fa";

export interface PropsLinkClassVideo {
  title: string;
  slug: string;
  course: string;

  video_watched: boolean; //Determina se o video foi assistido
  liberated: boolean; //Determina se o video ta livre para ser assistido

  isopening: boolean;
}

export function LinkClassVideo({
  title,
  slug,
  course,

  video_watched,
  liberated,

  isopening,
}: PropsLinkClassVideo) {
  return (
    <div
      className={`${
        isopening ? "opacity-100 " : "opacity-0 border-r border-black/10"
      } flex items-center gap-5 p-5 border-b-1 border-gray-300 `}
    >
      <span className="shrink-0 size-3 border-3 border-gray-300 rounded-full">
        {/* Parte circular */}
      </span>
      <Link href={`/cursos/${course}/${slug}`} className="hover:underline" />

      <span
        className={`shrink-0 size-8 border-5 ${
          video_watched || liberated ? "border-blue-800" : "border-gray-300"
        } rounded-full flex items-center justify-center`}
      >
        {video_watched ? (
          <FaCheck className="text-blue-800 text-sm" />
        ) : (
          <span></span>
        )}
      </span>
      <Link
        href={video_watched || liberated ? `/cursos/${course}/${slug}` : "#"} //permite assitido ou liberado
        className={
          video_watched || liberated
            ? "hover:underline"
            : "text-gray-500 cursor-not-allowed"
        }
      >
        {title}
      </Link>
    </div>
  );
}
