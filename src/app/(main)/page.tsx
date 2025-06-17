import {cookies} from "next/headers"
import Btn from "../../componentes/Btn"

export default async function Page(){
  const cookie = await cookies()

  const a = cookie.has("token")

  return (
    <>
      <h1>{a ? "TRUE" : "FALSE"}</h1>
      <Btn/>
    </>
)
}
