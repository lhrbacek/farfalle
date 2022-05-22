import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket as TicketModel } from '@prisma/client';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicket: TicketModel): Promise<TicketModel> {
    return this.ticketService.create(createTicket);
  }

  @Get()
  async findAll(): Promise<TicketModel[]> {
    return this.ticketService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketService.findOne({ id: Number(id) });
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateTicket: TicketModel) {
  //   return this.ticketsService.update({id: Number(id), updateTicket});
  // }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketService.delete({ id: Number(id) });
  }
}
