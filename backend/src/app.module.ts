import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaysModule } from './play/play.module';
import { TicketsModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { VenueModule } from './venue/venue.module';
import { AddressModule } from './address/address.module';
import { PerformanceModule } from './performance/performance.module';

@Module({
  imports: [
    UserModule,
    PlaysModule,
    TicketsModule,
    VenueModule,
    AddressModule,
    PerformanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
