// components/Carousel.jsx

"use client";

// Lib Next/React
import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import { Asap } from "next/font/google";

// Config da font
const roboto = Roboto({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });

const alunos = [
  {
    nomeAluno: "Alexandre Domingues",
    comentario:
      "Parabéns a equipe do curso em video, vcs são a referência em aprender programação no Brasil.",
  },
  {
    nomeAluno: "Angelo Coelho",
    comentario:
      'Começo a entender que grandes empresas ou grandes metas se constroem aos poucos ao decorrer dos anos. Vejo quanta qualidade e quanta dedicação foi aumentando no "CursoemVideo". Todos teus alunos lembrarão do Senhor Guanabara! Gracias!',
  },
  {
    nomeAluno: "Francisco Sergio",
    comentario:
      "Parabéns professor, vc e sua equipe fazem um trabalho maravilhoso e de ótima qualidade. Patrocínio merecido. Espero que outras empresas siga o exemplo do youtube e da Hostnet e patrocinem o canal cada vez mais. Foi através do seu canal que me apaixonei pela programação. Obrigado por tudo!",
  },
];

export default function ComentarioAlunos() {
  const [current, setCurrent] = useState(0);

  // Auto-slide com useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alunos.length);
    }, 7000); // 7 segundos

    // Limpa o intervalo se o componente sair da tela
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden bg-sky-20 text-cyan-900 px-10 rounded-2xl mt-10 py-16 border border-sky-500">
      <div className="relative max-sm:h-[80dvh] sm:h-[40dvh]">
        {alunos.map((aluno, index) => (
          <div
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <h5 className={`${roboto.className} font-bold text-lg mb-10`}>
              {aluno.nomeAluno}
            </h5>
            <p className={`${asap.className} text-xl text-cyan-950`}>
              {aluno.comentario}
            </p>
          </div>
        ))}
      </div>

      {/* Indicadores (bolinhas) */}

      <div className="flex gap-2 justify-center">
        {alunos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index ? "bg-blue-300" : "bg-black/50"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
