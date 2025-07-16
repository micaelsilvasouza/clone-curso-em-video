"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

export default function AnimaFechamento({ aberto }: { aberto: boolean }) {
  const tl = useRef<gsap.core.Timeline | null>(null); // timeline persistente

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        ".bar-01",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 0.5 }
      )
      .fromTo(
        ".bar-02",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 0.5 },
        "<"
      )
      .fromTo(
        ".bar-03",
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: 0.5 },
        "<"
      )
      .fromTo(
        ".bar-04",
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: 0.5 },
        "<"
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (aberto) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [aberto]);

  return null;
}
