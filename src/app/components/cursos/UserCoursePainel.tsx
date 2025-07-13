"use client"

import { addUserCourse } from "@/actions/handlers"

export default function UserCoursePainel({userid, courseid}: {userid: string | undefined, courseid: string}) {
  return (
    <section className="flex items-center justify-center p-5 bg-gray-100 w-full max-w-180 m-auto">
      <div className="py-5 px-10 border-r-1 border-r-black">
        <span className="p-2 text-white font-bold bg-red-600 rounded-xl">NÃO ESCRITO</span>
      </div>
      <div className="py-5 px-10">
        <span className="text-xl text-green-600 font-bold">GRATIS</span>
      </div>
      <div className="py-5 px-10 border-l-1 border-l-black">
        {/* Adicionar o curso ao usuário */}
        <button onClick={()=>{addUserCourse(userid, courseid)}} className="p-2 text-white font-bold bg-blue-800 cursor-pointer hover:bg-blue-600 rounded-xl">COMECE AGORA</button>
      </div>
    </section>
  )
}