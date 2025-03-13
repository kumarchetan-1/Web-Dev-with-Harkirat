import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from '@repo/common/types'
import { prismaClient } from "@repo/db/client"

const app = express()
app.use(express.json())

app.post("/sigup", (req, res)=>{
    const paraseData = CreateUserSchema.safeParse(req.body) 
   if(!paraseData.success){
    res.json({
     message: "Incorrect inputs"
    })
    return 
   } 

try {
    prismaClient.user.create({
        data:{
          email: paraseData.data?.username,
        password: paraseData.data.password,
        name: paraseData.data.name
        }
     })
     res.json({
        userId: 1234
    })
} catch (error) {
    res.status(411).json({
        message: "User name already exists"
    })
}

})

app.post("/sigin", (req, res)=>{
    const data = SigninSchema.safeParse(req.body) 
    if(!data.success){
     res.json({
      message: "Incorrect inputs"
     })
     return 
    } 

    const userId = 1
    const token = jwt.sign({ userId }, JWT_SECRET)

    res.json({
        token
    })
})

app.post("/create-room", (req, res)=>{
    const data = CreateRoomSchema.safeParse(req.body) 
   if(!data.success){
    res.json({
     message: "Incorrect inputs"
    })
    return 
   } 

    res.send("create room endpoint")
})

app.listen(3001)