import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import envData from "../config/config";
import { userModel } from "../modules/user/user.model";

export const aunthentication = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization
 
    try {
        if (!token) {
            throw new Error('unauthorized user')
        }

        const decodeUser = jwt.verify(token as string, envData.secretKey as string)
         
        if (!decodeUser) {
            throw new Error('unauthorized user')
        }
        const findUser = await userModel.findOne({ email: (decodeUser as JwtPayload).email })
        if (!findUser) {
            throw new Error('unauthorized user')
        }
        req.user = decodeUser as JwtPayload
        next()
        
    } catch (err: any) {
        next({ statusCode: 404, err })
     }
    
}