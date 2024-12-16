import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { USER_JWT_SECRET } from "./config";

interface customRequest extends Request {
    userId?: string
}

export const userMiddleware = (req: customRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authentication;
    if (!token) {
        return res.status(401).send({
            message: "You are not signed in"
        })
    }

    try {
        const decoded = jwt.verify(token as string, USER_JWT_SECRET as string) as {id : string}
        req.userId = decoded.id
        next()
    } catch (error) {
        res.status(403).send({
            message: "Invalid Token ", 
            error
        })
    }

}