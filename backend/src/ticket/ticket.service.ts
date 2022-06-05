import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Ticket } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketWithPerformanceDto } from './dto/ticket-performance.dto';
import { FilterTicketDto } from './dto/filter-ticket.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    return await this.prisma.ticket.create({
      data: {
        ...createTicketDto,
        status: 'FREE',
      },
    });
  }

  async findAll(
    filterTicketDto: FilterTicketDto,
  ): Promise<TicketWithPerformanceDto[]> {
    return await this.prisma.ticket.findMany({
      where: {
        order: {
          userId: filterTicketDto.user,
        },
        performanceId: filterTicketDto.performance,
        performance: {
          dateTime: {
            gt: filterTicketDto.from,
          },
        },
      },
      include: {
        performance: {
          include: {
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
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<TicketWithPerformanceDto | null> {
    return await this.prisma.ticket.findUnique({
      where: { id: id },
      select: {
        id: true,
        price: true,
        row: true,
        seat: true,
        status: true,
        reservedAt: true,
        performance: {
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
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    return await this.prisma.ticket.update({
      where: { id: id },
      data: { ...updateTicketDto },
    });
  }

  async delete(id: number): Promise<Ticket> {
    return await this.prisma.ticket.delete({ where: { id: id } });
  }
}
