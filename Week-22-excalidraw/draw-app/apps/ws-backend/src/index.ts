import { WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config"
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", function connection(ws, request) {
    const url = request.url
    if (!url) {
        return
    }

    const queryParam = new URLSearchParams(url.split("?")[1])
    const token = queryParam.get('token') || ""

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
    } catch (error) {
        console.error("Invalid token", error)
        ws.close()
        return
    }

    ws.send("Hello from WebSocket server")
    ws.on("message", function message(data) {
        ws.send("pong")
    })

    ws.on('close', ()=>{
        console.log('Client disconnected');
    })
})

console.log('WebSocket server running on ws://localhost:8080');