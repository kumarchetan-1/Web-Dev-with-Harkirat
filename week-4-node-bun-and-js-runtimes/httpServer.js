const express = require("express")
const app = express()

app.get("/", function(req, res){
   res.send("Hello world")
})

app.get("/contact", function(req, res){
    res.send("<h1> Contact Us Page</h1>")
 })

app.listen(3000)