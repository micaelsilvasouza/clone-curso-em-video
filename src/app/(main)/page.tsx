'use server'

import { cookies } from "next/headers"


export default async function Page(){
  const cookie = await cookies()

  const save = ()=>{
     alert("TokeNoCool")
  }

  const a = cookie.has("token")
  return (
    <>
    <h1>Usando cookies</h1>
    <p>{a ? "token" : "kionko"}</p>
    <button onClick={save}>Save</button>
    </>
  )
}
