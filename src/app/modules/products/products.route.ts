import { Router } from "express";
import { deleteProductController, getProductController, getSubProductController, insertproductController, updateProductController } from "./products.controller";


export const prodcutRoute = Router()

prodcutRoute.post('/insert-product', insertproductController)

prodcutRoute.get('/get-products', getProductController)

prodcutRoute.get('/get-products/product', getSubProductController)

prodcutRoute.delete('/delete-products/:id', deleteProductController)

prodcutRoute.patch('/update-product/:id', updateProductController)