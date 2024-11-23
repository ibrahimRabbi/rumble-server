import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import envData from './app/config/config';
import { signupRoute } from './app/modules/user/user.route';
import { globalErrorHandle } from './app/middleWare/globalError';
import { signInRoute } from './app/modules/authentication/signin.route';
import { prodcutRoute } from './app/modules/products/products.route';
import { cartRoute } from './app/modules/cart/cart.route';
 


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))


//routes
app.use('/api', signupRoute)
app.use('/api/auth', signInRoute)
app.use('/api/products', prodcutRoute)
app.use('/api/cart',cartRoute)
 


//error
app.use(globalErrorHandle)




async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
        console.log(`server is running on ${envData.port}`)
    })
     
}

main()