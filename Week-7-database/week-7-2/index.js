const express = require("express");
const { UserModel, TodoModel, ObjectId } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const { z } = require("zod")
require('dotenv').config()

const port = process.env.PORT || 3000; // Default to 3000 if not set
const dbConnectionString = process.env.DB_CONNECTION_STRING;
mongoose.connect(dbConnectionString)

const app = express();
app.use(express.json());
 
app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" }) // Minimum length of 8 characters
            .max(64, { message: "Password must not exceed 64 characters" })     // Maximum length of 64 characters
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter (A-Z)" }) // At least one uppercase letter
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter (a-z)" }) // At least one lowercase letter
            .regex(/\d/, { message: "Password must contain at least one digit (0-9)" })               // At least one digit
            .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character (!@#$%^&*)" }) // Special character
            .regex(/^\S*$/, { message: "Password must not contain spaces" }),  // No spaces allowed
        name: z.string().min(1).max(100) // should not be null 
    })

    const { success, data, error } = requiredBody.safeParse(req.body)

    if (!success) {
        res.json({
            message: "Incorrect format",
            error: `Error: ${error}`
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    try {
        const hashedPassword = await bcrypt.hash(password, 5)
        // console.log(hashedPassword);
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });

        res.json({
            message: "You are signed up"
        })
    } catch (error) {
        res.send({
            message: `Error: ${error}`
        })
    }
});


app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });
    console.log(user)

    if (!user) {
        res.status(401).json({
            message: "User doesn't exist in our database!"
        })
        return
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.password)
        // console.log(passwordMatch)

        if (passwordMatch) {
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET);

            // console.log(token)
            res.json({
                token
            })
        } else {
            res.status(401).json({
                message: "Incorrect creds"
            })
        }
    } catch (error) {
        res.status(500).json({
            Error: error
        })
    }
});


app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    try {
        await TodoModel.create({
            userId,
            title,
            done
        });

        res.json({
            message: "Todo created"
        })
    } catch (error) {
        res.status(500).json({
            message: `Error in creating the todo: ${error}`
        })
    }
});


app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({
            userId
        });

        res.json({
            todos
        })
    } catch (error) {
        res.json({
            message: `Error in getting the todos ${error}`
        })
    }
});


app.patch("/marktodo", auth, async function (req, res) {
    const userId = req.userId;
    const todoId = req.body.todoId
    const done = req.body.done

    try {
        const objectId =  new mongoose.Types.ObjectId(todoId)
        const updatedTodo = await TodoModel.findOneAndUpdate(
            { _id: objectId, userId },
            { done },
            { new: true }
        )

        if (!updatedTodo) {
            return res.status(404).json({
                message: "ToDo not found!"
            })
        }

        res.json({
            message: 'ToDo status updated successfully',
            todo: updatedTodo
        });
    } catch (error) {
        res.status(500).json({
            message: `Error in updating the todo status, ${error}`
        })
    }
});


app.listen(port, () => {
    console.log(`Server running on ${port}`)
});