import { ApiProperty } from '@nestjs/swagger';
import { StatusTicket } from '@prisma/client';
import { IsDateString, IsOptional, IsPositive } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  price?: number;

  @IsOptional()
  @ApiProperty()
  status?: StatusTicket;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  reservedAt: Date;
}
