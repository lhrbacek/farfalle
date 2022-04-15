import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
