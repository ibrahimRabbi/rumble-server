import { JwtPayload } from "jsonwebtoken";
import { Tuser } from "../modules/user/user.interface";

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload,
            otpCode: number,
        }
    }
}