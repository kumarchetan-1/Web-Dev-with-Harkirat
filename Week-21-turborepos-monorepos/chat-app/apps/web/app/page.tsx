"use client"
import TextInput from "@repo/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return <div style={{
    width: "100vw",
    height: "100vh",
    background: "black", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>

<TextInput onChange={()=> { console.log("Hi") }} placeholder="Room code" ></TextInput>
<button 
onClick={()=>router.push("1234/chat")}
style={{
      padding: "10px 15px",
      cursor: "pointer"
}}>Join room</button>
  </div>
}