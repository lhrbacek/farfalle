import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Ticket } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

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

  async findAll(): Promise<Ticket[]> {
    return await this.prisma.ticket.findMany();
  }

  async findOne(id: number): Promise<Ticket | null> {
    return await this.prisma.ticket.findUnique({ where: { id: id } });
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
