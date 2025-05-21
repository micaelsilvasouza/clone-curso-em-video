import BannerRotaHeader from "../components/BannerRotaHeader";
import BlocoAcesso from "../components/BlocoAcesso";

export default function MyAccount() {
  return (
    <main className="bg-[#F2FAFC] container">
      <BannerRotaHeader nomeRota="Minha conta" />

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-4">
        <BlocoAcesso
          name="Meus Cursos"
          icon="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
        />
        <BlocoAcesso
          name="Comprar créditos para certificado"
          icon="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
        />
      </div>
    </main>
  );
}
