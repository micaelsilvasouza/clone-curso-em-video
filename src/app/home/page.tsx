import { cookies } from "next/headers"


export default async function Page(){
  const cookie = await cookies()
  
  cookie.set("token", "TokeNoCool")

  const a = cookie.has("token")
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{a ? "token" : "kionko"}</p>
    </>
  )
}
