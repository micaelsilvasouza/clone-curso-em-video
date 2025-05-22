import Link from "next/link";
import { CiUser } from "react-icons/ci";

export default function Links({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <li
        className={`${
          isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link href="/cursos">Cursos</Link>
      </li>
      <li
        className={`${
          isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link href="/sobre">Sobre</Link>
      </li>
      <li
        className={`${
          isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
        }`}
      >
        <Link href="/login" className="flex items-center gap-1">
          <CiUser />
          Login
        </Link>
      </li>
      <li
        className={`${
          isOpen ? "pointer-events-auto" : "md:[500px]:pointer-events-none"
        } flex gap-1`}
      >
        <Link href="/cadastre-se">Cadastre-se</Link>
      </li>
    </>
  );
}
