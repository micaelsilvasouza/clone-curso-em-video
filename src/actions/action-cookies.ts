"use server"
import {cookies} from "next/headers"
import {redirect} from "next/navigation"

export async function saveCookie(token: string){
  const cookie = await cookies()
  console.log("setting")
  cookie.set("token", token)
  redirect("/test")
}
