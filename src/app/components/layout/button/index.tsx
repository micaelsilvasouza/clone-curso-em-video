import styles from "./style.module.css"

interface ButtonProp{
    title: string
}

export default function Button({title}: ButtonProp){
    return <button className={styles.button_form} type="button">{title}</button>
}