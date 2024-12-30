import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

 async function createUser(){
   await client.user.create({
    // @ts-ignore
        data: {
            username: "ChetanKr",
            

        }
    })
}