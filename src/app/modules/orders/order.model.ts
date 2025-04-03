import mongoose, { model, Schema, Types } from "mongoose";
import { TItem, Tnote, Torder, TorderDetails } from "./order.interface";



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

const noteSchema = new Schema<Tnote>({
    message: { type: String, required: true },
    date: { type: String, required: true }
})

const OrderSchema = new Schema<Torder>({
    email: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    orderId: { type: String, required: true, trim: true },
    items: { type: [itemSchema], required: true },
    totalQuantity: { type: Number, required: true },
    deliverDetails: { type: deliverDetails, required: true },
    delivaryCharge: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], required: true, trim: true },
    orderStatus: { type: String, enum: ['pending', 'on hold', 'confirmed', 'in transit', 'delivered', 'cancelled'], required: true, trim: true },
    notes: { type: [noteSchema], default: [] },
}, { timestamps: true })


OrderSchema.pre('save', () => {

})


export const OrderModel = model<Torder>('orders', OrderSchema)