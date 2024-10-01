const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ChetanInLoveWithCoding"
app.use(express.json())

const users = []

// to return a 32 bit long return as token
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let token = ""

//     for (let i = 0; i < 32; i++) {
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token
// }

app.post("/signup", (req, res)=>{
    // will do input validations using zod in upcoming weeks
    const username = req.body.username
    const password = req.body.password

    if (users.find((user)=> user.username === username)) {
        res.json({
            message: "you are already signed up"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up!"
    })

    console.log(users)
})

app.post("/signin", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    // const user = users.find((user)=> (user.username === username && user.password === password))
    // Or we can use this approach instead of find method of array
   let user = null
   for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
        user = users[i]
    }
   }

    if (user) {
        // const token = generateToken()
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET)

        // user.token = token
        res.send({
            token
        })
        console.log(users)
    }else{
        res.status(401).send({  // 401 => unauthorized, 403=> forbidden(authenticated but don't have permisson to access resources)
            message: "Invalid username or password"
        })
    }

    console.log(users)
})

app.get("/me", (req, res)=>{
    const yourToken = req.headers.authorization
    let decodedInfo = jwt.verify(yourToken, JWT_SECRET) // returns {username: "chetankumar.npr@gmail.com"}
    let username = decodedInfo.username

    let foundUser = null
   for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
        foundUser = users[i]
    }
   }

   if (foundUser) {
    res.send({
        username : foundUser.username,
        password : foundUser.password
    })
   } else{
    res.send({
        message: "Invalid token"
    })
   }
})

app.listen(3000, ()=> console.log("Server listening on port 3000"))