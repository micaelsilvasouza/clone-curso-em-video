import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.cookies.has("token")) {
    return NextResponse.next()
  }else{
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: "/minha-conta"
}