import { NextFunction, Request, Response } from "express"
import { customerModel } from "./customer.model"
import { userModel } from "../user/user.model"
import { get } from "http"

 



export const getsingleCustomerController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getUser = await customerModel.findOne({ email: req.user?.email }).populate('userId')
        res.status(200).json({ success: true, status: 200, response: getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}




export const updateCustomerController = async (req: Request, res: Response, next: NextFunction) => {
    const data = { ...req.body, id: Math.random().toString().split('.')[1] }

    try {
        const checkExistancy = await customerModel.find({
            deliverAddress: {
                $elemMatch: { district: data.district, address: data.address }
            }
        })
        if (checkExistancy.length > 0) {
            throw new Error('this details already added')
        }
        const updateUser = await customerModel.findOneAndUpdate(
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
console.log(data)
    try {
        const deleteaddress = await customerModel.findOneAndUpdate(
            { email: req.user.email },
            { $pull: { deliverAddress: { id: data.id } } },
            { new: true }
        )

        res.status(200).json({ success: true, status: 200, response: deleteaddress })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


