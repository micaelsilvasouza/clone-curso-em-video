// Importações dos componentes
import FormLogin from "../components/components_form/FormLogin";
import Img_custon from "../components/img_custon";
import Navbar from "../components/layout/navbar";
import {redirect} from "next/navigation"
import {getDataWidhToken} from "@/actions/actions_cookies"

export default async function Login() {
  const data = await getDataWidhToken()
  
  if(data != null && data != undefined){
    redirect("/minha-conta")
  }

  return (
    <div className="bg-[url(/image/login.jpg)] bg-no-repeat bg-[60%_80%] bg-cover min-h-dvh pl-5 py-5">
      <Navbar
        style="bg-transparent text-white"
        logo="logoWhite.png"
        styleHamburguer="bg-white"
        styleLinks="text-white"
        styleBotao_1="bg-white text-black"
        corIcone="text-sky-300"
      />
      <main className="md:h-full flex px-5 pt-40 max-[500px]:pt-10 2xl:justify-center">
        <section className={`bg-white  px-5 pb-5 pt-10 rounded-4xl w-[500px]`}>
          <div>
            <Img_custon
              img="logoBlue.png"
              alt="logo azul do curso em video"
              width={200}
            />
          </div>        
          <FormLogin />
        </section>
      </main>
    </div>
  );
}
