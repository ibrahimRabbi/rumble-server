import { Router } from "express";
import { adminSignInController, signInController } from "./signin.controller";

export const signInRoute = Router()

signInRoute.post('/sign-in', signInController)
signInRoute.post('/admin-sign-in', adminSignInController)