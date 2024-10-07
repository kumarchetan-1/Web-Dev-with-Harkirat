require("dotenv").config()
const express = require("express")
const { userRouter } = require("./routes/user")
const { adminRouter } = require("./routes/admin")
const { courseRouter } = require("./routes/course")

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)


app.listen(port, ()=>{
    console.log(`Application running on port ${ port }`)
})