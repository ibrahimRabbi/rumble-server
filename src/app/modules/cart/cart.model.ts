import { model, Schema } from "mongoose";
import { Tcart } from "./cart.interface";

const cartSchema = new Schema<Tcart>({
    email: { type: String, required: true },
    quantity: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, ref:'products', required: true },
    color: { type: String, required: true },
    size: { type: String, required: true }
})

export const cartModel = model<Tcart>('cart',cartSchema)