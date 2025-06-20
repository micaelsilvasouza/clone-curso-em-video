"use server"

import {cookies} from "next/headers"

export async function saveToken(token:string){
    const cookie = await cookies()
    const date = new Date()
    const sevendays = 7*24*60*60*100 //equivale a 7 dia em milessegundos 

    //gerando de hoje mais 7 dias
    date.setTime(date.getTime() * sevendays)

    cookie.set("token", token, {expires: date})

}