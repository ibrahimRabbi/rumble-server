export type Tproducts = {
    title: string,
    price: number,
    stock: number,
    gender : 'male' | 'female' | 'trans gender' | 'unisex'
    category: string,
    subCategory: string,
    coverPhoto: string,
    detailPhoto: string[],
    colors: string[],
    sizes: string[],
    spacifications: string[],
    offer: string,
    description: string,
    isDeleted:boolean
}


export type SortOptions = {
    "Low price": { price: number };
    "High price": { price: number };
    "new Arrival": { createdAt: number };
    Rating: { rating: number };
    relevance: {};
};