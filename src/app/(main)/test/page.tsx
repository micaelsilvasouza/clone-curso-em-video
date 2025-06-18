export default async function Test(){
  const men = await (await fetch("/rota")).json()
  return (
    <h1>{men.message}</h1>
  )
}
