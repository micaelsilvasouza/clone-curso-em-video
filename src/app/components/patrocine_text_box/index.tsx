interface PropsTextBox{
  Icon: React.ElementType
  title: string
  paragraph: string
}

export default function TextBox({Icon, title, paragraph}: PropsTextBox){
  return (
    <div className="bg-white rounded-xl p-5 m-2 shadow-lg">
      <Icon className="text-4xl text-[#2727ff] m-2"/>
      <h1 className="text-2xl font-semibold p-2">{title}</h1>
      <p className="text-lg p-2">{paragraph}</p>
    </div>
  )
}
