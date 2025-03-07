import express from "express"

const app = express()

app.get("/sigin", (req, res)=>{

    res.send("sigin endpoing")
})

app.listen(3001)