import { Router } from "express";
import { adminCreateController, customerSignupController, getAdminUserController, getAllUserController, sendOtpController } from "./user.controller";
import { emailVerification } from "../../middleWare/emailVerification";
import { aunthentication } from "../../middleWare/Authentication";

export const userRoute = Router()

userRoute.post('/send-otp', emailVerification, sendOtpController)

userRoute.post('/create-customer', customerSignupController)

userRoute.post('/create-admin', adminCreateController)
    
userRoute.get('/getAllUser', getAllUserController)

userRoute.get('/getAdminUser', aunthentication, getAdminUserController)





