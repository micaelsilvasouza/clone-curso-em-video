"use server"
import {cookies} from "next/headers"
import {revalidatePath} from "next/cache"

export async function saveCookie(){
  const cookie = await cookies()

  cookie.set("token", "cookies")
  revalidatePath("/")
}
