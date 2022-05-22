import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserWithAddressDto } from './dto/create-user-with-address.dto';
import { AddressService } from 'src/address/address.service';

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
    const address = await this.addressService.create({
      ...createUserWithAddressDto,
      name: createUserWithAddressDto.addressName,
    });

    return await this.userService.create({
      ...createUserWithAddressDto,
      address: address.id,
    });
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserModel> {
    return this.userService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() data: UserModel): Promise<UserModel> {
  //   return this.userService.update(+id, {data});
  // }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<UserModel> {
    return this.userService.delete(id);
  }
}
