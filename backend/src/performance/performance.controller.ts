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

@Controller('performance')
export class PerformanceController {
  constructor(
    private readonly performanceService: PerformanceService,
    private readonly venueService: VenueService,
    private readonly ticketService: TicketService,
    private readonly authService: AuthService,
  ) {}

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

  @Get()
  async findAll(@Query() query): Promise<PerformanceDto[]> {
    let onlyFuture = false;

    if (query.future) {
      onlyFuture = true;
    }

    return await this.performanceService.findAll(onlyFuture);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PerformanceBookingDto> {
    return await this.performanceService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePerformanceDto: UpdatePerformanceDto,
    @Request() req,
  ) {
    await this.authService.isPrivileged(req);
    return await this.performanceService.update(+id, updatePerformanceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req,) {
    await this.authService.isPrivileged(req);
    return await this.performanceService.delete(+id);
  }
}
