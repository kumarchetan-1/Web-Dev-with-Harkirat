const { Router } = require("express")

const courseRouter = Router()

courseRouter.get("/purchase", (req, res)=>{


    res.send({
        message: "Course purchase endpoint"
    })
})


courseRouter.get("/preview", (req, res)=>{


    res.send({
        message: "Course preview endpoint"
    })
})

module.exports = {
    courseRouter
}