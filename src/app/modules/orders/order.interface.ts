import { Types } from "mongoose"
import { Tcart } from "../cart/cart.interface"

export type TorderDetails = { name: string, number: string, address: string, district: string }



export type Torder = {
    email: string,
    userId : Types.ObjectId
    orderId : string,
    items: Tcart[],
    totalQuantity:number
    deliverDetails: TorderDetails,
    delivaryCharge : number
    TotalAmount: number,
    color: string,
    size:string
    paymentStatus: 'paid' | 'unpaid' ,
    orderStatus: 'pending' | 'confirmed' | 'delivered',
}