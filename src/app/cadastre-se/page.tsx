import Img from "../components/layout/img";
import FormCadastreSe from "../components/forms/form_cadastre_se";
import styles from "./styles.module.css";

export default function Cadastre_se() {
  return (
    <main>
      <section className={styles.conteiner_form}>
        <div style={{ width: "200px" }}>
          <Img
            img="logoBlue.png"
            alt="Logo azul do curso em video"
            width={100}
            height={100}
          />
        </div>
        <FormCadastreSe />
      </section>
    </main>
  );
}
