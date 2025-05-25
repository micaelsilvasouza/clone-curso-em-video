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
  const videos = await data.json();

  const video = videos.filter(
    (element: { slug: string }) => element.slug == classvideo
  )[0];

  if (video == undefined) {
    notFound();
  }

  return (
    <main>
      <h1>{video.title}</h1>
      <div>
        <IframeVideo src={video.video} />
      </div>
    </main>
  );
}
