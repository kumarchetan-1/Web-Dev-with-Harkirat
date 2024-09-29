const express = require("express")

const app = express()


app.get("/add/:a/:b", (req, res)=>{
    // Using query
//  const a = parseInt(req.query.a)
//  const b = parseInt(req.query.b)

// using parameters
 const a = parseInt(req.params.a)
 const b = parseInt(req.params.b)

 res.json(a+b)
})

app.get("/subtract", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
   
    res.json(a-b)
})

app.get("/devide", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
   
    res.json(a/b)
})

app.get("/multiply", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
   
    res.json(a*b)
})

app.listen(3000)