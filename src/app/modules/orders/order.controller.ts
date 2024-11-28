import { NextFunction, Request, response, Response } from "express";
import { OrderModel } from "./order.model";
import { cartModel } from "../cart/cart.model";
import { createOrderservice } from "./order.services";
 

export const createOrderController = async (req:Request, res:Response, next:NextFunction) => {
   
    try {
        const createingOrder = await createOrderservice(req?.body)
        res.status(200).json({success:true,status:200,response: createingOrder})
    } catch (err: any) {
        next(err)
   }
}