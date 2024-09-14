const express =  require("express")
const app =  express()

const todo = []

app.get("/", (req, res)=>{
   res.send(JSON.stringify(todo))
})

app.post("/", (req, res)=>{
   todo.push({
    title : req.get("task")
   })
})

