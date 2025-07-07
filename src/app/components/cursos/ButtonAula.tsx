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
  return (
    <>
      {btnPrev === "ativa" && (
        <Link
          href={preveiw}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className={`flex items-center justify-center gap-3 border border-blue-1010  rounded-sm  ${styleButton} `}
        >
          <span ref={iconeOne}>
            <IoIosArrowBack className={`${styleIcone} size-6 `} />
          </span>
          {text}
        </Link>
      )}
      {btnPlaylist === "ativa" && (
        <Link
          href={`/cursos/${curso}`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className={`flex items-center justify-center gap-3 border border-blue-1010  rounded-sm ${styleButton}`}
        >
          <span ref={iconeOne}>
            <FiBook className={`${styleIcone} size-6`} />
          </span>
          {text}
        </Link>
      )}
      {btnCheckout === "ativa" && (
        <Link
          href={next}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className={`flex items-center justify-center gap-3 border border-blue-1010  rounded-sm ${styleButton}`}
        >
          {text}
          <span ref={iconeTwo}>
            <FaCheck className={`${styleIcone} size-6`} />
          </span>
        </Link>
      )}
    </>
  );
}
