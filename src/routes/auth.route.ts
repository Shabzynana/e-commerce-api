import { Router } from "express";
import { signUp, signIn, currentUser } from "../controllers";
import { authMiddleware } from "../middleware";

const authRouter = Router();

authRouter.post(
    "/auth/signUp",
    signUp
);

authRouter.post(
    "/auth/signIn",
    signIn
)

authRouter.get(
    "/auth/currentUser",
    authMiddleware,
    currentUser
)



export { authRouter };