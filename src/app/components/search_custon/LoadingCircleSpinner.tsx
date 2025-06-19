"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function LoadingCircleSpinner() {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(divRef.current, {
      rotation: 360,
      duration: 1.5,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex justify-center items-center py-30 rounded-sm">
      <div
        className="w-10 h-10 rounded-full border-2 border-t-transparent border-blue-700 will-change-transform"
        ref={divRef}
      />
    </div>
  );
}
