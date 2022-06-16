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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tickets')
@ApiTags('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Create one ticket' })
  @ApiResponse({
    status: 200,
    description: 'The created ticket',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorised access',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createTicketDto: CreateTicketDto,
    @Request() req,
  ): Promise<TicketModel> {
    await this.authService.isPrivileged(req);
    return await this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({
    status: 200,
    description: 'The found tickets',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get()
  async findAll(
    @Query() filterTicketDto: FilterTicketDto,
  ): Promise<TicketWithPerformanceDto[]> {
    return await this.ticketService.findAll(filterTicketDto);
  }

  @ApiOperation({ summary: 'Get one ticket' })
  @ApiResponse({
    status: 200,
    description: 'The found ticket',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an ticket',
    type: Number,
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TicketWithPerformanceDto> {
    return await this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one ticket' })
  @ApiResponse({
    status: 200,
    description: 'The update ticket',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an ticket',
    type: Number,
  })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({ summary: 'Update one ticket' })
  @ApiResponse({
    status: 200,
    description: 'The update ticket',
  })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an ticket',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number, @Request() req): Promise<TicketModel> {
    await this.authService.isPrivileged(req);
    return await this.ticketService.delete(+id);
  }
}
