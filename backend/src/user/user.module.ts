import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { AddressService } from 'src/address/address.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AddressService, PrismaService],
})
export class UserModule {}
