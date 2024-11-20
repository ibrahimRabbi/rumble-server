 
export type DeliverAddress = {
    name: string,
    phone: string,
    address: string,
    district : string
 }

export type Tuser = {
    name: string,
    email: string,
    phone: string,
    district: string,
    address: string,
    gender : 'male' | 'female' | 'others'
    role?: 'user' | 'admin',
    password: string,
    profile?: string,
    deliverAddress : DeliverAddress[]
    isDeleted: boolean
}