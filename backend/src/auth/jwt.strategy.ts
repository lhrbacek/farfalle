import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common/exceptions';

/* Local auth strategy extends PassportStrategy and is envoked when
the JwtAuthGuard is used. It takes care of extracting the token from
the auth cookie in the request and returns the payload hidden in the
token which is used for authorization in some of the controllers. */

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      secretOrKey: jwtConstants.secret,
      /* The token does not have its own expiration yet,
      but it can implement it in the future if needed. */
      ignoreExpiration: true,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          if (!data) {
            return null;
          }
          return data.token;
        },
      ]),
    });
  }

  async validate(payload: any) {
    if (payload === null) {
      throw new UnauthorizedException();
    }
    return {
      userId: payload.sub,
      email: payload.email,
      isAdmin: payload.admin,
    };
  }
}
