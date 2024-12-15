// @ts-ignore
import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const app = express()

// .d.ts

app.post("/api/v1/signin", (req, res)=>{

})

app.post("/api/v1/login", (req, res)=>{

})

app.post("/api/v1/content", (req, res)=>{

})

app.get("/api/v1/content", (req, res)=>{

})

app.delete("/api/v1/content", (req, res)=>{

})

app.delete("/api/v1/brain/share", (req, res)=>{

})

app.delete("/api/v1/brain/:shareLink", (req, res)=>{

})


app.listen(3000, ()=> console.log(`App running on Port ${3000}`))