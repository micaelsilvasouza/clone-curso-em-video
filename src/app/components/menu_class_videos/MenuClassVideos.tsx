import { LinkClassVideo } from "./LinkClassVideo"
import HeaderMenuClassVideos from "./HeaderMenuClassVideos"

interface PropsVideoClass {title: string, slug: string}

interface PropsMenuClassVideos{
    videos: PropsVideoClass[],
    course: string
}

export default function MenuClassVideos({videos, course}: PropsMenuClassVideos){
    return (
        <section className="my-10 mx-auto w-9/10 max-w-[800px] border-2 border-gray-300 rounded-xl">
            <HeaderMenuClassVideos quantity={videos.length}/>
            <section className="px-10 py-5">
                {videos.map((video: PropsVideoClass)=>(
                    <LinkClassVideo key={video.slug} title={video.title} slug={video.slug} course={course}/>
                ))}
            </section>
        </section>
    )
}