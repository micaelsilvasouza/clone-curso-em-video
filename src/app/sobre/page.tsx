"use client";

// Componentes
import BannerRotaHeader from "../components/banner_rota_header";
import Img_custon from "../components/img_custon";
import TotalAlunos from "../components/contado_alunos/TotalAlunos";

// Lib Next
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sobre() {
  const [scroolContado, setScroolContado] = useState(false);
  useEffect(() => {
    const mudancaScroll = () => {
      if (window.innerWidth < 500) {
        setScroolContado(window.scrollY > 1000);
      }
      if (window.innerWidth >= 500) {
        setScroolContado(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", mudancaScroll);
  }, []);

  return (
    <section className="">
      <BannerRotaHeader nomeRota="Sobre nós" />

      {/* Sobre o Guanabara */}
      <section className="flex max-md:flex-col p-5 max-w-[1200px] mx-auto">
        {/* Parte da Img */}
        <article className="flex flex-col p-5 flex-1">
          <div className="flex justify-center">
            <Img_custon
              img="man-laptop2.jpg"
              alt="imagem do Gustavo Guanabara"
              width={300}
              className="rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h2 className="text-neutral-700 font-sans my-5 text-center md:text-2xl text-xl">
              <strong>Gustavo Guanabara</strong>
            </h2>
            <p>
              Gustavo Guanabara é professor carioca desde 1994 e já atuou em
              todo tipo de segmento. Atuou desde ensino infantil, passando por
              cursos técnicos, universidades e já coordenou o setor de tutoria
              para ensino à distância de uma universidade pública. Atualmente,
              viaja pelo Brasil dando palestras em eventos nacionais e
              internacionais, como Campus Party, FISL, Latinoware, etc. Para
              maiores informações sobre seu trabalho, acesse:
              <Link
                href="https://about.me/guanabara"
                target="_blank"
                rel="external"
                className="text-indigo-600 pl-1"
              >
                about.me/guanabara
              </Link>
            </p>
          </div>
        </article>
        <article className="bg-sky-10 flex-1 p-10 rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-xl md:text-3xl font-semibold text-center my-5 text-indigo-900">
            Plataforma de ensino Curso em Vídeo
          </h2>
          <p>
            <strong className="text-indigo-950 font-medium">
              Lançado em 2013, o projeto de ensinar tecnologia à distância foi
              ganhando forma e hoje já conta com milhares de alunos inscritos e
              uma grande quantidade de material gratuito.
            </strong>{" "}
            O professor carioca Gustavo Guanabara sempre buscou criar aulas
            diferentes dentro da sua sala. Quando descobriu que poderia dar
            aulas para milhares de pessoas pela internet, criou seu primeiro
            curso de PHP em 2005. Desde aquela época, já teve mais de 8 milhões
            de downloads e colaborou para a formação de muitos programadores
            iniciantes. Em 2013, com o apoio principal da Hostnet, Guanabara
            iniciou seu projeto mais ambicioso: ensinar tecnologia através de um
            site que disponibilizasse cursos completos em vídeo, com novas aulas
            lançadas semanalmente. Ainda em 2013, foi lançado o Curso em Vídeo
            de HTML5 e no início de 2014, iniciou o Curso em Vídeo de Algoritmo.
            Ambos 100% gratuitos.
          </p>
        </article>
      </section>

      {/* total de alunos */}
      <section className="bg-cyan-800 px-2 mt-10 flex flex-col items-center justify-center">
        <article className="py-20 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl text-center font-semibold mb-20 md:text-3xl">
            Números do Curso em Vídeo
          </h2>
          <section className=" w-full grid grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 items-center justify-items-center gap-2">
            <div className=" bg-white p-10 rounded-lg w-full">
              <h3 className="text-center text-3xl font-semibold">
                {scroolContado && (
                  <TotalAlunos ativo={true} totAlunos={2510000} />
                )}
              </h3>
              <p className="text-black/80 text-center mt-5">
                Alunos inscritos no YouTube
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg w-full">
              <h3 className="text-center text-3xl font-semibold">
                {" "}
                {scroolContado && (
                  <TotalAlunos ativo={true} totAlunos={700000} />
                )}
              </h3>
              <p className="text-black/80 text-center mt-5">
                Alunos cadastrados e ativos no site
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg w-full">
              <h3 className="text-center text-3xl font-semibold">
                {scroolContado && (
                  <TotalAlunos ativo={true} totAlunos={210000} />
                )}
              </h3>
              <p className="text-black/80 text-center mt-5">
                Seguidores no Instagram
              </p>
            </div>

            <div className="bg-white p-3 rounded-lg w-full">
              <h3 className="text-center text-3xl font-semibold">
                {scroolContado && (
                  <TotalAlunos ativo={true} totAlunos={26000} />
                )}
              </h3>
              <p className="text-black/80 text-center mt-5">
                Seguidores no TikTok
              </p>
            </div>
          </section>
        </article>
      </section>
    </section>
  );
}
