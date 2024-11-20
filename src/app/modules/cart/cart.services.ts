import { Tproducts } from "../products/products.interface";
import { productModel } from "../products/products.model";
import { Tcart } from "./cart.interface";
import { cartModel } from "./cart.model";


export const inserCartServices = async (payload: Tcart) => {
    const checkExistancy = await cartModel.findOne({
        $and: [
            { productId: payload.productId },
            { color: payload.color },
            { size: payload.size }
        ]
    })
    const findingMainSource: any = await productModel.findById(payload?.productId)
    const stock = findingMainSource.stock

    if (payload.quantity > stock) {
        throw new Error('insufficient Quantity please reduce your quantity')
    }

    if (checkExistancy) {
        const totalQuantity = checkExistancy.quantity + payload.quantity
        if (totalQuantity > stock) {
            throw new Error('you have enough item in the cart')
        } else {
            const updating = await cartModel.findOneAndUpdate(checkExistancy._id, { quantity: checkExistancy.quantity + payload.quantity }, { new: true })
            return updating
        }
    } else {
        const inserting = await cartModel.create(payload)
        return inserting
    }
}