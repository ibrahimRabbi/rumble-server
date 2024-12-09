import { Router } from "express";
import { deleteAddressController, getsingleUserController, otpVerifyController, providerSignupController, signupController, updateUserController } from "./user.controller";
import { aunthentication } from "../../middleWare/Authentication";
import { emailVerification } from "../../middleWare/emailVerification";

export const signupRoute = Router()

signupRoute.post('/sign-up', emailVerification, signupController)

signupRoute.post('/verify', otpVerifyController)

signupRoute.post('/provider-signup', providerSignupController)

signupRoute.get('/get-user', aunthentication, getsingleUserController),

signupRoute.patch(`/update-user`, aunthentication, updateUserController)

signupRoute.patch(`/delete-address`, aunthentication, deleteAddressController)



