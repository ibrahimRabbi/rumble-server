import { NextFunction, Request, response, Response } from "express";
import { userModel } from "./user.model";
import { adminCreateService, customerSignupService} from "./user.services";
 



export const sendOtpController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ success: true, status: 200, otp: req.otpCode })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}



export const customerSignupController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const insertUserAndGetToken = await customerSignupService(req.body)
        res.status(200).json({ success: true, status: 200, accessToken: insertUserAndGetToken })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}



export const adminCreateController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await adminCreateService(req.body)
        res.status(200).json({ success: true, status: 200, response: created })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const getAllUserController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const getUser = await userModel.find(req.query)
        res.status(200).json({ success: true, status: 200, response: getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const getAdminUserController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        if (req.user.role !== 'admin') {
            throw new Error('unauthorized access')
        }
        const getUser = await userModel.findOne({email:req?.user?.email})
        res.status(200).json({ success: true, status: 200, response: getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


