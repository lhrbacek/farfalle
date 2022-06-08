import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private readonly jwtService: JwtService){}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(null, email);

    if (user && user.password === password) {
      // we dont want password after validation, not even hash
      const {password, ...result} = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    let isAdmin: boolean = false;
    if (user.role && user.role == 'ADMIN') {
        isAdmin = true;
    }

    const payload = { email: user.email, sub: user.id, admin: isAdmin};

    return this.jwtService.sign(payload);
    //return {access_token: this.jwtService.sign(payload)};
  }

  async isPrivileged(req: any) {
    if (req.user.isAdmin == false) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN, //403
        error: 'You do not have admin rights!',
      }, HttpStatus.FORBIDDEN);
    }
  }

  async isAllowed(req: any, id: number) {
    if (req.user.userId != id || req.user.isAdmin == false) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED, //401
        error: 'This operation is forbidden, you do not have access rights!',
      }, HttpStatus.UNAUTHORIZED);
    }
  }
}
