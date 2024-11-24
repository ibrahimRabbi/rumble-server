import { Router } from "express";
import { getProductController, getSubProductController, insertproductController } from "./products.controller";


export const prodcutRoute = Router()

prodcutRoute.post('/insert-product', insertproductController)

prodcutRoute.get('/get-products', getProductController)

prodcutRoute.get('/get-products/product', getSubProductController)