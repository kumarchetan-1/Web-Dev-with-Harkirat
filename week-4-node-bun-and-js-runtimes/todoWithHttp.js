const express =  require("express")
const app =  express()

const todo = []

app.get("/", (req, res)=>{
   res.send(JSON.stringify(todo))
})

app.post("/", (req, res)=>{
   const newTask = req.body.task
   if (newTask) {
      todo.push({
         title : newTask
        })
        res.send(200)
   } else{
      res.sendStatus(400)
   }
})

app.listen(3000, ()=> console.log("Listening on Port 3000"))
