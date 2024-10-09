const { Router } = require("express")
const { z } = require("zod")
const { USER_JWT_SECRET } = require("../config")
const { userMiddleware } = require("../middlewares/user")
const { userModel, purchaseModel, courseModel } = require("../db")

const userRouter = Router()

const userSchema = z.object({
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

userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    const { success, data, error } = userSchema.safeParse(req.body)

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
        res.status(201).json({
            message: "Signed up successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error signing up",
            error: error
        })
    }
})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })
        // console.log(foundUser);
        if (!user) {
          return res.status(404).json({
                message: "User not found in our database"
            })
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (isCorrectPassword) {
            const token = jwt.sign({
                id: user._id.toString()
            }, USER_JWT_SECRET)
            res.status(200).json({ oken })
        } else {
            res.status(401).json({
                message: "Incorrect credentials"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Error logging in",
            error
        })
    }
})


userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId = req.userId

    try {
        const purchases = await purchaseModel.find({ userId })
        const courseIds = purchases.map(purchase => purchase.courseId)
        const courses = await courseModel.find({ _id: { $in: courseIds } })

        res.status(200).json({ purchases, courses })

        // purchaseModel.find({ userId })
        // .then((purchases)=>{
        //     courseModel.find({
        //         _id: {$in: purchases.map(c=> c.courseId)}
        //     })
        // })
        // .then((courses)=> {
        //     res.json({
        //         courses, 
        //         purchases
        //     })
        // })
        // .catch(err=> res.status(500).json({ err }))

    } catch (error) {
        res.status(500).json({
            message: "Issue in fetching your purchased courses",
            error
        })
    }
})


module.exports = {
    userRouter
}