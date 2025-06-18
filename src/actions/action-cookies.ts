"use server"
import {cookies} from "next/headers"

export async function saveCookie(){
  const cookie = await cookies()

  cookie.set("token", "cookies")
}
