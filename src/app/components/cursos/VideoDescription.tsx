
import Link from "next/link";

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
    return ( //retorna sem os links normais
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
  const exp = /(https?:\/\/[^\s]+)/g //regexp para urls
  const separe = paragraph.split(exp) //separa as url dos textos normais

  return (
    <>
      {separe.map((item, index)=>{
        if(exp.test(item)){
          return <Link 
                    className="text-blue-600 hover:underline"
                    key={index} 
                    href={item} 
                    target="_blank"
                  >
                    {item}
                  </Link>
        }else{
          return item
        }
      })}
    </>
  )
}
