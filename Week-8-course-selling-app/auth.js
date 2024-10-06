const jwt = require("jsonwebtoken")
const JWT_SECRET = "SEcr8"

function auth(req, res, next) {
    const token = req.headers.authorization
try {
    const response = jwt.verify(token, JWT_SECRET)

    if (response) {
        response.userId = req.userId
        next()
        return
    } else{
        res.status(401).send({
            message: "Invalid credentials"
           })
    }
} catch (error) {
    res.status(401).json({
        message: "Invalid token",
        error: error
    })
}
   
}

module.exports({
    auth, JWT_SECRET
})