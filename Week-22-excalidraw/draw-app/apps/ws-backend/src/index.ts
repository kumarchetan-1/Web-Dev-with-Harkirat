import { WebSocketServer, WebSocket } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config"
import jwt, { JwtPayload } from "jsonwebtoken";
import { prismaClient } from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 })

interface User {
    userId: string,
    rooms: string[],
    ws: WebSocket
}

const users: User[] = []

function checkUser(token: string): string | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload

        if (typeof decoded !== "object" || !decoded.userId) {
            console.error("Token is missing userId");
            return null;
        }

        return decoded.userId
    } catch (error) {
        console.error("Token verification failed", error instanceof Error ? error.message : error)
        return null
    }
}

wss.on("connection", function connection(ws, request) {
    const url = request.url
    if (!url) {
        return
    }

    const queryParam = new URLSearchParams(url.split("?")[1])
    const token = queryParam.get('token') || ""
    const userId = checkUser(token)

    if (userId == null) {
        ws.close()
        ws.on('close', () => {
            console.log('Client disconnected');
        })  

        return null
    }

    users.push({
        userId,
        rooms: [],
        ws
    })


    ws.on("message", async function message(data) {
        const parsedData = JSON.parse(data as unknown as string)

        if (parsedData.type === "join_room") {
            const user = users.find(x => x.ws === ws)
            user?.rooms.push(parsedData.roomId)
        }

        if (parsedData.type === "leave_room") {
            const user = users.find(x => x.ws === ws)
            if (!user) {
                return
            }
            user.rooms = user?.rooms.filter(x => x === parsedData.roomId)
        }

        if (parsedData.type === "chat") {
            const roomId = parsedData.roomId
            const message = parsedData.message
            // Todo, add multiple checks here to prevent malicious information, whitespaces, etc.

            await prismaClient.chat.create({
                data: {
                    message,
                    userId,
                    roomId: Number(roomId)
                }
            })

            users.forEach(user => {
                if (user.rooms.includes(roomId)) {
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomId
                    }))
                }
            })
        }
    })

})

console.log('WebSocket server running on ws://localhost:8080');