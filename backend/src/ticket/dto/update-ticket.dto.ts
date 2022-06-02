import { StatusTicket } from '@prisma/client';

export class UpdateTicketDto {
  price?: number;
  status?: StatusTicket;
}
