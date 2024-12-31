import { productModel } from "./products.model"



export const getProductServices = async (query: any) => {

    if (query.category === "null") {
        const finding = await productModel.find().limit(parseInt(query.limit))
        return finding
    }

    if (query.newArrival) {
        const finding = await productModel.find().sort({ createdAt: -1 }).limit(parseInt(query.limit))
        return finding
    }

    if (query.id) {
        const findsingleData = await productModel.findById(query.id)
        return findsingleData
    }


    if (query.category) {
        if (query.category === 'watchs bags') {

            const findingData = await productModel.find({
                $or: [
                    { subCategory: { $regex: 'watchs', $options: 'i' } },
                    { subCategory: 'watchs' },
                    { subCategory: { $regex: 'bags', $options: 'i' } },
                    { subCategory: 'bags' }
                ]
            })
            return findingData
        } else {
            const findingData = await productModel.find({
                $or: [
                    { category: { $regex: `^${query.category}`, $options: 'ix', } },
                    { subCategory: { $regex: `^${query.category}`, $options: 'i' } },
                    { category: query.category },
                    { subCategory: query.category }
                ]
            }).limit(parseInt(query.limit))
            return findingData
        }
    }


    if (query.search) {
        const findingData = await productModel.find({
            $or: [
                { title: { $regex: query.search, $options: 'i', } },
                { category: { $regex: query.search, $options: 'ix', } },
                { subCategory: { $regex: query.search, $options: 'i' } },
                { title: query.search },
                { category: query.search },
                { subCategory: query.search }
            ]
        }).limit(parseInt(query.limit))
        return findingData
    }


    if (query.gender) {
        const finding = await productModel.find({ gender: query.gender }).limit(parseInt(query.limit))
        return finding
    }

    if (query.deal) {
        const finding = await productModel.find().limit(parseInt(query.limit))
        const findOfferProducts = finding.filter(v => v.offer !== '')
        return findOfferProducts
    }


    if (query.stockOut) {
        const finding = await productModel.find({ stock: { $lt: 1 } })
        return finding
    }



    const finding = await productModel.find().limit(parseInt(query.limit)).sort({ createdAt: -1 })
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


