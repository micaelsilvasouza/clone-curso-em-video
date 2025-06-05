import Link from "next/link";
import Img_custon from "../img_custon";

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
  return (
    <div
      key={courses.id}
      className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 w-full max-sm:w-[300px] mb-4"
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
