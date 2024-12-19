// @ts-ignore
import express, { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { ContentModel, LinksModel, UserModel } from "./db"
import bcrypt from 'bcrypt'
import { USER_JWT_SECRET } from "./config"
import { userMiddleware } from "./middlewares"
import { randomSlug } from "./utils"

const app = express()
app.use(express.json())

const userSchema = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(8).max(20)
        .regex(/[A-Z]/, "Password must include at least one uppercase letter")
        .regex(/[a-z]/, "Password must include at least one lowercase letter")
        .regex(/[\W_]/, "Password must include at least one special character")
        .regex(/^\S*$/, "Password must not contain spaces")
})

app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body

    const { success, data, error } = userSchema.safeParse(req.body)

    if (!success) {
        res.status(411).json({
            message: "Incorrect format",
            error: error
        })
        return
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 5)
        const foundUser = await UserModel.findOne({ username })
        if (foundUser) {
            res.status(403).json({
                message: "User already registered with us"
            })
            return
        }

        UserModel.create({
            username,
            password: hashedPassword
        })

        res.status(200).json({
            message: "Signed Up successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error Occured",
            error: error
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await UserModel.findOne({ username })

        if (!user) {
            res.status(411).json({
                message: "User doesn't exist in database"
            })
            return
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password ? user.password : "")
        if (isCorrectPassword) {
            const token = jwt.sign({
                id: user._id.toString()
            }, USER_JWT_SECRET ? USER_JWT_SECRET : "adsdsfds")

            res.json({
                token
            })
        }
    } catch (error) {
        res.status(401).json({
            message: "Invalid credentials",
            error
        })
    }

})

app.post("/api/v1/content", userMiddleware, async (req: Request, res: Response) => {
    const { link, type, title, tags: [] } = req.body
    const id = req.userId

    try {
        await ContentModel.create({
            link, title, type,
            tags: [],
            userId: id
        })

        res.status(200).json({
            message: "Content added sucessfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Unable to add content",
            error
        })
    }

})

app.get("/api/v1/content", userMiddleware, async (req: Request, res: Response) => {
    const userId = req.userId

    try {
        const content = await UserModel.find({
            userId
        })
        if (!content) {
            res.json({
                message: "Issue in fetching content",
            })
            return
        }
        res.json({
            content
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in getting the content",
            error
        })
    }
})

app.delete("/api/v1/content", userMiddleware, async (req: Request, res: Response) => {
    const contentId = req.body.contentId
    try {
        await ContentModel.deleteMany({
            contentId,
            userId: req.userId
        })

        res.status(200).json({
            message: "content deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Unable to delete right now, try later.",
            error
        })
    }

})

app.post("/api/v1/brain/share", userMiddleware, async (req: Request, res: Response) => {
    const share = req.body.share
    if (share) {
        const existingLink = await LinksModel.findOne({
            userId: req.userId
        })

        if (existingLink) {
            res.json({
                link: `/brain/${existingLink.hash}`
            })
            return
        }

        const hash = randomSlug(10)
        await LinksModel.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            link: `/brain/${hash}`
        })
    } else {
        await LinksModel.deleteOne({
            userId: req.userId
        })
        res.json({
            message: "Removed link"
        })
    }

})

app.post("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink

    const link = await LinksModel.findOne({
        hash
    })

    if (!link) {
        res.status(403).json({
            message: "Sorry incorrect input"
        })
        return
    }

    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    res.json({
        username: user?.username,
        content
    })
})


app.listen(3000, () => console.log(`App running on Port ${3000}`))