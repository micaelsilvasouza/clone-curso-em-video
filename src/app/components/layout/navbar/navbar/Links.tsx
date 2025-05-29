import Link from "next/link";

// Icons
import { CiUser } from "react-icons/ci";
import { LuBook } from "react-icons/lu";
import { ImInfo } from "react-icons/im";
import { PiUserList } from "react-icons/pi";

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
          href="/cursos"
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in"
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
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in"
        >
          <ImInfo />
          Sobre
        </Link>
      </li>
      <li
        className={`${
          isOpen
            ? "pointer-events-auto text-blue-950"
            : "md:[500px]:pointer-events-none"
        }`}
      >
        <Link
          href="/login"
          className="flex items-center gap-1 hover:border-b hover:border-sky-600 border-b border-transparent transition ease-in"
        >
          <CiUser size={20} />
          Login
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
          href="/cadastre-se"
          className="
          flex items-center 
          gap-1 
          hover:border-b hover:border-sky-600 
          border-b border-transparent 
          transition ease-in
          "
        >
          <PiUserList size={25} />
          Cadastre-se
        </Link>
      </li>
    </>
  );
}
