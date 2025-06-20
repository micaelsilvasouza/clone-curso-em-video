import {cookies} from "next/headers"

export default async function Test(){
  const cookie = await cookies()
  const token = cookie.get("token")
  return (
    <h1>{token?.value}</h1>
  )
}
