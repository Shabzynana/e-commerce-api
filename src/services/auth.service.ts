import AppDataSource from "../data-source";
import { User } from "../models";
import { comparePassword, hashPassword } from "../utils";
import { HttpError, ResourceNotFound, Unauthorized, Conflict } from "../middleware";
// import { formatUser } from "../utils/responsebody";
import jwt from "jsonwebtoken";
import config from "../config";
import { stringify } from "querystring";
// import sendEmailTemplate from "../views/email/sendEmailTemplate";
// import { JwtPayload } from "../types";


export class AuthService {

    private userRepository = AppDataSource.getRepository(User);

    async signUp(payload: any): Promise<{ message: string; data: Partial<User>;}> {

        const { email, password, firstName, lastName } = payload;

        const userExists =  await this.userRepository.findOne({
            where : { email }, withDeleted: true 
        });

        if (userExists) {
            if (userExists.is_deleted) {
                throw new HttpError(
                  403,
                  "Account associated with these email has been deleted. Please contact support for assistance.",
                );
            }
            throw new Conflict("User already exists");    
        }    
        
        const hashedPassword = await hashPassword(password);
        const user = new User();
        user.email = email;
        user.password = hashedPassword;
        user.firstName = firstName;
        user.lastName = lastName;

        const savedUser = await this.userRepository.save(user);
        return {
            message: "User created successfully",
            data: savedUser
        }
    }


    async signIn(payload: any): Promise<{ message: string; access_token: string; data: Partial<User>;}> {

        const { email, password } = payload;

        const user = await this.userRepository.findOne({
            where : { email }
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }

        if (user.google_id && user.password === null) {
            throw new HttpError(401, "User Created with Google");
        }

        const isPasswordMatch = await comparePassword(password, user.password);
        if (!isPasswordMatch) {
            throw new Unauthorized("Invalid credentials");
        }

        const token = jwt.sign({ user_id: user.id }, config.TOKEN_SECRET, {expiresIn: "1d"});
        return {
            message: "User logged in successfully",
            access_token: token,
            data: user
        }
    }


    async currentUser(payload: any): Promise<{ message: string; data: Partial<User>;}> {

        const { user_id } = payload;

        const user = await this.userRepository.findOne({
            where : { id: user_id }
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }

        return {
            message: "Current loggedIn User",
            data: user
        }
    }

        


    

}    