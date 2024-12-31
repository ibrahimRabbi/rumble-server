import { NextFunction, Request, response, Response } from "express";
import { userModel } from "./user.model";
import { providerSignupService, signupService } from "./user.services";


export const signupController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ success: true, status: 200, otp: req.otpCode })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const otpVerifyController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const insertUserAndGetToken = await signupService(req.body)
        res.status(200).json({ success: true, status: 200, accessToken: insertUserAndGetToken })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}





export const providerSignupController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const insertUserAndGetToken = await providerSignupService(req.body)
        res.status(200).json({ success: true, status: 200, accessToken: insertUserAndGetToken })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}



export const getsingleUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getUser = await userModel.findOne({ email: req.user?.email })
        res.status(200).json({ success: true, status: 200, response: getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const getAllUserController = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get all user')
    try {
        const getUser = await userModel.find()
        res.status(200).json({ success: true, status: 200, response: getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body

    try {
        const checkExistancy = await userModel.find({
            deliverAddress: {
                $elemMatch: { district: data.district, address: data.address }
            } 
        })
        if (checkExistancy.length > 0) {
           throw new Error('this details already added')
       }
        const updateUser = await userModel.findOneAndUpdate(
            { email: req.user.email },
            { $addToSet: { deliverAddress: data } },
            { new: true })
        res.status(200).json({ success: true, status: 200, response: updateUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const deleteAddressController = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body

    try {
        const deleteaddress = await userModel.findOneAndUpdate(
            { email: req.user.email },
            { $pull: { deliverAddress: { _id: data._id } } },
            { new: true }
        )

        res.status(200).json({ success: true, status: 200, response: deleteaddress })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


