"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Certificate() {
  const bloco1Ref = useRef<HTMLDivElement>(null);
  const bloco2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(bloco1Ref.current, { y: 0 }, { y: "-100%" });
    gsap.fromTo(bloco2Ref.current, { y: 0 }, { y: "-100%", delay: 0.1 });
  });

  return (
    <div className="h-dvh w-dvw bg-white text-white flex flex-col items-center justify-center">
      {/* barras iniciais */}
      <div className=" w-full h-dvh absolute top-0 flex">
        <div className="bg-black h-full w-full" ref={bloco1Ref}></div>
        <div className="bg-black h-full w-full" ref={bloco2Ref}></div>
      </div>
      {/* <div className=" h-100  rounded-[50px] w-100 bg-white">
        <div
          className="bg-blue-1010 w-[50%] h-full rounded-l-4xl inline-block"
          ref={bloco1Ref}
        ></div>
        <div
          className="bg-blue-800 w-[50%] h-full rounded-r-4xl inline-block"
          ref={bloco2Ref}
        ></div>
      </div> */}
      {/* <video src="/intro.mp4" autoPlay muted controls ref={introRef}></video> */}
    </div>
  );
}
