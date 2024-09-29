const express = require("express")

const app = express()

let requrestCount = 0

function requestIncreaser(req, res, next) {
    requrestCount++
    req.name = "Tech Ace"
    console.log(`Total num of request ${requrestCount}`);
    res.json({
        name: "I ended the request early"
    })

    // // or call this function
    // next()
}

function sumHandler(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    console.log(req.name);


    res.json({
        ans: a + b
    })
}
 
// In this case you have to individually put the name of the middleware before calling the main function
// app.get("/sum", requestIncreaser, sumHandler)
// app.get("/multiply", requestIncreaser, sumHandler)
// app.get("/devide", requestIncreaser, sumHandler)

// But here in this case you don't have to put the middleware name in front of all routes it will
// automatically use the middleware by all rounder declared under it.

app.get("/admin", (req, res)=>{
  res.json({
    numOfRequests: `${requrestCount}`
  })
})

app.use(requestIncreaser)
app.get("/sum", sumHandler)
// app.get("/multiply", sumHandler)
// app.get("/devide", sumHandler)

app.listen(3000)