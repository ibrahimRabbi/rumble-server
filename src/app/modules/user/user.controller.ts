import { NextFunction, Request, Response } from "express";
import { userModel } from "./user.model";
import { signupService } from "./user.services";



export const signupController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const insertUserAndGetToken = await signupService(req.body)
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


export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body

    try {
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
            { $pull: { deliverAddress: { $or: [{address: data?.address},{district:data?.district}]}} },
            { new: true }
        )
        
        res.status(200).json({ success: true, status: 200, response: deleteaddress })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


