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
import { User as UserModel } from '@prisma/client';
import { CreateUserWithAddressDto } from './dto/create-user-with-address.dto';
import { AddressService } from 'src/address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';

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
    return await this.userService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserModel> {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<UserModel> {
    return await this.userService.delete(id);
  }
}
