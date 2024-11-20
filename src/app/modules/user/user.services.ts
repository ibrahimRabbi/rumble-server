import envData from "../../config/config";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import jwt from 'jsonwebtoken';



export const signupService = async (payload: Tuser) => {
       
    const checkUserExistancy = await userModel.findOne({ email: { $eq: payload.email } })
    
     if (checkUserExistancy) {
         throw new Error('this user already exist please use unique email')
     }  
     
     const finalUserData:Tuser = {
          ...payload,
          role:'user',
          deliverAddress: [{
               name: payload?.name,
               phone: payload?.phone,
               address: payload?.address,
               district: payload?.district
          }]  
     }
      
     const insertUser = await userModel.create(finalUserData)
     
     if (insertUser) {
          const credentials = { name: payload.name, email: payload.email, phone: payload.phone, role:'user'}
          const accessToken = jwt.sign(credentials, envData.secretKey as string, { expiresIn: '1h' });
          return accessToken 
     }
        
}