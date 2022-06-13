import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ReturnUserInfoDto } from './dto/return-user-info.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id?: number, email?: string): Promise<User | null> {
    if (email) {
      return await this.prisma.user.findUnique({
        where: { email: email },
      });
    }

    return await this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<ReturnUserInfoDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        password: false,
        role: true,
        addressId: true,
        address: false,
        orders: false,
      },
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        role: 'USER',
        address: { connect: { id: createUserDto.address } },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        ...updateUserDto,
        address: { connect: { id: updateUserDto.address } },
      },
    });
  }

  async delete(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: { id: id },
    });
  }
}
