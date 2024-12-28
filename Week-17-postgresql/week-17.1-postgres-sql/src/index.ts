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

app.post("/signup", async (req, res) => {
    const { username, email, password, city, country, street, pincode } = req.body

    try {
        const userQuery = `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING id`
        const addressInsertQuery = `INSERT INTO addresses(city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`

        await pgClient.query("BEGIN;")
        const response = await pgClient.query(userQuery, [username, email, password])
        const userId = response.rows[0].id
        await new Promise(x => setTimeout(x, 100 * 1000))
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId])
        await pgClient.query("COMMIT;")


        res.send({
            message: "You have signed up"
        })

    } catch (error) {
        res.send({
            message: `Error in signin up ${error}`
        })
    }

})

app.get("/metadata", async (req, res) => {
    const id = req.query.id
    try {
        const query1 = `SELECT username, email, id FROM users WHERE id=$1`
        const response1 = await pgClient.query(query1, [id])

        const query2 = `SELECT * FROM addresses WHERE user_id=$1`
        const response2 = await pgClient.query(query2, [id])

        res.json({
            user: response1.rows[0],
            addresses: response2.rows
        })
    } catch (error) {
        console.log(`Error in getting users details ${error}`);
    }

})


app.get("/better-metadata", async (req, res) => {
    const id = req.query.id

    try {
        const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users JOIN addresses on users.id = addresses.user_id
    WHERE users.id = $1;`

        const response = await pgClient.query(query, [id])

        res.json({
            response: response.rows
        })
    } catch (error) {
        console.log(`Error in getting users details ${error}`);

    }

})

app.listen(3000, () => console.log(`App running on port: 3000`))