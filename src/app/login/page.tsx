// Importações dos componentes
import FormLogin from "../components/form_pastas/form_login";
import Img_custon from "../components/img_custon";
import Navbar from "../components/layout/header_pastas/Navbar";

export default function Login() {
  return (
    <div className="bg-[url(/image/login.jpg)] bg-no-repeat bg-[60%_80%] bg-cover h-dvh pl-5 pt-5">
      <Navbar
        style="bg-transparent text-white"
        logo="logoWhite.png"
        styleHamburguer="bg-white"
        styleLinks="text-white"
      />
      <main className="md:h-full flex px-5 pt-40 max-[500px]:pt-10">
        <section
          className={`bg-white px-5 py-10 rounded-3xl w-[500px] md:h-[500px]`}
        >
          <div>
            <Img_custon
              img="logoBlue.png"
              alt="logo azul do curso em video"
              width={200}
              height={200}
            />
          </div>
          <FormLogin />
        </section>
      </main>
    </div>
  );
}
