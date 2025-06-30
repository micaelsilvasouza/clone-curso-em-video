"use client"
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Btn_Google({ textBTN }: { textBTN: string }) {
  useEffect(()=>{
      google.accounts.id.initialize({
        client_id: "593215396622-f6615g28imqq6m9c4943rvg5e11nmv6q.apps.googleusercontent.com",
        callback: loginGoogle

      })
      //google.accounts.id.renderButton(document.getElementById("button"), {})
  }, [])

  return (
    <>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    
    <button
      id="button"
      type="button"
      onClick={()=>{google.accounts.id.prompt()}}
      className=" w-full flex items-center justify-center gap-2 bg-gray-100 py-3 px-20 rounded-sm mx-auto cursor-pointer
     hover:bg-gray-800 hover:text-white transition-colors ease-in"
    >
      <FcGoogle size={25} />
      {textBTN}
    </button>
    </>
  );
}

function loginGoogle(responsse:{credential: string}) {
  console.log(responsse.credential)
}
