import { Router } from "express";
import { signUp, signIn } from "../controllers";

const authRouter = Router();

authRouter.post(
    "/auth/signUp",
    signUp
);

authRouter.post(
    "/auth/signIn",
    signIn
)

export { authRouter };