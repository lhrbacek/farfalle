import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Play, Prisma } from '@prisma/client';

@Injectable()
export class PlaysService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PlayCreateInput): Promise<Play> {
    return this.prisma.play.create({
      data
    });
  }

  async findAll(): Promise<Play[]> {
    return this.prisma.play.findMany({ });
  }

  async findOne(playWhereUniqueInput: Prisma.PlayWhereUniqueInput,): Promise<Play | null> {
    return this.prisma.play.findUnique({where: playWhereUniqueInput,});
  }

  async update(params: {
    where: Prisma.PlayWhereUniqueInput;
    data: Prisma.PlayUpdateInput;
  }): Promise<Play> {
    const { where, data } = params;
    return this.prisma.play.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.PlayWhereUniqueInput): Promise<Play> {
    return this.prisma.play.delete({
      where,
    });
  }
}
