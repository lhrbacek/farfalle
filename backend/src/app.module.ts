import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaysModule } from './play/play.module';
import { TicketsModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PlaysModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
