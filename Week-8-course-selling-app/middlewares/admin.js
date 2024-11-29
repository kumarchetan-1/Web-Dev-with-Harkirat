const jwt = require("jsonwebtoken")
const { ADMIN_JWT_SECRET } = require("../config")

// high label function to use a single authentication middleware for both user and admin routes 
// in that case you have to use it as authMiddleware(ADMIN_JWT_SECRET) inside admin routes
// function authMidlleware(secret) {
//     return function adminMiddleware(req, res, next) {
//         const token = req.headers.authentication
//         const response = jwt.verify(token, secret)

//         if (response) {
//             response.userId = req.userId
//             next()
//             return
//         } else{
//             res.status(401).send({
//                 message: "You are not signed in"
//                })
//         }

//     }
// }

function adminMiddleware(req, res, next) {
    const token = req.headers.authentication
    const decoded = jwt.verify(token, ADMIN_JWT_SECRET)

    if (decoded) {
        req.userId = decoded.id
        next()
        return
    } else {
        res.status(401).send({
            message: "You are not signed in"
        })
    }

}

module.exports = {
    adminMiddleware
}