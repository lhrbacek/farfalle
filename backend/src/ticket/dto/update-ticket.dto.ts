import { StatusTicket } from '@prisma/client';
import { IsDateString, IsOptional, IsPositive } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsPositive()
  price?: number;

  @IsOptional()
  status?: StatusTicket;

  @IsOptional()
  @IsDateString()
  reservedAt: Date;
}
