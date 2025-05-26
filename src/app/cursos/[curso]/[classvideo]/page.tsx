import { notFound } from "next/navigation";
import IframeVideo from "@/app/components/menu_class_videos/IframeVideo";

export default async function ClassVideo({
  params,
}: {
  params: Promise<{ classvideo: string }>;
}) {
  const { classvideo } = await params;
  const data = await fetch(
    "https://filipe520.github.io/api-cursoEmVideo/db/videos.json"
  );
  const class_videos = await data.json();
  let video: {title: string, video: string} = {title: "", video: ""}

  const couservideo = class_videos.map((element: { slug: string, title: string, video: string }) => {
    if(element.slug == classvideo){
      video = element
    }
  })

  if (couservideo.lenght == 0 || video.title == "" || video.video == "") {
    notFound();
  }

  console.log(video, couservideo)

  return (
    <main>
      <h1>{video.title}</h1>
      <div>
        <IframeVideo src={video.video} />
      </div>
    </main>
  );
}
