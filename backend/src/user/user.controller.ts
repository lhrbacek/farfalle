import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserWithAddressDto } from './dto/create-user-with-address.dto';
import { AddressService } from 'src/address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ReturnUserInfoDto } from './dto/return-user-info.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(
    @Body() createUserWithAddressDto: CreateUserWithAddressDto,
  ): Promise<UserModel> {
    const emailInUse = await this.userService.findOne(
      null,
      createUserWithAddressDto.email,
    );

    if (emailInUse) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT, //409
          error: 'This email is already registered',
        },
        HttpStatus.CONFLICT,
      );
    }
    const address = await this.addressService.create({
      ...createUserWithAddressDto,
      name: createUserWithAddressDto.addressName,
    });

    return await this.userService.create({
      ...createUserWithAddressDto,
      address: address.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req): Promise<ReturnUserInfoDto[]> {
    await this.authService.isPrivileged(req);
    return await this.userService.findAll({});
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Request() req,
  ): Promise<ReturnUserInfoDto> {
    await this.authService.isAllowed(req, +id);
    const user = await this.userService.findOne(+id);

    if (!user) {
      return null;
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ): Promise<UserModel> {
    await this.authService.isAllowed(req, +id);
    return await this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number, @Request() req): Promise<UserModel> {
    await this.authService.isAllowed(req, +id);
    return await this.userService.delete(+id);
  }
}
