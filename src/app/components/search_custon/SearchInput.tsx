"use client";

import { CiSearch } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { useClickOutside } from "../hooks/useClickOutside";

type Props = {
  busca: string;
  setBusca: (value: string) => void;
  clickSearch: boolean;
  setClickSearch: (value: boolean) => void;
};

export default function SearchInput({
  busca,
  setBusca,
  clickSearch,
  setClickSearch,
}: Props) {
  const topRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchInput = useClickOutside(() => setClickSearch(false));

  useGSAP(() => {
    const show = clickSearch;
    const duration = 0.3;

    gsap.to(topRef.current, { width: show ? "100%" : 0, duration });
    gsap.to(rightRef.current, { height: show ? "100%" : 0, duration });
    gsap.to(bottomRef.current, { width: show ? "100%" : 0, duration });
    gsap.to(leftRef.current, { height: show ? "100%" : 0, duration });

    gsap.to(containerRef.current, {
      opacity: show ? 1 : 0,
      duration,
      stagger: show ? 0.15 : 0,
    });
  }, [clickSearch]);

  return (
    <div ref={searchInput} className="relative w-80 mt-4 rounded-2xl">
      <div
        className={`flex items-center justify-center border-b ${
          clickSearch ? "border-transparent" : "border-blue-700/20"
        }`}
      >
        <label
          htmlFor="idSearch"
          onClick={() => setClickSearch(!clickSearch)}
          className={`${clickSearch ? "pl-2" : "pl-35"}`}
        >
          <CiSearch
            className="text-blue-700 text-xl cursor-pointer transition ease-in"
            size={25}
          />
        </label>

        <input
          type="text"
          id="idSearch"
          placeholder="Pesquisa..."
          className={`w-full p-2 outline-none rounded-xl ${
            clickSearch ? "opacity-100" : "opacity-0"
          }`}
          onChange={(e) => setBusca(e.target.value)}
          value={busca}
        />
      </div>
      <div id="containerRef" ref={containerRef}>
        {/* Bordas */}
        <span
          className="absolute top-0 left-0 h-0.5 bg-blue-600 rounded-full"
          ref={topRef}
        />
        <span
          className="absolute top-0 right-0 w-0.5 bg-blue-600 rounded-full"
          ref={rightRef}
        />
        <span
          className="absolute bottom-0 right-0 h-0.5 bg-blue-600 rounded-full"
          ref={bottomRef}
        />
        <span
          className="absolute bottom-0 left-0 w-0.5 bg-blue-600 rounded-full"
          ref={leftRef}
        />
      </div>
    </div>
  );
}
