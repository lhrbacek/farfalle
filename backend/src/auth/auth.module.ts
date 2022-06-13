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
