import { NextFunction, Request, Response } from "express";
import { callRequestModel } from "./call.model";
import { TcallRequest } from "./call.interface";


export const callRequestController = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const checkexistancy = await callRequestModel.findOne({ user: req?.body?.user })
        if (checkexistancy?.status === 'pending') {
            throw new Error('already recevied')
        }
        const callRequestFetching = await callRequestModel.create(req.body)
        res.status(200).json({ success: true, status: 200, response: callRequestFetching })
    } catch (err: any) {
        next({statusCode:404,err})
    }
}



