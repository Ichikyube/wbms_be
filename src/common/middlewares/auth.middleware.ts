import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request & { userId: number }, res: Response, next: NextFunction) {
    // Assuming you have middleware to authenticate and extract the user ID
    const userId = req.user["id"]; // Replace with the actual user ID retrieval logic
    req.userId = userId;
    next();
  }
}
