import {
  Controller,
  Post,
  UseGuards,
  Res,
  Get,
  Req,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /* Checks for authorization after authetication through the public guard. */
  @ApiOperation({ summary: 'Check for authorization' })
  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async isAllowed(@Param('id') id: number, @Req() req) {
    await this.authService.isAllowed(req, +id);
  }

  /* Sets auth cookie and returns user id if login information
  validates againts the local guard. */
  @ApiOperation({ summary: 'Set cookie' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.login(req.user);

    /* We created data for storing more information in the auth cookie,
    not only token, such as refresh date of the token and more if needed. */
    const data = {
      token,
    };

    /* set cookie expiration for current time + 30 mins */
    res.cookie('auth-cookie', data, { httpOnly: true, maxAge: 1800000 });

    // for testing uncomment the following line, cookie valid for 2 min:
    //res.cookie('auth-cookie', data, { httpOnly: true, maxAge: 120000 });
    return { userId: req.user.id };
  }

  /* Wipes auth cookie from the http if it existed. Raises error otherwise.
  This method should only be called in case when the user is logged in. */
  @ApiOperation({ summary: 'Logout' })
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(req: Request, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(req);
    res.clearCookie('auth-cookie');
  }
}
