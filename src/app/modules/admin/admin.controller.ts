// import { NextFunction, Request, Response } from "express"
// import { adminModel } from "./admin.model"

// export const createAdminController = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const created = await adminModel.create(req.body)
//         res.status(200).json({ success: true, status: 200, otp: req.otpCode })
//     } catch (err: any) {
//         next({ statusCode: 401, err })
//     }
// }