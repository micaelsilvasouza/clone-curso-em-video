"use server"

import {cookies} from "next/headers"

export async function saveToken(token:string){
    const cookie = await cookies()
    const date = new Date()
    const sevendays = 7*24*60*60*100 //equivale a 7 dia em milessegundos 

    //gerando de hoje mais 7 dias
    date.setTime(date.getTime() + sevendays)

    cookie.set("token", token, {expires: date})

}

export async function getDataWidhToken() {
    const cookie = await cookies()

    if(!cookie.has("token")){
        return null
    }

    const data = await (await fetch("https://backend-cursoemvideo.onrender.com/user/validate/token", {
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({token: cookie.get("token")?.value})
    })).json()

    return data.decoded
}