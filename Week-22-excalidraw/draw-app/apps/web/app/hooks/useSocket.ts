import { useEffect, useState } from "react"
import { WS_URL } from "../tsconfig"


export function useSocket(){
    const [loading, setLoading] = useState(true)
    const [socket, setSocket] = useState<WebSocket>()

    useEffect(()=>{
      const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNzE3N2RkZC0zYWJjLTQ0OGEtOGQyYS0wYzcwMWJlMGVkM2MiLCJpYXQiOjE3NDMwMzg1ODd9.yxxsVHdzVBzMrheDxA7cqWi99XysRdfzQUcSEMBvfcA`)
      ws.onopen = () =>{
        setLoading(false),
        setSocket(ws)
      }
    }, [])

    return {
        socket, 
        loading
    }
}