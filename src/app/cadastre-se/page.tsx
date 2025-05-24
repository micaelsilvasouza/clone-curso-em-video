import Img_custon from "../components/img_custon";
import FormCadastreSe from "../components/components_form/FormCadastreSe";
import styles from "./styles.module.css";

export default function Cadastre_se() {
  return (
    <main>
      <section className={styles.conteiner_form}>
        <div style={{ width: "200px" }}>
          <Img_custon
            img="logoBlue.png"
            alt="Logo azul do curso em video"
            width={100}
          />
        </div>
        <FormCadastreSe />
      </section>
    </main>
  );
}
