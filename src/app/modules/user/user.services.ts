import envData from "../../config/config";
import { Tuser } from "./user.interface";
import jwt from 'jsonwebtoken';
import { userModel } from "./user.model";
import mongoose from "mongoose";
import { customerModel } from "../customers/customer.model";
import { TCustomer } from "../customers/customer.interface";



//user create API
export const customerSignupService = async (payload: Tuser) => {
     
     const session = await mongoose.startSession()

     try {
          session.startTransaction()

          const userData: Tuser = {
               name: payload.name,
               email: payload.email,
               password: payload.password,
               role: 'customer',
               isDeleted: false
          }

          const insertUser = await userModel.create([userData], { new: true, session: session })
          if (!insertUser.length) {
               throw new Error('user could not created successfully')
          }

        
          const customerData: Partial<TCustomer> = {
               userId: insertUser[0]._id,
               email:payload.email,
          }

          const createCustomer = await customerModel.create([customerData], { new: true, session: session })
          if (!createCustomer.length) {
               throw new Error('customer could not create successfully')
          }

          await session.commitTransaction()
          await session.endSession()
          if (createCustomer) {
               const accessToken = jwt.sign(userData, envData.secretKey as string, { expiresIn: '7d' });
               return accessToken
          }
     } catch (err: any) {
          await session.abortTransaction()
          await session.endSession()
          throw new Error(err)
     }

}







//admin create api
export const adminCreateService = async (payload: Tuser) => {
 
     const adminData: Tuser = {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          role: 'admin',
          isDeleted: false
     }
     const checkExistancy = await userModel.findOne({ email: { $eq: payload?.email } })
     if (checkExistancy) {
          throw new Error('email already used please use another email')
     }

     const createAdmin = await userModel.create(adminData)
     if (!createAdmin) {
          throw new Error('admin could not created successfully')
     }
     
     return createAdmin

}












// type Tprovider = {
//      id: string,
//      name: string,
//      email: string,
//      image: string
// }

// export const providerSignupService = async (payload: Tprovider) => {

//      const userData = {
//           name: payload.name,
//           email: payload.email,
//           profile: payload.image,
//      }

//      const checkUserExistancy = await userModel.findOne({ email: { $eq: payload.email } })

//      if (checkUserExistancy) {
//           const credentials = { name: payload.name, email: payload.email, role: 'user' }
//           const accessToken = jwt.sign(credentials, envData.secretKey as string, { expiresIn: '7d' });
//           return accessToken

//      } else {
//           const insertUser = await userModel.create(userData)
//           if (insertUser) {
//                const credentials = { name: payload.name, email: payload.email, role: 'user' }
//                const accessToken = jwt.sign(credentials, envData.secretKey as string, { expiresIn: '7d' });
//                return accessToken
//           }
//      }

// }