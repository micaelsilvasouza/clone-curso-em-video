import FormLogin from "../components/forms/form_login";
import Img from "../components/layout/img";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <div>
      <main>
        <section className={styles.conteiner_form}>
          <div style={{ width: "200px" }}>
            <Img img="logoBlue.png" alt="logo azul do curso em video" />
          </div>
          <FormLogin />
        </section>
      </main>
    </div>
  );
}
