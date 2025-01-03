"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
      <h1 className="text-3xl">Todo application</h1>
      <button onClick={()=>{
        router.push("/signin")
      }}>Signin</button>
      {/* <div>
        <Link rel="stylesheet" className="p-4 border border-white box-border inline-block mt-4" href="/signup" >Sign up </Link>
      </div>
      <div>
      <Link rel="stylesheet" className="p-4 border border-blue-500 bg-blue-500  box-border inline-block mt-4" href="/signin" >Sign in </Link>
      </div> */}
      </div>
     
     </div>
   );
 }
