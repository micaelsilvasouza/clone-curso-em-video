import Link from "next/link";

// Icons
import { LuBook } from "react-icons/lu";
import { ImInfo } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";

export default function Links({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <li
        className={`${
          isOpen
            ? "pointer-events-auto text-blue-950"
            : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in active:opacity-50"
        >
          <IoHomeOutline />
          Início
        </Link>
      </li>
      <li
        className={`${
          isOpen
            ? "pointer-events-auto text-blue-950"
            : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link
          href="/cursos"
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in active:opacity-50"
        >
          <LuBook />
          Cursos
        </Link>
      </li>
      <li
        className={`${
          isOpen
            ? "pointer-events-auto text-blue-950"
            : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link
          href="/sobre"
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in active:opacity-50"
        >
          <ImInfo />
          Sobre nós
        </Link>
      </li>
    </>
  );
}
