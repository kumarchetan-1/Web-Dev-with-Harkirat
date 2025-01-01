import { PrismaClient } from "@prisma/client";
import express from 'express'
import bcrypt from "bcrypt"



const app = express()

const client = new PrismaClient({
    log: ['query']
})

app.post("/user", async(req, res)=>{
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    client.user.create({
        data:{
        username: username,
        password: hashedPassword,
        age: NaN,
        city: " "
        }
    })
})

app.get("/users", async(req, res)=>{
   const users = await client.user.findMany() 
   res.json({
    users
   })
})

app.get("/todos/:id", async(req, res)=>{
    const id = req.params.id
    const user = await client.user.findFirst({
        where:{
            id: parseInt(id)
        },
        include:{
            todos: true
        }
    })

    res.json({
        user
    })
})


app.listen(3000, ()=> console.log("App running on port 3000") )

//  async function createUser(){
//  const user =  await client.user.findFirst({
//     where: {
//         id: 1
//     },
//     include: {
//         todos: true
//     },
//     // @ts-ignore
//         // data: {
//         //     username: "ChetanKr",
//         //     password: "dsjflasjf",
//         //     city: "Bijnor",
//         //     age: 24
//         // }
//     })

//     // console.log("Data updated");
//     console.log(user);
    
// }

// createUser()