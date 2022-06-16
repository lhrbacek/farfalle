import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UserService,
    JwtService,
    PrismaService,
  ],
  exports: [AuthService, JwtService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}

/*
sources:

https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/
https://tigran.tech/nestjs-cookie-based-jwt-authentication/
https://docs.nestjs.com/techniques/cookies
https://docs.nestjs.com/security/authentication
https://betterprogramming.pub/nestjs-authentication-with-jwt-and-postgres-50de6341f490
https://progressivecoder.com/how-to-implement-nestjs-jwt-authentication-using-jwt-strategy/
https://www.learmoreseekmore.com/2021/05/nestjs-jwt-auth-cookie-series-part3-refresh-token.html
*/
