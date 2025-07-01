"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimacaoCards() {
  const cards = gsap.utils.toArray(".cardCurso") as HTMLElement[];

  useGSAP(() => {
    const timeLine = document.querySelector(".timeLine") as HTMLElement;
    const alturaFinal = timeLine.scrollHeight;

    // Animação da linha do tempo
    gsap.fromTo(
      ".timeLine",
      { height: 0 },
      {
        height: alturaFinal * 1.8,
        markers: true,
        scrollTrigger: {
          trigger: ".linha-tempo",
          start: "28% 60%",
          end: "bottom bottom",
          markers: true,
          scrub: true,
        },
        ease: "none",
      }
    );

    // Anima os cards entrando em fade + slide
    cards.map((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          markers: true,
          scrollTrigger: {
            trigger: card,
            start: "center center",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          delay: index * 0.1,
        }
      );
    });
  }, []);
  return null;
}
