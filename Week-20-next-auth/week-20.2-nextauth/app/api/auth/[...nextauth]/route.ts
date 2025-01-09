import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const provider = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'email',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()
    
        //   if (res.ok && user) {
        //     return user
        //   }
          return {
            usernam: "chetankumar",
            id: "1",
            email: "kumarchetan.npr@gmail.com"
          }
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})


export const GET = provider
export const POST = provider