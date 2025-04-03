import { Router } from "express";
import { addNoteController, createOrderController, getAllOrderController, getOrderController, getSingleOrderController, updateOrderController } from "./order.controller";
import { aunthentication } from "../../middleWare/Authentication";

export const orderRoute = Router()

orderRoute.post('/create-order', createOrderController)

orderRoute.get('/get-order', aunthentication, getOrderController)

orderRoute.get('/get-single-order', getSingleOrderController)

orderRoute.get('/get-all-order', getAllOrderController)

orderRoute.patch('/update-order', updateOrderController)

orderRoute.patch('/add-note', addNoteController)