type PropX = {
  isOpen: boolean;
  isScrolled: boolean;
  setIsOpen: (param: boolean) => void;
};

export default function XdoMenuAberto({
  isOpen,
  isScrolled,
  setIsOpen,
}: PropX) {
  return (
    <>
      <div
        className={`
          absolute top-0 left-0
           transition-opacity duration-300 ease-in z-5 bg-black/50 md:hidden
          ${
            isOpen
              ? "opacity-100 h-full w-full"
              : "opacity-0 pointer-events-none"
          }
           `}
      ></div>

      <button
        className={`fixed left-57 top-10 w-6 h-6 z-20 cursor-pointer md:hidden ${
          isOpen ? " ml-10 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrindo Navbar"
      >
        {/* Linha 1 */}
        <span
          className={`absolute left-0 top-1/2 w-7 h-[3px]  bg-blue-950 transform transition duration-300  ${
            isOpen ? "rotate-45 h-1" : "-translate-y-2"
          }`}
        />
        {/* Linha 1 */}
        <span
          className={`absolute left-0 top-1/2 w-7 h-[3px]  bg-blue-950 transform transition duration-300  ${
            isOpen ? "-rotate-45 h-1" : "-translate-y-2"
          }`}
        />
      </button>
    </>
  );
}
