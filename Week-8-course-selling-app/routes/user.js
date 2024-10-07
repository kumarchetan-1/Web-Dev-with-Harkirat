const { Router } = require("express")
const { USER_JWT_SECRET } = require("../config")
const { userMiddleware } = require("../middlewares/user")
const { userModel, purchaseModel, courseModel } = require("../db")
const userRouter = Router()


userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    const requiredBody = z.object({
        email: z.string().email(),
        password: z
            .string()
            .min(5, { message: "Password must be atleast 5 characters long" })
            .max(30, { message: "Password must not be more than 30 characters long" })
            .regex(/[A-Z]/, { message: "Password must have atleast one uppercase character" })
            .regex(/[a-z]/, { message: "Password must have atleast one lowercase character" })
            .regex(/\d/, { message: "Password must have atleast one digit " })
            .regex(/[.',{}@!$#%^*()-+=_|]/, { message: "Password must have atleast one special character from these [.',{}@!$#%^*()-+=_|]" })
            .regex(/^\S*$/, { message: "must not have any spaces in it." }),
        firstName: z.string().min(1).max(30),
        lastName: z.string().max(30)
    })

    const { success, data, error } = requiredBody.safeParse(req.body)

    if (!success) {
        res.json({
            message: "Incorrect Format",
            error: error
        })
        return
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 5)
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
        res.send({
            message: "Signed up successfully!"
        })
    } catch (error) {
        res.send({
            message: "Error in signing up",
            error: error
        })
    }
})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    // console.log(foundUser);

    if (!user) {
        res.send({
            message: "User not found in our database"
        })
        return
    }

    try {
        const isCorrectPassword = await bcrypt.compare(password, user.password)

        if (isCorrectPassword) {
            const token = jwt.sign({
                id: user._id.toString()
            }, USER_JWT_SECRET)
            res.send({
                token: token
            })
        } else {
            res.status(401).send({
                message: "Incorrect credentials"
            })
        }

    } catch (error) {
        res.status(500).json({
            error
        })
    }
})


userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId = req.userId

    try {
        const purchases = await purchaseModel({
            userId
        })

        const courses = await courseModel({
            _id: { $in: purchases.map(course => course.coursseId) }
        })

        res.send({
            purchases,
            courses
        })

    } catch (error) {
       res.status(500).json({
        message: "Issue in fetching your courses",
        error
       })
    }
})


module.exports = {
    userRouter
}