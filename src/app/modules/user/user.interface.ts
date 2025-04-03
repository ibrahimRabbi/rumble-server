
export type Tuser = {
    name: string,
    email: string,
    password: string,
    role?: 'customer' | 'admin' | 'seller',
    isDeleted: boolean
}