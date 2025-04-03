import { Router } from "express";
import { aunthentication } from "../../middleWare/Authentication";
import { deleteAddressController, getsingleCustomerController, updateCustomerController } from "./customer.controller";

export const customerRoute = Router()

customerRoute.get('/get-customer', aunthentication, getsingleCustomerController)

customerRoute.patch('/update-customer', aunthentication, updateCustomerController)

customerRoute.patch(`/delete-address`, aunthentication, deleteAddressController)