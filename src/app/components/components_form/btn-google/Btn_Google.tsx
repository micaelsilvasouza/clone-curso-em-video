import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Btn_Google() {
  return (
    <button
      className=" w-full flex items-center justify-center gap-2 bg-gray-100 py-3 px-20 rounded-sm mx-auto cursor-pointer
     hover:bg-gray-800 hover:text-white transition-colors ease-in"
    >
      <FcGoogle size={25} />
      <Link href={`#`}>Entrar com o Google</Link>
    </button>
  );
}
