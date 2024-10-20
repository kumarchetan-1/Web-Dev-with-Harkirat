const express = require("express")
const jwt = require("jsonwebtoken")
const path = require("path")
const JWT_SECRET = "abc123xyz"
const app = express()

const users = []
app.use(express.json())
// Approach 1 of serving the static html file
// app.use(express.static("./public/index.html"))
// Approach 2 of serving the static html file

app.get("/", (req, res)=> res.sendFile(path.join(__dirname + "/public/index.html")))

function auth(req, res, next) {
    
}

app.post("/signup", (req, res)=>{
    // zod validation is skipped
    const email = req.body.email
    const password = req.body.password

    if (users.find((user)=> user.email === email)) {
        return res.status(403).json({
            message: "User already exists with this email"
        })
    }
    users.push({
        email,
        password
    })
    console.log([email, password])
    res.status(200).json({
        message: "Signup Successfull"
    })
})

app.post("/signin", (req, res)=>{
    const email = req.body.email
    const password = req.body.password
// zod validation is skipped
    const foundUser = users.find(user=> user.email === email && user.password === password)

    if (foundUser) {
        const token = jwt.sign({
            username: foundUser.email
        }, JWT_SECRET)

        foundUser.token = token
        res.json({
            token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.authorization.split(" ")[1]; // Remove Bearer from token
    const userDetails = jwt.verify(token, JWT_SECRET);
    console.log(token)
    const email = userDetails.username; // username was stored in token, not email
    const user = users.find(user => user.email === email);

    if (user) {
        res.send({
            username: user.email
        });
    } else {
        res.status(401).send({
            message: "Unauthorized"
        }); 
    }
});


app.listen(3000, ()=> console.log("App running on port 3000"))

