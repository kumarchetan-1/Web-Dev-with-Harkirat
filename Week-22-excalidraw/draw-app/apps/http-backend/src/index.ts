import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from '@repo/common/types'

const app = express()
app.use(express.json())

app.get("/sigup", (req, res)=>{
    const data = CreateUserSchema.safeParse(req.body) 
   if(!data.success){
    res.json({
     message: "Incorrect inputs"
    })
    return 
   } 
    res.json({
        userId: 1234
    })
})

app.get("/sigin", (req, res)=>{
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

app.get("/create-room", (req, res)=>{
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