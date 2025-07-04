// Componentes
import Image from "next/image";
import { MdSmartDisplay } from "react-icons/md";

export default function Cards({ card, itemKey }) {
  //    ┌── protocolo (opcional) ──┐┌─ www. (opc.) ┐┌── domínio ──┐┌ caminho opcional ┐
  const linkRegex =
    /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/gi;
  // pegar o caminho da url sem http ou https .com .br
  const caminhoURL = /[a-zA-Z0-9.-]+(?:\/[^\s]*)?/;
  // Extrai links
  const urls = [...card.description.matchAll(linkRegex) && ...card.description.matchAll(caminhoURL)].map((m) => m[0])

  // Remove links do texto
  const textoLimpo = card.description
    .replace(linkRegex, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  urls.map((url) => {
    const match = url.match(caminhoURL);
    const remove = url.replace(match);
    return match ? remove : "";
  });

  return (
    <section className="relative">
      {/* Checkpoint da timeline (bolinha lateral) */}
      <div className="absolute md:-left-[55px] max-md:-left-3 top-25 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

      {/* Card */}
      <article className="cardCurso bg-gray-800 text-white mx-2 flex gap-5 my-3 rounded-xl max-md:pb-10 max-md:flex-col">
        {/* Imagem */}
        <div className="flex flex-1 items-center justify-around rounded-2xl relative">
          <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={300}
            className="flex flex-1 cursor-pointer object-cover"
          />
        </div>

        {/* Descrição */}
        <div className="flex flex-1 flex-col items-center max-md:pl-5 justify-center relative">
          <h2 className="text-xl my-5 w-full">{card.title}</h2>

          <p className="w-full text-gray-300 text-sm max-sm:line-clamp-3">
            {textoLimpo}
          </p>

          {/* Lista de links (opcional) */}
          {urls.length > 0 && (
            <ul className="text-xs text-blue-400 mt-2 list-disc ml-4">
              {urls.map((link, i) => (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botão play */}
        <div className="cursor-pointer flex justify-center items-center md:pr-10">
          <MdSmartDisplay size={30} className="cursor-pointer" />
        </div>
      </article>
    </section>
  );
}
