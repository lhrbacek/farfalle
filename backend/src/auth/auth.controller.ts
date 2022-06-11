import {
  Controller,
  Post,
  Request,
  UseGuards,
  Res,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async isAllowed(@Param('id') id: number, @Request() req) {
    await this.authService.isAllowed(req, +id);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.login(req.user);

    const data = {
      token,
      // token end date TODO
    };
    res.cookie('auth-cookie', data, { httpOnly: true });
    return { userId: req.user.id };
  }
}
