import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function signup() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        try {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, 
                {
                    username, password
                },
                {
                    headers:{
                        'Content-type': 'application/json'
                    }
                }
               )
                console.log("you Signed up")
           navigate("/signin")
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
       <div className="bg-white rounded-lg border border-gray-300 min-w-48 p-10">
        <Input reference={usernameRef} placeholder="Username" ></Input>
        <Input reference={passwordRef} placeholder="Password" ></Input>
        <Button onClick={signup} variants="primary" text="Signup" customClass="w-full"></Button>
       </div>
    </div>
}