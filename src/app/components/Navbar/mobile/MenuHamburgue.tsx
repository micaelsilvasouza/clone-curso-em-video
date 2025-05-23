type PropHamburguer = {
  isOpen: boolean;
  isScrolled: boolean;
  stylesBar?: string;
  setIsOpen: (param: boolean) => void;
};

export default function MenuHamburgue({
  isOpen,
  isScrolled,
  stylesBar = "bg-blue-950",
  setIsOpen,
}: PropHamburguer) {
  return (
    <>
      <button
        className={`fixed right-0 w-6 h-6 z-20 cursor-pointer md:hidden ${
          isOpen ? " mx-10 opacity-0 pointer-events-none" : "-translate-x-full"
        } transition-all duration-300 ${
          isScrolled ? " transition-all duration-300 hidden" : "block"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrindo Navbar"
      >
        <span
          className={`absolute left-0 top-1/2 w-7 h-[3px] rounded-4xl ${stylesBar}  transform transition duration-300  ${
            isOpen ? "rotate-45 h-1" : "-translate-y-2"
          }`}
        />

        <span
          className={`absolute left-0 top-1/2 w-7 h-[3px] rounded-4xl ${stylesBar} transition duration-300  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`absolute left-0 top-1/2 w-7 h-[3px] rounded-4xl ${stylesBar}  transform transition duration-300  ${
            isOpen ? "-rotate-45 h-1" : "translate-y-2"
          }`}
        />
      </button>
    </>
  );
}
