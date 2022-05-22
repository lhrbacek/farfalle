import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Performance } from '@prisma/client';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';

@Injectable()
export class PerformanceService {
  constructor(private prisma: PrismaService) {}

  async create(
    createPerformanceDto: CreatePerformanceDto,
  ): Promise<Performance> {
    return await this.prisma.performance.create({
      data: {
        ...createPerformanceDto,
        play: { connect: { id: createPerformanceDto.play } },
        venue: { connect: { id: createPerformanceDto.venue } },
      },
    });
  }

  async findAll(): Promise<Performance[]> {
    return await this.prisma.performance.findMany({});
  }

  async findOne(id: number): Promise<Performance | null> {
    return await this.prisma.performance.findUnique({ where: { id: id } });
  }

  async update(
    id: number,
    updatePerformanceDto: UpdatePerformanceDto,
  ): Promise<Performance> {
    return await this.prisma.performance.update({
      where: { id: id },
      data: {
        ...updatePerformanceDto,
        play: { connect: { id: updatePerformanceDto.play } },
        venue: { connect: { id: updatePerformanceDto.venue } },
      },
    });
  }

  async delete(id: number): Promise<Performance> {
    return await this.prisma.performance.delete({ where: { id: id } });
  }
}
