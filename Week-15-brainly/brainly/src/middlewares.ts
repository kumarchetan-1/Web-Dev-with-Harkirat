import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { USER_JWT_SECRET } from "./config";

export interface customRequest extends Request {
    userId?: string
}

export const userMiddleware = (req: customRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    console.log(`Secret : ${USER_JWT_SECRET}`);
    
    
    if (!token) {
         res.status(401).json({
            message: "You are not signed in"
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