// Componentes
import Carteirinha from "../footerCarteirinha";
import Estudonauta from "../footerEstudonauta";
import ApoioInstitucional from "../footerApoioInstitucional";
import RedesSociais from "../footerRedesSociais";

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
        className="flex flex-col justify-center items-center pt-5 bg-[url(https://www.cursoemvideo.com/wp-content/uploads/2019/08/banner-estudonauta8.jpg)]
            bg-[85%_100%] bg-cover bg-no-repeat bg-fixed"
      >
        {/* Carteirinha Estudantil*/}
        <Carteirinha />

        {/* banner Estudonauta  */}
        <Estudonauta />
      </section>

      {/* Apoio Institucional */}
      <ApoioInstitucional />

      {/* Redes Sociais */}
      <RedesSociais />
    </footer>
  );
}
