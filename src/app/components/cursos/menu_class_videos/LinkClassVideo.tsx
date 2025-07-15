import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export interface PropsLinkClassVideo {
  title: string;
  slug: string;
  course: string;
  video_watched: boolean; //Determina se o video foi assistido
  isopening: boolean;
}

export function LinkClassVideo({
  title,
  slug,
  course,
  video_watched,
  isopening,
}: PropsLinkClassVideo) {
  return (
    <div
      className={`${
        isopening ? "opacity-100 " : "opacity-0 border-r border-black/10"
      } flex items-center gap-5 p-5 border-b-1 border-gray-300 `}
    >
      <span className={`shrink-0 size-7 border-5 ${video_watched ? "border-blue-800" : "border-gray-300"} rounded-full flex items-center justify-center`}>
        {video_watched ? 
          <FaCheck className="text-blue-800 text-sm"/> 
          : 
          <span></span>
        }
        
      </span>
      <Link 
        href={video_watched ? `/cursos/${course}/${slug}`: "#"} 
        className={video_watched ? "hover:underline" : "text-gray-500 cursor-not-allowed"}
      >
        {title}
      </Link>
    </div>
  );
}
