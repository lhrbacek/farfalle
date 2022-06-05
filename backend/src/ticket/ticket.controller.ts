import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket as TicketModel } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketWithPerformanceDto } from './dto/ticket-performance.dto';
import { FilterTicketDto } from './dto/filter-ticket.dto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto): Promise<TicketModel> {
    return await this.ticketService.create(createTicketDto);
  }

  @Get()
  async findAll(
    @Query() filterTicketDto: FilterTicketDto,
  ): Promise<TicketWithPerformanceDto[]> {
    return await this.ticketService.findAll(filterTicketDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TicketWithPerformanceDto> {
    return await this.ticketService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<TicketModel> {
    return await this.ticketService.delete(+id);
  }
}
