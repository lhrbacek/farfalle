import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TicketService } from 'src/ticket/ticket.service';
import { VenueService } from 'src/venue/venue.service';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';

@Module({
  controllers: [PerformanceController],
  providers: [PerformanceService, VenueService, TicketService, PrismaService],
})
export class PerformanceModule {}
