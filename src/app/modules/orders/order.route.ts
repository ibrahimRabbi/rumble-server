import { Router } from "express";
import { createOrderController, getOrderController } from "./order.controller";
import { aunthentication } from "../../middleWare/Authentication";

export const orderRoute = Router()

orderRoute.post('/create-order', createOrderController)

orderRoute.get('/get-order', aunthentication, getOrderController)