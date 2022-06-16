import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { Request } from 'express';

/* This class takes care of simple authentization and authorization. */
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /* This method performs simple validation of the user.
  It compares the hashed password from the FE with the hashed
  password stored in the database. It returns the user information
  without the hash password if they are equal, null otherwise. */
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(null, email);

    if (user && user.password === password) {
      // we dont want password after validation, not even hash
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /* This method prepares payload to be hidden in the token and
  returns signed token to be stored in the http only cookie. */
  async login(user: any) {
    let isAdmin = false;
    if (user.role && user.role == 'ADMIN') {
      isAdmin = true;
    }

    const payload = { email: user.email, sub: user.id, admin: isAdmin };

    return this.jwtService.sign(payload, { secret: jwtConstants.secret });
  }

  /* This method raises bad request (400) error, if logout method was
  somehow envoked without being logged in in the first place. */
  async logout(request: Request) {
    if (!request.cookies['auth-cookie']) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'This operation is not possible.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /* This method raises forbidden (403) error, if someone different from
  the admin is trying to perform admin operations. */
  async isPrivileged(req: any) {
    if (req.user.isAdmin == false) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'You do not have admin rights!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  /* This method raises unauthorized (401) error, if someone different from
  the user in the token is trying to act as them. The only exception is for
  the admin role. */
  async isAllowed(req: any, id: number) {
    if (req.user.userId != id && req.user.isAdmin == false) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'This operation is forbidden, you do not have access rights!',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
