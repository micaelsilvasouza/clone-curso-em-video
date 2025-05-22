import Img from "../layout/img";

interface PropBannerCourse {
  title: string;
  image: string;
  slug: string;
}

export default function BannerCourse({ title, image, slug }: PropBannerCourse) {
  return (
    <div className="grid justify-items-center p-8 pt-[120px] bg-blue-50 bg-[url(/image/BannerPaginaCima.jpg)] bg-cover bg-no-repeat bg-center md:justify-items-start md:grid-cols-4">
      <div className="size-[200px] md:size-50 md:row-span-2">
        <Img
          className="rounded-full"
          img={image}
          alt={slug}
          width={100}
          height={100}
        />
      </div>
      <h1 className="pl-4 md:col-span-3">
        <span className="block text-lg text-[#1c0051]">Curso de</span>
        <span className="block text-6xl font-semibold text-[#1c0051]">
          {title}
        </span>
      </h1>
      <div className="size-30 p-4">
        <Img
          img="https://www.cursoemvideo.com/wp-content/uploads/2019/08/Ativo-8.png"
          alt="Curso gratis"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
