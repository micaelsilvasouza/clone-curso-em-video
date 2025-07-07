"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import VideoDescription from "@/app/components/cursos/VideoDescription";
import { RiArrowDownSLine } from "react-icons/ri";

type DropDownTextProp = {
  video: {
    description: string;
  };
};

export function DropDownText({ video }: DropDownTextProp) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Fecha se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  // Animação no Dropdown
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mq = gsap.matchMedia();
    if (open) {
      const fullHeight = containerRef.current?.scrollHeight;
      gsap.to(el, {
        height: fullHeight,
        duration: 0.7,
        ease: "power4.inOut",
        onComplete: () => {
          el.style.height = "auto"; // libera para crescimento natural
        },
      });
    } else {
      // Media-querie - Quando for 768 ou mais vai aplicar
      mq.add("(min-width: 768px)", () => {
        gsap.to(el, { height: 90, duration: 1 });
      });
      // Media-querie - Quando for chegar no máximo de 768px vai aplicar
      mq.add("(max-width: 768px)", () => {
        gsap.to(el, { height: 120, duration: 1 });
      });
    }
  }, [open]);

  return (
    <section className="space-y-2">
      <div
        ref={containerRef}
        className={` leading-8 overflow-hidden transition-all duration-100${
          open ? "" : "line-clamp-2 md:h-[100px] max-md:h-[120px]"
        }`}
      >
        <VideoDescription description={video.description} withLinks />
      </div>

      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        <RiArrowDownSLine
          size={30}
          className={`flex justify-end w-full text-blue-1010 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </section>
  );
}
