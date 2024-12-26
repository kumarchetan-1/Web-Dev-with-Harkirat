import { WebSocket, WebSocketServer  } from "ws";  

const wss = new WebSocketServer({ port: 8080 })

let userCount = 0
let allSockets: WebSocket[] = []

wss.on("connection", (socket)=>{
    userCount++
    allSockets.push(socket)
    console.log(`User connected ${userCount}`);

    socket.on("message", (message)=>{
      console.log(`Message received: ${message.toString()}`);
      allSockets.forEach((s)=>{
        s.send(`${message.toString()} :sent from the server`)
      })
    })

    socket.on("disconnect", ()=>{
        allSockets = allSockets.filter(x=> x!=socket)
    })
})