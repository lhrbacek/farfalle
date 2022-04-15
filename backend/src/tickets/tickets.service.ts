import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Ticket, Prisma } from '@prisma/client';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({data});
  }

  async findAll(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany();
  }

  async findOne(data: Prisma.TicketWhereUniqueInput): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({where: data})
  }

  async update(where: Prisma.TicketWhereUniqueInput, data: Prisma.TicketUpdateInput): Promise<Ticket> {
    return this.prisma.ticket.update({data, where});
  }

  async delete(where: Prisma.TicketWhereUniqueInput): Promise<Ticket> {
    return this.prisma.ticket.delete({where});
  }
}
