 import { SortOptions } from "./products.interface"
import { productModel } from "./products.model"



export const getProductServices = async (query:any) => {
     
    const sort : SortOptions = {
        "Low price": { price: 1 },
        'High price': { price: -1 },
        'new Arrival': { createdAt: -1 },
        'Rating': { rating: 1 },
        "relevance":{}
        
    }


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


    if (query.newArrival) {
        const finding = await productModel.find().sort({ createdAt: -1 }).limit(parseInt(query.limit))
        return finding
    }


    // if (query.sort) {
    //     const sortedBy = sort[query.sort as keyof SortOptions]  
    //     const finding = await productModel.find().sort(sortedBy as any).limit(parseInt(query.limit))
    //     return finding
    // }
    
    
    const finding = await productModel.find().limit(parseInt(query?.limit))
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


 