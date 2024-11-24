import { NextFunction, Request, response, Response } from "express";
import { productModel } from "./products.model";
import { getProductServices, getSubProduct } from "./products.services";


export const insertproductController = async (req: Request, res: Response, next: NextFunction) => {
 
    try {
        const insertingData = await productModel.create(req.body)
        res.status(200).json({ success: true, status: 200, response: insertingData })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}


export const getProductController = async (req: Request, res: Response, next: NextFunction) => {
 
    try {
        const gettingProducts = await getProductServices(req.query)
        res.status(200).json({ success: true, status: 200, response: gettingProducts })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}



export const getSubProductController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const gettingProducts = await getSubProduct(req?.query)
        res.status(200).json({ success: true, status: 200, response: gettingProducts })
    } catch (err: any) {
        next({ statusCode: 404, err })
    }
}
