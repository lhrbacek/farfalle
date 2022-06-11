import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { VenueController } from './venue.controller';
import { VenueService } from './venue.service';

@Module({
  imports: [AuthModule],
  controllers: [VenueController],
  providers: [VenueService, PrismaService, AuthService],
})
export class VenueModule {}
