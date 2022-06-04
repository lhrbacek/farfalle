import { Controller, Get, Request, Post, Body,
  Patch, Param, Delete, HttpException, HttpStatus, } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserWithAddressDto } from './dto/create-user-with-address.dto';
import { AddressService } from 'src/address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly addressService: AddressService,
  ) {}

  @Post()
  async create(
    @Body() createUserWithAddressDto: CreateUserWithAddressDto,
  ): Promise<UserModel> {
    const emailInUse = await this.userService.findOne(null,
      createUserWithAddressDto.email);

    if (emailInUse) {
      throw new HttpException({
        status: HttpStatus.CONFLICT, //409
        error: 'This email is already registered',
      }, HttpStatus.CONFLICT);
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
  getUserInfo(@Request() req) {
    return req.user;
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return await this.userService.findAll({});
  }

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  async findOne(@Param('email') email: string): Promise<UserModel> {
    return await this.userService.findOne(null, email);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<UserModel> {
    return await this.userService.delete(id);
  }
}
