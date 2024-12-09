import { Types } from "mongoose"

export type TcallRequest = {
    user: Types.ObjectId,
    status: 'pending' | 'done'
}