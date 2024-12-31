import mongoose, { model, Schema, Types } from "mongoose";
import { Torder, TorderDetails } from "./order.interface";


export type TItem = {
    email?: string,
    productId: Types.ObjectId,
    quantity: number,
    size: string,
    color:string
}

export const itemSchema = new Schema<TItem>({
    email: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true }
})



const deliverDetails = new Schema<TorderDetails>({
    name: { type: String, required: true },
    number: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
})






const OrderSchema = new Schema<Torder>({
    email: { type: String, required: true, trim: true },
    userId : {type:Schema.Types.ObjectId,required:true,ref:'users'},
    orderId : {type:String, required:true, trim:true},
    items: { type: [itemSchema], required: true },
    totalQuantity: { type: Number, required : true},
    deliverDetails: { type: deliverDetails, required: true },
    delivaryCharge : {type:Number, required:true},
    TotalAmount: { type: Number, required: true }, 
    paymentStatus: { type: String, enum: ['paid','unpaid'], required: true, trim: true },
    orderStatus: { type: String, enum: ['pending', 'confirmed', 'delivered','cenceled'], required: true, trim: true }
},{timestamps:true})


OrderSchema.pre('save', () => {
    
})


export const OrderModel = model<Torder>('orders',OrderSchema)