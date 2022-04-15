import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaysModule } from './plays/plays.module';
import { TicketsModule } from './tickets/tickets.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PlaysModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
