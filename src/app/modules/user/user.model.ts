import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";


// const deliverAddressSchema = new Schema<DeliverAddress>({
//     name: { type: String, required: true },
//     phone: { type: String, minlength: 11, maxlength: 11, required: true, trim: true },
//     district: { type: String, enum: districts, default: 'Dhaka', trim: true },
//     address: { type: String, max: 120, required: true },
//  })

// const userSchema = new Schema<Tuser>({
//     name: { type: String, maxlength: 25, required: true, trim: true },
//     email: { type: String, required: true, unique:true, trim: true },
//     password: { type: String, minlength:8, required: true, trim: true },
//     phone: { type: String, minlength:11, maxlength: 11, required: true, trim: true },
//     gender: { type: String, enum: genders, required: true, trim: true },
//     district: { type: String, enum: districts, default: 'Dhaka', trim: true },
//     address: { type: String, max: 120, required: true },
//     deliverAddress : {type :[deliverAddressSchema],required:true},
//     role: { type: String, enum: ['user', 'admin'], required:true, trim: true },
//     profile: { type: String, trim: true, default: 'https://i.ibb.co/jz5bg13/image.jpg' },
//     isDeleted : {type:Boolean,default:false}
// },
//     {timestamps:true}
// );

// export const userModel = model<Tuser>('users', userSchema)





const userSchema = new Schema<Tuser>({
    name: { type: String, maxlength: 25, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, minlength: 8, default: 'rumble@@33' },
    role: { type: String, enum: ['customer', 'admin','seller'], default: 'customer' },
    isDeleted: { type: Boolean, default: false },
},
    { timestamps: true }
);

export const userModel = model<Tuser>('users', userSchema)






