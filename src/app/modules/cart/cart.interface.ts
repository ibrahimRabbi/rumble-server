import { Types } from "mongoose"


export type Tcart = {
    email: string,
    productId: Types.ObjectId,
    quantity: number,
    size: string,
    color:string
}