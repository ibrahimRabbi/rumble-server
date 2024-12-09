import { Router } from "express";
import { callRequestController } from "./call.controller";
import { aunthentication } from "../../middleWare/Authentication";


export const callRoute = Router()

callRoute.post('/insert-call', callRequestController)
