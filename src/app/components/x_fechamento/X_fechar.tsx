import AnimaFechamento from "./AnimaFechamento";

interface Props {
  setIsOpen: (param: boolean) => void;
  isOpen: boolean;
}

export default function X_fechar({ setIsOpen, isOpen }: Props) {
  // function handleClick() {
  //   setAtivo((prev) => !prev); // alterna animação do X
  //   fecharMenu(); // fecha o menu principal
  // }

  return (
    <section
      className="w-30 h-22 flex justify-end cursor-pointer  z-10 ml-15"
      onClick={() => setIsOpen(isOpen)}
    >
      {/* passa o estado 'ativo' para a animação */}
      <AnimaFechamento aberto={!isOpen} />

      <article className="relative container">
        <div className="w-0.5 h-6 bg-blue-500 absolute right-13 transform rotate-45 translate-y-0 bar-01"></div>
        <div className="w-0.5 h-6 bg-blue-500 absolute right-20 transform -rotate-45 translate-y-0 bar-02"></div>
        <div className="w-0.5 h-6 bg-blue-500 absolute right-13 top-7 transform -rotate-45 bar-03"></div>
        <div className="w-0.5 h-6 bg-blue-500 absolute right-20 top-7 transform rotate-45 bar-04"></div>
      </article>
    </section>
  );
}
