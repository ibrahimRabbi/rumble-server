import { Router } from "express";
import { deleteCartController, getCartController, insertCartController, updateCartController } from "./cart.controller";

export const cartRoute = Router()

cartRoute.post('/insert-cart', insertCartController)
cartRoute.get('/get-cart', getCartController)
cartRoute.delete('/delete/:id', deleteCartController)
cartRoute.patch('/update-cart/:id', updateCartController)