interface ButtonProp {
  title: string;
  clickFunction: () => void;
}

export default function Button({ title, clickFunction }: ButtonProp) {
  return (
    <button
      className={`bg-blue-600 text-white active:text-black/50 p-3 rounded-4xl active:bg-blue-500 mb-5`}
      type="button"
      onClick={clickFunction} // Passando a função diretamente
    >
      {title}
    </button>
  );
}
