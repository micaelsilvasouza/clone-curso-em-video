// Componentes
import Img_custon from "../components/img_custon";
import FormCadastreSe from "../components/components_form/FormCadastreSe";
import Btn_Google from "../components/components_form/btn-google/Btn_Google";
// import Navbar from "../components/layout/navbar";

// Lib NextJS
import Link from "next/link";

export default function Cadastre_se() {
  return (
    <main className="min-sm:my-10 max-md:my-3 min-w-[350px] max-w-[600px] bg-white text-black mx-auto p-5  md:rounded-2xl min-sm:min-h-dvh">
      <div className="">
        <section className="pt-3">
          <Link href="/">
            <Img_custon
              img="logoBlue.png"
              alt="Logo azul do curso em video"
              width={170}
            />
          </Link>

          <h1 className="text-indigo-950 text-3xl font-[600] pt-5 pb-10">
            Matrícula Grátis
          </h1>
        </section>
        {/* Inputs + Botão do Formulário */}
        <FormCadastreSe stylesForm="flex flex-col gap-3" />
        <section>
          <div className="flex items-center justify-center my-6">
            <div className="h-px flex-1 bg-gradient-to-r from-black to-white/50" />
            <span className="px-3 text-sm font-semibold text-gray-500">ou</span>
            <div className="h-px flex-1 bg-gradient-to-l from-black to-white/50" />
          </div>
          <div className="pb-5">
            <Btn_Google textBTN="Registrar pelo Google" />
          </div>
        </section>
        {/* Texto de emissão dos certificados */}
        <section className="my-5">
          <p className="text-gray-800 text-base font-[400] w-[90%] text-justify my-0 mx-auto">
            Todos os cursos disponíveis na plataforma do Curso em Vídeo são
            <strong className="font-[600]"> gratuitos</strong>, porém a{" "}
            <strong className="font-[600]">EMISSÃO DE CERTIFICADOS</strong> é um{" "}
            <strong className="font-[600]">serviço pago</strong>, dependendo do
            pacote contratado.
          </p>
        </section>
      </div>
    </main>
  );
}
