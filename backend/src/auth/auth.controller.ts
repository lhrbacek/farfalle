import { Controller, Post, Request, UseGuards,
  Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(
    @Request() req,
    @Res({ passthrough: true }) res: Response
  ) {
    const token = await this.authService.login(req.user);

    const data = {
      token,
      // token end date TODO
    }
    res.cookie('auth-cookie', data, {httpOnly: true});
    return { userId: req.user.id };
  }
}
