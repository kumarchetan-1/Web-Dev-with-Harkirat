
const express = require("express")
const { Router } = require("express")
const { z, string } = require("zod")
const { adminModel } = require("../db")
const adminRouter = Router()

adminRouter.use(express.json())
adminRouter.post("/signup", (req, res) => {
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
        name: z.string().min(1).max(100)

    })

    const { success, data, error } = requiredBody.safeParse(req.body)

    if (!success) {
        res.json({
            message: "Incorrect Format",
            error: error
        })
        return
    }
    
    const { username, password } = req.body

    

    res.send({
        message: "Admin Signed up successfully"
    })
})


adminRouter.post("/login", (req, res) => {


    res.send({
        message: "Admin logged in successfully"
    })
})


adminRouter.post("/course", (req, res) => {


    res.send({
        message: "Admin created a course successfully"
    })
})


adminRouter.put("/course", (req, res) => {


    res.send({
        message: "Admin created a course successfully"
    })
})


adminRouter.delete("/course", (req, res) => {


    res.send({
        message: "Admin deleted a course successfully"
    })
})


adminRouter.patch("/bulk", (req, res) => {


    res.send({
        message: "Course content added successfully successfully"
    })
})

module.exports = {
    adminRouter
}