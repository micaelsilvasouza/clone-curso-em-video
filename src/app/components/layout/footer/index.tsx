// Componentes
import Carteirinha from "./Carteirinha";
import Estudonauta from "./Estudonauta";
import ApoioInstitucional from "./ApoioInstitucional";
import RedesSociais from "./RedesSociais";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section
        className="flex max-md:flex-col gap-5 px-5 md:h-[700px] justify-center items-center pt-5 bg-[url(https://www.cursoemvideo.com/wp-content/uploads/2019/08/banner-estudonauta8.jpg)]
            bg-[85%_100%] bg-cover bg-no-repeat bg-fixed"
      >
        {/* Carteirinha Estudantil*/}
        <Carteirinha />

        {/* banner Estudonauta  */}
        <Estudonauta />
      </section>
      <section className="min-xl:w-[1200px] mx-auto">
        {/* Apoio Institucional */}
        <ApoioInstitucional />

        {/* Redes Sociais */}
        <RedesSociais />
      </section>
    </footer>
  );
}
