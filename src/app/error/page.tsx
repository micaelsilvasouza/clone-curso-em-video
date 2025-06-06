import { type NextRequest } from 'next/server'
 

export function GET(request: NextRequest){
  const searchParams = request.nextUrl.searchParams
  const error = searchParams.get("error")

  console.log(error)
  
  return (
    <>
      <h1>Ocorreu um error:</h1>
      <p>{error}</p>
    </>
  )
}
