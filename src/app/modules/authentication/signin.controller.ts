import { NextFunction, Request, Response } from "express";
import { signInService } from "./signin.services";


export const signInController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authenticationSGetToke = await signInService(req.body)
        res.status(200).json({ success: true, status: 200, accessToken: authenticationSGetToke })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}