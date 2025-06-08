export default async function ErrorPage({params,
}: {
  params: Promise<{ error: string }>
}){
  const { error } = await params
  
  return (
    <>
      <h1>Ocorreu um error:</h1>
      <p>{error}</p>
      <p>Retorne para a pagina inicial e tente novamente mais tarde</p>
      <p>Descupe o incomodo</p>
    </>
  )
}
