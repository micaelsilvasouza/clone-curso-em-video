"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimacaoCards() {
  useGSAP(() => {
    const timeLine = document.querySelector(".timeLine") as HTMLElement;
    const alturaFinal = timeLine.scrollHeight;
    const cards = gsap.utils.toArray(".cardCurso") as HTMLElement[];

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
          // markers: true,
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
          scrollTrigger: {
            markers: true,
            trigger: card,
            start: "center 90%",
            end: "bottom bottom",
            toggleActions: "restart play none reverse",
          },
          duration: 0.6,
          delay: index * 0.1,
        }
      );
    });
  }, []);
  return null;
}
