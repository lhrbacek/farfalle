import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Performance as PerformanceModel } from '@prisma/client';
import { PerformanceService } from './performance.service';
import { UpdatePerformanceDto } from './dto/update-performance.dto';
import { VenueService } from 'src/venue/venue.service';
import { TicketService } from 'src/ticket/ticket.service';
import { CreatePerformanceWithPriceDto } from './dto/create-performance-with-price.dto';
import { PerformanceBookingDto } from './dto/performance-booking.dto';
import { PerformanceDto } from './dto/performance.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('performance')
@ApiTags('performance')
export class PerformanceController {
  constructor(
    private readonly performanceService: PerformanceService,
    private readonly venueService: VenueService,
    private readonly ticketService: TicketService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Update one performance' })
  @ApiResponse({
    status: 200,
    description: 'The updated performance',
  })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createPerformanceWithPriceDto: CreatePerformanceWithPriceDto,
    @Request() req,
  ): Promise<PerformanceModel> {
    await this.authService.isPrivileged(req);

    const performance = await this.performanceService.create({
      ...createPerformanceWithPriceDto,
    });
    const venue = await this.venueService.findOne(+performance.venueId);
    for (let row = 1; row <= venue.rows; row++) {
      for (let col = 0; col < venue.cols; col++) {
        this.ticketService.create({
          price: createPerformanceWithPriceDto.price,
          performance: +performance.id,
          row: row,
          seat: col,
        });
      }
    }

    return performance;
  }

  @ApiOperation({ summary: 'Get all performances' })
  @ApiResponse({
    status: 200,
    description: 'The found performances',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get()
  async findAll(@Query() query): Promise<PerformanceDto[]> {
    let onlyFuture = false;

    if (query.future) {
      onlyFuture = true;
    }

    return await this.performanceService.findAll(onlyFuture);
  }

  @ApiOperation({ summary: 'Get one performance' })
  @ApiResponse({
    status: 200,
    description: 'The found performance',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an performance',
    type: Number,
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PerformanceBookingDto> {
    return await this.performanceService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one performance' })
  @ApiResponse({
    status: 200,
    description: 'The updated performance',
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
    description: 'Should be an id of an performance',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePerformanceDto: UpdatePerformanceDto,
    @Request() req,
  ) {
    await this.authService.isPrivileged(req);
    return await this.performanceService.update(+id, updatePerformanceDto);
  }

  @ApiOperation({ summary: 'Delete one performance' })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an performance',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.performanceService.delete(+id);
  }
}
