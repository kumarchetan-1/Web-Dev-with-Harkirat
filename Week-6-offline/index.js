const express = require("express")
const zod = require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "somethingsomething"
const app = express()

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

function signJWT(username, password) {
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if (usernameResponse.success && passwordResponse.success) {
        return jwt.sign({
            username
        }, JWT_SECRET)
    }
    return null
}

function decodeJWT(token) {
    const decodedData = jwt.decode(token)
    if (decodedData) {
        return true
    }
    return false
}

function verifyJwt(token) {
    const verificationStatus = true
    try {
       jwt.verify(token, JWT_SECRET)
    } catch (error) {
        return false
    }
    return verificationStatus
}