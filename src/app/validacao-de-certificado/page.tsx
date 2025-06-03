import BannerRotaHeader from "../components/banner_rota_header";

import { PiCertificateBold } from "react-icons/pi"

export default function ValidacaoDeCertificado(){
  return(
    <main>
      <BannerRotaHeader nomeRota="Validação de Certificado"/>
      <section className="text-center p-5">
        <PiCertificateBold size={80} className="block mx-auto my-5" />
        <p>Digite o código do certificado no formulário abaixo para verificar sua validade</p>
      </section>
    </main>
  )
}
