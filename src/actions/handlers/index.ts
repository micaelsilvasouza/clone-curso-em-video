import { redirect } from "next/navigation";

export async function addUserCourse(userid: string | undefined, courseid: string){
    if(!userid){
        redirect('/login')
        return
    }

    const res = await (await fetch("https://backend-cursoemvideo.onrender.com/user/courses/add-course", {
        method: "post",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userid: userid, courseid: courseid})
    })).json()

    if(!res.error){
        window.location.reload()
    }
}