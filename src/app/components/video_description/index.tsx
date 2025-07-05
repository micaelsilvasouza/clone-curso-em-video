//type Paragraph = string | Paragraph[]
//const expurl = /https?:\/\/[^\s]+/g

export default function VideoDescription({
  description,
  withLinks = false
}: {
  description: string,
  withLinks: boolean //determina se os links seram ativos ou não
}) {
  //separando e removendo dados vazios
  const split = description
    .split("\n")
    .filter((paragraph) => paragraph != "" && !/^\s+$/.test(paragraph));

  if(withLinks){ //retorna com os links funcionais
    return (
      <div>
        {split.map((paragraph: string, index) => (
          <p key={index} className="p-2">
            <TextWithLinks paragraph={paragraph}/>
          </p>
        ))}
      </div>
    );
  }else{
    return ( //retorna com os links normais
      <div>
        {split.map((paragraph: string, index) => (
          <p key={index} className="p-2">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }
  
}

function TextWithLinks({paragraph}: {paragraph:string}){
  return (
    <>
      <span>{paragraph}</span>
    </>
  )
}
