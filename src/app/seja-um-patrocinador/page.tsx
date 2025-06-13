"use client"

import Img_custon from "../components/img_custon";
import Navbar from "../components/layout/navbar";
import CircleLoddingNumber from "../components/circle_lodding_numbers/";
import TextBox from "../components/patrocine_text_box";

import { FaYoutube, FaInstagram, FaTiktok, FaGraduationCap, FaTachometerAlt, FaMedal } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";

export default function Apoie() {
  return (
    <main className="bg-gray-200">
      <section className="flex flex-col h-full bg-[url('https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/fundo08.jpg')] bg-center bg-cover bg-no-repeat px-6 pt-10">
        <Navbar
          logo="logoWhite.png"
          styleHamburguer="bg-white"
          styleLinks="text-white"
          styleBotao_1="bg-white"
          corIcone="text-white"
        />
        <div className="flex items-center lg:items-center justify-center gap-10 flex-col lg:flex-row pt-10">
          <div className="w-full max-w-[800px] lg:w-[50%] lg:max-w-[800px] text-center lg:text-start">
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
            className="w-full max-w-[650px]"
            img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/pagina_home/guana6.png"
            alt="imagem do Gustavo Guanabara"
            width={500}
          />
        </div>
      </section>  
      <section className="bg-white w-full">
        <h1 className="text-center text-3xl/10 lg:text-5xl/15 text-sky-400 font-bold max-w-[1000px] m-auto p-10">Audiência segmentada na área de tecnologia da informação</h1>
        <p className="text-center text-xl lg:text-3xl max-w-[1000px] m-auto px-10">O Curso em Vídeo é um dos maiores e mais reconhecidos projetos de educação em tecnologia no Brasil.</p>
        <div className="pb-5">
          <Img_custon
            className="m-auto drop-shadow-[0px_0px_5px_#0000008c]"
            alt="Boneco do Guanabara"
            img="https://filipe520.github.io/api-cursoEmVideo/img-cursoEmVideo/imagens aleatoria/boneco-guana.png"
            width={150}
          />
        </div>
      </section>
      <section>
        <h1 className="text-center text-3xl lg:text-5xl font-bold p-10">Audiência do Curso em Video</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center p-10">
          <CircleLoddingNumber name="Youtube" Icon={FaYoutube} total={2.5} increment={0.1}/>
          <CircleLoddingNumber name="Site" Icon={BiWorld} total={1} increment={0.1}/>
          <CircleLoddingNumber name="Instagram" Icon={FaInstagram} total={217} increment={1}/>
          <CircleLoddingNumber name="Tiktok" Icon={FaTiktok } total={57} increment={1}/>
        </div>
      </section>
      <section className="grid gap-10 md:grid-cols-2">
        {[
          {icon: FiTarget, title: "Segmentação do Público", paragraph: "O público do Curso em Vídeo é composto por estudantes e profissionais de TI que buscam aprender programação e aprimorar conhecimentos na área. Homens são a maioria e a faixa de idade predominante é de 18 a 44 anos."},
          {icon: FaGraduationCap, title: "Experiência e Credibilidade", paragraph: "Gustavo Guanabara é referência em educação tecnológica no Brasil. Com mais de 30 anos de experiência e uma didática envolvente, transforma o aprendizado em TI em algo acessível e impactante para milhões de estudantes."},
          {icon: FaTachometerAlt, title: "Alcance Expressivo", paragraph: "O Curso em Vídeo está no YouTube, Instagram, TikTok e conta com uma plataforma EAD própria para alunos que buscam certificados e outros benefícios, acumulando milhões de seguidores e interações mensais com os alunos." },
          {icon: FaMedal, title: "Qualidade do Conteúdo", paragraph: "Gustavo Guanabara é conhecido por sua abordagem descontraída e didática, o que torna os conteúdos mais acessíveis para iniciantes. O canal oferece uma ampla variedade de cursos que abrangem diferentes linguagens de programação." }
        ].map((box, id)=>(
          <TextBox key={id} Icon={box.icon} title={box.title} paragraph={box.paragraph}/>
        ))}
      </section>
    </main>
  );
}
