// Lib icones
import { IoIosArrowUp } from "react-icons/io";

// TypeScript
type PropButton = {
  isScrolled: boolean;
};

export default function BotaoScroll({ isScrolled }: PropButton) {
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed bottom-10 right-7 z-30 cursor-pointer text-3xl text-white bg-blue-700 rounded-full p-1  ${
          isScrolled ? "block" : "hidden"
        }`}
      >
        <IoIosArrowUp />
      </button>
    </>
  );
}
