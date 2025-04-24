interface ButtonProp{
    title: string
}

export default function Button({title}: ButtonProp){
    return <button type="button">{title}</button>
}