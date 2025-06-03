import BannerRotaHeader from "../components/banner_rota_header";
import InputForm from "@/app/components/components_form/InputForm"
import ButtonForm from "@/app/components/components_form/ButtonForm"

import { PiCertificate } from "react-icons/pi"

export default function ValidacaoDeCertificado(){
  return(
    <main>
      <BannerRotaHeader nomeRota="Validação de Certificado"/>
      <section className="text-center p-5">
        <PiCertificate size={80} className="block mx-auto my-5" />
        <p>Digite o código do certificado no formulário abaixo para verificar sua validade</p>
        <div>
         <InputForm
          name="code"
          label="Código do Certificado"
          placeholder="Ex: 1a2e34f537"
          type="text"
          changeFunction={()=>{}}
         />
          <ButtonForm title="Validar" clickFunction={()=>{}}/>
        </div>

        
      </section>
    </main>
  )
}
