import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Performance, Prisma } from '@prisma/client';

@Injectable()
export class PerformancesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PerformanceCreateInput): Promise<Performance> {
    return this.prisma.performance.create({
      data
    });
  }

  async findAll(): Promise<Performance[]> {
    return this.prisma.performance.findMany({ });
  }

  async findOne(perfWhereUniqueInput: Prisma.PerformanceWhereUniqueInput,): Promise<Performance | null> {
    return this.prisma.performance.findUnique({where: perfWhereUniqueInput,});
  }

  async update(params: {
    where: Prisma.PerformanceWhereUniqueInput;
    data: Prisma.PerformanceUpdateInput;
  }): Promise<Performance> {
    const { where, data } = params;
    return this.prisma.performance.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.PerformanceWhereUniqueInput): Promise<Performance> {
    return this.prisma.performance.delete({
      where,
    });
  }
}
