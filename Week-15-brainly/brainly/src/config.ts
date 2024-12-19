
import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT
export const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING
export const USER_JWT_SECRET = process.env.USER_JWT_SECRET