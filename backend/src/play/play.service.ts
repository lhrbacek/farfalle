import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Play, Prisma } from '@prisma/client';
import { CreatePlayDto } from './dto/create-play.dto';
import { UpdatePlayDto } from './dto/update-play.dto';
import { PlayWithPerformancesDto } from './dto/play-performances.dto';

@Injectable()
export class PlayService {
  constructor(private prisma: PrismaService) {}

  async create(createPlayDto: CreatePlayDto): Promise<Play> {
    return await this.prisma.play.create({ data: { ...createPlayDto } });
  }

  async findAll(): Promise<PlayWithPerformancesDto[]> {
    return await this.prisma.play.findMany({
      include: {
        performances: {
          select: {
            id: true,
            dateTime: true,
            venue: true,
          },
          include: {
            venue: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<PlayWithPerformancesDto | null> {
    return await this.prisma.play.findUnique({
      where: { id: id },
      include: {
        performances: {
          select: {
            id: true,
            dateTime: true,
            venue: true,
          },
          include: {
            venue: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, updatePlayDto: UpdatePlayDto): Promise<Play> {
    return await this.prisma.play.update({
      where: { id: id },
      data: { ...updatePlayDto },
    });
  }

  async delete(id: number): Promise<Play> {
    return await this.prisma.play.delete({ where: { id: id } });
  }
}
