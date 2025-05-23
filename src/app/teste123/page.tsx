"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PropJson {
  id: number | string;
  slug: string;
  title: string;
  image: string;
  description: string;
  videos: string;
}

export default function Teste() {
  const [cursos, setCursos] = useState<PropJson[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // http://localhost:3000/db/courses.json
        const res = await fetch(
          "https://micaelsilvasouza.github.io/clone-curso-em-video/db/courses.json"
        );
        const data = await res.json();
        setCursos(data);
      } catch (err) {
        console.log("O ERRO:", err);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1>Teste</h1>
      <ul>
        {cursos.map((curso) => (
          <Image
            key={curso.id}
            src={curso.image}
            alt={curso.slug}
            width={200}
            height={200}
          />
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        blanditiis numquam distinctio tenetur eos asperiores rerum, dolor fugiat
        doloremque odit cupiditate, quae quos? Dolores quia voluptate
        consequatur, voluptatibus nihil assumenda.
      </p>
    </div>
  );
}
