"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

 
export default function Signup() {
    const router = useRouter()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    return <div className="w-screen h-screen flex items-center justify-center" >
        <div className="border border-white min-w-[500px] px-10 py-12 bg-slate-200  rounded-md">
             <div>
             <input className="p-4 w-full text-violet-900 mb-4 rounded-md border-violet-900 border placeholder-gray-500" type="text" name="username" onChange={(e)=>{
                setUsername(e.target.value)
             }} placeholder="Username"/>
             </div>
             <div>
             <input className="p-4 w-full text-violet-900 mb-4 rounded-md border-violet-900 border placeholder-gray-500" type="password" name="username" onChange={(e)=>{
                setPassword(e.target.value)
             }}  placeholder="Password"/>
             </div>
             <div>
             <button className="inline-block w-full p-4 bg-violet-700 text-white font-bold rounded-md border transition-all hover:transition-all border-violet-700 hover:bg-white hover:border-violet-700 hover:text-violet-900" 
             onClick={()=>{
                axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    password
                }).then((response)=>{
                    console.log("Signup successful: ", response);
                }).catch((error)=> console.error("Signup error: ", error))
             
                router.push("/signin")

             }}>Sign up</button>
             </div>
             
        </div>
    </div>
}