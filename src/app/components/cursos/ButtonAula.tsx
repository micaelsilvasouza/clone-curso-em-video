"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { notFound } from "next/navigation";

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
  video: VideoApiProp;
  videos: VideosApiProp[];
  iconeLeft?: "ativa";
  iconeRight?: "ativa";
};

export default function ButtonAula({
  text,
  iconeLeft,
  iconeRight,
  video,
  videos,
  curso,
}: ButtonAulaProp) {
  const iconeOne = useRef<HTMLSpanElement>(null);
  const iconeTwo = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(iconeOne.current, {
      x: 100,
    });
  }, []);

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

  return (
    <>
      {iconeLeft === "ativa" && (
        <Link href={preveiw}>
          <button className="flex items-center justify-center gap-3 border border-blue-1010  px-5 rounded-sm">
            <span ref={iconeOne}>
              <IoIosArrowBack className="text-blue-1010" />
            </span>
            {text}
          </button>
        </Link>
      )}
      {iconeRight === "ativa" && (
        <Link href={next}>
          <button className="flex items-center justify-center gap-3 border border-blue-1010  px-5 rounded-sm w-70 ">
            {text}
            <span ref={iconeTwo}>
              <FaCheck className="text-blue-1010" />
            </span>
          </button>
        </Link>
      )}
    </>
  );
}
