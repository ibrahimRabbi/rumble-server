import { Router } from "express";
import { getProductController, insertproductController } from "./products.controller";


export const prodcutRoute = Router()

prodcutRoute.post('/insert-product', insertproductController)

prodcutRoute.get('/get-products',getProductController)