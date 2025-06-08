export default async function ErrorPage({params,
}: {
  params: Promise<{ error: string }>
}){
  const { error } = await params
  
  return (
    <>
    lalalllaalallallaalallalalal
      <h1>Ocorreu um error:</h1>
      <p>{error}</p>
    </>
  )
}
