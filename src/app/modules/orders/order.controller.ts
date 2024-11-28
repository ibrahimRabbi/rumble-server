import { NextFunction, Request, response, Response } from "express";
import { OrderModel } from "./order.model";
import { cartModel } from "../cart/cart.model";

export const createOrderController = async (req:Request, res:Response, next:NextFunction) => {
    const userEmail = req.body.items[0].email
     
    try {
        const createingOrder = await OrderModel.create(req.body)
          await cartModel.deleteMany({ email: userEmail })
        res.status(200).json({success:true,status:200,response: createingOrder})
    } catch (err: any) {
        next(err)
   }
}