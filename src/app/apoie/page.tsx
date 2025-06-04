import BannerRotaHeader from "../components/banner_rota_header";
import SejaApoiador from "../components/seja-apoiador";

export default function Apoie() {
  return (
    <div>
      <BannerRotaHeader nomeRota="Assine" titulo="Assine" />
      <div className="flex flex-col items-center justify-center px-1">
        <div className="mx-5">
          <SejaApoiador />
        </div>
        <section className="mb-10 md:px-5 px-3 max-h-[500px] w-full">
          <iframe
            src="https://www.youtube.com/embed/nxL2w9eRun4?si=iF3QrX-4OBeriEO_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl mx-auto aspect-video w-full max-w-[900px] "
          ></iframe>
        </section>
        <article>
          <h2>
            E toda semana teremos{" "}
            <span className="text-blue-700">conteúdos novos</span>.
          </h2>
        </article>
      </div>
    </div>
  );
}
