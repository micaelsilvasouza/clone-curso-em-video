import BannerRotaHeader from "@/app/components/banner_rota_header";
import Img_custon from "@/app/components/img_custon";

export default function SenhaPerdida() {
  return (
    <main>
      <BannerRotaHeader titulo="Senha perdida" nomeRota="Minha Conta" />
      <section className="md:flex max-md:flex-col max-w-[1200px]   mx-auto py-10 gap-3">
        <div className="flex-1 flex max-md:justify-center">
          <Img_custon
            img="Reset password-bro.svg"
            alt="Imagem de reset de senha"
            width={500}
          />
        </div>

        <div className="p-5 flex-1 flex flex-col items-center justify-center">
          <p className="leading-8">
            <strong className="text-black/80 font-medium">
              Perdeu sua senha?
            </strong>{" "}
            Digite seu{" "}
            <strong className="text-black/80 font-medium">
              nome de usuário
            </strong>{" "}
            ou{" "}
            <strong className="text-black/80 font-medium">
              endereço de e-mail
            </strong>
            . Você receberá um{" "}
            <strong className="text-black/80 font-medium">
              link por e-mail
            </strong>{" "}
            para criar uma nova senha.
          </p>

          <form className="my-10 mx-auto w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-black/80">
                Nome do usuário ou e-mail{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail?"
                className="border border-black/80 rounded-sm px-3 py-2"
              />

              <button className="py-2 px-4 text-sm bg-blue-700 text-white rounded-lg">
                Redefinir senha
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
