"use client"
import {saveCookie} from "@/actions/action-cookies"

export default function Btn(){
  return <button formAction={saveCookie}>Click em min</button>
}
