import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Performance } from '@prisma/client';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';
import { PerformanceBookingDto } from './dto/performance-booking.dto';

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

  async findAll(): Promise<PerformanceBookingDto[]> {
    return await this.prisma.performance.findMany({
      select: {
        id: true,
        dateTime: true,
        play: {
          select: {
            id: true,
            name: true,
          },
        },
        venue: {
          select: {
            id: true,
            name: true,
            rows: true,
            cols: true,
          },
        },
        tickets: {
          select: {
            id: true,
            price: true,
            row: true,
            seat: true,
            status: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<PerformanceBookingDto | null> {
    return await this.prisma.performance.findUnique({
      where: { id: id },
      select: {
        id: true,
        dateTime: true,
        play: {
          select: {
            id: true,
            name: true,
          },
        },
        venue: {
          select: {
            id: true,
            name: true,
            rows: true,
            cols: true,
          },
        },
        tickets: {
          select: {
            id: true,
            price: true,
            row: true,
            seat: true,
            status: true,
          },
        },
      },
    });
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
