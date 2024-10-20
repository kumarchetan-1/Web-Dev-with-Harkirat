
const { Router } = require("express")
const { z, string } = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { adminModel, courseModel } = require("../db")
const { adminMiddleware } = require("../middlewares/admin")
const { ADMIN_JWT_SECRET } = require("../config")

const adminRouter = Router()
// zod, bcrypt, jsonwebtoken

adminRouter.post("/signup", async (req, res) => {
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
            .regex(/[\W_]/, { message: "Password must have atleast one special characters" })
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
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
        res.json({
            message: "Signed up successfully!"
        })
    } catch (error) {
        res.json({
            message: "email already exists",
            error: error
        })
    }
})


adminRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const admin = await adminModel.findOne({ email })
    // console.log(admin);

    if (!admin) {
        res.json({
            message: "User not found in our database"
        })
        return
    }

    try {
        const isCorrectPassword = await bcrypt.compare(password, admin.password)

        if (isCorrectPassword) {
            const token = jwt.sign({
                id: admin._id.toString()
            }, ADMIN_JWT_SECRET)
            res.json({
                token: token
            })
        } else {
            res.status(401).json({
                message: "Incorrect credentials"
            })
        }

    } catch (error) {
        res.status(500).json({
            error
        })
    }
})


adminRouter.post("/course", adminMiddleware, async (req, res) => {
    const creatorId = req.userId
    const { title, description, price, imageUrl } = req.body

    try {
       const course =  await courseModel.create({
            title, description, imageUrl, price, creatorId
        })
        // console.log(creatorId)
        res.json({
            message: "Course created successfully",
            courseId: course._id
        })
    } catch (error) {
       res.status(500).json({
        error
       })
    }
})


adminRouter.put("/course", adminMiddleware, async (req, res) => {
    const creatorId = req.userId
    const { title, description, price, imageUrl, courseId } = req.body

    try {
       const course =  await courseModel.updateOne({
        _id: courseId,
        creatorId
       },
        {
            title, description, imageUrl, price
        })

        console.log(course)
        
        if (course.matchedCount) {
            res.json({
                message: "Course updated successfully",
                courseId: course._id
            })
        } else{
            res.json({
                message: "Course doesn't exists"
            })
        }

    } catch (error) {
       res.status(500).json({
        message: "Error in updating course ",
        error
       }) 
    }
})


adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
    const adminId = req.userId

    try {
       const courses =  await courseModel.find({
        creatorId: adminId
       })
    //    console.log(courses);
       
        res.json({
            message: "All of your courses",
            courses
        })
    } catch (error) {
       res.status(500).json({
        error
       })
    }
})

module.exports = {
    adminRouter
}