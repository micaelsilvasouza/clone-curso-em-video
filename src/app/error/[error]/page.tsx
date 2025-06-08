export default async function ErrorPage({params,
}: {
  params: Promise<{ error: string }>
}){
  const { error } = await params
  
  return (
    <>
      <h1>Deu erro nessa porra:</h1>
      <p>{error}</p>
    </>
  )
}
