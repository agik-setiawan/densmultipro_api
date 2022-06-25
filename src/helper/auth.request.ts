import { Inject, Injectable } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";

interface userRequest {
    user_id?: never;
    email?: string;
}

@Injectable()
export class AuthRequest {

    constructor(@Inject(REQUEST) private readonly req: any) { }

    get user(): userRequest {
        return this.req.user ?? {};
    }

}