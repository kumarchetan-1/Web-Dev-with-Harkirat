const bodyParser = require("body-parser")
const express = require("express")

const app = express()

// app.use(express.json()) // comes as default middleware of express
app.use(bodyParser.json()) // need to import explicitly before using

app.post("/sum", (req, res)=>{
 const a = parseInt(req.body.a)
 const b = parseInt(req.body.b)

 res.json({
    sum: a+b
 })
})


app.listen(3000, ()=> console.log("app running on port 3000"))