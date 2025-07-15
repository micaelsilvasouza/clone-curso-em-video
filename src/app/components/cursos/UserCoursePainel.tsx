"use client"

import { addUserCourse } from "@/actions/handlers"

export default function UserCoursePainel({userid, courseid}: {userid: string | undefined, courseid: string}) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-5 bg-gray-100 w-full max-w-180 m-auto">
      <div className="w-full text-center py-5 px-10 border-b-2 border-b-gray-300 md:py-10 md:border-r-2 md:border-r-gray-300 md:border-b-0">
        <span className="p-2 text-white font-bold bg-red-600 rounded-xl">NÃO ESCRITO</span>
      </div>
      <div className="w-full text-center py-5 px-10 md:py-10">
        <span className="text-xl text-green-600 font-bold">GRATIS</span>
      </div>
      <div className="w-full text-center py-5 px-5 border-t-2 border-t-gray-300 md:py-10 md:border-l-2 md:border-l-gray-300 md:border-t-0">
        {/* Adicionar o curso ao usuário */}
        <button onClick={()=>{addUserCourse(userid, courseid)}} className="p-2 text-white font-bold bg-blue-800 cursor-pointer hover:bg-blue-600 rounded-xl">COMECE AGORA</button>
      </div>
    </section>
  )
}