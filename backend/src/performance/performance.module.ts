import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { TicketService } from 'src/ticket/ticket.service';
import { VenueService } from 'src/venue/venue.service';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';

@Module({
  imports: [AuthModule],
  controllers: [PerformanceController],
  providers: [PerformanceService, VenueService, TicketService, PrismaService, AuthService],
})
export class PerformanceModule {}
