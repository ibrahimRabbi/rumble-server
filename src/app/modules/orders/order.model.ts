import { model, Schema } from "mongoose";
import { Torder, TorderDetails } from "./order.interface";
import { cartSchema } from "../cart/cart.model";
import { string } from "joi";

const deliverDetails = new Schema<TorderDetails>({
    name: { type: String, required: true },
    number: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
})


const OrderSchema = new Schema<Torder>({
    email: { type: String, required: true, trim: true },
    orderId : {type:String, required:true,trim:true},
    items: { type: [cartSchema], required: true },
    totalQuantity: { type: Number, required : true},
    deliverDetails: { type: deliverDetails, required: true },
    amount: { type: Number, required: true }, 
    paymentStatus: { type: String, enum: ['paid','unpaid'], required: true, trim: true },
    orderStatus: { type: String, enum: ['pending', 'confirmed', 'delivered'], required: true, trim: true }
},{timestamps:true})


OrderSchema.pre('save', () => {
    
})


export const OrderModel = model<Torder>('orders',OrderSchema)