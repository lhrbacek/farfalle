import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket as TicketModel } from '@prisma/client';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async create(@Body() createTicket: TicketModel): Promise<TicketModel> {
    return this.ticketsService.create(createTicket);
  }

  @Get()
  async findAll(): Promise<TicketModel[]> {
   return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketsService.findOne({ id: Number(id) });
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateTicket: TicketModel) {
  //   return this.ticketsService.update({id: Number(id), updateTicket});
  // }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketsService.delete({ id: Number(id) });
  }
}
