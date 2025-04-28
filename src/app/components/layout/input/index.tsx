import styles from "./styles.module.css"

interface InputProp {
    name: string, 
    title: string, 
    type: string
}

export default function Input({name,title,type}: InputProp){
    return(
        <div>
            <label className={styles.label_input} htmlFor={name}>{title}</label>
            <input className={styles.input_form} type={type} id={name} name={name} placeholder={title.toLocaleUpperCase()}/>
        </div>
    )
}