import { Controller, Get, Post, Request, UseGuards,
         Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, 
  //@Response({ passthrough: true }) res: Response,
  @Res({ passthrough: true }) res: Response
  ) {
    const token = await this.authService.login(req.user);

    /*const data = {
      token,
    }*/

    //res.cookie('auth-cookie', data, {httpOnly: true});
    res.cookie('auth-cookie', token, {httpOnly: true});
    return {userId: req.user.userId};
  }
}
