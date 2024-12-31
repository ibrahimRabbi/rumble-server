import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import envData from './app/config/config';
import { signupRoute } from './app/modules/user/user.route';
import { globalErrorHandle } from './app/middleWare/globalError';
import { signInRoute } from './app/modules/authentication/signin.route';
import { prodcutRoute } from './app/modules/products/products.route';
import { cartRoute } from './app/modules/cart/cart.route';
import { orderRoute } from './app/modules/orders/order.route';
import { callRoute } from './app/modules/callRequest/call.route';
// import notFounds from './app/middleWare/notFount';

const allowedOrigins = [envData.clientUrl, 'http://localhost:3000'];

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }, 
    credentials: true,
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


//routes
app.use('/api', signupRoute)
app.use('/api/auth', signInRoute)
app.use('/api/products', prodcutRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)
app.use('/api/request',callRoute)



//error
app.use(globalErrorHandle)
// app.use(notFounds)




async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
        console.log(`server is running on ${envData.port}`)
    })

}

main()