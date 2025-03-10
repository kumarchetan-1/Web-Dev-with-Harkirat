import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"

declare global{
    namespace Express{
        interface Request{
            userId?: string
        }    
    }
}


export function middleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers['authorization'] ?? ""
    if(!token) return res.status(403).json({ message: "Unauthorised" })

   try {
    const decoded = jwt.verify(token, JWT_SECRET)
       if (typeof decoded === "object" && "userId" in decoded) {
        req.userId = decoded.userId as string
        return next()
       } else{

       }
    } catch(error){
        res.status(403).json({
            message: "Invalid token"
        })
    }
   
}