import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";


const authService = new AuthService();

export const signUp = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {

    const { message, data } = await authService.signUp(req.body);
    sendJsonResponse(res, 200, message, data);
    
})

export const signIn = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {

    const { message, access_token, data } = await authService.signIn(req.body);
    sendJsonResponse(res, 200, message, data, access_token);

});    