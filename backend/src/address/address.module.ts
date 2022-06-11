import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [AuthModule],
  controllers: [AddressController],
  providers: [AddressService, PrismaService, AuthService],
})
export class AddressModule {}
