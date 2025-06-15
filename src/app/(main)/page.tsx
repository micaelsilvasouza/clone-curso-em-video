"use client"

export default function Page(){
  const cookie = await cookies()

  const save = ()=>{
    alert("mapa")
  }
  
  return (
    <>
    <h1>Usando cookies</h1>
    <button formAction={save}>Save</button>
    </>
  )
}
