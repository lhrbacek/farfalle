import { Module } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';
import { PrismaService } from '../prisma.service';
import { PerformanceService } from 'src/performance/performance.service';
import { VenueService } from 'src/venue/venue.service';

@Module({
  controllers: [PlayController],
  providers: [PlayService, PrismaService, PerformanceService, VenueService],
})
export class PlaysModule {}
