import { Types } from "mongoose"
import { Tcart } from "../cart/cart.interface"

export type TorderDetails = {
    name: string,
    number: string,
    address: string,
    district: string
}

export type TItem = {
    email?: string,
    productId: Types.ObjectId,
    quantity: number,
    size: string,
    color: string
}

export type Tnote = {
    message: string,
    date: string
}

export type Torder = {
    email: string,
    userId : Types.ObjectId
    orderId : string,
    items: TItem[],
    totalQuantity:number
    deliverDetails: TorderDetails,
    delivaryCharge : number
    totalAmount: number,
    color: string,
    size:string
    paymentStatus: 'paid' | 'unpaid' ,
    orderStatus: 'pending' | 'confirmed' | 'in transit' | 'delivered' | 'on hold' | 'cancelled',
    notes : Tnote[],
}