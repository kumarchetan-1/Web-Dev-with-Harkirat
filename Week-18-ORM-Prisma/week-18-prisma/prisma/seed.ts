import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function createDummyUsers() {
    
    await client.user.create({
        data: {
            username: "Johndoe",
            password: "1231234",
            age: 24,
            city: "Bijnor",
            todos: {
                create: {
                    title: "Go to gym",
                    description: "Enter the gym at 5 PM daily",
                    done: true
                }
            }
        }
    })
}

createDummyUsers()

// npx prisma db seed