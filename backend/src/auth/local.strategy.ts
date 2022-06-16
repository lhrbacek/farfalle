import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

/* Local auth strategy extends PassportStrategy and
is envoked when AuthGuard('local') is used. */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    /* Method super expects username as compulsory field.
    We need to change it to the email, as we use it for the login. */
    super({ usernameField: 'email' });
  }

  /* As part of the PassportStrategy, we needed to implement validate() method.
  Our implementation validates user by their password and returns the entity if
  validation is successful. */
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
