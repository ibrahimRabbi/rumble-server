import { NextFunction, Request, Response } from "express"
import { cartModel } from "./cart.model"
import { inserCartServices } from "./cart.services"


export const insertCartController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const insertingData = await inserCartServices(req.body)
        res.status(200).json({ success: true, status: 200, response: insertingData })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}


export const getCartController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const insertingData = await cartModel.find({ email: req?.query?.email }).populate('productId')
        res.status(200).json({ success: true, status: 200, response: insertingData })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}


export const deleteCartController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const insertingData = await cartModel.findByIdAndDelete(req?.params?.id)
        res.status(200).json({ success: true, status: 200, message: 'item remove successfully', response: insertingData })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}
