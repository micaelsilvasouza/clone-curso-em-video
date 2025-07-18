import Img_custon from "../img_custon";
import Navbar from "@/app/components/layout/navbar";


interface PropBannerCourse {
  title: string;
  image: string;
  slug: string;
}

export default function BannerCourse({ title, image, slug }: PropBannerCourse) {
  return (
    <div className="bg-blue-50 bg-[url(/image/BannerPaginaCima.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="p-5">
        <Navbar
          logo="logoBlue.png"
          styleLinks="text-black"
          styleHamburguer="bg-black"
        />
      </div>
      
      <div className="grid justify-items-center p-8 pt-[120px] md:justify-items-start md:grid-cols-4">
        <Img_custon
          className="size-[200px] md:size-50 md:row-span-2 rounded-full"
          img={image}
          alt={slug}
          width={100}
        />
        <h1 className="pl-4 md:col-span-3">
          <span className="block text-lg text-[#1c0051]">Curso de</span>
          <span className="block text-4xl font-semibold text-[#1c0051]">
            {title}
          </span>
        </h1>
        <Img_custon
          className="w-20 h-11"
          img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/imagens%20aleatoria/gratis.png"
          alt="Curso gratis"
          width={100}
        />
      </div>
    </div>
  );
}
