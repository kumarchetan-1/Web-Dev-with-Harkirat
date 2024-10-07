const { Router } = require("express")
const { userMiddleware } = require("../middlewares/user")
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router()

courseRouter.get("/purchase", userMiddleware, async (req, res) => {
    const { courseId } = req.body
    const userId = req.userId
//  Here should be a check if the user had paid the price
    try {
        await purchaseModel.create({
            courseId, userId
        })
        res.send({
            message: "You have successfully bought the course!"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})


courseRouter.get("/preview", async(req, res) => {
try {
    const courses = await courseModel.find({})

    res.send({
        courses
    })
} catch (error) {
    res.status(500).json({
        error
    })
}
})

module.exports = {
    courseRouter
}