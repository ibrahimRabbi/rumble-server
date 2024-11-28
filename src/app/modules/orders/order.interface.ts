import { Types } from "mongoose"
import { Tcart } from "../cart/cart.interface"

export type TorderDetails = { name: string, number: string, address:string, district:string }



export type Torder = {
    userId: Types.ObjectId ,
        items: Tcart[],
        deliverDetails: TorderDetails  ,
        amount:  number
}