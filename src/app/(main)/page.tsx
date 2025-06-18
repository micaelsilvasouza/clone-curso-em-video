import {cookies} from "next/headers"
import Btn from "@/componetes/Btn"

export default async function Page(){
  const cookie = await cookies()
  console.log("getting")
  const a = cookie.has("token")
  const b = cookie.getAll()

  return (
    <>
      <h1>{a ? "TRUE" : "FALSE"}</h1>
      {b.map(c=>(
        <p key={c.name}>
          {c.name} : {c.value}
        </p>
      ))}
      <Btn/>
    </>
)
}
