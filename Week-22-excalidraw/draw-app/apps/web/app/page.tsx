"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";




// try using React forms or React hook forms
export default function Home() {
  const [roomId, setRoomId] = useState("")
  const router = useRouter()

  useEffect(()=> console.log("Loaded on client"))

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }}>
     <input style={{
      padding: "8px 10px",
     }} value={roomId} onChange={ (e)=> setRoomId(e.target.value) } 
            type="text" placeholder="Room id"></input>

     <button style={{
      padding: "8px 10px",
     }}  onClick={()=> router.push(`/room/${roomId}`)}>Join room</button>
    </div>
  );
}
