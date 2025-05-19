import Link from "next/link";

interface PropsLinkClassVideo{
    title: string,
    videoslug: string,
    courseslug: string
}

export default function LinkClassVideo({title, videoslug, courseslug}:PropsLinkClassVideo){
    return (
        <div>
            <Link href={`/cursos/${courseslug}/${videoslug}`}>{title}</Link>
        </div>
    )
}