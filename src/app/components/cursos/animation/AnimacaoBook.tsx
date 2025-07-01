import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimacaoBook({ clickBook }: { clickBook: boolean }) {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".animationText",
      { opacity: 0 },
      { opacity: 1, stagger: 2, delay: 1 }
    );

    if (clickBook) {
      tl.play();
    } else {
      tl.reverse();
    }

    gsap.fromTo(
      ".backdrop",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
      }
    );
  }, [clickBook]);
  return null;
}
