// Componentes
import Image from "next/image";
import { MdSmartDisplay } from "react-icons/md";

type cardAPI = {
  description: string;
  image: string;
  title: string;
};

type cardProps = {
  cardAPI: cardAPI;
};

export default function Cards({ cardAPI }: cardProps) {
  //    ┌── protocolo (opcional) ──┐┌─ www. (opc.) ┐┌── domínio ──┐┌ caminho opcional ┐
  const linkRegex =
    /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/gi;
  // pegar o caminho da url sem http ou https .com .br
  const caminhoURL = /[a-zA-Z0-9.-]+(?:\/[^\s]*)?/;
  // Extrai links
  const urls = [...cardAPI.description.matchAll(linkRegex)];

  // Remove links do texto
  const textoLimpo = cardAPI.description
    .replace(linkRegex, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  urls.map((urlMatch) => {
    const matchedString = urlMatch[0];
    const match = matchedString.match(caminhoURL);
    const remove = match ? matchedString.replace(match[0], "") : "";
    return match ? remove : "";
  });

  return (
    <section className="relative">
      {/* Checkpoint da timeline (bolinha lateral) */}
      <div className="absolute md:-left-[55px] max-md:-left-3 top-25 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

      {/* cardAPI */}
      <article className="cardAPICurso bg-gray-800 text-white mx-2 flex gap-5 my-3 rounded-xl max-md:pb-10 max-md:flex-col">
        {/* Imagem */}
        <div className="flex flex-1 items-center justify-around rounded-2xl relative">
          <Image
            src={cardAPI.image}
            alt={cardAPI.title}
            width={300}
            height={300}
            className="flex flex-1 cursor-pointer object-cover"
          />
        </div>

        {/* Descrição */}
        <div className="flex flex-1 flex-col items-center max-md:pl-5 justify-center relative">
          <h2 className="text-xl my-5 w-full">{cardAPI.title}</h2>

          <p className="w-full text-gray-300 text-sm max-sm:line-clamp-3">
            {textoLimpo}
          </p>

          {/* Lista de links (opcional) */}
          {urls.length > 0 && (
            <ul className="text-xs text-blue-400 mt-2 list-disc ml-4">
              {urls.map((linkMatch, i) => {
                const link = linkMatch[0];
                return (
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
                );
              })}
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
