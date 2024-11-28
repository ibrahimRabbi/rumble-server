import { Router } from "express";
import { createOrderController } from "./order.controller";

export const orderRoute = Router()

orderRoute.post('/create-order',createOrderController)