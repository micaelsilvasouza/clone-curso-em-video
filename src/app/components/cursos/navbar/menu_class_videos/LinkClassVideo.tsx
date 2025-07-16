import Link from "next/link";

export interface PropsLinkClassVideo {
  title: string;
  slug: string;
  course: string;
  isopening: boolean;
}

export function LinkClassVideo({
  title,
  slug,
  course,
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
      <Link href={`/cursos/${course}/${slug}`} className="hover:underline">
        {title}
      </Link>
    </div>
  );
}
