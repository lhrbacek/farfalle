import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VenueController } from './venue.controller';
import { VenueService } from './venue.service';

@Module({
  controllers: [VenueController],
  providers: [VenueService, PrismaService],
})
export class VenueModule {}
