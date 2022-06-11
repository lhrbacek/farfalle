import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from '../constants';
//import { Request } from '@nestjs/common';
import { Request } from "express";
import { HttpException, UnauthorizedException } from "@nestjs/common/exceptions";
import { HttpStatus } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            secretOrKey: jwtConstants.secret,
            ignoreExpiration: true,
            jwtFromRequest: ExtractJwt.fromExtractors([(request:Request) => {
              let data = request?.cookies['auth-cookie'];
              if(!data){
                return null;
              }
              //console.log(request.cookies);
              return data.token;
            }])
        })
    }

    async validate(payload: any) {
        if(payload === null){
            throw new UnauthorizedException();
        }
        return {userId: payload.sub, email: payload.email, isAdmin: payload.admin};
    }
}