import { model, Schema } from "mongoose";
import { Torder, TorderDetails } from "./order.interface";
import { cartSchema } from "../cart/cart.model";

const deliverDetails = new Schema<TorderDetails>({
    name: { type: String, required: true },
    number: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
})


const OrderSchema = new Schema<Torder>({
    userId: { type: Schema.Types.ObjectId, ref:'users', required: true, trim: true },
    items: { type: [cartSchema], required: true },
    deliverDetails: { type: deliverDetails, required: true },
    amount: { type: Number, required: true }, 
})


export const OrderModel = model<Torder>('orders',OrderSchema)