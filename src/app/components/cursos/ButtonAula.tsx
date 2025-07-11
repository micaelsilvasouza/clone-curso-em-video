"use client";

import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { notFound } from "next/navigation";

import { FiBook } from "react-icons/fi";

type VideosApiProp = {
  slug: string;
  title: string;
  image: string;
};

type VideoApiProp = {
  description: string;
  title: string;
  video: string;
  order: number;
};
type ButtonAulaProp = {
  text: string;
  curso: string;
  styleIcone?: string;
  styleButton?: string;
  video: VideoApiProp;
  videos: VideosApiProp[];
  btnPrev?: "ativa";
  btnPlaylist?: "ativa";
  btnCheckout?: "ativa";
};

export default function ButtonAula({
  text,
  btnPrev,
  btnCheckout,
  video,
  videos,
  curso,
  styleButton,
  styleIcone,
  btnPlaylist,
}: ButtonAulaProp) {
  const iconeOne = useRef<HTMLSpanElement>(null);
  const iconeTwo = useRef<HTMLSpanElement>(null);

  if (
    videos == undefined ||
    videos == null ||
    videos.length == 0 ||
    video == null ||
    video == undefined ||
    curso == undefined ||
    curso == null
  ) {
    notFound();
  }

  const videoindex = video.order;

  const preveiw =
    videoindex - 1 >= 0
      ? `/cursos/${curso}/${videos.at(videoindex - 1)?.slug}`
      : `/cursos/${curso}`;

  const next = `/cursos/${curso}/${videos.at(videoindex + 1)?.slug}`;

  const handlePointerDown = (e: React.PointerEvent) => {
    gsap.to(e.currentTarget, {
      scale: 0.97,
      duration: 0.15,
      ease: "power1.out",
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const buttonConfig = [
    {
      ativa: btnPrev === "ativa",
      href: preveiw,
      IconeAntes: IoIosArrowBack,
      IconeDepois: null,
      iconeRef: iconeOne,
    },
    {
      ativa: btnPlaylist === "ativa",
      href: `/cursos/${curso}`,
      IconeAntes: FiBook,
      IconeDepois: null,
      iconeRef: iconeOne,
    },
    {
      ativa: btnCheckout === "ativa",
      href: next,
      IconeAntes: null,
      IconeDepois: FaCheck,
      iconeRef: iconeTwo,
    },
  ];
  return (
    <>
      {buttonConfig
        .filter(({ ativa }) => ativa)
        .map(({ href, IconeAntes, IconeDepois, iconeRef }, index) => (
          <Link
            key={index}
            href={href}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className={`flex items-center justify-center 
              max-md:ml-4 max-md:mr-2 py-2 md:px-5
          max-md:w-[90%] md:full
          text-sm cursor-pointer gap-3 border border-blue-1010  rounded-sm  ${styleButton} `}
          >
            {/* Ícone antes do texto, se existir */}
            {IconeAntes && (
              <>
                <span ref={iconeRef}>
                  <IconeAntes
                    className={`${styleIcone}  max-md:text-end max-md:ml-7 size-6 `}
                  />
                </span>
                <p className="flex-1 text-center">{text}</p>
              </>
            )}
            {/* Ícone depois do texto, se existir */}
            {IconeDepois && (
              <>
                <p className="flex-1 text-center">{text}</p>
                <span ref={iconeRef}>
                  <IconeDepois
                    className={`${styleIcone}  max-md:text-end max-md:mr-7 size-6 `}
                  />
                </span>
              </>
            )}
          </Link>
        ))}
    </>
  );
}
