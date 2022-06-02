import { StatusOrder } from '@prisma/client';

export class UpdateOrderDto {
  status?: StatusOrder;
  tickets?: number[];
  adress?: number;
}
