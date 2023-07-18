import { CanActivate, ExecutionContext } from "@nestjs/common";
declare const AtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AtGuard extends AtGuard_base implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
}
export {};
