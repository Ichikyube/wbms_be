import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { SigninDto } from "./dto";
import { CreateUserDto } from "src/users/dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getIAM(req: Request): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    signup(dto: CreateUserDto): Promise<{
        status: boolean;
        message: string;
        data: {
            user: any;
        };
        logs: {};
    }>;
    signin(dto: SigninDto, res: Response): Promise<{
        status: boolean;
        message: string;
        data: {
            tokens: any;
            user: any;
        };
        logs: {};
    }>;
    signout(req: Request, res: Response): Promise<{
        status: boolean;
        message: string;
        data: {};
        logs: {};
    }>;
    refreshToken(req: Request, res: Response): Promise<{
        status: boolean;
        message: string;
        data: {
            tokens: any;
        };
        logs: {};
    }>;
}
