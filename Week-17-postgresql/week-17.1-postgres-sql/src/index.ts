import { Client } from "pg";
import express from 'express'

const app = express()
app.use(express.json())

const pgClient = new Client({
    user: "neondb_owner",
    password: "9Av1NjzsTOFm",
    host: "ep-soft-grass-a1s5w1yh.ap-southeast-1.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl: true
})

 pgClient.connect()

app.post("/signup", async(req, res)=>{
    const {username, email, password } = req.body

    try {
        const pgQuery = `INSERT INTO users(username, email, password) 
                         VALUES('${username}', '${email}', '${password}') `
        const response = await pgClient.query(pgQuery)

        res.send({
            message: "You have signed up"
        })
        
    } catch (error) {
        res.send({
            message: `Error in signin up: ${error}`
        })
    }

})


app.listen(3000, ()=> console.log(`App running on port: 3000`))