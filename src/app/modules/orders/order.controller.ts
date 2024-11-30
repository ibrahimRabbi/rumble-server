import { NextFunction, Request, response, Response } from "express";
import { OrderModel } from "./order.model";
import { cartModel } from "../cart/cart.model";
import { createOrderservice, getOrderService } from "./order.services";
 

export const createOrderController = async (req:Request, res:Response, next:NextFunction) => {
   
    try {
        const createingOrder = await createOrderservice(req?.body)
        res.status(200).json({success:true,status:200,response: createingOrder})
    } catch (err: any) {
        next(err)
   }
}


export const getOrderController = async (req: Request, res: Response, next: NextFunction) => {
 const email = req?.user?.email
    try {
        const orders = await getOrderService(email, req?.query)
        res.status(200).json({ success: true, status: 200, response: orders })
    } catch (err: any) {
        next(err)
    }
}