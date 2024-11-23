import { productModel } from "./products.model"


export const getProductServices = async (query:any) => {
   console.log(query.subcategory)
    if (query.id) {
        const findsingleData = await productModel.findById(query.id)
        return findsingleData
    }

    
    
     
    if (query.category) { 
        const findingData = await productModel.find({ 
            $or: [
                { category: { $regex: query.category, $options: 'ix', } },
                {subCategory:{$regex : query.category, $options : 'i' }},
                { category: query.category },
                {subCategory: query.category}
            ]
        })
        return findingData
        
    }


    
    
    const finding = await productModel.find()
    return finding

}


export const getSubProduct = async (query: any) => {
    
        const findingData = await productModel.find({
            $and: [
                { category: { $regex: query.category, $options: "i" } },
                { subCategory: { $regex: query.subcategory, $options: "i" } },    
            ]
        })
    return findingData
      
}



export const getNewarrivalProductServices = async (query: any) => {

    const finding = await productModel.find().sort({ createdAt: -1 })
    return finding

}