import { StatusTicket } from '@prisma/client';
import { IsDate, IsOptional, IsPositive } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsPositive()
  price?: number;

  @IsOptional()
  status?: StatusTicket;

  @IsOptional()
  @IsDate()
  reservedAt: Date;
}
