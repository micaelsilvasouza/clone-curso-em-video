import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.cookies.has("token")) {
    const validatetoken = await fetch("https://backend-cursoemvideo.onrender.com/user/validate/token", {
      method: "post",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({token: request.cookies.get("token")?.value})
    })

    //validando token
    if((await validatetoken.json()).valid){
      return NextResponse.next()
    }else{
      return NextResponse.redirect(new URL('/login', request.url))  
    }

  }else{
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: "/minha-conta"
}