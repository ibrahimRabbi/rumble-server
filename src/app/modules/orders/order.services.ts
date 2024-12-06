import mongoose from "mongoose"
import { orderId } from "../../utils/generateOrderId"
import { cartModel } from "../cart/cart.model"
import { Torder } from "./order.interface"
import { OrderModel } from "./order.model"

interface Item {
    email: string;
}

interface Order {
    items: Item[];
}





export const createOrderservice = async (payload: Torder) => {
    const session = await mongoose.startSession()

    const userEmail = payload.email  
    const id = orderId.toUpperCase()
    const orderData: Torder = {
        ...payload,
        paymentStatus: 'unpaid',
        orderStatus : 'pending',
        orderId: id
    }
    
    try {
        session.startTransaction()
        const createingOrder = await OrderModel.create([orderData],{ session: session })
        if (!createingOrder) {
            throw new Error('order create faild')
        }

        
        const deleteCart = await cartModel.deleteMany({ email: userEmail }, {session: session })
        if (!deleteCart) {
            throw new Error('cart data delete faild')
        }
        

        await session.commitTransaction()
        await session.endSession()
        return [createingOrder, deleteCart]
        
    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        return err
    }

}




export const getOrderService = async (email: string, query: any) => {
   
    if (query.search) {
        const finded = await OrderModel.find({ 
            $or: [
                { orderId: { $regex: query.search, $options: 'i' } },
                {orderId : query.search}
            ]
         }).sort({ createdAt: -1 })
        return finded
    }
    const finded = await OrderModel.find({ email: email }).sort({ createdAt: -1 })
    return finded
}