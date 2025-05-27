// Componentes
import Navbar from "./components/layout/navbar";
import Img_custon from "./components/img_custon";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-full bg-[url('https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/fundo08.jpg')] bg-cover bg-no-repeat bg-center ">
        <Navbar
          style="bg-transparent"
          logo="logoWhite.png"
          styleHamburguer="bg-white"
          styleLinks="text-white"
        />
        <div className="flex h-full lg:w-[1300px] mx-auto max-md:flex-col">
          <div className="p-6 flex-1 flex flex-col md:justify-end mb-10 h-[662px]">
            <div className="w-full">
              <h1
                className="max-md:mt-7
              text-6xl md:text-8xl lg:text-[110px] 
              text-cyan-400 font-[600] 
              max-sm:leading-12 lg:leading-24 min-md:leading-20 max-md:leading-5
              lg:mb-5 w-full
              "
              >
                Paixão por
              </h1>
              <h2
                className="
              text-6xl md:text-8xl lg:text-[120px] text-white font-[600]
              lg:mb-10 max-md:mb-0 
              max-sm:leading-20 lg:leading-20 min-md:leading-20 max-md:leading-24"
              >
                ensinar.
              </h2>
            </div>
            <p
              className="
            text-white 
            max-md:w-70 md:w-100 lg:w-150  
            md:text-xl lg:text-2xl md:font-[400] 
            md:mb-20
            "
            >
              Estude gratuitamente e aprenda <br></br> com conteúdo e
              professores de qualidade.
            </p>
          </div>
          <div className="flex-1 relative flex items-end">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/guana6.png"
              alt="imagem do Gustavo Guanabara"
              width={500}
              className="
              md:w-170 max-md:w-100"
            />
          </div>
        </div>
      </section>
      <article className="px-5 pt-20 max-w-[1500px] mx-auto">
        <section className="flex max-md:flex-col gap-5">
          <div className="flex-1">
            <Img_custon
              img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/Ativo-12-768x621.png"
              alt="Imagem dos cursos da plataforma"
              width={700}
            />
          </div>
          <div className="flex-1 flex flex-col py-10 px-20">
            <h2 className="text-5xl font-medium text-blue-950 leading-14">
              Cursos de <br /> Tecnologia <br />
              <span className="text-blue-600">gratuitos</span> e de <br />{" "}
              qualidade.
            </h2>

            <button className="my-15 w-40 shadow bg-blue-600 py-3 px-10 rounded-3xl text-white">
              Conhece
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}
