const express = require("express")
const app = express()


function showReqDetails(req, res, next) {
    console.log(`HTTP Method: ${req.method}`)
    console.log(`Request URL: ${req.url}`)
    console.log(`Host name is: ${req.hostname}`)
    console.log(`TimeStamp of Request: ${new Date().toISOString()}`)
    next()
}

app.use(showReqDetails)
app.get("/home", (req, res)=>{
    res.json({
        message: `Home Page`
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on PORT 3000")
})