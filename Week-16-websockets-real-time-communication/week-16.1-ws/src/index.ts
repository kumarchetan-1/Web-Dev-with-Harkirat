
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080})

// event handler
wss.on("connection", function (socket) {
    console.log("User connected");
    // setInterval(() => {
    //     socket.send(`Current solana price is ${Math.random()}`)
    // }, (500));

    socket.on("message", (e)=>{
        if(e.toString() === "Ping"){
            socket.send("Pong")
        }
    })
})