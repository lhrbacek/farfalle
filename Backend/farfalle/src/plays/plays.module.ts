import { Module } from '@nestjs/common';
import { PlaysService } from './plays.service';
import { PlaysController } from './plays.controller';
import { PrismaService } from '../prisma.service';
import { PerformancesService } from 'src/performances/performances.service';
import { VenuesService } from 'src/venues/venues.service';

@Module({
  controllers: [PlaysController],
  providers: [PlaysService, PrismaService, PerformancesService, VenuesService]
})
export class PlaysModule {}
