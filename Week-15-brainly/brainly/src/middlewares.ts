import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { USER_JWT_SECRET } from "./config";


export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]

    if (!token) {
         res.status(401).json({
            message: "Unathorized"
        })
        return
    }

    try {
        const decoded = jwt.verify(token as string, USER_JWT_SECRET as string) as {id : string}
        req.userId = decoded.id
        next()
    } catch (error) {
        res.status(403).send({
            message: "Invalid Token", 
            error
        })
    }

}