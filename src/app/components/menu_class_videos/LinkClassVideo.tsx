import Link from "next/link";

export interface PropsLinkClassVideo{
    title: string,
    slug: string,
    course: string
}

export function LinkClassVideo({title, slug, course}:PropsLinkClassVideo){
    return (
        <div className="flex items-center gap-5 p-5 border-b-1 border-gray-300">
            <span className="inline-block aling-middle size-7 border-3 border-gray-300 rounded-full">
                {/* Parte circular */}
            </span>
            <Link href={`/cursos/${course}/${slug}`}>{title}</Link>
        </div>
    )
}