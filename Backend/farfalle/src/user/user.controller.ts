import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() data: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.create(data);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserModel> {
    return this.userService.findOne({ id: Number(id) });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() data: UserModel): Promise<UserModel> {
  //   return this.userService.update(+id, {data});
  // }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserModel> {
    return this.userService.delete({ id: Number(id) });
  }
}
