import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from '@repo/common/types'
import { prismaClient } from "@repo/db/client"
import bcrypt, { hash } from "bcrypt"
import { middleware } from "./middlewares"

const app = express()
app.use(express.json())

app.post("/signup", async (req, res) => {
    const parasedData = CreateUserSchema.safeParse(req.body)
    if (!parasedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const hashedPassword = await bcrypt.hash(parasedData.data.password, 5)

    try {
        const user = await prismaClient.user.create({
            data: {
                email: parasedData.data?.username,
                password: hashedPassword,
                name: parasedData.data.name
            }
        })
        res.json({
            userId: user.id
        })
    } catch (error) {
        res.status(411).json({
            message: "User name already exists"
        })
    }

})

app.post("/signin", async (req, res) => {
    const parsedData = SigninSchema.safeParse(req.body)
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const existingUser = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    })

    if (!existingUser) {
        res.status(403).json({
            message: "Not authorised"
        })

        return
    }

    if (typeof existingUser === "object" && existingUser) {
        const isCorrectPassword = bcrypt.compare(parsedData.data.password, existingUser.password)
        const userId = existingUser?.id
        const token = jwt.sign({ userId }, JWT_SECRET)

        res.json({
            token
        })
    }


})

app.post("/room", middleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body)
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const userId = req.userId
    if (!userId) {
        throw new Error("adminId is required"); 
    }

    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })
    
        res.status(201).json({
            roomId: room.id
        })
    } catch (error) {
        res.status(411).json({
            message: "Room already exists with this room name"
        })
    }

})

app.get("/chat/:roomId", async(req, res)=>{
    const roomId = Number(req.params.roomId)
   const messages = await prismaClient.room.findMany({
        where: {
            id: roomId
        },
        orderBy: {
            id: 'desc'
        },
        take: 50
    })

    res.json({
        messages
    })
})

app.listen(3001)