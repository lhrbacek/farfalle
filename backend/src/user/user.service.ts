import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ReturnUserInfoDto } from './dto/return-user-info.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    id?: number,
    email?: string,
  ): Promise<ReturnUserInfoDto | null> {
    if (email) {
      return await this.prisma.user.findUnique({
        where: { email: email },
        select: {
          email: true,
          password: true,
          name: true,
          surname: true,
          role: true,
          address: {
            select: {
              city: true,
              street: true,
              number: true,
              zip: true,
            },
          },
          orders: {
            select: {
              status: true,
              createdAt: true,
              tickets: {
                select: {
                  id: true,
                  price: true,
                  row: true,
                  seat: true,
                  performance: {
                    select: {
                      dateTime: true,
                      play: {
                        select: {
                          name: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    }

    return await this.prisma.user.findUnique({
      where: { id: id },
      select: {
        email: true,
        password: true,
        name: true,
        surname: true,
        role: true,
        address: {
          select: {
            city: true,
            street: true,
            number: true,
            zip: true,
          },
        },
        orders: {
          select: {
            status: true,
            createdAt: true,
            tickets: {
              select: {
                id: true,
                price: true,
                row: true,
                seat: true,
                performance: {
                  select: {
                    dateTime: true,
                    play: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
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
        email: true,
        password: true,
        name: true,
        surname: true,
        role: true,
        address: {
          select: {
            city: true,
            street: true,
            number: true,
            zip: true,
          },
        },
        orders: {
          select: {
            status: true,
            createdAt: true,
            tickets: {
              select: {
                id: true,
                price: true,
                row: true,
                seat: true,
                performance: {
                  select: {
                    dateTime: true,
                    play: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
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
