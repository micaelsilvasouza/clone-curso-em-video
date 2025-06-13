interface PropsTextBox{
  Icon: React.ElementType
  title: string
  paragraph: string
}

export default function TextBox({Icon, title, paragraph}: PropsTextBox){
  return (
    <div>
      <Icon />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  )
}
