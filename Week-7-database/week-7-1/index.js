const express = require("express")
const jwt = require("jsonwebtoken")
const { UserModel, TodoModel } = require("./db")
const JWT_SECRET = ""

const app = express()       
app.use(express.json())

app.post("/signup", async (req, res)=>{
    console.log(req.body);
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    try {
        await UserModel.create({ 
            email: email,
            password: password,
            name: name
        })
        res.send({
            message: "you are signed up!"
        })
    } catch (error) {
        // console.error("Signup error:", error);
        res.status(500).send({ error: "Error signing up" });
    }
})

app.post("/signin", async (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    const foundUser = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(foundUser)
    if (foundUser) {
        const token = jwt.sign({
            id: foundUser._id.toString()
        }, JWT_SECRET)

        res.send({
            token: token
        })
    } else{
        res.status(401).json({
            message: "Incorrect credentials"
        })
    }
})


function auth(req, res, next) {
    const token = req.headers.token
    const decodedData = jwt.verify(token, JWT_SECRET)
    if(decodedData){
        req.userId = decodedData.id
        next()
    }
    else{
        res.status(401).send({
            message: "Invalid credentials"
        })
    }
}

app.post("/todo", auth, async(req, res)=>{
  const userId = req.userId
  const description = req.body.description
  const todoStatus = req.body.todoStatus

  try {
    await TodoModel.create({
        userId,
        description, 
        todoStatus
    })
    res.send({
        userId
    })
  } catch (error) {
    res.send({
        error: `Error in creating the todos ${error}`
    })
  }
})

app.get("/todos", auth, async (req, res)=>{
    const userId = req.userId
    try {
        const todos = await TodoModel.find({ 
            userId
     })
     res.send({todos})
    } catch (error) {
        res.send({
            error: `Error in finding the todo ${error}`
        })
    }
})


app.listen(3000, ()=> console.log("App listening on port 3000"))
