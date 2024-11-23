const express = require("express")
const app = express()

var users = [
    {
        userName: "Chetan",
        kidneys: [{
            healthy: false
        },
        {
            healthy: true
        }, {
            healthy: true
        }
        ]
    }
]

app.use(express.json())

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys
    const noOfKidneys = johnKidneys.length
    const healthyKidneys = johnKidneys.filter((kidney) => {
        return kidney.healthy === true
    })
    const noOfHealthyKidneys = healthyKidneys.length
    res.json({
        "number of Kidneys": noOfKidneys,
        "no of Healthy Kidneys": noOfHealthyKidneys,
        "no of unhealthy kidneys": noOfKidneys - noOfHealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push(
        { healthy: isHealthy }
    )
    res.json({ status: "Done" })
})


// Converts unhealthy kidneys to healthy
app.put("/", function (req, res) {
    if (isUnhealthyKidneys()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({})
    } else {
        res.status(411).json({ msg: "You don't have any unhealthy kidneys to replace with healthy kidneys." })
    }
})

//  Remove all unhealthy kidneys
app.delete("/", function (req, res) {
    if (isUnhealthyKidneys()) {
        users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy == true)
        res.json({ status: "All unhealthy kidney removed" })
    } else {
        res.status(411).json({ msg: "You don't have any unhealthy kidneys." })
    }

})

function isUnhealthyKidneys() {
    let atleastOneUnhealthyKidney = false
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys.healthy) {
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000)