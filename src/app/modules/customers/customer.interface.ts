import { Types } from "mongoose"

export type DeliverAddress = {
    name: string,
    phone: string,
    address: string,
    district: string
}

export type TCustomer = {
    userId: Types.ObjectId,
    email : string,
    phone?: string,
    district?: string,
    address?: string,
    gender?: 'male' | 'female' | 'others'
    profile?: string,
    deliverAddress: []
}