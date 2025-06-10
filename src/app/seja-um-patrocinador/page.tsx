
import Img_custon from "../components/img_custon";
import Navbar from "../components/layout/navbar";

export default function Apoie() {
  return (
    <main>
      <section className="flex flex-col h-full bg-[url('https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/fundo08.jpg')] bg-center bg-cover bg-no-repeat px-6 pt-10">
        <Navbar
          logo="logoWhite.png"
          styleHamburguer="bg-white"
          styleLinks="text-white"
          styleBotao_1="bg-white"
          corIcone="text-white"
        />
        <div className="flex items-center lg:items-end justify-center gap-10 flex-col lg:flex-row pt-10">
          <div className="w-full lg:w-[50%] lg:max-w-[500px] text-center lg:text-start">
            <h1>
              <span className="block p-2 text-sky-400 text-xl lg:text-4xl font-bold">Apoio Institucional</span>
              <span className="block p-2 text-white text-4xl lg:text-6xl font-bold">
                Anuncie no <br/>
                Curso em Vídeo
              </span>
            </h1>
            <p className="p-3 text-white text-base lg:text-2xl">
              Conecte sua empresa a milhões de estudantes e profissionais de tecnologia. Associe sua marca ao projeto que, há mais de 10 anos, transforma vidas e impulsiona a profissionalização do mercado de TI.
            </p>
          </div>
          <Img_custon
            className="w-full max-w-[500px]"
            img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/guana6.png"
            alt="imagem do Gustavo Guanabara"
            width={500}
          />
        </div>
      </section>  
      <section>
        <h1 className="text-center text-6xl/20 text-sky-400 font-bold py-20">Audiência segmentada na área de tecnologia da informação</h1>
        <p className="text-center text-4xl px-20">O Curso em Vídeo é um dos maiores e mais reconhecidos projetos de educação em tecnologia no Brasil.</p>
        <div className="pb-5">
          <Img_custon
            className="m-auto drop-shadow-xl"
            alt="Boneco do Guanabara"
            img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/imagens aleatoria/boneco-guana.png"
            width={150}
          />
        </div>
      </section>
    </main>
  );
}
