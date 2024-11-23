import { Router } from "express";
import { getNewArrivalProductController, getProductController, getSubProductController, insertproductController } from "./products.controller";


export const prodcutRoute = Router()

prodcutRoute.post('/insert-product', insertproductController)

prodcutRoute.get('/get-products', getProductController)

prodcutRoute.get('/get-products/new-arrival', getNewArrivalProductController)

prodcutRoute.get('/get-products/product', getSubProductController)