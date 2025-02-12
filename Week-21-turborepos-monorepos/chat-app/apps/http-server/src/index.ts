import express from "express"

const app = express()

app.get("/signin", (req, res)=>{
    res.json({ message: "Hello World"})
})

app.get("/signup", (req, res)=>{
    res.json({ message: "Hello World"})
})

app.get("/chat", (req, res)=>{
    res.json({ message: "Hello World"})
})

app.listen(3001)