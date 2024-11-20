import { Router } from "express";
import { deleteAddressController, getsingleUserController, signupController, updateUserController } from "./user.controller";
import { aunthentication } from "../../middleWare/Authentication";

export const signupRoute = Router()

signupRoute.post('/sign-up', signupController)

signupRoute.get('/get-user', aunthentication, getsingleUserController),

signupRoute.patch(`/update-user`, aunthentication, updateUserController)

signupRoute.patch(`/delete-address`, aunthentication, deleteAddressController)



