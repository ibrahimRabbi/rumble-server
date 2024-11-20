import { productModel } from "./products.model"


export const getProductServices = async (query:any) => {
    
    if (query.id) {
        const findsingleData = await productModel.findById(query.id)
        return findsingleData
    } else {
        const finding = await productModel.find()
        return finding

    }
    
}