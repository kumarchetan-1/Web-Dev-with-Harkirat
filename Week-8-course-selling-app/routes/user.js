const { Router } = require("express")

const userRouter = Router()

userRouter.post("/signup", (req, res)=>{


    res.send({
        message: "User signed Up successfully"
    })
})


userRouter.post("/login", (req, res)=>{


    res.send({
        message: "User logged up successfully"
    })
})


userRouter.get("/purchases", (req, res)=>{


    res.send({
        message: "User purchases"
    })
})

module.exports = {
    userRouter
}