import { cookies } from "next/headers"
"use client"

export default async function Page(){
  const cookie = await cookies()
  
  const a = cookie.has("token")

  const save = ()=>{
    alert("mapa")
  }
  
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{a ? "token" : "kionko"}</p>
    <button onClick={save}>Save</button>
    </>
  )
}
