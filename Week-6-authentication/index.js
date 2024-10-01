const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const JWT_SECRET  = "itIsNoLongerSecret"

app.use(express.json())

let users = []

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/signup", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
 
    if (users.find((user)=> user.username === username && user.password === password)) {
        res.send({
            message: "user already exist in the database"
        })
        return
    }

    users.push({
        username: username,
        password: password
    }) 

    res.send({
        message: "user added sucessfully"
    })
})   
 
app.post("/signin", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const foundUser =  users.find((user)=> user.username === username && user.password === password)

    if (foundUser) {
        const token = jwt.sign({ username: foundUser.username }, JWT_SECRET)
        res.send({authorization: token})
        console.log(users)
    } else{
        res.status(401).send({
            message: "Invalid credentials!"
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.authorization
    const decodedData = jwt.verify(token, JWT_SECRET)

    if (decodedData.username) {
        req.username = decodedData.username
       next()
    } else{
        res.json({
            message: "You are not logged in!"
        })
    }
}

app.get("/me", auth, (req, res)=>{
     const username =  req.username
     const foundUser = users.find(user => user.username === username)

     if (foundUser) {
        res.send({
            username: foundUser.username,
            password: foundUser.password
        })
        console.log("details shown")
     } else{
        res.send({
            message: "Invalid authorization token!"
        })
     }

})
 

app.listen(3000, ()=> console.log("Server is running on port 3000"))