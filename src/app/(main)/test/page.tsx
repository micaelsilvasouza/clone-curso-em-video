export default async function Test(){
  const data = await fetch("/rota")
  const {message} = await data.json()
  return (
    <h1>{message}</h1>
  )
}
