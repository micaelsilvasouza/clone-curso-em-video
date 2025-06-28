import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface ButtonProp {
  title: string;
  styles?: string;
  clickFunction: () => void;
}

export default function ButtonForm({
  title,
  styles = "bg-blue-600 text-white",
  clickFunction,
}: ButtonProp) {
  return (
    <button
      className={`
         active:text-black/50 p-3 rounded-sm active:bg-blue-500 mb-5 
         text-base font-light cursor-pointer shadow
          hover:text-blue-500 hover:bg-gray-800 transition-colors ease-in
          ${styles} ${inter.className}`}
      type="button"
      onClick={clickFunction} // Passando a função diretamente
    >
      {title}
    </button>
  );
}
