import { WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config"
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", function connection(ws, request) {
    const url = request.url
    if (!url) {
        return
    }

    const queryParam = new URLSearchParams(url.split("?")[0])
    const token = queryParam.get('token') || ""
    const decoded = jwt.verify(token, JWT_SECRET)

    console.log("New connection established");

    ws.send("Hello from WebSocket server")
    ws.on("message", function message(data) {
        ws.send("pong")
    })

    ws.on('close', ()=>{
        console.log('Client disconnected');
    })
})

console.log('WebSocket server running on ws://localhost:8080');