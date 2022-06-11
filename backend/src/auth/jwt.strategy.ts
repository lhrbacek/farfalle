import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from '../constants';
import { Request } from "express";
import { UnauthorizedException } from "@nestjs/common/exceptions";

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