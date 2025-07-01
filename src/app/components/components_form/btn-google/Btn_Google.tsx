"use client"
import { GoogleLogin, CredentialResponse } from "@react-oauth/google"
//import { FcGoogle } from "react-icons/fc";
import {saveToken} from "@/actions/actions_cookies"
import { useRouter } from "next/navigation";


interface PropsBtnGoogle{
  //textBTN: string
  setMessage: (value: string)=>void
  setNotification: (value: boolean)=>void
  setMessageType: (value: "sucesso" | "erro" | "aviso")=>void 
}

export default function Btn_Google({ /*textBTN,*/ setMessage, setNotification, setMessageType }: PropsBtnGoogle) {
  const router = useRouter()

  //Fazer o login
  const login = async (response: CredentialResponse)=>{
    const token = response.credential //token do google

    //Enviado para o backend
    const data = await fetch("https://backend-cursoemvideo.onrender.com/user/login/google", {
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({googletoken: token})
    })

    const res = await data.json()

    //Validando respossta
    if(res.token){
      saveToken(res.token)

      setNotification(true)
      setMessage(res.message)
      setMessageType("sucesso")

      router.push("/minha-conta")
    }else{
      //exibir as mensagens de aviso ou erro
      console.log(res)
      setNotification(true)
      setMessage("Não foi possivel fazer login com o Google")
      setMessageType("erro")
    }
  }

  return (
        <>  
        <GoogleLogin
          onSuccess={login}
          text="signin"
          size="large"
          shape="rectangular"
          width={400}
          use_fedcm_for_button={false}
          use_fedcm_for_prompt={false}
        />
        
        {/* Para usar o bottão customizado precisa mudar no backend
        <button
          onClick={()=>{googleLogin()}}
          className=" w-full flex items-center justify-center gap-2 bg-gray-100 py-3 px-20 rounded-sm mx-auto cursor-pointer
        hover:bg-gray-800 hover:text-white transition-colors ease-in"
        >
          <FcGoogle size={25} />
          {textBTN}
        </button>*/}
        </>
  );
}