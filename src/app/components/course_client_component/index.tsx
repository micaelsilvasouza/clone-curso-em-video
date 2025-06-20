"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LoadingCircleSpinner from "../search_custon/LoadingCircleSpinner";
import SearchInput from "../search_custon/SearchInput";
import CourseCard from "../search_custon/CourseCard";
import CourseGrid from "../search_custon/CourseGrid";

export type Courses = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
};

export function CursosClientComponent({courses}: {courses:Courses[]}) {
  const [clickSearch, setClickSearch] = useState(false);
  const [busca, setBusca] = useState("");
  const [filtrados, setFiltrados] = useState<Courses[]>([]);

  // Atualiza os cursos filtrados conforme digita
  useEffect(() => {
    const termo = busca.toLowerCase();
    const filtrados = courses.filter((curso) =>
      curso.title.toLowerCase().includes(termo)
    );
    setFiltrados(filtrados);
  }, [busca, courses]);

  return(
    <>
        <article className="flex flex-col items-center justify-center">
            <div className="opacity-100">
            {/* INPUT DE PESQUISA */}
            <SearchInput
                busca={busca}
                clickSearch={clickSearch}
                setBusca={setBusca}
                setClickSearch={setClickSearch}
            />
            </div>
            {/* Resultado da pesquisa */}
            <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center max-w-[1500px]">
            {busca === ""
                ? ""
                : filtrados.map((curso) => (
                    // Curso Card depois da pesquisa
                    <div key={curso.id}>
                    <CourseCard curso={curso} />
                    </div>
                ))}
            </section>
            {busca === "" && (
            <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center max-w-[1500px]">
                {courses.map((courses) => (
                // Curso GRID principal
                <div key={courses.id}>
                    <CourseGrid courses={courses} />
                </div>
                ))}
            </section>
            )}
        </article>   
    </>
  )
}