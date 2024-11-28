import { Types } from "mongoose"
import { Tcart } from "../cart/cart.interface"

export type TorderDetails = { name: string, number: string, address: string, district: string }



export type Torder = {
    userId: Types.ObjectId,
    orderId : string,
    items: Tcart[],
    deliverDetails: TorderDetails,
    amount: number,
    status: 'pending'| 'confirmed'| 'deliverd'
}