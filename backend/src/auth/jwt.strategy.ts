import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from '../constants';
//import { Request } from '@nestjs/common';
import { Request } from "express";
import { UnauthorizedException } from "@nestjs/common/exceptions";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: jwtConstants.secret,
            ignoreExpiration: true,
            jwtFromRequest:ExtractJwt.fromExtractors([(request:Request) => {
              let data = request?.cookies["auth-cookie"];
              if(!data){
                return null;
              }
              return data.token
            }])
            /*
            // old code
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // following line creates an expiration date on our token
            ignoreExpiration: true,
            secretOrKey: jwtConstants.secret
            */
        })
    }

    async validate(payload: any) {
        if(payload === null){
            throw new UnauthorizedException();
        }
        return {userId: payload.sub, email: payload.email, isAdmin: payload.admin}
    }
}