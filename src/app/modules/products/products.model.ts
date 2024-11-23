import { model, Schema } from "mongoose";
import { Tproducts } from "./products.interface";
import { categories, subCategories } from "../../utils/tools";

const productSchema = new Schema<Tproducts>({
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 50, trim: true },
    stock: { type: Number, required: true, min: 10, trim: true },
    category: { type: String, required: true, enum: categories },
    subCategory: { type: String, required: true, enum: subCategories },
    coverPhoto: { type: String, required: true },
    detailPhoto: { type: [String], required: true, trim: true },
    colors: { type: [String], required: true, trim: true },
    sizes: { type: [String], required: true, trim: true },
    spacifications: { type: [String], required: true, trim: true },
    offer: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default:false },
}, { timestamps: true })

export const productModel = model<Tproducts>('products', productSchema)