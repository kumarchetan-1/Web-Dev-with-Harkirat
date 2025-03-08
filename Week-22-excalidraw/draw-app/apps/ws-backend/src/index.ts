import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", function connection(ws) {
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