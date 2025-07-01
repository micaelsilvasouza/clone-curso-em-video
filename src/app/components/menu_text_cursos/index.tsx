import { GiBookCover } from "react-icons/gi";

export default function MenuTextCursos() {
  return (
    <section className="absolute left-0 z-90 h-[calc(100%-118px)] w-5 bg-gray-800 rounded-e-lg">
      <section className="w-15 h-full relative">
        <section className=" right-0 absolute">
          <GiBookCover size={30} className="text-blue-500 cursor-pointer" />
        </section>
      </section>
    </section>
  );
}
