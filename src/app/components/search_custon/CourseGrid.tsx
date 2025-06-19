"use client";

import Link from "next/link";
import Img_custon from "../img_custon";
import gsap from "gsap";
import { useRef } from "react";

type Course = {
  id: string | number;
  slug: string;
  image: string;
  title: string;
  description: string;
};

type PropCourses = {
  courses: Course;
};

export default function CourseGrid({ courses }: PropCourses) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleHoverIn = () => {
    gsap.to(cardRef.current, {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      key={courses.id}
      className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] h-full mb-4"
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <div className="w-full">
        <Link href={`/cursos/${courses.slug}`}>
          <Img_custon img={courses.image} alt={courses.slug} width={500} />
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link href={`/cursos/${courses.slug}`}>
          <h2 className="font-medium text-xl mb-2 text-black">
            {courses.title}
          </h2>
        </Link>
        <p className="text-gray-700 text-base">
          {courses.description.slice(0, 101) + "[...]"}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/cursos/${courses.slug}`}>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Veja mais
          </span>
        </Link>
      </div>
    </div>
  );
}
