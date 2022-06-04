import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService,
        private jwtService: JwtService){}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(null, email);

        if (user && user.password === password) {
            // we dont want password after validation, not even hash
            const {password, ...result} = user
            return result
        }
        return null
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
