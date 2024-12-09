import { model, Schema } from "mongoose";
import { TcallRequest } from "./call.interface";


const callSchema = new Schema<TcallRequest>({
    user: { type: Schema.Types.ObjectId, ref:'users', required: true },
    status: { type: String, enum: ['pending', 'done'], default: 'pending' }
}, { timestamps: true })

export const callRequestModel = model<TcallRequest>('callRequest', callSchema)