const express = require("express")
const app = express()


// function that returns a boolean if a person is more than 14

function isOldEnough(age) {
    if (age => 14) {
        return true
    } else{
        return false
    }
}


app.get("/ride1", function (req, res) {
if (isOldEnough(req.query.age)) {
    res.json({
        msg: "You have successfully completed your first ride" 
    })      
} else {
    res.status(411).json({
        msg: "Sorry you are under 14 years of age." 
    })
}
})

app.listen(3000)