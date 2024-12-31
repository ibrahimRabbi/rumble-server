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






export const getSingleOrderController = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const orders = await OrderModel.findById(req.query?.id).populate('items.productId')
        res.status(200).json({ success: true, status: 200, response: orders })
    } catch (err: any) {
        next(err)
    }
}


export const getAllOrderController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        if (req.query.orderStatus ==='all') {
            const orders = await OrderModel.find().sort({ createdAt: -1 })
            res.status(200).json({ success: true, status: 200, response: orders })
        } else {
            const orders = await OrderModel.find(req.query).sort({ createdAt: -1 })
            res.status(200).json({ success: true, status: 200, response: orders })
        }
       
    } catch (err: any) {
        next(err)
    }
}


export const updateOrderController = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const update = await OrderModel.findByIdAndUpdate(req.query?.id,{orderStatus:req.body.status},{new:true,upsert:true})
        res.status(200).json({ success: true, status: 200, response: update })
    } catch (err: any) {
        next(err)
    }
}
