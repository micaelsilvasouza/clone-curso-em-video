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
      className={` active:text-black/50 p-3 rounded-4xl active:bg-blue-500 mb-5 ${styles}`}
      type="button"
      onClick={clickFunction} // Passando a função diretamente
    >
      {title}
    </button>
  );
}
