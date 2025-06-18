"use client";

// Componentes
import BannerPaginaCima from "../components/banner_rota_header";
import LoadingCircleSpinner from "../components/search_custon/LoadingCircleSpinner";
import SearchInput from "../components/search_custon/SearchInput";
import CourseCard from "../components/search_custon/CourseCard";
import CourseGrid from "../components/search_custon/CourseGrid";

// Lib Next
import { useEffect, useState } from "react";

import { redirect } from 'next/navigation'

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

  // Fazendo a requisição mais estado do carregamento
  useEffect(() => {
    setSearch(true);
    setCarregando(true);
    const fetchCourses = async () => {
      const data = await fetch(
        "https://backend-cursoemvideo.onrender.com/courses"
      );

      if(data.status != 200){
        redirect("/error/fetch-error")
        return
      }

      
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

  return (
    <section className="text-black">
      <BannerPaginaCima nomeRota="Cursos" />
      {carregando ? (
        // LoadingCircleSpinne
        <LoadingCircleSpinner />
      ) : (
        <article className="flex flex-col items-center justify-center">
          <div className={`${search ? "opacity-100" : "opacity-0"}`}>
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
                  <CourseCard curso={curso} key={curso.id} />
                ))}
          </section>
          {busca === "" && (
            <section className="p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center max-w-[1500px]">
              {courses.map((courses) => (
                // Curso GRID principal
                <CourseGrid courses={courses} key={courses.id} />
              ))}
            </section>
          )}
        </article>
      )}
    </section>
  );
}
