const jwt = require("jsonwebtoken")
const { USER_JWT_SECRET } = require("../config")

function userMiddleware(req, res, next) {
    const token = req.headers.authentication
    const decoded = jwt.verify(token, USER_JWT_SECRET)
    if (decoded) {
        req.userId = decoded.id
        next()
        return
    } else {
        res.status(401).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware
}