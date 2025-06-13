import { cookies } from "next/headers"


export default async function Page(){
  const cookie = await cookies()
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{cookie.get("token")}</p>
    </>
  )
}
