"use client";

import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

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
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const bordas = {
    top: {
      hidden: { width: 0 },
      visible: { width: "100%", transition: { duration: 0.3 } },
    },
    right: {
      hidden: { height: 0 },
      visible: { height: "100%", transition: { duration: 0.3 } },
    },
    bottom: {
      hidden: { width: 0 },
      visible: { width: "100%", transition: { duration: 0.3 } },
    },
    left: {
      hidden: { height: 0 },
      visible: { height: "100%", transition: { duration: 0.3 } },
    },
  };

  const searchInput = useClickOutside(() => setClickSearch(false));

  return (
    <motion.div
      ref={searchInput}
      className="relative w-80 mt-4 rounded-2xl"
      initial="hidden"
      animate={clickSearch ? "visible" : "hidden"}
      variants={container}
    >
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

        <motion.input
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
      {/* Bordas */}
      <motion.span
        className="absolute top-0 left-0 h-0.5 bg-blue-600 rounded-full"
        variants={bordas.top}
      />
      <motion.span
        className="absolute top-0 right-0 w-0.5 bg-blue-600 rounded-full"
        variants={bordas.right}
      />
      <motion.span
        className="absolute bottom-0 right-0 h-0.5 bg-blue-600 rounded-full"
        variants={bordas.bottom}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-0.5 bg-blue-600 rounded-full"
        variants={bordas.left}
      />
    </motion.div>
  );
}
