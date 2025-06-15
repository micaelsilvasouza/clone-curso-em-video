//import { cookies } from "next/headers"


export default async function Page(){

  const a = false //cookie.has("token")
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{a ? "token" : "kionko"}</p>
    <button>Save</button>
    </>
  )
}
