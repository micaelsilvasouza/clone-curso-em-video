"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface Props {
  clickBook: boolean;
}

export default function Xfechamento({ clickBook }: Props) {
  const tl = useRef<gsap.core.Timeline | null>(null); // timeline persistente

  useGSAP(() => {
    // Criar timeline só uma vez
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        ".bar-01",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 0.5, stagger: 0.5 }
      )
      .fromTo(
        ".bar-02",
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0, duration: 1, stagger: 0.5 },
        "<"
      )
      .fromTo(
        ".bar-03",
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: 1, stagger: 0.5 },
        "<"
      )
      .fromTo(
        ".bar-04",
        { y: 0, opacity: 1 },
        { y: -50, opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
  }, []);

  useGSAP(() => {
    if (!tl.current) return;

    if (clickBook) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
  }, [clickBook]);

  return null;
}
