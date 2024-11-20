import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '/.env') })

const envData = {
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY
}

export default envData