import envData from "../../config/config";
import { userModel } from "../user/user.model";
import { TsignIn } from "./signin.interface";
import jwt from "jsonwebtoken";


export const signInService = async (payload:TsignIn) => {
    const checkExistancy = await userModel.findOne({ email: payload.email })

    
    if (!checkExistancy) {
        throw new Error('user is not exist')
    }

    if (checkExistancy.password !== payload.password) {
        throw new Error('invalid password')
    }

    if (checkExistancy.isDeleted) {
        throw new Error('unthorized user')
    }
    
    const credentials = {
        name: checkExistancy.name,
        email: checkExistancy.email,
        phone: checkExistancy.phone,
        role: checkExistancy.role,
    }
    const accessToken = jwt.sign(credentials, envData.secretKey as string, { expiresIn: '1h' })
    return accessToken
}