import { cookies } from "next/headers"


export default async function Page(){
  const cookie = await cookies()
  cookie.set("token", "TokeNoCool")
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{cookie.get("token")}</p>
    </>
  )
}
