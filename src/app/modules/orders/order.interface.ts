import { Types } from "mongoose"
import { Tcart } from "../cart/cart.interface"

export type TorderDetails = { name: string, number: string, address: string, district: string }



export type Torder = {
    email: string,
    orderId : string,
    items: Tcart[],
    totalQuantity:number
    deliverDetails: TorderDetails,
    amount: number,
    paymentStatus: 'paid' | 'unpaid' ,
    orderStatus: 'pending' | 'confirmed' | 'delivered',
}