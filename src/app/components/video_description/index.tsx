//type Paragraph = string | Paragraph[]
//const expurl = /https?:\/\/[^\s]+/g

export default function VideoDescription({
  description,
}: {
  description: string;
}) {
  //separando e removendo dados vazios
  const split = description
    .split("\n")
    .filter((paragraph) => paragraph != "" && !/^\s+$/.test(paragraph));

  //criando estrutura
  /*const struct = split.map(paragraph=>{
        if(expurl.test(paragraph)){ //apenas url
            return ["link"]
        }else{
            return paragraph
        }
    })

    console.log(struct)*/

  return (
    <div>
      {split.map((paragraph: string, index) => (
        <p key={index} className="p-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/*function ParagraphVideo({paragraph}: {paragraph:Paragraph}){

}*/
