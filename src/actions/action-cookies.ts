"use server"
import {cookies} from "next/headers"
import {redirect} from "next/navigation"

export async function saveCookie(){
  const cookie = await cookies()
  console.log("setting")
  cookie.set("token", "cookies")
  redirect("/test")
}
