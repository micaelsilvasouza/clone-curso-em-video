import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonProp {
  title: string;
  styles?: string;
  clickFunction: () => void;
  animation: boolean;
}

export default function ButtonForm({
  title,
  styles = "bg-blue-600 text-white",
  clickFunction,
  animation,
}: ButtonProp) {
  useGSAP(() => {
    gsap.to("#brilho", {
      x: "200%",
      duration: 3,
      repeat: -1,
      ease: "power2.out",
      onRepeat: () => {
        gsap.set("#brilho", { x: "-100%" });
      },
    });
  }, [animation]);
  return (
    <button
      className={` relative overflow-hidden px-6 py-2 text-white  ${
        animation ? "bg-gradient-to-r from-blue-500 to-blue-800" : ""
      }
         active:text-black/50 p-3 rounded-sm active:bg-blue-500 mb-5 
         text-base font-light cursor-pointer shadow
          hover:text-blue-500 hover:bg-gray-800 transition-colors ease-in
          ${styles} ${inter.className}`}
      type="button"
      onClick={clickFunction} // Passando a função diretamente
    >
      <span
        id={animation ? "brilho" : ""}
        className={`${
          animation
            ? "absolute inset-0 opacity-30 bg-gradient-to-r from-blue-900 to-transparent transform -translate-x-full"
            : ""
        }`}
      ></span>
      {title}
    </button>
  );
}
