import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SigninResponse{
  token: string
}

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function signin() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
       try {
        const response = await axios.post<SigninResponse>(`${BACKEND_URL}/api/v1/signin`, 
            {
                username, password
            },
            {
                headers:{
                    'Content-type': 'application/json'
                }
            }
           )

           console.log("You signed up");
         const jwt = response.data.token
         localStorage.setItem("token", jwt)
         navigate("/dashboard")
       } catch (error) {
        console.log(`Error occurred during signin ${error}`)
       }
    }
    
    
    return <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
       <div className="bg-white rounded-lg border border-gray-300 min-w-48 p-10">
        <Input reference={usernameRef} placeholder="Username" ></Input>
        <Input reference={passwordRef} placeholder="Password" ></Input>
        <Button onClick={signin} variants="primary" text="Signin" customClass="w-full"></Button>
       </div>
    </div>
}