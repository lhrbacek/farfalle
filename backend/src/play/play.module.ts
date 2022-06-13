import { Module } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';
import { PrismaService } from '../prisma.service';
import { PerformanceService } from 'src/performance/performance.service';
import { VenueService } from 'src/venue/venue.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [AuthModule],
  controllers: [PlayController],
  providers: [
    PlayService,
    PrismaService,
    PerformanceService,
    VenueService,
    AuthService,
  ],
})
export class PlaysModule {}
