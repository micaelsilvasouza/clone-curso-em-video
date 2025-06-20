"use client"
import {saveCookie} from "@/actions/action-cookies"

export default function Btn(){
  return <button onClick={()=>{saveCookie("Figaro")}}>Click em min</button>
}
