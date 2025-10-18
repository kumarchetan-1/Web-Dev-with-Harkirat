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
    const authHeader =  req.headers['authorization'] ?? "" // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNzE3N2RkZC0zYWJjLTQ0OGEtOGQyYS0wYzcwMWJlMGVkM2MiLCJpYXQiOjE3NDI2NzE2MjV9.ku5E2Pxqc7pEM5DTD-T6UnES8kpzImvEPKXi4pd0LBY" 
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNzE3N2RkZC0zYWJjLTQ0OGEtOGQyYS0wYzcwMWJlMGVkM2MiLCJpYXQiOjE3NDMwMzg1ODd9.yxxsVHdzVBzMrheDxA7cqWi99XysRdfzQUcSEMBvfcA" // authHeader.split(" ")[1]
    if(!token){
        res.status(403).json({ message: "Unauthorised" })
        return
    }  

   try {
    const decoded = jwt.verify(token, JWT_SECRET)
       if (typeof decoded === "object" && "userId" in decoded) {
        req.userId = decoded.userId as string
         next()
       } 
    } catch(error){
        res.status(403).json({
            message: "Invalid token"
        })
    }
   
}