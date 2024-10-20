const express = require("express");

const app = express();

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(a+b)
    res.json({
        ans: a + b
    })
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000, ()=> console.log("App running on port 3000"));