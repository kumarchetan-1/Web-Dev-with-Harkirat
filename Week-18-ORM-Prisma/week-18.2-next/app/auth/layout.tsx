import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface AuthLayoutInterface{
    children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutInterface) {
    
    return <div>
        <Navbar />
        {children}
    </div>
}