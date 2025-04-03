import { model, Schema } from "mongoose";
import { districts, genders } from "../../utils/tools";
import { TCustomer } from "./customer.interface";


const customerSchema = new Schema<TCustomer>({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    email : {type:String, required:true,unique:true},
    phone: { type: String, minlength: 11, maxlength: 11, default: null },
    gender: { type: String, enum: genders, default: null },
    district: { type: String, enum: districts, default: 'Dhaka', trim: true },
    address: { type: String, max: 120, default: null },
    deliverAddress: { type: [], default: [] },
    profile: { type: String, trim: true, default: 'https://i.ibb.co.com/R0tWRV4/man.png' },
},
    { timestamps: true }
);

export const customerModel = model<TCustomer>('customers', customerSchema)