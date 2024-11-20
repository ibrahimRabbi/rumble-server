import { NextFunction, Request, response, Response } from 'express';



export const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {

     
    let statusCode = err.statusCode || 404;
    let message = err.err.message || 'something went wrong';
 

    res.json({
        success: false,
        status: statusCode,
        message,
        error: err.err
    })
}