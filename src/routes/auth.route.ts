import { Router } from "express";
import { signUp } from "../controllers";

const authRouter = Router();

authRouter.post(
    "/auth/signup",
    signUp
);

export { authRouter};