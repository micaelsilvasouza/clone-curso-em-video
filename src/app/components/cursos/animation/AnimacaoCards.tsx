"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimacaoCards() {
  const [alturaMobile, setAlturaMobile] = useState(false);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".cardCurso") as HTMLElement[];
    const timeLine = document.querySelector(".timeLine") as HTMLElement;

    const alturaContainer = timeLine?.offsetHeight || 600;
    const alturaFinal = alturaContainer * 0.9;
    const mobile = alturaContainer * 1.5;

    if (window.innerWidth <= 501) {
      setAlturaMobile(!alturaMobile);
    }

    // Mobile
    if (window.innerWidth <= 500) {
      // Animação da linha do tempo
      gsap.fromTo(
        ".timeLine",
        { height: 0 },
        {
          height: mobile,
          scrollTrigger: {
            trigger: ".linha-tempo",
            start: "20% 100%",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
          },
          ease: "none",
        }
      );
    }

    // Desktop
    if (window.innerWidth > 500) {
      // Animação da linha do tempo
      gsap.fromTo(
        ".timeLine",
        { height: 0 },
        {
          height: alturaFinal,
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
    }

    // Anima os cards entrando em fade + slide
    cards.map((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            // markers: true,
            trigger: card,
            start: "50% 100%",
            end: "95% 95%",
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
