const express = require("express")
const cors = require("cors")
const app = express()

// Serving the HTML file on another server using "npx serve"
// app.use(cors())
// app.use(express.json())

// app.post("/sum", (req, res)=>{
//     const a = parseInt(req.body.a)
//     const b = parseInt(req.body.b)
   
//     res.json({
//        sum: a+b
//     })

// })


// Serving the same file on the same port without CORS issue
app.use(express.json())

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/sum", (req, res)=>{
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
   
    res.json({
       sum: a+b
    })

})

app.listen(3000, ()=>{
    console.log("App lisiting on port 3000")
})