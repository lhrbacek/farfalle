import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket as TicketModel } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketWithPerformanceDto } from './dto/ticket-performance.dto';
import { FilterTicketDto } from './dto/filter-ticket.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createTicketDto: CreateTicketDto,
    @Request() req,
  ): Promise<TicketModel> {
    await this.authService.isPrivileged(req);
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

  // TODO
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketService.update(+id, updateTicketDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number, @Request() req): Promise<TicketModel> {
    await this.authService.isPrivileged(req);
    return await this.ticketService.delete(+id);
  }
}
