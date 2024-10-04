const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "qdfjasljfdsfdsf"

const app = express()

mongoose.connect("mongodb+srv://chetan:ftmhuxyowc0RfhZg@cluster0.g2uzt.mongodb.net/todo-application-chetan22")
.then(()=>{
    console.log("sucessfully connected with database")
}).catch((error)=>{
    console.log(`Error connecting in database ${error}`)
})

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true }, 
    password: String
})

const TodoSchema = new Schema({
    title: String,
    todoStatus: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users", UserSchema)
const TodoModel = mongoose.model("todos", TodoSchema)

app.use(express.json())

app.post("/signup", async (req, res)=>{
    const username = req.body.email
    const name = req.body.name
    const password = req.body.password

    try {
       await UserModel.create({
            email: username,
            name: name,
            password: password
        })
        res.send({
            message: "You signed up sucessfully!"
        })
    } catch (error) {
        res.send({
          error: `Error in signing up ${error}`
        })
    }
})


app.listen(3000, ()=>{
    console.log("listening on port 3000")
})