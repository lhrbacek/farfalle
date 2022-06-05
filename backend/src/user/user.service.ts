import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id?: number, email?: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
        email: email,
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.user.findMany({
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