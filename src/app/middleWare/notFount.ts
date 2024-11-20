import { NextFunction, Request, Response, response } from "express";

const notFounds = (req: Request, res: Response, next: NextFunction) => {
    return res.status(401).json({ success: false, message: 'route not found' })
}

export default notFounds