"use client";

// Componentes
import BannerPaginaCima from "../components/banner_rota_header";
import Img_custon from "../components/img_custon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";

// Lib Next
import Link from "next/link";

export default function Cursos() {
  const [carregando, setCarregando] = useState(false);
  const [search, setSearch] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const [busca, setBusca] = useState("");

  type Courses = {
    id: string;
    slug: string;
    image: string;
    title: string;
    description: string;
  };

  const [filtrados, setFiltrados] = useState<Courses[]>([]);
  const [courses, setCourses] = useState<Courses[]>([]);

  const LoadingCircleSpinner = () => {
    return (
      <div className="flex justify-center items-center py-30 rounded-sm">
        <motion.div
          className="w-10 h-10 rounded-[50%] border-2 border-t-transparent border-blue-700 will-change-transform"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  };

  // Fazendo a requisição mais estado do carregamento
  useEffect(() => {
    setSearch(true);
    setCarregando(true);
    const fetchCourses = async () => {
      const data = await fetch(
        "https://filipe520.github.io/api-cursoEmVideo/db/courses.json"
      );
      setCourses(await data.json());
      setTimeout(() => {
        setCarregando(false);
      }, 500);
    };
    fetchCourses();
  }, []);

  // Atualiza os cursos filtrados conforme digita
  useEffect(() => {
    const termo = busca.toLowerCase();
    const filtrados = courses.filter((curso) =>
      curso.title.toLowerCase().includes(termo)
    );
    setFiltrados(filtrados);
  }, [busca, courses]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const bordas = {
    top: {
      hidden: { width: 0 },
      visible: {
        width: "100%",
        transition: { duration: 0.3 },
      },
    },
    right: {
      hidden: { height: 0 },
      visible: {
        height: "100%",
        transition: { duration: 0.3 },
      },
    },
    bottom: {
      hidden: { width: 0 },
      visible: {
        width: "100%",
        transition: { duration: 0.3 },
      },
    },
    left: {
      hidden: { height: 0 },
      visible: {
        height: "100%",
        transition: { duration: 0.3 },
      },
    },
  };

  return (
    <section className="text-black">
      <BannerPaginaCima nomeRota="Cursos" />
      {carregando ? (
        LoadingCircleSpinner()
      ) : (
        <article className="flex flex-col items-center justify-center">
          <div className={`${search ? "opacity-100" : "opacity-0"}`}>
            {/* INPUT DE PESQUISA */}
            <motion.div
              className="relative w-80 mt-4 rounded-2xl"
              initial="hidden"
              animate={`${clickSearch ? "visible" : "hidden"}`}
              variants={container}
            >
              <div
                className={`flex items-center justify-center border-b  ${
                  clickSearch ? "border-transparent" : "border-blue-700/20"
                }`}
              >
                <label
                  htmlFor="idSearch"
                  onClick={() => setClickSearch(!clickSearch)}
                  className={`${clickSearch ? "pl-2" : "pl-35"}`}
                >
                  <CiSearch
                    className={`text-blue-700 text-xl cursor-pointer transition ease-in`}
                    size={25}
                  />
                </label>
                <motion.input
                  type="text"
                  name="nameSearch"
                  id="idSearch"
                  placeholder="Pesquisa..."
                  className={`w-full p-2  outline-none rounded-xl ${
                    clickSearch ? "opacity-100" : "opacity-0"
                  }`}
                  onChange={(value) => setBusca(value.target.value)}
                />
              </div>
              {/* Bordas animadas com motion.div */}
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
          </div>
          {/* Resultado da pesquisa */}
          <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center max-w-[1500px]">
            {busca === ""
              ? ""
              : filtrados.map((curso) => (
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] mb-4"
                    key={curso.id}
                  >
                    <div className="w-full">
                      <Link href={`/cursos/${curso.slug}`}>
                        <Img_custon
                          img={curso.image}
                          alt={curso.slug}
                          width={500}
                        />
                      </Link>
                    </div>
                    <div className="px-6 py-4">
                      <Link href={`/cursos/${curso.slug}`}>
                        <h2 className="font-medium text-xl mb-2 text-black">
                          {curso.title}
                        </h2>
                      </Link>
                      <p className="text-gray-700 text-base">
                        {curso.description.slice(0, 101) + "[...]"}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <Link href={`/cursos/${curso.slug}`}>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Veja mais
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
          </section>
          {busca === "" && (
            <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center max-w-[1500px]">
              {courses.map((json) => (
                <div
                  key={json.id}
                  className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] mb-4"
                >
                  <div className="w-full">
                    <Link href={`/cursos/${json.slug}`}>
                      <Img_custon
                        img={json.image}
                        alt={json.slug}
                        width={500}
                      />
                    </Link>
                  </div>
                  <div className="px-6 py-4">
                    <Link href={`/cursos/${json.slug}`}>
                      <h2 className="font-medium text-xl mb-2 text-black">
                        {json.title}
                      </h2>
                    </Link>
                    <p className="text-gray-700 text-base">
                      {json.description.slice(0, 101) + "[...]"}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <Link href={`/cursos/${json.slug}`}>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Veja mais
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          )}
        </article>
      )}
    </section>
  );
}
