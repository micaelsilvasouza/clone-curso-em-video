import { cookies } from "next/headers"


export default async function Page(){
  const cookie = await cookies()
  
  const a = cookie.has("token")
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{a ? "token" : "kionko"}</p>
    <button>Save</button>
    </>
  )
}
