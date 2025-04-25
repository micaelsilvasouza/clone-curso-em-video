export default function Input({name,title,type}: {name: string, title: string, type: string}){
    return(
        <div>
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name}/>
        </div>
    )
}